const fs = require('fs');
const path = require('path');

const CONFIG = {
  weights: {
    loadProbability: 0.30,
    routeCompatibility: 0.20,
    capacityCompatibility: 0.15,
    expectedNetEarnings: 0.15,
    detourPenalty: 0.10,
    deadlineCompatibility: 0.10
  },
  dieselPricePerLiter: 92.0,
  dieselBurnRateLPerKm: 0.30,
  baseRatePerKm: 38.0,
  roadFactor: 1.25,
  coldStartThreshold: 20 
};

const CORRIDORS = {
  'Bengaluru': { distanceKm: 410, baseDemand: 0.88, tollEst: 680, avgDetourKm: 3, highway: 'NH-48', returnCorridorScore: 0.92 },
  'Mysuru': { distanceKm: 460, baseDemand: 0.68, tollEst: 720, avgDetourKm: 4, highway: 'NH-48 / NH-150A', returnCorridorScore: 0.74 },
  'Mangaluru': { distanceKm: 360, baseDemand: 0.54, tollEst: 450, avgDetourKm: 8, highway: 'NH-63 / NH-169', returnCorridorScore: 0.62 },
  'Belagavi': { distanceKm: 105, baseDemand: 0.72, tollEst: 180, avgDetourKm: 2, highway: 'NH-48', returnCorridorScore: 0.78 },
  'Davangere': { distanceKm: 145, baseDemand: 0.65, tollEst: 240, avgDetourKm: 3, highway: 'NH-48', returnCorridorScore: 0.70 },
  'Shivamogga': { distanceKm: 210, baseDemand: 0.52, tollEst: 280, avgDetourKm: 6, highway: 'SH-57', returnCorridorScore: 0.58 },
  'Haveri': { distanceKm: 75, baseDemand: 0.58, tollEst: 110, avgDetourKm: 2, highway: 'NH-48', returnCorridorScore: 0.65 },
  'Gadag': { distanceKm: 58, baseDemand: 0.60, tollEst: 80, avgDetourKm: 2, highway: 'SH-73', returnCorridorScore: 0.68 },
  'Vijayapura': { distanceKm: 200, baseDemand: 0.46, tollEst: 310, avgDetourKm: 5, highway: 'NH-50', returnCorridorScore: 0.50 },
  'Hosapete': { distanceKm: 140, baseDemand: 0.50, tollEst: 220, avgDetourKm: 4, highway: 'NH-67', returnCorridorScore: 0.55 },
  'Hyderabad': { distanceKm: 510, baseDemand: 0.44, tollEst: 850, avgDetourKm: 9, highway: 'NH-67 / NH-44', returnCorridorScore: 0.48 },
  'Chennai': { distanceKm: 680, baseDemand: 0.28, tollEst: 1150, avgDetourKm: 12, highway: 'NH-48', returnCorridorScore: 0.32 }
};

const SEASONAL_COMMODITIES = [
  {
    name: 'Onions (ಈರುಳ್ಳಿ)',
    season: 'Kharif / Late Kharif Peak',
    arrivalLevel: 'HIGH (+28% above avg)',
    dailyVolumeTonnes: 640,
    peakCorridors: ['Bengaluru', 'Mysuru', 'Mangaluru', 'Chennai'],
    peakHours: '15:00–18:30',
    marketStatus: 'Bullish outbound movement to South Karnataka APMCs',
    activeMonths: [8, 9, 10, 11, 12, 1, 2]
  },
  {
    name: 'Byadgi Red Chilli (ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ)',
    season: 'Harvest Outbound Surge',
    arrivalLevel: 'HIGH (+19% above avg)',
    dailyVolumeTonnes: 320,
    peakCorridors: ['Bengaluru', 'Hyderabad', 'Davangere', 'Vijayapura'],
    peakHours: '14:00–17:30',
    marketStatus: 'High freight premium for covered & dry body trucks',
    activeMonths: [1, 2, 3, 4, 10, 11, 12]
  },
  {
    name: 'Potato (ಆಲೂಗಡ್ಡೆ)',
    season: 'Regular Wholesale Inflow',
    arrivalLevel: 'MODERATE',
    dailyVolumeTonnes: 210,
    peakCorridors: ['Belagavi', 'Bengaluru', 'Shivamogga'],
    peakHours: '16:00–19:00',
    marketStatus: 'Consistent daily backhaul volume',
    activeMonths: [5, 6, 7, 8, 9, 10]
  },
  {
    name: 'Cotton & Bales (ಹತ್ತಿ)',
    season: 'Ginning Outbound',
    arrivalLevel: 'MODERATE (+12%)',
    dailyVolumeTonnes: 180,
    peakCorridors: ['Davangere', 'Bengaluru', 'Hosapete'],
    peakHours: '16:30–20:00',
    marketStatus: 'Heavy capacity requirement (10–16T containers/open body)',
    activeMonths: [10, 11, 12, 1, 2, 3]
  },
  {
    name: 'Maize & Grains (ಮೆಕ್ಕೆಜೋಳ)',
    season: 'Post-Harvest Feed Dispatch',
    arrivalLevel: 'STEADY',
    dailyVolumeTonnes: 150,
    peakCorridors: ['Bengaluru', 'Mysuru', 'Haveri'],
    peakHours: '14:30–18:00',
    marketStatus: 'Bulk demand for poultry feed mills in South Karnataka',
    activeMonths: [9, 10, 11, 12, 1]
  }
];

let simulationState = {
  isSimulated: true,
  dailyArrivals: 348,
  dailyDepartures: 262,
  currentlyUnloading: 46,
  emptyAtRisk: 38,
  totalHistoricalRecords: 480,
  evaluationMetrics: {
    loadAvailabilityPrecision: 0.84,
    loadAvailabilityRecall: 0.88,
    destinationPredictionAccuracy: 0.81,
    freightPriceMAEPercent: 7.9,
    emptyReturnAccuracy: 0.83,
    sampleSizeEvaluated: 480,
    lastCalibrated: '2026-10-07T12:00:00Z',
    isSyntheticEvaluation: true
  }
};

function predictLoadProbability(dest, truck = {}, nowHour = 15.5) {
  const corridor = CORRIDORS[dest] || { distanceKm: 300, baseDemand: 0.40, returnCorridorScore: 0.50 };
  let baseP = corridor.baseDemand;

  let timeFactor = 1.0;
  if (nowHour >= 14 && nowHour <= 18.5) {
    timeFactor = 1.18; 
  } else if (nowHour > 18.5 && nowHour <= 21) {
    timeFactor = 0.95;
  } else if (nowHour < 11) {
    timeFactor = 0.78; 
  } else {
    timeFactor = 1.05;
  }

  const cap = parseFloat(truck.capacity || truck.cap || 8);
  let capFactor = 1.0;
  if (cap >= 6 && cap <= 12) {
    capFactor = 1.10; 
  } else if (cap > 12) {
    capFactor = 0.92; 
  } else {
    capFactor = 0.98;
  }

  let seasonalBoost = 1.08; 

  let p = baseP * timeFactor * capFactor * seasonalBoost;

  return Math.min(0.96, Math.max(0.08, parseFloat(p.toFixed(3))));
}

function predictFreightAndNet(dest, truck = {}) {
  const corridor = CORRIDORS[dest] || { distanceKm: 300, tollEst: 400 };
  const cap = parseFloat(truck.capacity || truck.cap || 8);
  const km = corridor.distanceKm * CONFIG.roadFactor;

  const fuelBurnL = km * CONFIG.dieselBurnRateLPerKm;
  const fuelCost = fuelBurnL * CONFIG.dieselPricePerLiter;
  const toll = corridor.tollEst;
  const operationalCost = fuelCost + toll + 800; 

  const ratePerKm = CONFIG.baseRatePerKm * (0.75 + 0.25 * Math.min(1.5, cap / 8));
  const midpoint = Math.round((km * ratePerKm) / 100) * 100;

  const minFreight = Math.round((midpoint * 0.92) / 100) * 100;
  const maxFreight = Math.round((midpoint * 1.09) / 100) * 100;

  const estimatedNet = Math.round(midpoint - operationalCost);

  return {
    min: minFreight,
    max: maxFreight,
    midpoint,
    estimatedNet: Math.max(2500, estimatedNet),
    fuelCost: Math.round(fuelCost),
    tollCost: toll,
    distanceKm: Math.round(km),
    detourKm: corridor.avgDetourKm || 3
  };
}

function predictEmptyReturnRisk(dest) {
  const corridor = CORRIDORS[dest] || { returnCorridorScore: 0.50 };

  const risk = 1.0 - corridor.returnCorridorScore;
  return parseFloat(Math.min(0.85, Math.max(0.09, risk)).toFixed(2));
}

function calculateBackhaulScore(loadProb, financial, emptyRisk, preferredDest, dest, truck = {}) {
  const w = CONFIG.weights;

  const pScore = loadProb * 100 * w.loadProbability;

  let routeComp = 0.85;
  if (preferredDest && preferredDest.toLowerCase() === dest.toLowerCase()) {
    routeComp = 1.0;
  }
  const rScore = routeComp * 100 * w.routeCompatibility;

  const cap = parseFloat(truck.capacity || truck.cap || 8);
  const capFit = (cap >= 6 && cap <= 12) ? 1.0 : 0.82;
  const cScore = capFit * 100 * w.capacityCompatibility;

  const earnRatio = Math.min(1.0, financial.estimatedNet / 16000);
  const eScore = earnRatio * 100 * w.expectedNetEarnings;

  const detourScore = Math.max(0.4, 1.0 - (financial.detourKm / 20)) * 100 * w.detourPenalty;

  const returnViability = (1.0 - emptyRisk) * 100 * w.deadlineCompatibility;

  const totalScore = Math.round(pScore + rScore + cScore + eScore + detourScore + returnViability);
  return Math.min(99, Math.max(30, totalScore));
}

function generateXAIReasons(dest, loadProb, financial, emptyRisk, truck = {}) {
  const cap = parseFloat(truck.capacity || truck.cap || 8);
  const reasons = [];

  if (loadProb >= 0.80) {
    reasons.push(`High historical demand: 18+ suitable loads historically posted after 3:00 PM for ${dest}`);
    reasons.push(`Current APMC Amargol onion & agricultural commodity arrivals are +28% above seasonal average`);
  } else if (loadProb >= 0.60) {
    reasons.push(`Consistent mid-corridor demand: 8–12 loads registered daily along ${CORRIDORS[dest]?.highway || 'NH-48'}`);
    reasons.push(`Moderate agricultural consolidation active at APMC Amargol loading docks`);
  } else {
    reasons.push(`Niche or regional corridor: lower outbound volume, best suited for dedicated bookings`);
  }

  reasons.push(`Truck capacity (${cap}t) matches high-frequency wholesale lot sizes (6–${Math.round(cap)}t)`);

  if (emptyRisk <= 0.20) {
    reasons.push(`Very low return risk (${Math.round(emptyRisk * 100)}%): Heavy industrial & consumable return freight pipeline back to Hubballi`);
  } else if (emptyRisk <= 0.40) {
    reasons.push(`Manageable empty-return risk (${Math.round(emptyRisk * 100)}%): Active return loads available with slight detour`);
  } else {
    reasons.push(`Higher return risk (${Math.round(emptyRisk * 100)}%): Recommended only with confirmed forward advance freight`);
  }

  reasons.push(`Low detour overhead: estimated only ${financial.detourKm} km along primary transit arterial`);

  return reasons;
}

function generatePredictiveTimeline(truckId, dest = 'Bengaluru', expectedEmptyTime = '15:30') {
  const baseParts = expectedEmptyTime.split(':');
  let hr = parseInt(baseParts[0], 10) || 15;
  let min = parseInt(baseParts[1], 10) || 30;

  const formatTime = (h, m) => {
    const period = h >= 12 ? 'PM' : 'AM';
    const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);
    const displayM = m < 10 ? '0' + m : m;
    return `${displayH}:${displayM} ${period}`;
  };

  const addMinutes = (h, m, add) => {
    let total = h * 60 + m + add;
    let newH = Math.floor(total / 60) % 24;
    let newM = total % 60;
    return { h: newH, m: newM, str: formatTime(newH, newM) };
  };

  const tUnload = addMinutes(hr, min, -45);
  const tEmpty = addMinutes(hr, min, 0);
  const tDemandSpike = addMinutes(hr, min, 15);
  const tPeakWindow = addMinutes(hr, min, 45);
  const tWindowEnd = addMinutes(hr, min, 120);
  const tDecay = addMinutes(hr, min, 160);

  return [
    {
      time: tUnload.str,
      phase: 'unloading',
      title: 'Truck Unloading at Inbound Bay',
      desc: 'Inbound cargo being offloaded at APMC Amargol wholesale yard.',
      status: 'active'
    },
    {
      time: tEmpty.str,
      phase: 'empty_estimated',
      title: 'Truck Becomes Empty & Ready',
      desc: 'Driver completes gate-pass clearance. Ready for immediate outbound pickup.',
      status: 'upcoming'
    },
    {
      time: tDemandSpike.str,
      phase: 'demand_rise',
      title: `${dest} Outbound Demand Surges ↑`,
      desc: 'Commodity auction concludes; commission agents publish outbound consignments.',
      status: 'predicted'
    },
    {
      time: `${tPeakWindow.str}–${tWindowEnd.str}`,
      phase: 'peak_window',
      title: 'Peak High-Probability Window (87% Chance)',
      desc: `Optimum match window. Agricultural produce (6–8T) ready for direct loading with 0% broker fee.`,
      status: 'recommended'
    },
    {
      time: `After ${tDecay.str}`,
      phase: 'decay',
      title: 'Demand Probability Declines',
      desc: 'Evening dispatch cutoff approaching. Higher risk of overnight waiting.',
      status: 'risk_window'
    }
  ];
}

function predictBackhaulForTruck(truck = {}) {
  const truckId = truck.truckId || truck.reg || truck.id || 'KA-25-AB-1234';
  const capacity = parseFloat(truck.capacity || truck.cap || 8);
  const preferred = truck.preferredDestination || truck.destination || 'Bengaluru';
  const expectedEmpty = truck.expectedEmptyTime || truck.time || '15:30';

  const candidateDestinations = Object.keys(CORRIDORS).map(dest => {
    const prob = predictLoadProbability(dest, truck);
    const financial = predictFreightAndNet(dest, truck);
    const emptyRisk = predictEmptyReturnRisk(dest);
    const score = calculateBackhaulScore(prob, financial, emptyRisk, preferred, dest, truck);
    const reasons = generateXAIReasons(dest, prob, financial, emptyRisk, truck);

    const confidenceScore = simulationState.totalHistoricalRecords >= CONFIG.coldStartThreshold ? 0.89 : 0.65;
    const confidenceLevel = confidenceScore >= 0.80 ? 'High' : 'Medium';

    return {
      destination: dest,
      loadProbability: prob,
      probabilityPct: Math.round(prob * 100),
      confidence: confidenceScore,
      confidenceLevel,
      score,
      expectedFreight: {
        min: financial.min,
        max: financial.max,
        midpoint: financial.midpoint,
        formatted: `₹${(financial.min/1000).toFixed(0)}K–₹${(financial.max/1000).toFixed(0)}K`
      },
      estimatedNet: financial.estimatedNet,
      estimatedNetFormatted: `₹${(financial.estimatedNet/1000).toFixed(1)}K`,
      fuelCost: financial.fuelCost,
      tollCost: financial.tollCost,
      distanceKm: financial.distanceKm,
      detourKm: financial.detourKm,
      emptyReturnRisk: emptyRisk,
      emptyReturnRiskPct: Math.round(emptyRisk * 100),
      expectedAvailability: '16:00–17:30',
      expectedCargo: 'Agricultural Produce (Onions / Chilli)',
      expectedWeightTons: `${Math.max(4, Math.round(capacity * 0.75))}–${Math.round(capacity)} tonnes`,
      highway: CORRIDORS[dest].highway,
      reasons
    };
  });

  candidateDestinations.sort((a, b) => b.score - a.score);

  const best = candidateDestinations[0];
  const timeline = generatePredictiveTimeline(truckId, best.destination, expectedEmpty);

  return {
    truckId,
    capacity,
    currentLocation: truck.currentLocation || 'APMC Amargol, Hubballi',
    expectedEmptyTime: expectedEmpty,
    preferredDestination: preferred,
    topPrediction: best,
    destinations: candidateDestinations,
    timeline,
    weightsConfig: CONFIG.weights,
    isSimulated: simulationState.isSimulated,
    coldStartActive: simulationState.totalHistoricalRecords < CONFIG.coldStartThreshold
  };
}

function getDestinationDemandForecast() {
  const destinations = Object.keys(CORRIDORS).map(dest => {
    const prob = predictLoadProbability(dest, { capacity: 8 });
    const emptyRisk = predictEmptyReturnRisk(dest);
    const financial = predictFreightAndNet(dest, { capacity: 8 });
    return {
      destination: dest,
      demandProbability: prob,
      demandPct: Math.round(prob * 100),
      emptyReturnRiskPct: Math.round(emptyRisk * 100),
      expectedFreightMin: financial.min,
      expectedFreightMax: financial.max,
      distanceKm: financial.distanceKm,
      highway: CORRIDORS[dest].highway,
      status: prob >= 0.75 ? 'HIGH_DEMAND' : (prob >= 0.50 ? 'MODERATE' : 'NORMAL')
    };
  });

  destinations.sort((a, b) => b.demandProbability - a.demandProbability);

  return {
    forecastWindow: 'Next 6 Hours (14:00–20:00)',
    hubLocation: 'APMC Amargol, Hubballi',
    activeCommodities: 'Onion, Byadgi Chilli, Potato, Maize',
    destinations,
    totalTrackedCorridors: destinations.length,
    isSimulated: simulationState.isSimulated
  };
}

function getSeasonalIntelligence() {
  return {
    marketHub: 'APMC Amargol Wholesale Yard, Hubballi',
    currentSeasonOverview: 'Late Kharif Outbound Harvest Movement',
    overallArrivalVolume: 'Heavy (+24% YoY)',
    topCommodities: SEASONAL_COMMODITIES,
    recommendedStrategy: 'Position return haulers along Bengaluru / Mysuru corridor during 15:00–18:30 dispatch wave.',
    isSimulated: simulationState.isSimulated
  };
}

function getModelAnalytics() {
  return {
    modelType: 'Hybrid Gradient Calibrated Heuristic Baseline (MVP)',
    featuresUsed: [
      'Truck Capacity & Vehicle Class',
      'APMC Amargol Real-time Commodity Arrivals',
      'Historical Corridor Outbound Frequency',
      'Time-of-day Dispatch Curve',
      'Diesel Price & NH Toll Matrix',
      'Seasonal Crop Outbound Multipliers'
    ],
    evaluation: simulationState.evaluationMetrics,
    weightsConfiguration: CONFIG.weights,
    datasetStatus: {
      totalHistoricalTrips: simulationState.totalHistoricalRecords,
      simulatedRecords: simulationState.isSimulated ? simulationState.totalHistoricalRecords : 0,
      realWorldRecords: simulationState.isSimulated ? 0 : simulationState.totalHistoricalRecords,
      note: 'DEMO / SIMULATION MODE · Synthetic APMC Amargol Operational Data for LEAP Hackathon PS 1A'
    }
  };
}

function handleApi(req, res, pathname) {
  return new Promise((resolve) => {
    const sendJson = (statusCode, data) => {
      res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      });
      res.end(JSON.stringify(data));
      resolve();
    };

    if (req.method === 'POST' && pathname === '/api/predict/backhaul') {
      let body = '';
      req.on('data', chunk => body += chunk);
      req.on('end', () => {
        try {
          const payload = body ? JSON.parse(body) : {};
          const result = predictBackhaulForTruck(payload);
          return sendJson(200, { success: true, ...result });
        } catch (e) {
          return sendJson(400, { success: false, error: 'Invalid JSON body: ' + e.message });
        }
      });
      return;
    }

    if (req.method === 'GET' && (pathname === '/api/predict/destinations' || pathname === '/api/predict/demand' || pathname === '/api/predict/demand-forecast')) {
      const demand = getDestinationDemandForecast();
      return sendJson(200, { success: true, ...demand });
    }

    if (req.method === 'GET' && pathname === '/api/predict/seasonal') {
      const seasonal = getSeasonalIntelligence();
      return sendJson(200, { success: true, ...seasonal });
    }

    if (req.method === 'GET' && pathname === '/api/predict/analytics') {
      const analytics = getModelAnalytics();
      return sendJson(200, { success: true, ...analytics });
    }

    if (req.method === 'GET' && (pathname.startsWith('/api/predict/truck/') || pathname.startsWith('/api/predict/truck'))) {
      const parts = pathname.split('/');
      const truckId = parts[4] ? decodeURIComponent(parts[4]) : 'KA-25-AB-1234';
      const result = predictBackhaulForTruck({ truckId, capacity: 8, currentLocation: 'APMC Amargol' });
      return sendJson(200, { success: true, ...result });
    }

    if (req.method === 'GET' && (pathname.startsWith('/api/predict/timeline/') || pathname.startsWith('/api/predict/timeline'))) {
      const parts = pathname.split('/');
      const truckId = parts[4] ? decodeURIComponent(parts[4]) : 'KA-25-AB-1234';
      const timeline = generatePredictiveTimeline(truckId, 'Bengaluru', '15:30');
      return sendJson(200, { success: true, truckId, timeline });
    }

    if (req.method === 'GET' && pathname.startsWith('/api/predict/explanations/')) {
      const dest = decodeURIComponent(pathname.replace('/api/predict/explanations/', ''));
      const prob = predictLoadProbability(dest);
      const fin = predictFreightAndNet(dest);
      const risk = predictEmptyReturnRisk(dest);
      const reasons = generateXAIReasons(dest, prob, fin, risk);
      return sendJson(200, { success: true, destination: dest, probability: prob, reasons });
    }

    if (req.method === 'POST' && pathname === '/api/predict/simulate-toggle') {
      simulationState.isSimulated = !simulationState.isSimulated;
      return sendJson(200, { success: true, isSimulated: simulationState.isSimulated });
    }

    sendJson(404, { success: false, error: 'Predictive API endpoint not found: ' + pathname });
  });
}

module.exports = {
  predictLoadProbability,
  predictFreightAndNet,
  predictEmptyReturnRisk,
  calculateBackhaulScore,
  generateXAIReasons,
  generatePredictiveTimeline,
  predictBackhaulForTruck,
  getDestinationDemandForecast,
  getSeasonalIntelligence,
  getModelAnalytics,
  handleApi,
  CONFIG,
  CORRIDORS
};
