(function () {
  'use strict';
  if (typeof $ !== 'function' || typeof startSession !== 'function') return; // host app not present

  const LIB_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/dist/face-api.js';
  const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/model/';
  const CONSENT = 'By enabling Face Login, you consent to using facial verification to access your BackHaul AI account.';
  const MSG = {
    denied: 'Camera access is required for Face Login.',
    unsupported: 'This browser does not support camera access. Please use Login Another Way.',
    insecure: 'Camera access requires a secure (HTTPS) connection.',
    unavailable: 'Camera unavailable. It may be in use by another app.',
    no_face: 'No face detected. Please position your face inside the guide.',
    multi: 'Please make sure only one person is visible.',
    liveness_failed: 'Liveness check failed. Please blink naturally while looking at the camera.',
    no_match: 'Face verification failed.',
    network: 'Network error. Check your connection and try again.',
    service: 'Verification service unavailable.',
    lib: 'Could not load the face verification engine. Check your connection.',
    rate_limited: 'Too many attempts. Please wait a minute or use Login Another Way.',
    cancelled: 'Verification cancelled.',
    face_in_use: 'This face is already registered to a different account.'
  };
  const E = (code) => Object.assign(new Error(code), { code });
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const FaceProvider = {
    _p: null,
    load() {
      if (this._p) return this._p;
      this._p = new Promise((res, rej) => {
        const s = document.createElement('script'); s.src = LIB_URL;
        s.onload = async () => {
          try {
            await Promise.all([faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
              faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL), faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)]);
            res();
          } catch (e) { rej(E('lib')); }
        };
        s.onerror = () => rej(E('lib')); document.head.appendChild(s);
      }).catch(e => { this._p = null; throw e; });
      return this._p;
    },
    opts() { return new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.5 }); },
    detect(video) { return faceapi.detectAllFaces(video, this.opts()).withFaceLandmarks(); },
    describe(video) { return faceapi.detectAllFaces(video, this.opts()).withFaceLandmarks().withFaceDescriptors(); },
    ear(pts, o) { // eye aspect ratio from 68-point landmarks
      const d = (a, b) => Math.hypot(pts[a].x - pts[b].x, pts[a].y - pts[b].y);
      return (d(o + 1, o + 5) + d(o + 2, o + 4)) / (2 * d(o, o + 3));
    }
  };

  let stream = null, runId = 0;
  async function startCamera(video) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw E('unsupported');
    if (!window.isSecureContext) throw E('insecure');
    const tryGet = (c) => navigator.mediaDevices.getUserMedia(c);
    try {
      try { stream = await tryGet({ video: { facingMode: 'user', width: { ideal: 640 }, height: { ideal: 480 } }, audio: false }); }
      catch (e) { if (e && e.name === 'OverconstrainedError') stream = await tryGet({ video: true, audio: false }); else throw e; }
    } catch (e) {
      const n = e && e.name;
      throw E(n === 'NotAllowedError' || n === 'SecurityError' || n === 'PermissionDeniedError' ? 'denied' : 'unavailable');
    }
    video.srcObject = stream; await video.play();
  }
  function stopCamera() {
    if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
    const v = $('flVideo'); if (v) { v.pause(); v.srcObject = null; }
  }
  window.addEventListener('pagehide', stopCamera);
  document.addEventListener('visibilitychange', () => { if (document.hidden && stream) cancel(); });

  async function capture(video, id, status) {
    const t0 = Date.now(); let phase = 'detect', centered = 0, sawOpen = false, sawClosed = false, blinked = false;
    for (;;) {
      if (id !== runId) throw E('cancelled');
      if (Date.now() - t0 > 30000) throw E(phase === 'detect' ? 'no_face' : 'liveness_failed');
      const dets = await FaceProvider.detect(video);
      if (id !== runId) throw E('cancelled');
      if (!dets.length) { centered = 0; status('detecting', Date.now() - t0 > 4000 ? MSG.no_face : 'Finding your face...'); await sleep(120); continue; }
      if (dets.length > 1) { centered = 0; status('detecting', MSG.multi); await sleep(150); continue; }
      const box = dets[0].detection.box, vw = video.videoWidth, vh = video.videoHeight;
      const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
      const ok = box.width > vw * 0.25 && Math.abs(cx - vw / 2) < vw * 0.2 && Math.abs(cy - vh / 2) < vh * 0.25;
      if (!ok) { centered = 0; status('detecting', box.width <= vw * 0.25 ? 'Move a little closer.' : 'Center your face inside the circle.'); await sleep(100); continue; }
      centered++;
      if (phase === 'detect') { if (centered >= 3) phase = 'live'; else { status('detecting', 'Finding your face...'); continue; } }
      if (!blinked) {
        const p = dets[0].landmarks.positions, ear = (FaceProvider.ear(p, 36) + FaceProvider.ear(p, 42)) / 2;
        status('live', 'Please blink 👁️');
        if (ear > 0.26) { if (sawClosed) blinked = true; else sawOpen = true; }
        else if (ear < 0.2 && sawOpen) sawClosed = true;
        if (!blinked) continue;
      }
      status('verifying', 'Verifying identity...');
      const r = await FaceProvider.describe(video);
      if (id !== runId) throw E('cancelled');
      if (r.length === 1) return Array.from(r[0].descriptor);
      if (r.length > 1) throw E('multi');
    }
  }

  async function api(path, body) {
    let r;
    try {
      r = await fetch('/api/face/' + path, { method: body ? 'POST' : 'GET', headers: { 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' });
    } catch (e) { throw E('network'); }
    let data = {}; try { data = await r.json(); } catch (e) { /* ignore */ }
    return { status: r.status, data };
  }
  const getCfg = async () => { try { const r = await api('config'); return r.status === 200 ? r.data : null; } catch (e) { return null; } };
  async function idToken() { return fbUser ? fbUser.getIdToken() : null; }

  const ov = document.createElement('div');
  ov.id = 'faceOverlay'; ov.className = 'fl-ov'; ov.hidden = true; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
  ov.innerHTML = `<div class="fl-card" id="flCard">
    <div class="fl-demo" id="flDemo" hidden>DEMO MODE · no real biometric verification or sign-in occurs</div>
    <h2 id="flTitle">📷 Face Login</h2>
    <div class="fl-stage" id="flStage"><video id="flVideo" playsinline muted></video><div class="fl-ring"></div><div class="fl-scan"></div></div>
    <div class="fl-status" id="flStatus" role="status" aria-live="polite"></div>
    <div class="fl-body" id="flBody"></div>
    <div class="fl-btns" id="flBtns"></div></div>`;
  document.body.appendChild(ov);

  function show(title, stage) { $('flTitle').textContent = title; $('flStage').hidden = !stage; $('flDemo').hidden = true; ov.hidden = false; $('flBody').innerHTML = ''; buttons([]); }
  function cancel() { runId++; stopCamera(); ov.hidden = true; $('flBody').innerHTML = ''; }
  function status(state, msg) { $('flCard').dataset.state = state; $('flStatus').textContent = msg || ''; }
  function buttons(list) {
    const b = $('flBtns'); b.innerHTML = '';
    list.forEach(x => { const el = document.createElement('button'); el.type = 'button'; el.className = 'fl-btn' + (x.ghost ? ' ghost' : ''); el.textContent = x.label; el.onclick = x.fn; if (x.id) el.id = x.id; b.appendChild(el); });
  }
  const anotherWay = { label: 'Login Another Way', ghost: true, fn: () => { cancel(); const e = $('authEmail'); if (e && !$('authOverlay').hidden) e.focus(); } };
  const errMsg = (e) => MSG[e && e.code] || MSG.service;
  function fail(e, retry) {
    runId++; stopCamera(); status('fail', errMsg(e));
    const list = []; if (retry && e.code !== 'denied' && e.code !== 'unsupported' && e.code !== 'insecure') list.push({ label: 'Try Again', fn: retry });
    list.push(anotherWay); buttons(list);
  }
  async function prepare(id) { // library + camera
    status('init', 'Loading face verification...'); await FaceProvider.load(); if (id !== runId) throw E('cancelled');
    status('init', 'Requesting camera...'); await startCamera($('flVideo')); if (id !== runId) throw E('cancelled');
    status('init', 'Look at the camera');
  }

  let faceCtx = null;
  async function startLogin() {
    const id = ++runId; show('📷 Face Login', true); status('init', 'Starting...');
    try {
      const cfg = await getCfg(); if (id !== runId) return;
      if (!cfg) throw E('service');
      const demoOnly = !cfg.available;
      if (demoOnly && !cfg.demo) throw E('service');
      if (!demoOnly && !fbm) throw E('service');
      $('flDemo').hidden = !demoOnly;
      await prepare(id);
      const desc = await capture($('flVideo'), id, status);
      stopCamera();
      if (demoOnly) { demoSuccess(); return; }
      const r = await api('login', { descriptor: desc });
      if (id !== runId) return;
      if (r.status === 401) throw E('no_match');
      if (r.status === 429) throw E('rate_limited');
      if (r.status !== 200 || !r.data.token) throw E('service');
      faceCtx = { profile: r.data.profile || {} };
      status('success', 'Face verified ✓');
      await fbm.signInWithCustomToken(fbAuth, r.data.token); // continues via the existing onAuthStateChanged flow
    } catch (e) { faceCtx = null; if (e.code === 'cancelled') return; fail(e, startLogin); }
  }
  function demoSuccess() {
    status('success', 'Face verified ✓');
    $('flBody').innerHTML = '<p class="fl-note" style="color:var(--green);font-weight:600">✓ Biometric match confirmed! Logging in as Ramesh Patil (Transporter · Hubballi)...</p>';
    setTimeout(() => {
      cancel();
      if (typeof startSession === 'function' && typeof DEMO_USERS === 'object') {
        startSession({ ...DEMO_USERS.ramesh, demoId: 'ramesh' });
      }
    }, 900);
  }

  const origOnFbUser = window.onFbUser;
  window.onFbUser = function (user) {
    if (faceCtx && user && !session && typeof origOnFbUser === 'function') {
      const p = faceCtx.profile; faceCtx = null;
      if (p && typeof p.name === 'string' && p.name.trim().length >= 2 && hasRole(p.role)) {
        fbUser = user; pending = { uid: user.uid };
        startSession({ name: p.name, role: p.role, city: p.city && key(p.city) ? key(p.city) : '' });
        welcome(); return;
      }
      cancel();
    }
    return origOnFbUser.apply(this, arguments);
  };

  function welcome() {
    show('🚚 Driver Mode', false); status('success', '📷 Face Verified ✓');
    let rows = '';
    if (session.role === 'transporter' && db && db.trucks && db.trucks.length) {
      const tr = db.trucks.find(x => x.status === 'Available') || db.trucks[0];
      rows = `<div>🚛 Truck: <b>${esc(tr.reg)}</b></div><div>📦 Capacity: <b>${esc(tr.cap)} t</b> · ${tr.status === 'Available' ? 'Available: <b>' + esc(tr.cap) + ' t</b>' : esc(tr.status)}</div>`;
    } else rows = `<div>${esc(typeof ROLES !== 'undefined' ? ROLES[session.role] : session.role)}</div>`;
    rows += `<div>📍 Location: <b>${esc((db && db.city) || 'APMC Amargol')}</b></div>`;
    $('flBody').innerHTML = `<div class="fl-welcome"><div class="fl-hi">Welcome back, ${esc(session.name)}!</div>${rows}</div>`;
    const list = [];
    if (canAccess('saarathi')) list.push({ label: '🎙️ ಸಾರಥಿ, ಮಾತನಾಡಿ', fn: () => { cancel(); showView('saarathi'); } });
    list.push({ label: 'Go to dashboard', ghost: true, fn: cancel }); buttons(list);
  }

  let pendingDesc = null;
  async function openSettings() {
    show('📷 Face Login', false); status('init', 'Loading...');
    if (!session || isOffline(session) || !fbUser) { status('init', ''); $('flBody').innerHTML = '<p class="fl-note">Sign in with your BackHaul account (not offline demo) to set up Face Login.</p>'; buttons([{ label: 'Close', ghost: true, fn: cancel }]); return; }
    const cfg = await getCfg(), tok = await idToken().catch(() => null);
    if (!cfg || !cfg.canVerifyToken) { status('fail', MSG.service); buttons([{ label: 'Close', ghost: true, fn: cancel }]); return; }
    let st; try { st = await api('status', { idToken: tok }); } catch (e) { status('fail', errMsg(e)); buttons([{ label: 'Close', ghost: true, fn: cancel }]); return; }
    if (st.status !== 200) { status('fail', MSG.service); buttons([{ label: 'Close', ghost: true, fn: cancel }]); return; }
    renderSettings(st.data, cfg);
  }
  function renderSettings(st, cfg) {
    pendingDesc = null; $('flStage').hidden = true; status('init', '');
    const note = cfg.available ? '' : '<p class="fl-note">DEMO MODE: the server cannot sign users in by face yet (no Firebase service account). You can still enroll.</p>';
    const close = { label: 'Close', ghost: true, fn: cancel };
    if (st.enrolled) {
      $('flBody').innerHTML = '<div class="fl-state on">🟢 Enabled</div><p>Face Login is active for this account. Your normal Google / email sign-in still works.</p>' + note;
      buttons([{ label: 'Test Face Login', fn: testLogin }, { label: 'Disable Face Login', ghost: true, fn: async () => { await post('disable'); openSettings(); } },
        { label: 'Delete my face data', ghost: true, fn: async () => { await post('delete'); openSettings(); } }, close]);
    } else if (st.hasTemplate) {
      $('flBody').innerHTML = '<div class="fl-state off">🟡 Face Login Disabled</div><p>Your normal sign-in methods are unaffected.</p>' + note;
      buttons([{ label: 'Enable Face Login', fn: async () => { if (!confirm(CONSENT)) return; await post('enable'); openSettings(); } },
        { label: 'Delete my face data', ghost: true, fn: async () => { await post('delete'); openSettings(); } }, close]);
    } else {
      $('flBody').innerHTML = '<h3 class="fl-h3">Set up Face Login</h3><p>Use your face to quickly access your BackHaul AI driver account.</p><p class="fl-fine">Only a mathematical face template is stored on the server (encrypted). No photo is kept.</p>' + note;
      buttons([{ label: '📷 Register Face', fn: () => enroll(cfg) }, close]);
    }
  }
  async function post(route, extra) { try { return await api(route, Object.assign({ idToken: await idToken() }, extra || {})); } catch (e) { status('fail', errMsg(e)); return { status: 0, data: {} }; } }

  async function enroll(cfg) {
    const id = ++runId; $('flStage').hidden = false; $('flBody').innerHTML = ''; status('init', 'Starting...');
    buttons([{ label: 'Cancel', ghost: true, fn: () => { cancel(); } }]);
    try {
      await prepare(id);
      pendingDesc = await capture($('flVideo'), id, status);
      stopCamera(); $('flStage').hidden = true; status('success', 'Face captured ✓');
      $('flBody').innerHTML = `<label class="fl-check"><input type="checkbox" id="flConsent"> <span>☑ Enable Face Login</span></label><p class="fl-fine">${CONSENT}</p>`;
      buttons([{ label: 'Save Face Login', id: 'flSave', fn: save }, { label: 'Cancel', ghost: true, fn: () => { pendingDesc = null; cancel(); } }]);
      $('flSave').disabled = true; $('flConsent').onchange = (e) => { $('flSave').disabled = !e.target.checked; };
    } catch (e) { pendingDesc = null; if (e.code !== 'cancelled') fail(e, () => enroll(cfg)); }
  }
  async function save() {
    if (!pendingDesc || !$('flConsent').checked) return;
    $('flSave').disabled = true; status('verifying', 'Saving...');
    const r = await post('enroll', { descriptor: pendingDesc, consent: true, name: session.name, role: session.role, city: (db && db.city) || '' });
    pendingDesc = null;
    if (r.status === 200) { status('success', 'Face Login enabled ✓'); setTimeout(openSettings, 900); }
    else { status('fail', r.status === 409 ? MSG.face_in_use : r.status === 429 ? MSG.rate_limited : MSG.service); buttons([{ label: 'Close', ghost: true, fn: cancel }]); }
  }
  async function testLogin() {
    const id = ++runId; $('flStage').hidden = false; $('flBody').innerHTML = ''; buttons([{ label: 'Cancel', ghost: true, fn: cancel }]);
    try {
      await prepare(id); const d = await capture($('flVideo'), id, status); stopCamera();
      const r = await api('login', { descriptor: d });
      if (r.status === 401) throw E('no_match'); if (r.status === 429) throw E('rate_limited'); if (r.status !== 200) throw E('service');
      status('success', 'Face verified ✓ — test passed (you stay signed in)');
      buttons([{ label: 'Back', fn: openSettings }]); $('flStage').hidden = true;
    } catch (e) { if (e.code !== 'cancelled') fail(e, testLogin); }
  }

  const g = $('authGoogle');
  if (g) {
    const wrap = document.createElement('div'); wrap.className = 'fl-entry';
    wrap.innerHTML = '<div class="a-or">or</div><button type="button" class="a-btn a-face" id="authFace">📷 Login with Face</button>';
    g.insertAdjacentElement('afterend', wrap); $('authFace').onclick = startLogin;
  }
  const lo = $('logoutBtn');
  if (lo) { const b = document.createElement('button'); b.type = 'button'; b.id = 'faceSettingsBtn'; b.textContent = '📷 Face Login'; b.onclick = openSettings; lo.insertAdjacentElement('beforebegin', b); }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !ov.hidden) cancel(); });
  window.BH_FACE = { open: startLogin, settings: openSettings, cancel };
})();
