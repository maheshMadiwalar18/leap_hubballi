/*
 * Face Login service (OPTIONAL add-on). Does NOT replace Firebase Auth.
 *
 * - Stores only 128-d face embeddings (no photos), AES-256-GCM encrypted at rest, server-side only.
 * - Enrollment / status / disable require a valid Firebase ID token (existing identity = source of truth).
 * - Login matches an embedding and mints a Firebase *custom token* for the EXISTING uid, so the client
 *   signs in through Firebase (signInWithCustomToken) and the existing onAuthStateChanged flow runs.
 * - The matching logic is isolated in `matchProvider` so it can be swapped for a managed biometric service.
 *
 * LIMITATION: the embedding is computed in the browser, so a hostile client could submit a replayed
 * embedding. Blink liveness is client-side only. Not production-grade biometric security.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, '.face_data');       // dot-dir: never served statically
const STORE_FILE = path.join(DATA_DIR, 'templates.enc');
const KEY_FILE = path.join(DATA_DIR, 'dev.key');
const THRESHOLD = parseFloat(process.env.FACE_MATCH_THRESHOLD) || 0.5; // euclidean distance, lower = stricter
const AMBIGUITY_MARGIN = 0.05;
const IS_PROD = process.env.NODE_ENV === 'production';
const DEMO_MODE = !IS_PROD && process.env.FACE_DEMO_MODE !== 'false';
const PROJECT_ID = process.env.FIREBASE_PROJECT_ID || 'curiolab-5c4cf';

let admin = null, canMint = false, adminErr = '';
function initAdmin() {
  try {
    admin = require('firebase-admin');
    const p = process.env.FIREBASE_SERVICE_ACCOUNT_PATH, j = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
    if (p || j) {
      const cred = j ? JSON.parse(j) : JSON.parse(fs.readFileSync(p, 'utf8'));
      admin.initializeApp({ credential: admin.credential.cert(cred), projectId: PROJECT_ID });
      canMint = true;
    } else {
      admin.initializeApp({ projectId: PROJECT_ID });
    }
  } catch (e) { admin = null; canMint = false; adminErr = e.message; }
}
initAdmin();

function getKey() {
  if (process.env.FACE_ENC_KEY) return crypto.createHash('sha256').update(process.env.FACE_ENC_KEY).digest();
  if (IS_PROD) return null;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(KEY_FILE)) fs.writeFileSync(KEY_FILE, crypto.randomBytes(32).toString('hex'), { mode: 0o600 });
  return crypto.createHash('sha256').update(fs.readFileSync(KEY_FILE, 'utf8')).digest();
}
function loadStore() {
  const key = getKey();
  if (!key || !fs.existsSync(STORE_FILE)) return {};
  try {
    const buf = fs.readFileSync(STORE_FILE);
    const d = crypto.createDecipheriv('aes-256-gcm', key, buf.subarray(0, 12));
    d.setAuthTag(buf.subarray(12, 28));
    return JSON.parse(Buffer.concat([d.update(buf.subarray(28)), d.final()]).toString('utf8'));
  } catch (e) { console.warn('[Face] could not decrypt template store'); return {}; }
}
function saveStore(obj) {
  const key = getKey();
  if (!key) throw new Error('FACE_ENC_KEY is required in production');
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const iv = crypto.randomBytes(12), c = crypto.createCipheriv('aes-256-gcm', key, iv);
  const enc = Buffer.concat([c.update(JSON.stringify(obj), 'utf8'), c.final()]);
  fs.writeFileSync(STORE_FILE, Buffer.concat([iv, c.getAuthTag(), enc]), { mode: 0o600 });
}

const matchProvider = {
  name: 'face-api.js 128-d embeddings + euclidean distance',
  validate(d) { return Array.isArray(d) && d.length === 128 && d.every(n => typeof n === 'number' && isFinite(n) && Math.abs(n) < 10); },
  distance(a, b) { let s = 0; for (let i = 0; i < 128; i++) { const x = a[i] - b[i]; s += x * x; } return Math.sqrt(s); },
  identify(desc, store) {
    const ranked = Object.entries(store).filter(([, r]) => r.enabled)
      .map(([uid, r]) => ({ uid, dist: this.distance(desc, r.descriptor) })).sort((x, y) => x.dist - y.dist);
    if (!ranked.length || ranked[0].dist > THRESHOLD) return null;
    if (ranked[1] && ranked[1].dist - ranked[0].dist < AMBIGUITY_MARGIN && ranked[1].dist <= THRESHOLD) return null;
    return ranked[0].uid;
  }
};

const hits = new Map();
function limited(req, max, windowMs) {
  const ip = req.socket.remoteAddress || '?', now = Date.now();
  const arr = (hits.get(ip) || []).filter(t => now - t < windowMs); arr.push(now); hits.set(ip, arr);
  return arr.length > max;
}
function send(res, code, obj) { res.writeHead(code, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(obj)); }
function readJson(req) {
  return new Promise(resolve => {
    let b = ''; req.on('data', c => { b += c; if (b.length > 20000) { req.destroy(); resolve(null); } });
    req.on('end', () => { try { resolve(JSON.parse(b)); } catch (e) { resolve(null); } });
  });
}
async function uidFromToken(idToken) {
  if (!admin || typeof idToken !== 'string') return null;
  try { return (await admin.auth().verifyIdToken(idToken)).uid; } catch (e) { return null; }
}
const clean = (s, n) => String(s || '').replace(/[^\p{L}0-9 .,&'-]/gu, '').slice(0, n);

async function handle(req, res, pathname) {
  if (!pathname.startsWith('/api/face/')) return false;
  const route = pathname.slice('/api/face/'.length);

  if (req.method === 'GET' && route === 'config') {
    send(res, 200, { available: !!admin && canMint, canVerifyToken: !!admin, demo: DEMO_MODE && !(admin && canMint), provider: matchProvider.name });
    return true;
  }
  if (req.method !== 'POST') { send(res, 405, { error: 'method' }); return true; }
  const body = await readJson(req);
  if (!body) { send(res, 400, { error: 'bad_request' }); return true; }

  try {
    if (route === 'login') {
      if (limited(req, 8, 60000)) return send(res, 429, { error: 'rate_limited' }), true;
      if (!(admin && canMint)) return send(res, 503, { error: 'unavailable', demo: DEMO_MODE }), true;
      if (!matchProvider.validate(body.descriptor)) return send(res, 400, { error: 'bad_descriptor' }), true;
      const store = loadStore(), uid = matchProvider.identify(body.descriptor, store);
      if (!uid) return send(res, 401, { error: 'no_match' }), true;
      const token = await admin.auth().createCustomToken(uid, { faceLogin: true });
      const r = store[uid];
      return send(res, 200, { token, profile: { name: r.name, role: r.role, city: r.city } }), true;
    }

    const uid = await uidFromToken(body.idToken);
    if (!uid) return send(res, 401, { error: 'unauthenticated', demo: DEMO_MODE && !admin }), true;
    const store = loadStore();

    if (route === 'status') return send(res, 200, { enrolled: !!(store[uid] && store[uid].enabled), hasTemplate: !!store[uid] }), true;
    if (route === 'enroll') {
      if (limited(req, 10, 60000)) return send(res, 429, { error: 'rate_limited' }), true;
      if (body.consent !== true) return send(res, 400, { error: 'consent_required' }), true;
      if (!matchProvider.validate(body.descriptor)) return send(res, 400, { error: 'bad_descriptor' }), true;
      // Refuse if this face already belongs to a DIFFERENT account
      const other = matchProvider.identify(body.descriptor, store);
      if (other && other !== uid) return send(res, 409, { error: 'face_in_use' }), true;
      store[uid] = { descriptor: body.descriptor, enabled: true, createdAt: Date.now(),
        name: clean(body.name, 60), role: clean(body.role, 20), city: clean(body.city, 40) };
      saveStore(store);
      return send(res, 200, { enrolled: true }), true;
    }
    if (route === 'disable') {
      if (store[uid]) { store[uid].enabled = false; saveStore(store); }
      return send(res, 200, { enrolled: false }), true;
    }
    if (route === 'delete') { delete store[uid]; saveStore(store); return send(res, 200, { deleted: true }), true; }
    if (route === 'enable') {
      if (!store[uid]) return send(res, 404, { error: 'no_template' }), true;
      store[uid].enabled = true; saveStore(store); return send(res, 200, { enrolled: true }), true;
    }
    send(res, 404, { error: 'not_found' });
  } catch (e) {
    console.warn('[Face] error:', e.message);
    send(res, 500, { error: 'server_error' });
  }
  return true;
}

module.exports = { handle };
