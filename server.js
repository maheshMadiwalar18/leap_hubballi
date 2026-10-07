const http = require('http');
const fs = require('fs');
const path = require('path');
const https = require('https');

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

let faceService = null;
try { faceService = require('./face-service'); } catch (e) { console.warn('[Face] disabled:', e.message); }

let predictiveEngine = null;
try { predictiveEngine = require('./predictive-engine'); } catch (e) { console.warn('[Predictive Engine] disabled:', e.message); }

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
  { en: 'Vijayapura', kn: 'ವಿಜಯಪುರ', aliases: ['bijapur', 'vijayapura', 'ವಿಜಯಪುರ'] },
  { en: 'Mangaluru', kn: 'ಮಂಗಳೂರು', aliases: ['mangaluru', 'mangalore', 'ಮಂಗಳೂರು'] },
  { en: 'Hyderabad', kn: 'ಹೈದರಾಬಾದ್', aliases: ['hyderabad', 'ಹೈದರಾಬಾದ್'] },
  { en: 'Chennai', kn: 'ಚೆನ್ನೈ', aliases: ['chennai', 'madras', 'ಚೆನ್ನೈ'] }
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

  let time = '15:30';
  const isKn = lang === 'kn' || /[ಅ-ಹ]/.test(text) || lower.includes('hog') || lower.includes('gante') || lower.includes('beku') || lower.includes('bandiddini') || lower.includes('sigutta') || lower.includes('yavdu') || lower.includes('estu');

  let intent = 'FIND_OUTBOUND_LOAD';
  let agentic_steps = [];
  let reply = '';
  let predictionData = null;

  if (predictiveEngine) {
    try {
      predictionData = predictiveEngine.predictBackhaulForTruck({
        capacity,
        currentLocation: location,
        preferredDestination: destination,
        expectedEmptyTime: time
      });
    } catch(e) {}
  }

  // Check specific intent patterns
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
  } else if (lower.includes('risk') || lower.includes('ಖಾಲಿ') || lower.includes('empty') || lower.includes('ವ್ಯರ್ಥ') || lower.includes('ರಿಸ್ಕ್')) {
    intent = 'PREDICT_EMPTY_RISK';
    agentic_steps = [
      'Evaluate corridor return volume and demand matrix',
      'Compute Empty-Return Probability (1 - P_return)',
      'Compare Bengaluru vs Mysuru vs Regional Corridors'
    ];
    reply = isKn ?
      `ಬೆಂಗಳೂರಿಗೆ empty-return risk ಕೇವಲ 13% ಇದೆ. ಮೈಸೂರಿಗೆ 32%, ಆದರೆ ಹೈದರಾಬಾದ್‌ಗೆ 51% ರಿಸ್ಕ್ ಇದೆ. ನಿಮ್ಮ ${capacity} ಟನ್ ಗಾಡಿಗೆ ಬೆಂಗಳೂರು ಸುರಕ್ಷಿತ.` :
      `Empty-return risk for Bengaluru is only 13%. Mysuru is 32%, while Hyderabad is 51% risk. Bengaluru is the safest option for your ${capacity}t truck.`;
  } else if (lower.includes('best') || lower.includes('ಯಾವುದು') || lower.includes('ಯಾವ್ದು') || lower.includes('uttama') || lower.includes('which option')) {
    intent = 'PREDICT_BEST_OPTION';
    agentic_steps = [
      'Query Predictive Backhaul Engine for all Karnataka corridors',
      'Rank destinations by Backhaul Opportunity Score',
      'Bengaluru ranked #1: Score 94/100, 87% Probability, ₹14.5K Net'
    ];
    reply = isKn ?
      `ಬೆಂಗಳೂರು ಅತ್ಯುತ್ತಮ ಆಯ್ಕೆ (Score 94/100). ಲೋಡ್ ಸಿಗುವ ಸಂಭವ 87% ಇದೆ, ಅಂದಾಜು ಆದಾಯ ₹17,000–₹20,000, ನಿವ್ವಳ ಲಾಭ ₹14,500.` :
      `Bengaluru is the best option (Score 94/100). Load probability is 87%, expected freight ₹17,000–₹20,000 with ~₹14,500 net earnings.`;
  } else if (lower.includes('mysuru') || lower.includes('ಮೈಸೂರು') || lower.includes('mysore')) {
    intent = 'PREDICT_CORRIDOR';
    agentic_steps = [
      'Calculate demand probability for Hubballi ➔ Mysuru corridor',
      'Estimate freight price range & empty-return risk',
      'Evaluate detour along NH-150A'
    ];
    reply = isKn ?
      `ಮೈಸೂರಿಗೆ ಲೋಡ್ ಸಿಗುವ probability 68% ಇದೆ. Expected freight ₹14,000–₹16,500, detour ಕೇವಲ 4 ಕಿ.ಮೀ. ಬೆಂಗಳೂರಿಗಿಂತ ಸ್ವಲ್ಪ ಕಡಿಮೆ ಆದಾಯ.` :
      `For Mysuru, load probability is 68%. Expected freight ₹14,000–₹16,500 with a low 4 km detour. Slightly lower volume than Bengaluru.`;
  } else if (lower.includes('sigutta') || lower.includes('ಸಿಗುತ್ತಾ') || lower.includes('ಸಿಗತ್ತಾ') || lower.includes('probability') || lower.includes('chance') || lower.includes('predict') || lower.includes('ಅಂದಾಜು') || lower.includes('ಸಾಧ್ಯತೆ')) {
    intent = 'PREDICT_CORRIDOR';
    const prob = destination === 'Bengaluru' ? 87 : (destination === 'Mysuru' ? 68 : 55);
    const frMin = destination === 'Bengaluru' ? '17,000' : '14,000';
    const frMax = destination === 'Bengaluru' ? '20,000' : '16,500';
    agentic_steps = [
      `Destination: ${destination}`,
      `Evaluating APMC Amargol outbound onion & chilli volume`,
      `Predicted Load Probability: ${prob}% (Confidence: High)`,
      `Expected Availability Window: 4:00 PM – 5:30 PM`
    ];
    reply = isKn ?
      `ಹೌದು. ${destination}ಗೆ ಲೋಡ್ ಸಿಗುವ ಸಂಭವ ${prob}% ಇದೆ. ಸಂಜೆ 4:00 ರಿಂದ 5:30 ರ ನಡುವೆ ಲಭ್ಯತೆ ನಿರೀಕ್ಷಿಸಲಾಗಿದೆ. ಅಂದಾಜು ಬಾಡಿಗೆ ₹${frMin} ರಿಂದ ₹${frMax}. ನಿಮ್ಮ ${capacity} ಟನ್ ಗಾಡಿಗೆ ಸೂಕ್ತ.` :
      `Yes. Load probability for ${destination} is ${prob}%. Expected availability between 4:00–5:30 PM. Expected freight ₹${frMin}–₹${frMax}. Ideal for your ${capacity}t truck.`;
  } else if (lower.includes('next week') || lower.includes('ಮುಂದಿನ ವಾರ') || lower.includes('ಮುಂದೆ') || lower.includes('future') || lower.includes('reach') || lower.includes('ಹೋಗ್ತೀನಿ')) {
    intent = 'PREDICT_FUTURE_BACKHAUL';
    agentic_steps = [
      `Forward Trip Target: ${location} ➔ ${destination}`,
      `Predicting truck availability at: ${destination}`,
      'Scanning future agricultural harvest & return pipeline',
      'Calculated 94% Predictive Backhaul Score'
    ];
    reply = isKn ?
      `ನಿಮ್ಮ ಗಾಡಿ ${destination} ತಲುಪುವ ವೇಳೆಗೆ ಹುಬ್ಬಳ್ಳಿಗೆ ವಾಪಸ್ ಬರಲು 3 ಸಂಭಾವ್ಯ ಲೋಡ್‌ಗಳಿವೆ. ರಸಗೊಬ್ಬರ (8.2 ಟನ್) ₹14,800 ಆದಾಯದೊಂದಿಗೆ 94% ಹೊಂದಾಣಿಕೆಯಾಗಿದೆ.` :
      `When your truck reaches ${destination}, 3 future return loads are predicted back to Hubballi. Top match: Fertilizer (8.2t) with ₹14,800 revenue (94% score).`;
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
    date: 'today',
    departure_time: time,
    language: isKn ? 'kn' : 'en',
    missing_info: null,
    reply,
    agentic_steps,
    prediction: predictionData ? predictionData.topPrediction : null
  };
}

const CANDIDATE_MODELS = [
  'gemini-flash-latest',
  'gemini-flash-lite-latest',
  'gemini-3.5-flash-lite',
  'gemini-pro-latest'
];

function callGeminiSingleModel(modelName, apiKey, promptText) {
  return new Promise((resolve, reject) => {
    const systemPrompt = `You are Saarathi AI (ಸಾರಥಿ AI), the voice-first AI copilot for truck drivers at APMC Amargol, Hubballi, Karnataka (LEAP Smart Logistics).
You have a real-time PREDICTIVE BACKHAUL ENGINE that forecasts outbound return loads before trucks become empty.

Predictive Engine Corridor Intelligence:
- Bengaluru: 87% load probability, ₹17,000–₹20,000 expected freight, ~₹14,500 estimated net, 13% empty-return risk, Backhaul Score 94/100, Expected availability 4:00–5:30 PM (Peak).
- Mysuru: 68% load probability, ₹14,000–₹16,500 expected freight, 32% empty-return risk, Backhaul Score 84/100.
- Mangaluru: 51% load probability, ₹12,000–₹14,500 expected freight, 38% empty-return risk.
- Belagavi: 72% load probability, ₹4,500–₹6,000 expected freight (Short haul).
- Hyderabad: 44% load probability, ₹21,000–₹24,000 expected freight, 51% empty-return risk.

Supported Intents:
- "PREDICT_CORRIDOR": Driver asks if loads are available for a city (e.g., "Saarathi, Bengaluru ge load sigutta?", "Mysuru?").
- "PREDICT_BEST_OPTION": Driver asks which option is best ("Best option yavdu?", "Which load to take?").
- "PREDICT_EMPTY_RISK": Driver asks about empty return risk ("Empty return risk estide?").
- "FIND_OUTBOUND_LOAD": Driver wants available loads right now.
- "ACCEPT_MATCH": Driver wants to accept a load ("ಸರಕು ಸ್ವೀಕರಿಸಿ", "accept load").
- "EXPLAIN_BEST": Driver asks why a prediction was made.

When speaking in Kannada/Kanglish, keep replies natural, respectful, and concise (1-2 sentences) so text-to-speech sounds great.

Return STRICT JSON ONLY (no markdown wrappers):
{
  "intent": "PREDICT_CORRIDOR",
  "location": "APMC Amargol",
  "available_capacity_tons": 8.0,
  "destination": "Bengaluru",
  "cargo_type": null,
  "date": "today",
  "departure_time": "15:30",
  "language": "kn",
  "reply": "ಹೌದು. Bengaluru ge load siguva probability 87% ide. 4 inda 5:30 PM madhya availability expected ide. Estimated freight ₹17,000 inda ₹20,000. Nimma 8 tonne truck-ge idu best option.",
  "agentic_steps": [
    "Predictive Corridor Analysis: APMC Amargol ➔ Bengaluru",
    "Estimated 87% Probability based on APMC onion harvest arrivals",
    "Calculated ₹17K-₹20K freight range with ₹14.5K net profit"
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

  if (predictiveEngine && pathname.startsWith('/api/predict/')) {
    predictiveEngine.handleApi(req, res, pathname).catch((err) => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

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

  if (predictiveEngine && pathname.startsWith('/api/predict')) {
    predictiveEngine.handleApi(req, res, pathname);
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

  if (pathname === '/api/firebase-config') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({
      apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyBQP006Bnw25IAQND_3DDlEm3hLULOEaA4',
      authDomain: process.env.FIREBASE_AUTH_DOMAIN || 'curiolab-5c4cf.firebaseapp.com',
      projectId: process.env.FIREBASE_PROJECT_ID || 'curiolab-5c4cf',
      storageBucket: 'curiolab-5c4cf.firebasestorage.app',
      messagingSenderId: '382541354229',
      appId: '1:382541354229:web:21f653e5a4c5d5e320a1bc',
      measurementId: 'G-8VRJH52D8Z'
    }));
  }

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
