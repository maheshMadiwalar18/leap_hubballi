const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables from .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const k = trimmed.substring(0, eqIdx).trim();
      const v = trimmed.substring(eqIdx + 1).trim();
      if (k && !process.env[k]) {
        process.env[k] = v;
      }
    }
  });
}

// Optional Face Login add-on (isolated; server works normally if this fails to load)
let faceService = null;
try { faceService = require('./face-service'); } catch (e) { console.warn('[Face] disabled:', e.message); }

const PORT = process.env.PORT || 8080;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const CITIES_LIST = [
  { en: 'APMC Amargol', kn: 'ಅಮರಗೋಳ ಎಪಿಎಂಸಿ', aliases: ['amargol', 'amargol apmc', 'ಅಮರಗೋಳ', 'apmc amargol', 'apmc yard'] },
  { en: 'Hubballi', kn: 'ಹುಬ್ಬಳ್ಳಿ', aliases: ['hubli', 'hubballi', 'ಹುಬ್ಬಳ್ಳಿ'] },
  { en: 'Dharwad', kn: 'ಧಾರವಾಡ', aliases: ['dharwad', 'ಧಾರವಾಡ'] },
  { en: 'Belagavi', kn: 'ಬೆಳಗಾವಿ', aliases: ['belgaum', 'belagavi', 'ಬೆಳಗಾವಿ'] },
  { en: 'Bengaluru', kn: 'ಬೆಂಗಳೂರು', aliases: ['bangalore', 'bengaluru', 'ಬೆಂಗಳೂರು', 'banglore'] },
  { en: 'Gadag', kn: 'ಗದಗ', aliases: ['gadag', 'ಗದಗ'] },
  { en: 'Haveri', kn: 'ಹಾವೇರಿ', aliases: ['haveri', 'ಹಾವೇರಿ'] },
  { en: 'Davangere', kn: 'ದಾವಣಗೆರೆ', aliases: ['davangere', 'ದಾವಣಗೆರೆ', 'davanagere'] },
  { en: 'Chitradurga', kn: 'ಚಿತ್ರದುರ್ಗ', aliases: ['chitradurga', 'ಚಿತ್ರದುರ್ಗ'] },
  { en: 'Tumakuru', kn: 'ತುಮಕೂರು', aliases: ['tumkur', 'tumakuru', 'ತುಮಕೂರು'] },
  { en: 'Mysuru', kn: 'ಮೈಸೂರು', aliases: ['mysore', 'mysuru', 'ಮೈಸೂರು'] },
  { en: 'Shivamogga', kn: 'ಶಿವಮೊಗ್ಗ', aliases: ['shimoga', 'shivamogga', 'ಶಿವಮೊಗ್ಗ'] },
  { en: 'Hosapete', kn: 'ಹೊಸಪೇಟೆ', aliases: ['hospet', 'hosapete', 'ಹೊಸಪೇಟೆ'] },
  { en: 'Ranebennur', kn: 'ರಾಣೆಬೆನ್ನೂರು', aliases: ['ranebennur', 'ರಾಣೆಬೆನ್ನೂರು'] },
  { en: 'Hiriyur', kn: 'ಹಿರಿಯೂರು', aliases: ['hiriyur', 'ಹಿರಿಯೂರು'] },
  { en: 'Vijayapura', kn: 'ವಿಜಯಪುರ', aliases: ['bijapur', 'vijayapura', 'ವಿಜಯಪುರ'] }
];

function fallbackParse(text, lang = 'kn') {
  const lower = text.toLowerCase();
  
  let capacity = 8;
  const capMatch = text.match(/(\d+(?:\.\d+)?)\s*(?:ton|tons|ಟನ್|ಟನ್ನು|tonnes|t\b)/i);
  if (capMatch) {
    capacity = parseFloat(capMatch[1]);
  }

  let foundCities = [];
  for (const c of CITIES_LIST) {
    for (const a of c.aliases) {
      if (lower.includes(a)) {
        if (!foundCities.includes(c.en)) foundCities.push(c.en);
        break;
      }
    }
  }

  let location = 'APMC Amargol';
  let destination = 'Bengaluru';

  if (foundCities.length >= 2) {
    location = foundCities[0];
    destination = foundCities[1];
  } else if (foundCities.length === 1) {
    if (foundCities[0] === 'APMC Amargol' || foundCities[0] === 'Hubballi') {
      location = 'APMC Amargol';
      destination = 'Bengaluru';
    } else {
      location = 'APMC Amargol';
      destination = foundCities[0];
    }
  }

  let time = '07:00';
  const timeMatch = lower.match(/(\d{1,2})\s*(AM|PM|am|pm|:|\s*gante|\s*ಗಂಟೆ|\s*o'clock)?/i);
  if (lower.includes('7') || lower.includes('೭')) time = '07:00';
  else if (lower.includes('8') || lower.includes('೮')) time = '08:00';
  else if (lower.includes('9') || lower.includes('೯')) time = '09:00';
  else if (lower.includes('10') || lower.includes('೧೦')) time = '10:00';
  else if (lower.includes('18') || lower.includes('6 pm') || lower.includes('6pm')) time = '18:00';
  else if (timeMatch) {
    const hr = parseInt(timeMatch[1], 10);
    time = (hr < 10 ? '0' + hr : '' + hr) + ':00';
  }

  const isKn = lang === 'kn' || /[ಅ-ಹ]/.test(text) || lower.includes('hog') || lower.includes('gante') || lower.includes('beku') || lower.includes('bandiddini');

  let intent = 'FIND_OUTBOUND_LOAD';
  let agentic_steps = [];
  let reply = '';

  if (lower.includes('accept') || lower.includes('book') || lower.includes('oppuko') || lower.includes('ಸ್ವೀಕರಿಸಿ') || lower.includes('confirm') || lower.includes('ಖಚಿತಪಡಿಸು')) {
    intent = 'ACCEPT_MATCH';
    agentic_steps = [
      'Parse intent "ACCEPT_MATCH"',
      'Query top matching return load from APMC Amargol marketplace',
      'Action: Lock truck capacity and confirm booking at ₹0 commission',
      'Update trip schedule & operational yard board'
    ];
    reply = isKn ?
      `ನಿಮ್ಮ ಆದೇಶದಂತೆ, ಅತ್ಯುತ್ತಮ ವಾಪಸ್ ಸರಕನ್ನು ₹0 ಬ್ರೋಕರ್ ಕಮಿಷನ್‌ನೊಂದಿಗೆ ಯಶಸ್ವಿಯಾಗಿ ಖಚಿತಪಡಿಸಲಾಗಿದೆ!` :
      `Load confirmed! 0% broker commission applied. Trip successfully scheduled.`;
  } else if (lower.includes('ಯಾಕೆ') || lower.includes('why') || lower.includes('best') || lower.includes('ಯಾವುದು')) {
    intent = 'EXPLAIN_BEST';
    agentic_steps = [
      'Analyze route compatibility & detour ratio',
      'Evaluate profit margin vs traditional broker rate',
      'Highlight zero broker commission advantage'
    ];
    reply = isKn ?
      `ಈ ಸರಕು 94% ಹೊಂದಾಣಿಕೆಯಾಗಿದೆ: ನಿಮ್ಮ ${capacity} ಟನ್ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ಸರಿಹೊಂದುತ್ತದೆ, ಕನಿಷ್ಠ detour, ಮತ್ತು ₹1,500 ಬ್ರೋಕರ್ ಕಮಿಷನ್ ಉಳಿತಾಯವಾಗುತ್ತದೆ.` :
      `This load is a 94% match: fits your ${capacity}t capacity, minimal detour along NH-48, and saves ₹1,500 in broker fees.`;
  } else {
    intent = 'FIND_OUTBOUND_LOAD';
    agentic_steps = [
      `Arrived at: ${location}`,
      `Available Capacity: ${capacity} Tons`,
      `Target Corridor: ${location} ➔ ${destination}`,
      'Scanning APMC Amargol Outbound Board & BackHaul Engine',
      'Calculating Match Score, Fuel, and Transparent Earnings'
    ];
    reply = isKn ?
      `ಸರಿ! ನಿಮ್ಮ ${capacity} ಟನ್ ಗಾಡಿಗೆ ${location}ದಿಂದ ${destination}ಗೆ ಅತ್ಯುತ್ತಮ ವಾಪಸ್ ಸರಕುಗಳು ಸಿಕ್ಕಿವೆ. 94% ಗರಿಷ್ಠ ಹೊಂದಾಣಿಕೆ.` :
      `Got it. Found top outbound loads from ${location} to ${destination} for your ${capacity}t truck. 94% top match.`;
  }

  return {
    intent,
    location,
    origin: location,
    destination,
    available_capacity_tons: capacity,
    cargo_type: null,
    date: 'tomorrow',
    departure_time: time,
    language: isKn ? 'kn' : 'en',
    missing_info: null,
    reply,
    agentic_steps
  };
}

const CANDIDATE_MODELS = [
  'gemini-3.5-flash-lite',
  'gemini-3.5-flash',
  'gemini-3.8-flash'
];

function callGeminiSingleModel(modelName, apiKey, promptText) {
  return new Promise((resolve, reject) => {
    const systemPrompt = `You are Saarathi AI (ಸಾರಥಿ AI), the voice-first AI copilot for truck drivers at APMC Amargol, Hubballi, Karnataka (LEAP Smart Logistics).
Analyze the driver's utterance in Kannada, English, or mixed Kanglish.
Extract structured logistics information. Do NOT calculate distance, fuel, pricing, or match scores (the logistics engine does that).

Supported Intents:
- "FIND_OUTBOUND_LOAD": Driver wants an outbound/return load from APMC Amargol or nearby.
- "ACCEPT_MATCH": Driver wants to accept/confirm a recommended load ("ಸರಕು ಸ್ವೀಕರಿಸಿ", "accept load").
- "EXPLAIN_BEST": Driver asks why a load is best or which is best.
- "SHOW_PROFIT": Driver asks about profits/earnings.
- "SHOW_ROUTE": Driver asks to see route or map.

Known Karnataka Hubs: APMC Amargol (Hubballi), Bengaluru, Mysuru, Belagavi, Davangere, Dharwad, Gadag, Haveri, Shivamogga, Vijayapura, Chitradurga.

Return STRICT JSON ONLY (no markdown wrappers):
{
  "intent": "FIND_OUTBOUND_LOAD",
  "location": "APMC Amargol",
  "available_capacity_tons": 8.0,
  "destination": "Bengaluru",
  "cargo_type": null,
  "date": "tomorrow",
  "departure_time": "07:00",
  "language": "kn",
  "reply": "Short natural response in driver's language (e.g. ಸರಿ, ನಿಮ್ಮ 8 ಟನ್ ಗಾಡಿಗೆ ಅಮರಗೋಳದಿಂದ ಬೆಂಗಳೂರಿಗೆ 3 ಅತ್ಯುತ್ತಮ ಸರಕುಗಳು ಸಿಕ್ಕಿವೆ.)",
  "agentic_steps": [
    "Step 1: Driver utterance recognized",
    "Step 2: Capacity & Destination identified",
    "Step 3: Querying APMC Amargol Outbound Marketplace"
  ]
}`;

    const postData = JSON.stringify({
      contents: [
        {
          parts: [
            { text: systemPrompt },
            { text: `Driver utterance: "${promptText}"` }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: 'application/json'
      }
    });

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const req = https.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 8000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          return reject(new Error(`Model ${modelName} returned HTTP ${res.statusCode}: ${body.substring(0, 100)}`));
        }
        try {
          const parsed = JSON.parse(body);
          const textResp = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (textResp) {
            const cleanJson = textResp.replace(/```json/g, '').replace(/```/g, '').trim();
            const data = JSON.parse(cleanJson);
            if (!data.location) data.location = 'APMC Amargol';
            if (!data.origin) data.origin = data.location;
            return resolve(data);
          }
        } catch (e) {
          return reject(new Error(`Parse error on ${modelName}: ${e.message}`));
        }
        reject(new Error(`Empty text response from ${modelName}`));
      });
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Timeout on ${modelName}`));
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

async function callGeminiAPI(apiKey, promptText) {
  for (const model of CANDIDATE_MODELS) {
    try {
      const data = await callGeminiSingleModel(model, apiKey, promptText);
      return { source: `gemini (${model})`, data };
    } catch (err) {
      console.warn(`[Gemini Cascade] ${err.message}, trying next...`);
    }
  }
  throw new Error('All Gemini candidate models failed');
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  if (req.method === 'POST' && pathname === '/api/saarathi') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      let payload = {};
      try { payload = JSON.parse(body); } catch(e) {}
      const text = payload.message || payload.text || payload.prompt || '';
      const lang = payload.lang || 'kn';

      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'YOUR_KEY' && apiKey.trim().length > 10) {
        try {
          const result = await callGeminiAPI(apiKey, text);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, source: result.source, data: result.data }));
        } catch (err) {
          console.warn('[Gemini API Fallback triggered]:', err.message);
          const fb = fallbackParse(text, lang);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ success: true, source: 'fallback', data: fb }));
        }
      } else {
        const fb = fallbackParse(text, lang);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ success: true, source: 'fallback', data: fb }));
      }
    });
    return;
  }

  if (faceService && pathname.startsWith('/api/face/')) {
    faceService.handle(req, res, pathname).catch(() => { if (!res.headersSent) { res.writeHead(500); res.end(); } });
    return;
  }

  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      status: 'ok',
      hasApiKey: !!process.env.GEMINI_API_KEY,
      uptime: process.uptime()
    }));
  }

  // Never serve dotfiles/dot-directories (.env, .face_data, .git)
  if (pathname.split('/').some(seg => seg.startsWith('.'))) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    return res.end('404 Not Found');
  }
  let filePath = path.join(PUBLIC_DIR, pathname === '/' ? 'index.html' : pathname);
  const ext = path.extname(filePath).toLowerCase();

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      return res.end('404 Not Found');
    }
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`🚚 BackHaul AI + Saarathi AI Server running on http://localhost:${PORT}`);
  console.log(`🔑 Gemini API configured: ${process.env.GEMINI_API_KEY ? 'YES (Secure server-side)' : 'NO'}`);
});
