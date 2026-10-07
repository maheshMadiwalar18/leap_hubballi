const I18N = {
  en: {
    'nav.dashboard': 'Dashboard', 'nav.saarathi': '🚚 Saarathi AI', 'nav.matcher': 'Matcher', 'nav.trucks': 'My trucks', 'nav.history': 'Trip history',
    'nav.myloads': 'My loads', 'nav.postLoad': 'Post load', 'nav.loadsBoard': 'Loads board',
    'nav.bellAria': 'Notifications', 'nav.notifications': 'Notifications', 'nav.markRead': 'Mark all read', 'nav.signOut': 'Sign out',
    'status.Available': 'Available', 'status.Returning empty': 'Returning empty', 'status.On trip': 'On trip',
    'status.Open': 'Open', 'status.Matched': 'Matched', 'status.In transit': 'In transit', 'status.Delivered': 'Delivered', 'status.Cancelled': 'Cancelled',
    'role.transporter': 'Transporter', 'role.cargo_owner': 'Cargo owner', 'role.operator': 'Broker-free operator',
    'hero.sub': 'Turn empty return trips into profitable journeys.',
    'hero.ps': 'Built for APMC Amargol, Hubballi: when a truck unloads, find its return load in seconds, at a price everyone can see.',
    'kpi.trips': 'Trips completed', 'kpi.emptyKm': 'Empty km avoided', 'kpi.fuel': 'Fuel saved (L)', 'kpi.earn': 'Total extra earnings', 'kpi.util': 'Avg truck utilization',
    'kpi.active': 'Active loads', 'kpi.matched': 'Matched loads', 'kpi.saved': 'Est. money saved',
    'kpi.deals': 'Deals closed', 'kpi.matchRate': 'Overall match rate', 'kpi.board': 'Loads on board',
    'act.noLoad': 'No active load.<br>Open <b>My trucks</b>, press <b>Find return load</b>, then accept a match.',
    'act.cargo': 'Cargo', 'act.truck': 'Truck', 'act.price': 'Price', 'act.deadline': 'Pickup deadline',
    'act.mark': 'Mark as', 'act.demo': '[DEMO] Simulate delivery', 'act.find': 'Find return load', 'act.markDel': 'Mark delivered',
    'table.reg': 'Reg no.', 'table.type': 'Type', 'table.cap': 'Capacity', 'table.status': 'Status',
    'table.route': 'Route', 'table.cargo': 'Cargo', 'table.weight': 'Weight', 'table.price': 'Your price', 'table.fair': 'vs fair', 'table.actions': 'Actions',
    'table.date': 'Date', 'table.earn': 'Earnings', 'table.km': 'Empty km avoided', 'table.fuelL': 'Fuel saved', 'table.util': 'Utilization',
    'th.fairRate': 'Fair rate',
    'hint.owner': 'Money saved assumes a typical 15% broker commission on every matched load. Advance (demo) simulates the carrier moving the load along.',
    'hint.operator': 'Closing a deal here connects both sides directly, with no broker commission.',
    'hint.noTrips': 'No trips match these filters.', 'hint.noDeals': 'No recent deals.', 'hint.emptyBoard': 'Board is empty.',
    'form.reg': 'Reg number', 'form.type': 'Type', 'form.cap': 'Capacity (t)', 'form.addTruck': 'Add truck',
    'form.pick': 'Pickup location', 'form.drop': 'Delivery location', 'form.weight': 'Cargo weight (t)', 'form.cargoType': 'Cargo type', 'form.dead': 'Pickup deadline', 'form.offer': 'Offered price (₹)', 'form.postBtn': 'Post Load',
    'filter.status': 'Status', 'filter.all': 'All', 'filter.from': 'From', 'filter.to': 'To', 'filter.sort': 'Sort by',
    'sort.new': 'Newest first', 'sort.high': 'Earnings: high to low', 'sort.low': 'Earnings: low to high',
    'alert.low': 'Low-margin opportunity', 'alert.return': 'Return trip alert',
    'alert.find': 'Find load', 'alert.later': 'Remind me later', 'alert.dismiss': 'Dismiss',
    'alert.availCap': 'Available capacity', 'alert.loads': 'return loads available', 'alert.route': 'Route', 'alert.match': 'Match', 'alert.est': 'Estimated profit', 'alert.break': 'Break-even',
    'match.findBtn': 'Find Best Return Loads', 'match.finding': 'Matching loads…', 'match.noFind': 'No loads match exactly. Expand your search or check again later.', 'match.score': 'Best match',
    'match.why': 'Why this match?', 'match.btnAccept': 'Accept Load', 'match.accepted': 'Matched', 'match.close': 'Close panel',
    'match.option': 'Option {n}', 'match.cargo': 'Cargo', 'match.weight': 'Weight', 'match.detour': 'Detour', 'match.revenue': 'Revenue',
    'match.fuelSaving': 'Fuel saving', 'match.reachPickup': 'Reach pickup', 'match.hideExp': 'Hide explanation', 'match.whyHeadline': 'Why this is the best match',
    'match.voice': 'Voice brief 🔊',
    'auth.titleLogin': 'Welcome back', 'auth.nameHolder': 'Full name', 'auth.emailHolder': 'Email', 'auth.passHolder': 'Password',
    'auth.loginBtn': 'Log in', 'auth.or': 'or', 'auth.googleBtn': 'Continue with Google', 'auth.noAccount': "Don't have an account?",
    'auth.forgotBtn': 'Forgot password?', 'auth.offlineBtn': 'Continue offline in demo mode',
    'prof.title': 'Choose your role', 'prof.nameLabel': 'Your name / company', 'prof.nameHolder': 'e.g. Ramesh Patil',
    'prof.roleLabel': 'I am a', 'prof.roleSelect': 'Select a role…', 'prof.roleTransporter': 'Transporter', 'prof.roleCargo': 'Cargo owner', 'prof.roleOperator': 'Broker-free operator',
    'prof.cityLabel': 'Base location (optional)', 'prof.cityHolder': 'e.g. Hubballi', 'prof.hint': 'Your role is fixed for this session. To use another role, sign out and sign in again.',
    'prof.submit': 'Open my dashboard', 'prof.demoOr': 'or one-click demo', 'prof.demoRamesh': 'Ramesh Patil<small>Transporter · Hubballi</small>',
    'prof.demoKisan': 'Kisan Agro Traders<small>Cargo owner · Amargol APMC</small>', 'prof.demoYard': 'Amargol Yard Desk<small>Operator · Amargol APMC</small>', 'prof.backBtn': 'Back to sign-in',
    'nav.future_planner': '🔮 Predictive Backhaul', 'nav.plan_future': '🌱 Plan Future Shipment',
    'title.predBackhaul': 'Predictive Backhaul Opportunities', 'title.futureTrips': 'My Planned Forward Trips',
    'title.watchlist': 'Predictive Route Watchlist', 'btn.planTrip': '➕ Plan Forward Trip',
    'btn.watchLoad': '👁️ Watch Load', 'btn.reserveInterest': '⚡ Reserve Interest', 'btn.viewMapRoute': '🗺️ View Map Route',
    'horizon.7d': 'Next 7 Days', 'horizon.14d': 'Next 14 Days', 'horizon.30d': 'Next 30 Days',
    'pred.kpiAvoided': 'Est. Empty Km Avoided', 'pred.kpiFuel': 'Est. Fuel Saved', 'pred.kpiRevenue': 'Est. Extra Revenue',
    'pred.kpiMatchRate': 'Avg. Predictive Score', 'pred.riskTitle': 'Empty Return Risk Reduction',
    'pred.riskLoaded': 'Loaded Return', 'pred.riskEmpty': 'Empty Return',
    'pred.cropPlanned': 'Crop / Cargo Planned', 'pred.forwardTrip': 'Forward Journey', 'pred.availIn': 'Available in',
    'pred.predictedReturn': 'Predicted Return Load', 'pred.loadedReturn': 'Loaded Return',
    't.Medium Cargo': 'Medium Cargo', 't.Open Body': 'Open Body', 't.Container': 'Container', 't.Refrigerated': 'Refrigerated',
    'title.trucks': 'My trucks', 'title.history': 'Trip history', 'title.myloads': 'My loads', 'title.post': 'Post a return load', 'title.deals': 'Recent deals', 'title.board': 'Open load board',
    'title.active': 'Active match', 'title.chart': 'Last 6 weeks: earnings and empty km avoided',
    'chart.earn': 'Earnings (₹)', 'chart.km': 'Empty km avoided',
    'driver.toggle': 'Driver Mode 🚚'
  },
  kn: {
    'nav.dashboard': 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', 'nav.saarathi': '🚚 ಸಾರಥಿ AI', 'nav.matcher': 'ಹಿಂತಿರುಗುವ ಸರಕು ಹೊಂದಾಣಿಕೆ', 'nav.trucks': 'ನನ್ನ ಟ್ರಕ್‌ಗಳು', 'nav.history': 'ಪ್ರಯಾಣದ ಇತಿಹಾಸ',
    'nav.myloads': 'ನನ್ನ ಲೋಡ್‌ಗಳು', 'nav.postLoad': 'ಲೋಡ್ ಸೇರಿಸಿ', 'nav.loadsBoard': 'ಲೋಡ್‌ಗಳ ಬೋರ್ಡ್',
    'nav.bellAria': 'ಸೂಚನೆಗಳು', 'nav.notifications': 'ಸೂಚನೆಗಳು', 'nav.markRead': 'ಎಲ್ಲವನ್ನೂ ಓದಿದ್ದು ಎಂದು ಗುರುತಿಸಿ', 'nav.signOut': 'ನಿರ್ಗಮಿಸಿ',
    'status.Available': 'ಲಭ್ಯವಿದೆ', 'status.Returning empty': 'ಖಾಲಿ ಹಿಂದಿರುಗುತ್ತಿದೆ', 'status.On trip': 'ಪ್ರಯಾಣದಲ್ಲಿದೆ',
    'status.Open': 'ತೆರೆದಿದೆ', 'status.Matched': 'ಹೊಂದಾಣಿಕೆಯಾಗಿದೆ', 'status.In transit': 'ಸಾಗಣೆಯಲ್ಲಿದೆ', 'status.Delivered': 'ತಲುಪಿಸಲಾಗಿದೆ', 'status.Cancelled': 'ರದ್ದಾಗಿದೆ',
    'role.transporter': 'ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟರ್', 'role.cargo_owner': 'ಸರಕು ಮಾಲೀಕ', 'role.operator': 'ಆಪರೇಟರ್ (ದಲ್ಲಾಳಿ ರಹಿತ)',
    'hero.sub': 'ಖಾಲಿ ಹಿಂದಿರುಗುವ ಪ್ರಯಾಣವನ್ನು ಲಾಭದಾಯಕವನ್ನಾಗಿ ಮಾಡಿ.',
    'hero.ps': 'ಎಪಿಎಂಸಿ ಅಮರಗೋಳ, ಹುಬ್ಬಳ್ಳಿ: ಟ್ರಕ್ ಅನ್‌ಲೋಡ್ ಆದ ತಕ್ಷಣ, ಪಾರದರ್ಶಕ ದರದಲ್ಲಿ ವಾಪಸ್ ಲೋಡ್ ಹುಡುಕಿ.',
    'kpi.trips': 'ಪೂರ್ಣಗೊಂಡ ಟ್ರಿಪ್‌ಗಳು', 'kpi.emptyKm': 'ತಪ್ಪಿಸಿದ ಖಾಲಿ ಕಿ.ಮೀ', 'kpi.fuel': 'ಉಳಿಸಿದ ಇಂಧನ (ಲೀ)', 'kpi.earn': 'ಒಟ್ಟು ಹೆಚ್ಚುವರಿ ಸಂಪಾದನೆ', 'kpi.util': 'ಸರಾಸರಿ ಟ್ರಕ್ ಬಳಕೆ',
    'kpi.active': 'ಸಕ್ರಿಯ ಲೋಡ್‌ಗಳು', 'kpi.matched': 'ಹೊಂದಾಣಿಕೆಯಾದ ಲೋಡ್‌ಗಳು', 'kpi.saved': 'ಉಳಿಸಿದ ಹಣ',
    'kpi.deals': 'ಮುಕ್ತಾಯಗೊಂಡ ಡೀಲ್‌ಗಳು', 'kpi.matchRate': 'ಒಟ್ಟು ಹೊಂದಾಣಿಕೆ ದರ', 'kpi.board': 'ಬೋರ್ಡ್‌ನಲ್ಲಿರುವ ಲೋಡ್‌ಗಳು',
    'act.noLoad': 'ಯಾವುದೇ ಸಕ್ರಿಯ ಲೋಡ್ ಇಲ್ಲ.<br><b>ನನ್ನ ಟ್ರಕ್‌ಗಳು</b> ತೆರೆಯಿರಿ, <b>ಲೋಡ್ ಹುಡುಕಿ</b> ಒತ್ತಿರಿ, ನಂತರ ಹೊಂದಾಣಿಕೆಯನ್ನು ಒಪ್ಪಿಕೊಳ್ಳಿ.',
    'act.cargo': 'ಸರಕು', 'act.truck': 'ಟ್ರಕ್', 'act.price': 'ಬೆಲೆ', 'act.deadline': 'ಕೊನೆಯ ಸಮಯ',
    'act.mark': 'ಹೀಗೆ ಗುರುತಿಸಿ', 'act.demo': '[DEMO] ತಲುಪಿದ್ದನ್ನು ಸಿಮ್ಯುಲೇಟ್ ಮಾಡಿ', 'act.find': 'ಲೋಡ್ ಹುಡುಕಿ', 'act.markDel': 'ತಲುಪಿಸಲಾಗಿದೆ ಎಂದು ಗುರುತಿಸಿ',
    'table.reg': 'ನೋಂದಣಿ ಸಂಖ್ಯೆ', 'table.type': 'ವಿಧ', 'table.cap': 'ಸಾಮರ್ಥ್ಯ', 'table.status': 'ಸ್ಥಿತಿ',
    'table.route': 'ಮಾರ್ಗ', 'table.cargo': 'ಸರಕು', 'table.weight': 'ತೂಕ', 'table.price': 'ನಿಮ್ಮ ಬೆಲೆ', 'table.fair': 'ನ್ಯಾಯಯುತ ದರಕ್ಕೆ ಹೋಲಿಕೆ', 'table.actions': 'ಕ್ರಮಗಳು',
    'table.date': 'ದಿನಾಂಕ', 'table.earn': 'ಸಂಪಾದನೆ', 'table.km': 'ತಪ್ಪಿಸಿದ ಖಾಲಿ ಕಿ.ಮೀ', 'table.fuelL': 'ಉಳಿಸಿದ ಇಂಧನ', 'table.util': 'ಬಳಕೆ',
    'th.fairRate': 'ನ್ಯಾಯಯುತ ದರ',
    'hint.owner': 'ಪ್ರತಿ ಹೊಂದಾಣಿಕೆಯಾದ ಲೋಡ್‌ಗೆ ದಲ್ಲಾಳಿಗಳ 15% ಕಮಿಷನ್ ಉಳಿತಾಯವನ್ನು ಅಂದಾಜಿಸಲಾಗಿದೆ.',
    'hint.operator': 'ಇಲ್ಲಿ ಡೀಲ್ ಮುಕ್ತಾಯಗೊಳಿಸುವುದರಿಂದ ಎರಡೂ ಕಡೆ ನೇರ ಸಂಪರ್ಕ ಕಲ್ಪಿಸಲಾಗುತ್ತದೆ, ದಲ್ಲಾಳಿ ಕಮಿಷನ್ ಇರುವುದಿಲ್ಲ.',
    'hint.noTrips': 'ಈ ಫಿಲ್ಟರ್‌ಗಳಿಗೆ ಯಾವುದೇ ಟ್ರಿಪ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ.', 'hint.noDeals': 'ಇತ್ತೀಚಿನ ಯಾವುದೇ ಡೀಲ್‌ಗಳಿಲ್ಲ.', 'hint.emptyBoard': 'ಬೋರ್ಡ್ ಖಾಲಿಯಾಗಿದೆ.',
    'form.reg': 'ನೋಂದಣಿ ಸಂಖ್ಯೆ', 'form.type': 'ವಿಧ', 'form.cap': 'ಸಾಮರ್ಥ್ಯ (ಟನ್)', 'form.addTruck': 'ಟ್ರಕ್ ಸೇರಿಸಿ',
    'form.pick': 'ಲೋಡ್ ತೆಗೆದುಕೊಳ್ಳುವ ಸ್ಥಳ', 'form.drop': 'ತಲುಪುವ ಸ್ಥಳ', 'form.weight': 'ಸರಕು ತೂಕ (ಟನ್)', 'form.cargoType': 'ಸರಕು ವಿಧ', 'form.dead': 'ಕೊನೆಯ ಸಮಯ', 'form.offer': 'ನೀಡುವ ಬೆಲೆ (₹)', 'form.postBtn': 'ಲೋಡ್ ಪೋಸ್ಟ್ ಮಾಡಿ',
    'filter.status': 'ಸ್ಥಿತಿ', 'filter.all': 'ಎಲ್ಲಾ', 'filter.from': 'ಇಲ್ಲಿಂದ', 'filter.to': 'ಇಲ್ಲಿಗೆ', 'filter.sort': 'ಹೀಗೆ ವಿಂಗಡಿಸಿ',
    'sort.new': 'ಹೊಸದು ಮೊದಲು', 'sort.high': 'ಸಂಪಾದನೆ: ಹೆಚ್ಚು ಇಂದ ಕಡಿಮೆ', 'sort.low': 'ಸಂಪಾದನೆ: ಕಡಿಮೆ ಇಂದ ಹೆಚ್ಚು',
    'alert.low': 'ಕಡಿಮೆ ಲಾಭದ ಅವಕಾಶ', 'alert.return': 'ವಾಪಸ್ ಪ್ರಯಾಣ ಅಲರ್ಟ್',
    'alert.find': 'ಲೋಡ್ ಹುಡುಕಿ', 'alert.later': 'ಆಮೇಲೆ ನೆನಪಿಸಿ', 'alert.dismiss': 'ತೆಗೆದುಹಾಕಿ',
    'alert.availCap': 'ಲಭ್ಯವಿರುವ ಸಾಮರ್ಥ್ಯ', 'alert.loads': 'ವಾಪಸ್ ಲೋಡ್‌ಗಳು ಲಭ್ಯವಿದೆ', 'alert.route': 'ಮಾರ್ಗ', 'alert.match': 'ಹೊಂದಾಣಿಕೆ', 'alert.est': 'ಅಂದಾಜು ಲಾಭ', 'alert.break': 'ಬ್ರೇಕ್-ಈವನ್',
    'match.findBtn': 'ಹಿಂತಿರುಗುವ ಸರಕು ಹುಡುಕಿ', 'match.finding': 'ಸರಕು ಹೊಂದಿಸಲಾಗುತ್ತಿದೆ…', 'match.noFind': 'ಯಾವುದೇ ಲೋಡ್‌ಗಳು ನಿಖರವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ. ನಿಮ್ಮ ಹುಡುಕಾಟವನ್ನು ವಿಸ್ತರಿಸಿ.', 'match.score': 'ಉತ್ತಮ ಹೊಂದಾಣಿಕೆ',
    'match.why': 'ಈ ಹೊಂದಾಣಿಕೆ ಏಕೆ?', 'match.btnAccept': 'ಸರಕು ಸ್ವೀಕರಿಸಿ', 'match.accepted': 'ಹೊಂದಾಣಿಕೆಯಾಗಿದೆ', 'match.close': 'ಪ್ಯಾನಲ್ ಮುಚ್ಚಿ',
    'match.option': 'ಆಯ್ಕೆ {n}', 'match.cargo': 'ಸರಕು', 'match.weight': 'ತೂಕ', 'match.detour': 'ಹೆಚ್ಚುವರಿ ದೂರ', 'match.revenue': 'ಆದಾಯ',
    'match.fuelSaving': 'ಉಳಿಸಿದ ಇಂಧನ', 'match.reachPickup': 'ಲೋಡ್ ತಲುಪುವ ಸಮಯ', 'match.hideExp': 'ವಿವರಣೆ ಮುಚ್ಚಿ', 'match.whyHeadline': 'ಇದು ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆ ಏಕೆಂದರೆ',
    'match.voice': 'ಧ್ವನಿ ವಿವರಣೆ 🔊',
    'auth.titleLogin': 'ಸ್ವಾಗತ', 'auth.nameHolder': 'ಪೂರ್ಣ ಹೆಸರು', 'auth.emailHolder': 'ಇಮೇಲ್', 'auth.passHolder': 'ಪಾಸ್‌ವರ್ಡ್',
    'auth.loginBtn': 'ಲಾಗಿನ್ ಮಾಡಿ', 'auth.or': 'ಅಥವಾ', 'auth.googleBtn': 'ಗೂಗಲ್ ಮೂಲಕ ಮುಂದುವರಿಯಿರಿ', 'auth.noAccount': 'ಖಾತೆ ಇಲ್ಲವೇ?',
    'auth.forgotBtn': 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿದ್ದೀರಾ?', 'auth.offlineBtn': 'ಡೆಮೊ ಮೋಡ್‌ನಲ್ಲಿ ಮುಂದುವರಿಯಿರಿ',
    'prof.title': 'ನಿಮ್ಮ ಪಾತ್ರವನ್ನು ಆಯ್ಕೆಮಾಡಿ', 'prof.nameLabel': 'ನಿಮ್ಮ ಹೆಸರು / ಸಂಸ್ಥೆ', 'prof.nameHolder': 'ಉದಾ: ರಮೇಶ್ ಪಾಟೀಲ್',
    'prof.roleLabel': 'ನಾನು', 'prof.roleSelect': 'ಪಾತ್ರ ಆಯ್ಕೆಮಾಡಿ…', 'prof.roleTransporter': 'ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟರ್', 'prof.roleCargo': 'ಸರಕು ಮಾಲೀಕ', 'prof.roleOperator': 'ಆಪರೇಟರ್ (ದಲ್ಲಾಳಿ ರಹಿತ)',
    'prof.cityLabel': 'ಮೂಲ ಸ್ಥಳ (ಐಚ್ಛಿಕ)', 'prof.cityHolder': 'ಉದಾ: ಹುಬ್ಬಳ್ಳಿ', 'prof.hint': 'ನಿಮ್ಮ ಪಾತ್ರವು ಈ ಸೆಷನ್‌ಗೆ ಸ್ಥಿರವಾಗಿರುತ್ತದೆ.',
    'prof.submit': 'ನನ್ನ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ತೆರೆಯಿರಿ', 'prof.demoOr': 'ಅಥವಾ ಒಂದು ಕ್ಲಿಕ್ ಡೆಮೊ', 'prof.demoRamesh': 'ರಮೇಶ್ ಪಾಟೀಲ್<small>ಟ್ರಾನ್ಸ್‌ಪೋರ್ಟರ್ · ಹುಬ್ಬಳ್ಳಿ</small>',
    'prof.demoKisan': 'ಕಿಸಾನ್ ಆಗ್ರೋ ಟ್ರೇಡರ್ಸ್<small>ಸರಕು ಮಾಲೀಕ · ಅಮರಗೋಳ ಎಪಿಎಂಸಿ</small>', 'prof.demoYard': 'ಅಮರಗೋಳ ಯಾರ್ಡ್ ಡೆಸ್ಕ್<small>ಆಪರೇಟರ್ · ಅಮರಗೋಳ ಎಪಿಎಂಸಿ</small>', 'prof.backBtn': 'ಲಾಗಿನ್‌ಗೆ ಹಿಂತಿರುಗಿ',
    't.Medium Cargo': 'ಮಧ್ಯಮ ಸರಕು', 't.Open Body': 'ತೆರೆದ ಬಾಡಿ', 't.Container': 'ಕಂಟೇನರ್', 't.Refrigerated': 'ಶೈತ್ಯೀಕರಿಸಿದ',
    'title.trucks': 'ನನ್ನ ಟ್ರಕ್‌ಗಳು', 'title.history': 'ಪ್ರಯಾಣದ ಇತಿಹಾಸ', 'title.myloads': 'ನನ್ನ ಲೋಡ್‌ಗಳು', 'title.post': 'ವಾಪಸ್ ಲೋಡ್ ಪೋಸ್ಟ್ ಮಾಡಿ', 'title.deals': 'ಇತ್ತೀಚಿನ ಡೀಲ್‌ಗಳು', 'title.board': 'ತೆರೆದ ಲೋಡ್ ಬೋರ್ಡ್',
    'title.active': 'ಸಕ್ರಿಯ ಹೊಂದಾಣಿಕೆ', 'title.chart': 'ಕಳೆದ 6 ವಾರಗಳು: ಸಂಪಾದನೆ ಮತ್ತು ತಪ್ಪಿಸಿದ ಖಾಲಿ ಕಿ.ಮೀ',
    'chart.earn': 'ಸಂಪಾದನೆ (₹)', 'chart.km': 'ತಪ್ಪಿಸಿದ ಖಾಲಿ ಕಿ.ಮೀ',
    'driver.toggle': 'ಚಾಲಕ ಮೋಡ್ 🚚'
  }
};

const CITY_KN = {
  'APMC Amargol': 'ಅಮರಗೋಳ ಎಪಿಎಂಸಿ',
  'Hubballi': 'ಹುಬ್ಬಳ್ಳಿ', 'Dharwad': 'ಧಾರವಾಡ', 'Belagavi': 'ಬೆಳಗಾವಿ', 'Bengaluru': 'ಬೆಂಗಳೂರು',
  'Gadag': 'ಗದಗ', 'Haveri': 'ಹಾವೇರಿ', 'Davangere': 'ದಾವಣಗೆರೆ', 'Chitradurga': 'ಚಿತ್ರದುರ್ಗ',
  'Tumakuru': 'ತುಮಕೂರು', 'Mysuru': 'ಮೈಸೂರು', 'Shivamogga': 'ಶಿವಮೊಗ್ಗ', 'Hosapete': 'ಹೊಸಪೇಟೆ',
  'Ranebennur': 'ರಾಣೆಬೆನ್ನೂರು', 'Hiriyur': 'ಹಿರಿಯೂರು', 'Vijayapura': 'ವಿಜಯಪುರ', 'Amargol APMC': 'ಅಮರಗೋಳ ಎಪಿಎಂಸಿ',
  'Amargol APMC, Hubballi': 'ಅಮರಗೋಳ ಎಪಿಎಂಸಿ, ಹುಬ್ಬಳ್ಳಿ'
};
const CARGO_KN = {
  'Onion': 'ಈರುಳ್ಳಿ',
  'Potato': 'ಆಲೂಗಡ್ಡೆ',
  'Chilli': 'ಮೆಣಸಿನಕಾಯಿ',
  'Byadgi Chilli': 'ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ',
  'Cotton': 'ಹತ್ತಿ',
  'Onions': 'ಈರುಳ್ಳಿ', 'Cotton bales': 'ಹತ್ತಿ ಗಂಟುಗಳು', 'Maize': 'ಮೆಕ್ಕೆಜೋಳ', 'Groundnut': 'ಶೇಂಗಾ',
  'Jaggery': 'ಬೆಲ್ಲ', 'Areca nut': 'ಅಡಿಕೆ', 'Electronics': 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್', 'FMCG Goods': 'ಎಫ್‌ಎಂಸಿಜಿ ಸರಕುಗಳು',
  'Textiles': 'ಜವಳಿ', 'Spices': 'ಮಸಾಲೆಗಳು', 'Fertilizer': 'ಗೊಬ್ಬರ', 'Steel Pipes': 'ಸ್ಟೀಲ್ ಪೈಪ್‌ಗಳು', 'Rice bags': 'ಅಕ್ಕಿ ಚೀಲಗಳು',
  'Agricultural produce': 'ಕೃಷಿ ಉತ್ಪನ್ನ', 'Machinery': 'ಯಂತ್ರೋಪಕರಣಗಳು', 'Auto parts': 'ಆಟೋ ಬಿಡಿಭಾಗಗಳು', 'Maize bags': 'ಮೆಕ್ಕೆಜೋಳದ ಚೀಲಗಳು',
  'Steel coils': 'ಸ್ಟೀಲ್ ಕಾಯಿಲ್‌ಗಳು', 'Groundnut oil': 'ಶೇಂಗಾ ಎಣ್ಣೆ', 'Cement bags': 'ಸಿಮೆಂಟ್ ಚೀಲಗಳು', 'Pharma boxes': 'ಔಷಧ ಪೆಟ್ಟಿಗೆಗಳು',
  'Grapes (cold chain)': 'ದ್ರಾಕ್ಷಿ (ಶೀತಲ ಸರಪಳಿ)', 'Dry chilli': 'ಒಣ ಮೆಣಸಿನಕಾಯಿ'
};

let LANG = window.localStorage.getItem('bh_lang') || (navigator.language.startsWith('kn') ? 'kn' : 'en');
let DRIVER_MODE = window.localStorage.getItem('bh_driver_mode') === 'true';
let SHOW_KN_DIGITS = false;

function t(key, vars = {}) {
  const normKey = key === 'Transporter' ? 'role.transporter' :
                  key === 'Cargo owner' ? 'role.cargo_owner' :
                  key === 'Broker-free operator' ? 'role.operator' : key;
  let str = I18N[LANG] && I18N[LANG][normKey] ? I18N[LANG][normKey] : (I18N['en'][normKey] || key);
  for (const k in vars) str = str.replace(new RegExp('{' + k + '}', 'g'), vars[k]);
  return str;
}

const knDigits = ['೦','೧','೨','೩','೪','೫','೬','೭','೮','೯'];
function tn(n) {
  let s = Number(n).toLocaleString('en-IN');
  if (LANG === 'kn' && SHOW_KN_DIGITS) s = s.replace(/\d/g, d => knDigits[d]);
  return s;
}

function cityName(c) {
  if (LANG === 'kn' && CITY_KN[c]) return CITY_KN[c];
  return c;
}
function cargoName(c) {
  if (LANG === 'kn' && CARGO_KN[c]) return CARGO_KN[c];
  return c;
}

function setLang(lang) {
  if (lang !== 'en' && lang !== 'kn') return;
  LANG = lang;
  window.localStorage.setItem('bh_lang', lang);
  document.documentElement.lang = lang;
  applyStaticI18n();
  buildNav();
  if (currentView) {
    const inputs = {};
    document.querySelectorAll('#viewRoot input, #viewRoot select').forEach(el => {
      if (el.id) inputs[el.id] = el.value;
    });
    
    if (currentView.endsWith('/matcher')) {
      $('viewRoot').innerHTML = TEMPLATES[currentView]();
      initMatcher();
      if (lastResults.length) renderMatches(readTruckQuiet() || { cap: 10, avail: 6 }, lastResults);
    } else {
      showView(currentView, { fromHistory: true });
    }
    
    document.querySelectorAll('#viewRoot input, #viewRoot select').forEach(el => {
      if (el.id && inputs[el.id] !== undefined) el.value = inputs[el.id];
    });
  }
}

function toggleDriverMode() {
  DRIVER_MODE = !DRIVER_MODE;
  window.localStorage.setItem('bh_driver_mode', DRIVER_MODE);
  applyDriverMode();
}

function applyDriverMode() {
  document.body.classList.toggle('driver-mode', DRIVER_MODE);
  document.querySelectorAll('.driver-toggle').forEach(b => {
    b.setAttribute('aria-pressed', DRIVER_MODE);
    b.innerHTML = (DRIVER_MODE ? '✓ ' : '') + t('driver.toggle');
  });
}

function applyStaticI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  
  const ui = `<div class="lang-toggle" role="group" aria-label="Language / ಭಾಷೆ"><button type="button" aria-pressed="${LANG==='en'}" onclick="setLang('en')" aria-label="English">EN</button><button type="button" aria-pressed="${LANG==='kn'}" onclick="setLang('kn')" aria-label="ಕನ್ನಡ">ಕನ್ನಡ</button></div><button type="button" class="driver-toggle" onclick="toggleDriverMode()" aria-pressed="${DRIVER_MODE}">${t('driver.toggle')}</button>`;
  const ub = document.getElementById('ubLang'), al = document.getElementById('authLang'), pl = document.getElementById('profileLang');
  if (ub) ub.innerHTML = ui; if (al) al.innerHTML = ui; if (pl) pl.innerHTML = ui;
  
  if ($('cities')) {
    $('cities').innerHTML = Object.keys(CITIES).map(c => `<option value="${c}">${cityName(c)}</option>`).join('');
  }
  applyDriverMode();
}
window.addEventListener('DOMContentLoaded', () => applyStaticI18n());

window.$ = id => document.getElementById(id);
const $ = window.$;

const CITIES = {
  'Amargol APMC, Hubballi': [15.3905, 75.0586], Hubballi: [15.3647, 75.124], Dharwad: [15.4589, 75.0078],
  Gadag: [15.4166, 75.6297], Belagavi: [15.8497, 74.4977], Haveri: [14.7951, 75.4047],
  Davangere: [14.4644, 75.9218], Chitradurga: [14.2251, 76.398], Tumakuru: [13.3379, 77.1173], Bengaluru: [12.9716, 77.5946],
  Ranebennur: [14.6190, 75.6300], Hosapete: [15.2689, 76.3909], Shivamogga: [13.9299, 75.5681], Hiriyur: [13.9453, 76.6178],
  Mysuru: [12.2958, 76.6394], Vijayapura: [16.8302, 75.7100]
};
const ROAD = 1.25, DIESEL_L_PER_KM = 0.30, DIESEL_PRICE = 92, SPEED = 45, RATE_PER_KM = 28;
const TOLL_PER_KM = 1.2, DRIVER_BASE = 600, DRIVER_PER_KM = 2; // Demo constants for profit estimate

let loads = [
  { id: 1, from: 'APMC Amargol', to: 'Bengaluru', weight: 7.2, type: 'Onion', deadline: '20:00', price: 18500 },
  { id: 2, from: 'APMC Amargol', to: 'Mysuru', weight: 6.0, type: 'Potato', deadline: '21:00', price: 16000 },
  { id: 3, from: 'APMC Amargol', to: 'Belagavi', weight: 8.0, type: 'Byadgi Chilli', deadline: '22:30', price: 19500 },
  { id: 4, from: 'APMC Amargol', to: 'Bengaluru', weight: 9.0, type: 'Cotton bales', deadline: '21:30', price: 22000 },
  { id: 5, from: 'APMC Amargol', to: 'Davangere', weight: 5.0, type: 'Maize bags', deadline: '23:00', price: 11500 },
  { id: 6, from: 'APMC Amargol', to: 'Chitradurga', weight: 6.5, type: 'Groundnut', deadline: '22:00', price: 15500 },
  { id: 7, from: 'Hubballi', to: 'Bengaluru', weight: 8.0, type: 'Agricultural produce', deadline: '20:30', price: 19000 },
  { id: 8, from: 'Dharwad', to: 'Bengaluru', weight: 4.5, type: 'Textiles', deadline: '21:00', price: 14500 },
  { id: 9, from: 'Gadag', to: 'Bengaluru', weight: 7.0, type: 'Machinery', deadline: '22:00', price: 21000 },
  { id: 10, from: 'Bengaluru', to: 'Hubballi', weight: 3.5, type: 'Auto parts', deadline: '19:30', price: 12500 },
  { id: 11, from: 'Shivamogga', to: 'Bengaluru', weight: 5.0, type: 'Areca nut', deadline: '23:59', price: 17500 },
  { id: 12, from: 'Dharwad', to: 'Bengaluru', weight: 9.0, type: 'Cement bags', deadline: '21:00', price: 22000 },
  { id: 13, from: 'Hubballi', to: 'Mysuru', weight: 4.0, type: 'Pharma boxes', deadline: '21:30', price: 16000 },
  { id: 14, from: 'Vijayapura', to: 'Bengaluru', weight: 5.0, type: 'Grapes (cold chain)', deadline: '19:00', price: 19000 },
  { id: 15, from: 'Gadag', to: 'Hiriyur', weight: 3.0, type: 'Onion', deadline: '22:30', price: 8800 }
];
let nextId = 16, selectedId = null, lastResults = [], matched = new Set(), map, layer;
const $ = id => document.getElementById(id);
const inr = n => '₹' + Math.round(n).toLocaleString('en-IN');
const key = s => {
  if (!s) return null;
  const str = String(s).trim();
  const lower = str.toLowerCase();
  const directMatch = Object.keys(CITIES).find(c => c.toLowerCase() === lower);
  if (directMatch) return directMatch;
  const knMatch = Object.keys(CITY_KN).find(k => CITY_KN[k] === str || CITY_KN[k].toLowerCase() === lower);
  return knMatch || null;
};

function dist(a, b) {
  const kA = key(a) || (a in CITIES ? a : 'Bengaluru');
  const kB = key(b) || (b in CITIES ? b : 'Hubballi');
  const p = CITIES[kA] || CITIES['Bengaluru'];
  const q = CITIES[kB] || CITIES['Hubballi'];
  const r = x => x * Math.PI / 180;
  const h = Math.sin(r(q[0] - p[0]) / 2) ** 2 + Math.cos(r(p[0])) * Math.cos(r(q[0])) * Math.sin(r(q[1] - p[1]) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h)) * ROAD;
}
const mins = t => { if (!t) return 0; const parts = String(t).split(':'); return (Number(parts[0]) || 0) * 60 + (Number(parts[1]) || 0); };
const hhmm = m => { m = Math.round(m) % 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };

function calculateDetour(t, l) { return Math.max(0, dist(t ? t.from : 'Bengaluru', l.from) + dist(l.from, t ? t.to : 'Hubballi') - dist(t ? t.from : 'Bengaluru', t ? t.to : 'Hubballi')); }

function calculateFuelSaving(t, l) { return Math.max(0, (dist(l.from, l.to) - calculateDetour(t, l)) * DIESEL_L_PER_KM); }

function fairRate(t, l) { const cap = (t && t.cap) || 10; return dist(l.from, l.to) * RATE_PER_KM * (0.7 + 0.3 * l.weight / cap); }

function calculateMatchScore(t, l) {
  const truckSafe = { from: 'Bengaluru', to: 'Hubballi', avail: 10, cap: 10, time: '07:00', ...(t || {}) };
  const detour = calculateDetour(truckSafe, l);
  const arrive = mins(truckSafe.time) + dist(truckSafe.from, l.from) / SPEED * 60;
  const slack = (mins(l.deadline || '23:59') - arrive) / 60;
  if (l.weight > truckSafe.avail) return { ok: false, reason: 'Too heavy', score: 0 };
  if (slack < 0) return { ok: false, reason: 'Misses deadline', score: 0 };
  const dropGap = dist(l.to, truckSafe.to);
  if (dropGap > 120) return { ok: false, reason: 'Wrong direction', score: 0 };
  const clamp = x => Math.max(0, Math.min(1, x));
  const cap = 25 * (0.4 + 0.6 * clamp(l.weight / truckSafe.avail));
  const route = 25 * clamp(1 - dropGap / 120) * clamp(1 - detour / 160 * 0.5);
  const det = 20 * clamp(1 - detour / 90);
  const dl = 15 * clamp(slack / 4);
  const rpk = l.price / dist(l.from, l.to);
  const rev = 15 * clamp((rpk - 18) / 30);
  const parts = [cap, route, det, dl, rev];
  return { ok: true, score: Math.round(parts.reduce((a, b) => a + b, 0)), parts, detour, slack, arrive, dropGap, util: (truckSafe.cap - truckSafe.avail + l.weight) / truckSafe.cap * 100 };
}

function rankLoads(t, list) {
  return list.map(l => ({ l, r: calculateMatchScore(t, l) })).filter(x => x.r.ok).sort((a, b) => b.r.score - a.r.score);
}

function calculateNetProfit(t, l) {
  const loadedKm = dist(l.from, l.to), totalKm = loadedKm + calculateDetour(t, l);
  const fuelCost = totalKm * DIESEL_L_PER_KM * DIESEL_PRICE, tolls = loadedKm * TOLL_PER_KM, driver = DRIVER_BASE + totalKm * DRIVER_PER_KM;
  const net = l.price - fuelCost - tolls - driver;
  return { gross: l.price, fuelCost, tolls, driver, net: Math.max(0, net) };
}

function buildReturnAlert(truck, currentCity) {
  const city = key(currentCity) || key(db.city) || 'Hubballi';
  const availCap = Math.max(0, truck.cap);
  const now = new Date(); now.setMinutes(now.getMinutes() + 30);
  now.setMinutes(Math.round(now.getMinutes() / 5) * 5);
  const timeStr = hhmm(now.getHours() * 60 + now.getMinutes());
  let toCity = key(db.city) || 'Bengaluru'; if (toCity === city) toCity = 'Bengaluru';
  const t = { from: city, to: toCity, cap: truck.cap, avail: availCap, type: truck.type, time: timeStr };
  const eligible = rankLoads(t, loads.filter(l => !matched.has(l.id)));
  return { truck: truck.reg, truckId: truck.id, city, availCap, loadCount: eligible.length, best: eligible.length ? { load: eligible[0].l, score: eligible[0].r.score, profit: calculateNetProfit(t, eligible[0].l), t } : null, others: eligible.slice(1) };
}

function checkAlerts() {
  if (!requireRole('transporter') || !db.trucks) return;
  const now = Date.now();
  db.activeAlert = null;
  for (const tr of db.trucks) {
    if (tr.status === 'Available' || tr.status === 'Returning empty') {
      if (tr.snoozeUntil && now < tr.snoozeUntil) continue;
      if (tr.dismissedAlert) continue;
      db.activeAlert = buildReturnAlert(tr, tr.lastCity);
      return;
    }
  }
}
function addNotification(text) {
  if (!db.notifications) db.notifications = [];
  db.notifications.unshift({ id: Date.now(), text, time: new Date().toISOString(), read: false });
  if (db.notifications.length > 20) db.notifications.length = 20;
  renderBell();
}
function renderBell() {
  const bw = $('bellWrap'), bb = $('bellBadge'), bl = $('bellList');
  if (!bw || !db) return;
  if (session.role !== 'transporter') { bw.hidden = true; return; }
  bw.hidden = false;
  if (!db.notifications) db.notifications = [];
  const unread = db.notifications.filter(x => !x.read).length;
  bb.hidden = unread === 0; bb.textContent = unread;
  if (!db.notifications.length) { bl.innerHTML = '<div style="padding:16px;text-align:center;color:var(--mute)">No notifications</div>'; return; }
  bl.innerHTML = db.notifications.slice(0, 10).map(n => `<div class="b-item ${n.read ? '' : 'unread'}"><span>${esc(n.text)}</span><span class="b-time">${new Date(n.time).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}</span></div>`).join('');
}


function readTruck() {
  const t = { from: key($('tFrom').value), to: key($('tTo').value), cap: +$('tCap').value, avail: +$('tAvail').value, type: $('tType').value, time: $('tTime').value };
  let e = '';
  if (!t.from || !t.to) e = 'Pick locations from the list: ' + Object.keys(CITIES).join(', ') + '.';
  else if (t.from === t.to) e = 'Location and destination must differ.';
  else if (!(t.cap > 0) || !(t.avail > 0)) e = 'Capacity values must be positive.';
  else if (t.avail > t.cap) e = 'Available capacity cannot exceed truck capacity.';
  else if (!t.time) e = 'Enter the time the truck can leave.';
  $('errT').textContent = e; return e ? null : t;
}

function postLoad() {
  if (!requireRole('cargo_owner')) return;
  const l = { id: nextId, from: key($('cPick').value), to: key($('cDrop').value), weight: +$('cWeight').value, type: $('cType').value.trim(), deadline: $('cDeadline').value, price: +$('cPrice').value };
  let e = '';
  if (!l.from || !l.to) e = 'Pick locations from the list: ' + Object.keys(CITIES).join(', ') + '.';
  else if (l.from === l.to) e = 'Pickup and delivery must differ.';
  else if (!(l.weight > 0)) e = 'Enter a cargo weight above 0.';
  else if (!l.type) e = 'Enter the cargo type.';
  else if (!l.deadline) e = 'Set a pickup deadline.';
  else if (!(l.price > 0)) e = 'Enter the offered price.';
  $('errC').textContent = e; if (e) return;
  nextId++; onPostLoad(l);
  ['cPick', 'cWeight', 'cType', 'cPrice'].forEach(i => $(i).value = '');
  toast('Load posted. Track it under My loads.');
}

function statusBadge(l, t) {
  if (matched.has(l.id)) return '<span class="badge b-matched">Matched</span>';
  if (!t) return '<span class="badge b-warn">Open</span>';
  const r = calculateMatchScore(t, l);
  return r.ok ? '<span class="badge b-ok">Eligible</span>' : `<span class="badge b-bad">${r.reason}</span>`;
}
function renderLoads() {
  if (!$('loadRows')) return; // matcher view not mounted
  const t = readTruckQuiet();
  $('loadCount').textContent = `(${loads.length})`;
  $('loadRows').innerHTML = loads.map(l => {
    const f = t ? fairRate(t, l) : l.weight * dist(l.from, l.to) * 4, d = (l.price - f) / f * 100;
    return `<tr><td>${l.from} → ${l.to}</td><td>${l.type}</td><td>${tn(l.weight)} t</td><td>${inr(l.price)}</td>
    <td>${inr(f)} <span class="badge ${d < -8 ? 'b-bad' : 'b-ok'}">${d >= 0 ? '+' : ''}${Math.round(d)}%</span></td><td>${statusBadge(l, t)}</td></tr>`;
  }).join('');
}
function readTruckQuiet() {
  const t = { from: key($('tFrom').value), to: key($('tTo').value), cap: +$('tCap').value, avail: +$('tAvail').value, time: $('tTime').value };
  return t.from && t.to && t.cap > 0 && t.avail > 0 && t.avail <= t.cap && t.time ? t : null;
}

function explainMatch(t, l, r, rank) {
  const rs = [];
  const cap = Math.round(r.util);
  rs.push({ tone: cap >= 75 ? 'good' : cap >= 50 ? 'warn' : 'bad', text: `${cap}% of truck capacity utilized` });
  const dg = Math.round(r.dropGap);
  rs.push({ tone: dg <= 25 ? 'good' : dg <= 70 ? 'warn' : 'bad', text: dg <= 25 ? `Destination is directly toward ${t.to}` : `Drops ${dg} km short of ${t.to}` });
  const det = Math.round(r.detour);
  rs.push({ tone: det <= 25 ? 'good' : det <= 60 ? 'warn' : 'bad', text: det <= 25 ? `Only ${det} km detour` : det <= 60 ? `${det} km detour` : `Long ${det} km detour` });
  const slack = r.slack, hArr = hhmm(r.arrive);
  rs.push({ tone: slack >= 2 ? 'good' : slack >= 0.5 ? 'warn' : 'bad', text: `Pickup deadline has ${Math.max(0, slack).toFixed(1)} hrs buffer (arrive ${hArr})` });
  const f = fairRate(t, l);
  if (f > 0) {
    const diff = l.price - f;
    if (diff > 0) rs.push({ tone: 'good', text: `₹${num(diff)} above estimated fair rate` });
    else if (diff / f >= -0.08) rs.push({ tone: 'warn', text: `Close to fair rate` });
    else rs.push({ tone: 'bad', text: `₹${num(-diff)} below fair rate, you may be underpaid` });
  }
  const fuel = calculateFuelSaving(t, l);
  if (fuel > 0) rs.push({ tone: 'good', text: `Saves about ${Math.round(fuel)} L of diesel (₹${num(fuel * DIESEL_PRICE)}) versus returning empty` });

  const badDl = slack < 0.5, badDir = dg > 70, hasBad = rs.some(x => x.tone === 'bad'), underpaid = f > 0 && ((l.price - f) / f < -0.08);
  let rec = { label: 'CONSIDER ONLY IF NOTHING BETTER', tone: 'warn', detail: 'Keep looking. This is a fallback option.' };
  if (badDir || badDl) rec = { label: 'SKIP', tone: 'bad', detail: 'This load has significant red flags on route or timing.' };
  else if (r.score >= 80 && !hasBad) rec = { label: 'ACCEPT THIS LOAD', tone: 'good', detail: `Accept now. It fills most of your truck for a ${det} km detour.` };
  else if (r.score >= 60 || underpaid) rec = { label: 'GOOD OPTION, NEGOTIATE PRICE', tone: 'warn', detail: underpaid ? `Counter-offer around ₹${num(Math.round(f / 100) * 100)} to make this a strong trip.` : 'Good route, but verify the cargo details before accepting.' };
  return { reasons: rs, recommendation: rec, headline: rank === 0 ? 'Why this is the best match' : 'Why this match' };
}

function renderMatches(t, ranked) {
  const box = $('results');
  if (!ranked.length) { box.innerHTML = '<div class="empty"><b>No suitable return loads.</b><br>Try raising available capacity, leaving later, or posting a load from the Post Load tab.</div>'; return; }
  let cmpHtml = '';
  if (ranked.length > 1) {
    const diffs = [ { name: 'capacity', d: ranked[0].r.parts[0] - ranked[1].r.parts[0] }, { name: 'route', d: ranked[0].r.parts[1] - ranked[1].r.parts[1] }, { name: 'detour', d: ranked[0].r.parts[2] - ranked[1].r.parts[2] }, { name: 'deadline', d: ranked[0].r.parts[3] - ranked[1].r.parts[3] }, { name: 'revenue', d: ranked[0].r.parts[4] - ranked[1].r.parts[4] } ].filter(x => x.d > 0).sort((a, b) => b.d - a.d);
    if (diffs.length) cmpHtml = `<div class="compare-bar">Why #1 beats #2: ${esc(ranked[0].l.from)} load beats ${esc(ranked[1].l.from)} load mainly on ${diffs.slice(0, 2).map(x => `${x.name} (+${Math.round(x.d)})`).join(' and ')}</div>`;
  }
  box.innerHTML = cmpHtml + ranked.slice(0, 3).map(({ l, r }, i) => {
    const fuel = calculateFuelSaving(t, l), f = fairRate(t, l), d = (l.price - f) / f * 100, done = matched.has(l.id);
    const exp = explainMatch(t, l, r, i);
    const iconOk = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><polyline points="20 6 9 17 4 12"></polyline></svg>';
    const iconWarn = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>';
    const iconBad = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    const robot = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>';
    const icons = { good: iconOk, warn: iconWarn, bad: iconBad }, pnames = ['Capacity', 'Route', 'Detour', 'Deadline', 'Revenue'], pmax = [25, 25, 20, 15, 15], isEx = i === 0;
    return `<article class="card ${i === 0 ? 'best' : ''} ${selectedId === l.id ? 'sel' : ''}" data-id="${l.id}">
      <div class="card-top"><div class="score">${r.score}<small>/100</small></div>
        <span class="badge ${done ? 'b-matched' : i === 0 ? 'b-ok' : 'b-warn'}">${done ? t('match.accepted') : i === 0 ? t('match.score') : t('match.option', { n: i + 1 })}</span></div>
      <div class="parts" title="Capacity, route, detour, deadline, revenue">${r.parts.map(p => `<i style="flex:${Math.max(p, .5)}"></i>`).join('')}</div>
      <div class="route">${cityName(l.from)} → ${cityName(l.to)}</div>
      <div class="stats">
        <div><span>${t('match.cargo')}</span><b>${esc(cargoName(l.type))}</b></div><div><span>${t('match.weight')}</span><b>${tn(l.weight)} t of ${tn(t.avail)} t free</b></div>
        <div><span>${t('match.detour')}</span><b>${tn(Math.round(r.detour))} km</b></div><div><span>${t('match.revenue')}</span><b>${inr(l.price)} (${d >= 0 ? '+' : ''}${Math.round(d)}% vs fair)</b></div>
        <div><span>${t('match.fuelSaving')}</span><b>${tn(Math.round(fuel))} L</b></div><div><span>${t('match.reachPickup')}</span><b>${hhmm(r.arrive)} (by ${esc(l.deadline)})</b></div>
      </div>
      <div class="why-wrap">
        <button class="toggle-why" data-title="${exp.headline}" aria-expanded="${isEx}" aria-controls="why-${l.id}">${isEx ? 'Hide explanation' : exp.headline + ' ▾'}</button>
        <div class="why" id="why-${l.id}" ${isEx ? '' : 'hidden'}>
          <div class="why-head">${robot} ${exp.headline}</div>
          <div class="why-list">${exp.reasons.map(rx => `<div class="why-${rx.tone}">${icons[rx.tone]} <span>${esc(rx.text)}</span></div>`).join('')}</div>
          <div class="why-bars">${r.parts.map((p, pi) => `<div><span>${pnames[pi]}</span><div class="bar"><i style="width:${p/pmax[pi]*100}%"></i></div></div>`).join('')}</div>
          <div class="rec-badge r-${exp.recommendation.tone}"><b>${exp.recommendation.label}</b><p>${esc(exp.recommendation.detail)}</p></div>
        </div>
      </div>
      <div class="actions"><button class="btn" data-voice="${l.id}">${t('match.voice')}</button>
        <button class="btn primary" data-accept="${l.id}" ${done ? 'disabled' : ''}>${done ? t('match.accepted') : t('match.btnAccept')}</button></div>
    </article>`;
  }).join('');
}

function updateDashboard(t, l) {
  if (!l) { ['kKm', 'kFuel'].forEach(i => $(i).textContent = '0'); $('kRev').textContent = '₹0'; $('kUtil').textContent = '0%'; $('kUtilBar').style.width = '0'; $('kNote').textContent = 'Select a match'; $('impactBox').innerHTML = ''; return; }
  const km = dist(l.from, l.to), det = calculateDetour(t, l), util = Math.round((t.cap - t.avail + l.weight) / t.cap * 100);
  $('kKm').textContent = Math.round(km); $('kFuel').textContent = Math.round(calculateFuelSaving(t, l));
  $('kRev').textContent = inr(l.price); $('kUtil').textContent = util + '%'; $('kUtilBar').style.width = util + '%';
  $('kNote').textContent = matched.has(l.id) ? 'Confirmed' : 'Projected for selection';
  const f = fairRate(t, l), net = Math.round((km - det) * DIESEL_L_PER_KM * DIESEL_PRICE);
  $('impactBox').innerHTML = `<div class="cmp"><div><span>Truck load before</span><b>${Math.round((t.cap - t.avail) / t.cap * 100)}%</b></div><div class="bar"><i style="width:${Math.round((t.cap - t.avail) / t.cap * 100)}%"></i></div></div>
    <div class="cmp"><div><span>Truck load after</span><b>${util}%</b></div><div class="bar"><i style="width:${util}%"></i></div></div>
    <div class="cmp"><div><span>Offer vs fair market rate</span><b>${inr(l.price)} vs ${inr(f)}</b></div><div class="bar"><i style="width:${Math.min(100, l.price / f * 50)}%"></i></div></div>
    <p><b>Diesel worth ${inr(net)}</b> is put to work instead of burned on an empty return.</p>`;
}

function drawMap(t, l) {
  if (!window.L) { $('map').innerHTML = '<div class="empty">Map needs internet (Leaflet CDN).</div>'; return; }
  if (!map) { map = L.map('map').setView([14.2, 76.3], 6); L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map); layer = L.layerGroup().addTo(map); }
  layer.clearLayers();
  const pt = c => CITIES[c], pts = [pt(t.from), pt(t.to)];
  L.polyline(pts, { color: '#9aa9ba', weight: 3, dashArray: '6 8' }).addTo(layer);
  L.circleMarker(pt(t.from), { radius: 8, color: '#0b2a4a', fillColor: '#0b2a4a', fillOpacity: 1 }).bindTooltip('Truck: ' + t.from).addTo(layer);
  L.circleMarker(pt(t.to), { radius: 8, color: '#12805c', fillColor: '#12805c', fillOpacity: 1 }).bindTooltip('Home: ' + t.to).addTo(layer);
  if (l) {
    pts.push(pt(l.from));
    L.polyline([pt(t.from), pt(l.from), pt(l.to)], { color: '#f2a900', weight: 5 }).addTo(layer);
    L.circleMarker(pt(l.from), { radius: 8, color: '#f2a900', fillColor: '#fff', fillOpacity: 1 }).bindTooltip('Pickup: ' + l.from).addTo(layer);
  }
  map.fitBounds(pts, { padding: [30, 30] }); setTimeout(() => map.invalidateSize(), 50);
}

function select(id) {
  selectedId = id; const t = readTruckQuiet(), l = loads.find(x => x.id === id);
  document.querySelectorAll('.card').forEach(c => c.classList.toggle('sel', +c.dataset.id === id));
  if (t && l) { updateDashboard(t, l); drawMap(t, l); }
}
function findMatches() {
  const t = readTruck(); if (!t) return;
  const btn = $('findBtn'); btn.disabled = true; btn.innerHTML = '<span class="spin"></span>Matching loads…';
  setTimeout(() => {
    if (!$('results')) return; // user navigated away from the matcher
    lastResults = rankLoads(t, loads.filter(l => !matched.has(l.id)).concat(loads.filter(l => matched.has(l.id))));
    selectedId = lastResults.length ? lastResults[0].l.id : null;
    renderMatches(t, lastResults); renderLoads();
    updateDashboard(t, selectedId ? loads.find(l => l.id === selectedId) : null); drawMap(t, selectedId ? loads.find(l => l.id === selectedId) : null);
    btn.disabled = false; btn.textContent = 'Find Best Return Loads';
  }, 700);
}
function voiceBrief(id) {
  const tTruck = readTruckQuiet(), l = loads.find(x => x.id === id); if (!tTruck || !l) return;
  const r = calculateMatchScore(tTruck, l);
  let msg = '';
  if (LANG === 'kn') {
    msg = `${cityName(l.from)}ಯಿಂದ ${cityName(l.to)}ಗೆ ${l.weight} ಟನ್ ${cargoName(l.type)} ಸರಕು ಇದೆ. ಹೊಂದಾಣಿಕೆ ಸ್ಕೋರ್ ${r.score}. ಅಂದಾಜು ಲಾಭ ₹${tn(l.price)}.`;
  } else {
    msg = `${l.weight} tons of ${l.type} load from ${cityName(l.from)} to ${cityName(l.to)}. Match score ${r.score}. Estimated revenue ${inr(l.price)}.`;
  }
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(msg);
    if (LANG === 'kn') {
      u.lang = 'kn-IN';
      const voices = speechSynthesis.getVoices();
      const knVoice = voices.find(v => v.lang && v.lang.toLowerCase().startsWith('kn'));
      if (knVoice) {
        u.voice = knVoice;
      } else {
        toast('Kannada voice not available on this device');
      }
    } else {
      u.lang = 'en-IN';
    }
    speechSynthesis.speak(u);
  } else {
    alert(msg);
  }
}
const cityOptions = () => Object.keys(CITIES).map(c => `<option value="${c}">${c}</option>`).join('');
function initMatcher() {
  map = null; layer = null; lastResults = []; selectedId = null;
  $('tTo').innerHTML = cityOptions(); $('tTo').value = 'Bengaluru';
  $('findBtn').onclick = findMatches;
  $('results').onclick = e => {
    const a = e.target.closest('[data-accept]'), v = e.target.closest('[data-voice]'), c = e.target.closest('.card'), w = e.target.closest('.toggle-why');
    if (w) { e.stopPropagation(); const d = w.nextElementSibling, ex = d.hidden; d.hidden = !ex; w.setAttribute('aria-expanded', ex); w.textContent = ex ? 'Hide explanation' : w.dataset.title + ' ▾'; return; }
    if (a) { const aid = +a.dataset.accept; if (onAccept(aid)) matched.add(aid); const t = readTruckQuiet(); renderMatches(t, lastResults); renderLoads(); select(aid); }
    else if (v) voiceBrief(+v.dataset.voice);
    else if (c) select(+c.dataset.id);
  };
  ['tFrom', 'tTo', 'tCap', 'tAvail', 'tTime'].forEach(i => $(i).addEventListener('change', renderLoads));
  renderLoads(); findMatches(); // demo data auto-runs when the matcher opens
}
function initPostForm() {
  $('cDrop').innerHTML = cityOptions(); $('cDrop').value = 'Bengaluru';
  $('postBtn').onclick = postLoad;
}


const FB_VER = '10.12.2';
const FB_CONFIG = {
  apiKey: 'AIzaSyBQP006Bnw25IAQND_3DDlEm3hLULOEaA4',
  authDomain: 'curiolab-5c4cf.web.app', // firebaseapp.com is blocked on some networks; web.app serves the same handler
  projectId: 'curiolab-5c4cf',
  storageBucket: 'curiolab-5c4cf.firebasestorage.app',
  messagingSenderId: '382541354229',
  appId: '1:382541354229:web:21f653e5a4c5d5e320a1bc',
  measurementId: 'G-8VRJH52D8Z'
};

const ROLE_ACCESS = Object.freeze({
  transporter: Object.freeze(['dashboard', 'yard', 'saarathi', 'driver', 'matcher', 'future_planner', 'trucks', 'history']),
  cargo_owner: Object.freeze(['dashboard', 'yard', 'myloads', 'post-load', 'plan_future']),
  operator: Object.freeze(['dashboard', 'yard', 'saarathi', 'driver', 'matcher', 'future_planner', 'loads-board'])
});
const ROLES = Object.freeze({ transporter: 'Transporter', cargo_owner: 'Cargo owner', operator: 'Broker-free operator' });
const VIEW_LABEL = Object.freeze({ dashboard: 'Dashboard', yard: '🏢 APMC Live Yard', saarathi: '🎙️ ಸಾರಥಿ AI', driver: '🚚 ಚಾಲಕ ಮೋಡ್', matcher: 'Matcher', trucks: 'My trucks', history: 'Trip history', myloads: 'My loads', 'post-load': 'Post load', 'loads-board': 'Loads board', future_planner: '🔮 Predictive Backhaul', plan_future: '🌱 Plan Future Shipment' });
const STEPS = ['Matched', 'Picked up', 'In transit', 'Delivered'];
const SESSION_KEY = 'bh_session', DATA_PREFIX = 'bh_data_', BROKER_FEE = 0.15;
const DEMO_USERS = Object.freeze({
  ramesh: { name: 'Ramesh Patil', role: 'transporter', city: 'Hubballi' },
  kisan: { name: 'Kisan Agro Traders', role: 'cargo_owner', city: 'Amargol APMC, Hubballi' },
  yard: { name: 'Amargol Yard Desk', role: 'operator', city: 'Amargol APMC, Hubballi' }
});
const TRUCK_BADGE = { 'On trip': 'b-matched', Available: 'b-ok', 'Returning empty': 'b-warn' };
const LOAD_BADGE = { Open: 'b-warn', Matched: 'b-matched', 'In transit': 'b-transit', Delivered: 'b-ok', Cancelled: 'b-bad' };
const DENIED = "You don't have access to that page.";

let session = null, db = null, fbm = null, fbAuth = null, fbUser = null, appOpen = false;
let pending = null, selTruckId = null, editingLoad = null, chart = null, authMode = 'login', toastT, currentView = null;
let saarathiRec = null, isListening = false;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const todayStr = () => new Date().toISOString().slice(0, 10);
const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage full/blocked */ } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }
};
const put = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };
const fairEst = l => dist(l.from, l.to) * RATE_PER_KM * (0.7 + 0.3 * Math.min(1, l.weight / 10));
const kpi = (label, val, note) => `<div class="kpi"><span class="k-label">${label}</span><b>${val}</b>${note ? `<small>${note}</small>` : ''}</div>`;
const num = n => Math.round(n).toLocaleString('en-IN');
const pct = (p, f) => { const d = (p - f) / f * 100; return `<span class="badge ${d < -8 ? 'b-bad' : 'b-ok'}">${d >= 0 ? '+' : ''}${Math.round(d)}%</span>`; };
function toast(m) { const t = $('toast'); t.textContent = m; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => t.hidden = true, 2800); }

const hasRole = r => Object.prototype.hasOwnProperty.call(ROLE_ACCESS, r);
const canAccess = view => !!session && hasRole(session.role) && ROLE_ACCESS[session.role].includes(view);
const isOffline = s => /^(local|demo):/.test(s.userId);
function requireRole(role) {
  if (session && session.role === role) return true;
  toast('Action not allowed for your role.'); return false;
}
function validSession(s) {
  return !!s && typeof s === 'object' && typeof s.name === 'string' && s.name.trim().length >= 2 &&
    typeof s.userId === 'string' && s.userId.length > 0 && typeof s.role === 'string' && hasRole(s.role);
}

const dbKey = () => DATA_PREFIX + session.role + '_' + session.userId;
const saveDb = () => store.set(dbKey(), db);
function seedData(role, city) {
  const base = key(city) || 'Hubballi';
  const ago = n => { const d = new Date(); d.setDate(d.getDate() - n); return d.toISOString().slice(0, 10); };
  if (role === 'transporter') {
    const trips = [
      [2, 'Bengaluru', 'Hubballi', 16500, 82], [5, 'Davangere', 'Hubballi', 9000, 64], [9, 'Hosapete', 'Dharwad', 7800, 71],
      [12, 'Bengaluru', 'Hubballi', 18200, 88], [16, 'Belagavi', 'Hubballi', 4500, 48, 'Cancelled'], [19, 'Tumakuru', 'Hubballi', 14800, 77],
      [24, 'Shivamogga', 'Hubballi', 10500, 69], [27, 'Bengaluru', 'Gadag', 15200, 80], [33, 'Haveri', 'Hubballi', 6200, 58], [38, 'Mysuru', 'Hubballi', 19800, 90]
    ].map(([d, f, t, earn, util, st], i) => {
      const ok = (st || 'Delivered') === 'Delivered', km = Math.round(dist(f, t));
      return { id: i + 1, route: f + ' → ' + t, date: ago(d), status: st || 'Delivered', earn: ok ? earn : 0, km: ok ? km : 0, fuel: ok ? Math.round(km * DIESEL_L_PER_KM * 0.85) : 0, util: ok ? util : 0 };
    });
    return {
      city, trips, active: null, nextTruck: 4, nextTrip: trips.length + 1,
      trucks: [
        { id: 1, reg: 'KA-25-AB-1234', type: 'Medium Cargo', cap: 10, status: 'Available' },
        { id: 2, reg: 'KA-25-CD-5678', type: 'Open Body', cap: 12, status: 'Returning empty' },
        { id: 3, reg: 'KA-63-EF-9012', type: 'Container', cap: 16, status: 'Available' }
      ]
    };
  }
  if (role === 'cargo_owner') {
    const L = (id, to, weight, type, deadline, price, status) => ({ id, from: base, to, weight, type, deadline, price, status, date: todayStr() });
    return {
      city, myLoads: [
        L(1001, 'Bengaluru', 6, 'Onions', '21:00', 19000, 'Open'), L(1002, 'Mysuru', 4, 'Dry chilli', '20:30', 15500, 'Matched'),
        L(1003, 'Bengaluru', 5, 'Jaggery', '22:00', 14000, 'In transit'), L(1004, 'Hosapete', 3, 'Maize', '19:30', 6500, 'Delivered'),
        L(1005, 'Tumakuru', 7, 'Groundnut', '21:30', 17200, 'Delivered')
      ]
    };
  }
  return { city, deals: [
    { route: 'Gadag → Hiriyur', price: 8800, date: ago(1) }, { route: 'Hubballi → Mysuru', price: 16000, date: ago(3) }, { route: 'Dharwad → Bengaluru', price: 15000, date: ago(6) }
  ] };
}
function ensureData(city) {
  const d = store.get(dbKey()), need = { transporter: 'trucks', cargo_owner: 'myLoads', operator: 'deals' }[session.role];
  db = d && Array.isArray(d[need]) ? d : seedData(session.role, city || (d && d.city) || '');
  saveDb();
}

function onPostLoad(l) {
  if (!requireRole('cargo_owner') || !db) return false;
  db.myLoads.push({ id: l.id, from: l.from, to: l.to, weight: l.weight, type: l.type, deadline: l.deadline, price: l.price, status: 'Open', date: todayStr() });
  saveDb(); return true;
}
function onAccept(id) { // returns false to veto the acceptance
  if (!db || !(session.role === 'transporter' || session.role === 'operator')) { toast('Action not allowed for your role.'); return false; }
  const l = loads.find(x => x.id === id); if (!l) return false;
  if (session.role === 'transporter') {
    if (db.active) { toast('Finish your active load before accepting another.'); return false; }
    const truck = db.trucks.find(x => x.id === selTruckId && x.status !== 'On trip') || db.trucks.find(x => x.status !== 'On trip');
    if (!truck) { toast('No free truck. Add one or finish a trip.'); return false; }
    const t = readTruckQuiet(), km = Math.round(dist(l.from, l.to));
    db.active = {
      loadId: id, from: l.from, to: l.to, type: l.type, weight: l.weight, price: l.price, deadline: l.deadline, step: 0, truck: truck.reg, truckId: truck.id, km,
      fuel: Math.round(t ? calculateFuelSaving(t, l) : km * DIESEL_L_PER_KM * 0.85),
      util: Math.min(100, Math.round(t ? (t.cap - t.avail + l.weight) / t.cap * 100 : l.weight / truck.cap * 100))
    };
    truck.status = 'On trip';
  } else {
    db.deals.unshift({ route: l.from + ' → ' + l.to, price: l.price, date: todayStr() });
  }
  saveDb(); toast('Load accepted'); return true;
}

function showView(view, opts = {}) {
  if (!session || !appOpen) return false;
  view = String(view || '');
  if (!view) { view = 'dashboard'; opts = { ...opts, replace: true }; }
  else if (!canAccess(view)) { toast(DENIED); view = 'dashboard'; opts = { ...opts, replace: true }; }
  renderView(view);
  const h = '#' + view;
  if (location.hash !== h) { if (opts.fromHistory || opts.replace) history.replaceState(null, '', h); else history.pushState(null, '', h); }
  return true;
}
window.addEventListener('hashchange', () => { if (session && appOpen) showView(decodeURIComponent(location.hash.replace(/^#\/?/, '')), { fromHistory: true }); });

function buildNav() { // only the current role's items are ever created
  put('navBar', ROLE_ACCESS[session.role].map(v => `<button class="ub-tab" type="button" data-nav="${v}">${t('nav.' + v) || VIEW_LABEL[v] || v}</button>`).join(''));
}
function renderView(view) {
  if (chart) { chart.destroy(); chart = null; }
  if (map) { map.remove(); map = null; layer = null; }
  const k = session.role + '/' + view, tpl = TEMPLATES[k];
  if (!canAccess(view) || !tpl) { $('viewRoot').innerHTML = ''; return; } // defence in depth
  currentView = view;
  const title = view === 'dashboard' ? (t('role.' + session.role) + ' ' + t('nav.dashboard')) : (t('nav.' + view) || VIEW_LABEL[view] || view);
  $('viewRoot').innerHTML = `<section class="wrap dash view-${view}"><div class="dash-head"><h1>${title}</h1>
    <span class="count">${esc(session.name)}${db.city ? ' · ' + esc(db.city) : ''}${isOffline(session) ? ' · offline demo' : ''}</span></div>${tpl()}</section>`;
  document.querySelectorAll('#navBar [data-nav]').forEach(b => { const on = b.dataset.nav === view; b.classList.toggle('on', on); if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
  MOUNTS[k]();
  window.scrollTo({ top: 0 });
}
function refreshView() { if (currentView && currentView !== 'matcher') MOUNTS[session.role + '/' + currentView](); }

const matcherHtml = () => `
  <section class="kpis" aria-label="Impact dashboard">
    <div class="kpi"><span class="k-label">Empty km avoided</span><b id="kKm">0</b><small id="kNote">Select a match</small></div>
    <div class="kpi"><span class="k-label">Fuel saved (litres)</span><b id="kFuel">0</b></div>
    <div class="kpi"><span class="k-label">Additional revenue</span><b id="kRev">₹0</b></div>
    <div class="kpi"><span class="k-label">Truck utilization</span><b id="kUtil">0%</b><div class="bar"><i id="kUtilBar"></i></div></div>
  </section>
  <section class="grid2">
    <div class="panel">
      <h2>Truck details</h2>
      <div class="fields">
        <label>Current location<input id="tFrom" list="cities" value="Amargol APMC, Hubballi"></label>
        <label>Destination<select id="tTo"></select></label>
        <label>Truck capacity (t)<input id="tCap" type="number" min="1" step="0.5" value="10"></label>
        <label>Available capacity (t)<input id="tAvail" type="number" min="0.5" step="0.5" value="6"></label>
        <label>Truck type<select id="tType"><option>Medium Cargo</option><option>Open Body</option><option>Container</option><option>Refrigerated</option></select></label>
        <label>Ready to leave at<input id="tTime" type="time" value="18:00"></label>
      </div>
      <div class="err" id="errT"></div>
      <button class="btn primary" id="findBtn">Find Best Return Loads</button>
    </div>
    <div class="panel">
      <h2>Available loads <span class="count" id="loadCount"></span></h2>
      <div class="tablewrap"><table>
        <thead><tr><th>Route</th><th>Cargo</th><th>Weight</th><th>Price</th><th>Fair rate</th><th>Status</th></tr></thead>
        <tbody id="loadRows"></tbody>
      </table></div>
      <p class="hint">Fair rate = distance × market per-km rate, scaled by load size. Brokers can't hide a premium when it's printed next to the offer.</p>
    </div>
  </section>
  <h2 class="sect">Match results</h2>
  <section id="results" class="cards"><div class="empty">Enter truck details and press <b>Find Best Return Loads</b>.</div></section>
  <section class="grid2 lower">
    <div class="panel"><h2>Route</h2><div id="map"></div></div>
    <div class="panel impact">
      <h2>Impact and savings</h2>
      <p>BackHaul AI reduces empty kilometers by intelligently matching available truck capacity with nearby return freight.</p>
      <div id="impactBox"></div>
      <p class="hint">Estimates use a 1.25 road factor, 0.30 L/km diesel burn and ₹92/L. Demo mode: no API is called, so the algorithm is fully deterministic.</p>
    </div>
  </section>`;

const dealsTable = () => `<div class="tablewrap"><table>
  <thead><tr><th>Date</th><th>Route</th><th>Price</th><th>Commission saved</th></tr></thead><tbody id="dealRows"></tbody></table></div>`;

const TEMPLATES = {
  'transporter/dashboard': () => `<div id="alertBox"></div><div id="tKpis" class="dkpis"></div>
    <div class="grid2 even">
      <div class="panel"><h2>${t('title.active')}</h2><div id="activeBox"></div></div>
      <div class="panel"><h2>${t('title.chart')}</h2>
        <div class="chartbox"><canvas id="chart" role="img" aria-label="Weekly earnings and empty km avoided chart"></canvas></div><div id="chartFallback" hidden></div></div>
    </div>`,
  'transporter/saarathi': saarathiHtml,
  'transporter/yard': yardHtml,
  'transporter/driver': driverHtml,
  'operator/saarathi': saarathiHtml,
  'operator/yard': yardHtml,
  'operator/driver': driverHtml,
  'transporter/matcher': matcherHtml,
  'transporter/trucks': () => `<div class="panel">
      <h2>${t('title.trucks')} <span class="count" id="truckCount"></span></h2>
      <div class="tablewrap"><table><thead><tr><th>${t('table.reg')}</th><th>${t('table.type')}</th><th>${t('table.cap')}</th><th>${t('table.status')}</th><th></th></tr></thead><tbody id="truckRows"></tbody></table></div>
      <form id="truckForm" class="fields tf" novalidate>
        <label>${t('form.reg')}<input id="trReg" placeholder="KA-25-AB-1234"></label>
        <label>${t('form.type')}<select id="trType"><option value="Medium Cargo">${t('t.Medium Cargo')}</option><option value="Open Body">${t('t.Open Body')}</option><option value="Container">${t('t.Container')}</option><option value="Refrigerated">${t('t.Refrigerated')}</option></select></label>
        <label>${t('form.cap')}<input id="trCap" type="number" min="1" max="60" step="0.5" placeholder="10"></label>
        <label>${t('form.status') || 'Status'}<select id="trStatus"><option value="Available">${t('status.Available')}</option><option value="Returning empty">${t('status.Returning empty')}</option></select></label>
        <div class="err full" id="errTruck"></div>
        <button class="btn primary full" type="submit">${t('form.addTruck')}</button>
      </form></div>`,
  'transporter/history': () => `<div class="panel">
      <h2>${t('title.history')} <span class="count" id="histCount"></span></h2>
      <div class="filters">
        <label>${t('filter.status')}<select id="hStatus"><option value="">${t('filter.all')}</option><option value="Delivered">${t('status.Delivered')}</option><option value="In transit">${t('status.In transit')}</option><option value="Cancelled">${t('status.Cancelled')}</option></select></label>
        <label>${t('filter.from')}<input id="hFrom" type="date"></label><label>${t('filter.to')}<input id="hTo" type="date"></label>
        <label>${t('filter.sort')}<select id="hSort"><option value="date">${t('sort.new')}</option><option value="earnDesc">${t('sort.high')}</option><option value="earnAsc">${t('sort.low')}</option></select></label>
      </div>
      <div class="tablewrap"><table><thead><tr><th>${t('table.date')}</th><th>${t('table.route')}</th><th>${t('table.status')}</th><th>${t('table.km')}</th><th>${t('table.fuelL')}</th><th>${t('table.util')}</th><th>${t('table.earn')}</th></tr></thead><tbody id="histRows"></tbody></table></div></div>`,

  'cargo_owner/yard': yardHtml,
  'cargo_owner/dashboard': () => `<div id="oKpis" class="dkpis"></div>
    <div class="panel mt"><h2>${t('title.deals')}</h2>
      <div class="tablewrap"><table><thead><tr><th>${t('table.route')}</th><th>${t('table.cargo')}</th><th>${t('table.weight')}</th><th>${t('table.price')}</th><th>${t('table.fair')}</th><th>${t('table.status')}</th></tr></thead><tbody id="recentRows"></tbody></table></div>
      <div class="actions mtop"><button class="btn" type="button" data-nav="myloads">${t('nav.myloads')}</button><button class="btn primary" type="button" data-nav="post-load">${t('nav.postLoad')}</button></div>
    </div>`,
  'cargo_owner/myloads': () => `<div class="panel">
      <h2>${t('title.myloads')} <span class="count" id="ownCount"></span></h2>
      <div class="filters">
        <label>${t('filter.status')}<select id="oStatus"><option value="">${t('filter.all')}</option><option value="Open">${t('status.Open')}</option><option value="Matched">${t('status.Matched')}</option><option value="In transit">${t('status.In transit')}</option><option value="Delivered">${t('status.Delivered')}</option><option value="Cancelled">${t('status.Cancelled')}</option></select></label>
        <div class="f-btn"><button class="btn" type="button" data-nav="post-load">+ Post new load</button></div>
      </div>
      <div class="tablewrap"><table><thead><tr><th>${t('table.route')}</th><th>${t('table.cargo')}</th><th>${t('table.weight')}</th><th>${t('table.price')}</th><th>${t('th.fairRate')}</th><th>${t('table.fair')}</th><th>${t('table.status')}</th><th>${t('table.actions')}</th></tr></thead><tbody id="ownRows"></tbody></table></div>
      <p class="hint">${t('hint.owner')}</p></div>`,
  'cargo_owner/post-load': () => `<div class="panel">
      <h2>${t('title.post')}</h2>
      <div class="fields">
        <label>${t('form.pick')}<input id="cPick" list="cities" placeholder=""></label>
        <label>${t('form.drop')}<select id="cDrop"></select></label>
        <label>${t('form.weight')}<input id="cWeight" type="number" min="0.5" step="0.5" placeholder="4"></label>
        <label>${t('form.cargoType')}<input id="cType" placeholder=""></label>
        <label>${t('form.dead')}<input id="cDeadline" type="time" value="22:00"></label>
        <label>${t('form.offer')}<input id="cPrice" type="number" min="1000" step="500" placeholder="16000"></label>
      </div>
      <div class="err" id="errC"></div>
      <button class="btn primary" id="postBtn" type="button">${t('form.postBtn')}</button>
    </div>`,

  'operator/dashboard': () => `<div id="pKpis" class="dkpis"></div>
    <div class="panel mt"><h2>${t('title.deals')} <span class="count" id="dealCount"></span></h2>${dealsTable()}
      <div class="actions mtop"><button class="btn" type="button" data-nav="loads-board">${t('nav.loadsBoard')}</button><button class="btn primary" type="button" data-nav="matcher">${t('nav.matcher')}</button></div></div>`,
  'operator/matcher': matcherHtml,
  'operator/loads-board': () => `<div class="panel"><h2>${t('title.board')} <span class="count" id="boardCount"></span></h2>
      <div class="tablewrap"><table><thead><tr><th>${t('table.route')}</th><th>${t('table.cargo')}</th><th>${t('table.weight')}</th><th>${t('table.price')}</th><th>${t('table.fair')}</th><th></th></tr></thead><tbody id="boardRows"></tbody></table></div>
      <p class="hint">${t('hint.operator')}</p></div>`
};

const MOUNTS = {
  'transporter/future_planner': () => initFuturePlanner(),
  'operator/future_planner': () => initFuturePlanner(),
  'cargo_owner/plan_future': () => initPlanFuture(),
  'transporter/dashboard': () => { checkAlerts(); renderAlerts(); renderTKpis(); renderActive(); drawChart(); },
  'transporter/saarathi': () => initSaarathi(),
  'transporter/yard': () => initYard(),
  'transporter/driver': () => initDriver(),
  'operator/saarathi': () => initSaarathi(),
  'operator/yard': () => initYard(),
  'operator/driver': () => initDriver(),
  'transporter/matcher': () => initMatcher(),
  'transporter/trucks': () => renderTrucks(),
  'transporter/history': () => renderHistory(),
  'cargo_owner/dashboard': () => { renderOKpis(); renderRecent(); },
  'cargo_owner/yard': () => initYard(),
  'cargo_owner/myloads': () => renderOwnerTable(),
  'cargo_owner/post-load': () => initPostForm(),
  'operator/dashboard': () => { renderPKpis(); renderDeals(); },
  'operator/matcher': () => initMatcher(),
  'operator/loads-board': () => renderBoard()
};

function renderTKpis() {
  const del = db.trips.filter(t => t.status === 'Delivered'), sum = k => del.reduce((a, t) => a + t[k], 0);
  const util = del.length ? Math.round(sum('util') / del.length) : 0;
  put('tKpis', kpi(t('kpi.trips'), del.length) + kpi(t('kpi.emptyKm'), num(sum('km'))) + kpi(t('kpi.fuel'), num(sum('fuel'))) +
    kpi(t('kpi.earn'), inr(sum('earn'))) + kpi(t('kpi.util'), util + '%', `<div class="bar"><i style="width:${util}%"></i></div>`));
}
function renderTrucks() {
  put('truckCount', `(${db.trucks.length})`);
  put('truckRows', db.trucks.map(t => `<tr><td>${tn(esc(t.reg))}<br><small style="color:var(--mute)">${t.lastCity ? t('status.Delivered') + ' ' + cityName(t.lastCity) : cityName(db.city || 'Hubballi')}</small></td><td>${t('t.' + t.type)}</td><td>${tn(t.cap)} t</td>
    <td><span class="badge ${TRUCK_BADGE[t.status] || 'b-ok'}">${t('status.' + t.status)}</span></td>
    <td>
      ${t.status === 'On trip' ? `<button class="btn sm" data-act="markDel" data-id="${t.id}">${t('act.markDel')}</button>` : `<button class="btn sm" data-act="findTruck" data-id="${t.id}">${t('act.find')}</button>`}
    </td></tr>`).join(''));
}
function renderActive() {
  const a = db.active;
  if (!a) { put('activeBox', `<div class="empty">${t('act.noLoad')}</div>`); return; }
  put('activeBox', `<div class="act-route">${cityName(a.from)} → ${cityName(a.to)}</div>
    <div class="stats" style="margin-top:8px"><div><span>${t('act.cargo')}</span><b>${cargoName(a.type)} · ${tn(a.weight)} t</b></div><div><span>${t('act.truck')}</span><b>${esc(a.truck)}</b></div>
    <div><span>${t('act.price')}</span><b>${inr(a.price)}</b></div><div><span>${t('act.deadline')}</span><b>${esc(a.deadline)}</b></div></div>
    <ol class="stepper">${STEPS.map((s, i) => `<li class="${i < a.step ? 'done' : i === a.step ? 'cur' : ''}">${s}</li>`).join('')}</ol>
    <div style="display:flex;gap:10px"><button class="btn primary" data-act="advance">${t('act.mark')} ${t('status.' + STEPS[a.step + 1]) || STEPS[a.step + 1]}</button><button class="btn" data-act="simDeliver" style="border-color:var(--amber);color:var(--amber)">${t('act.demo')}</button></div>`);
}
function advanceActive() {
  if (!requireRole('transporter')) return;
  const a = db.active; if (!a) return;
  a.step++;
  if (a.step < STEPS.length - 1) toast(t('filter.status') + ': ' + t('status.' + STEPS[a.step]) || STEPS[a.step]);
  else { // Delivered: move to history and free the truck
    db.trips.push({ id: db.nextTrip++, route: a.from + ' → ' + a.to, date: todayStr(), status: 'Delivered', earn: a.price, km: a.km, fuel: a.fuel, util: a.util });
    const truck = db.trucks.find(t => t.id === a.truckId); 
    if (truck) { truck.status = 'Available'; truck.lastCity = a.to; delete truck.dismissedAlert; delete truck.snoozeUntil; }
    db.active = null; 
    checkAlerts();
    if (db.activeAlert) {
      toast(`Delivered. ${truck ? truck.reg : 'Truck'} is free in ${a.to}. ${db.activeAlert.loadCount} return loads found.`);
      addNotification(`Truck ${truck ? truck.reg : ''} is free in ${a.to}. ${db.activeAlert.loadCount} return loads available.`);
    } else {
      toast('Delivered. Earnings added: ' + inr(a.price));
    }
  }
  saveDb(); refreshView();
}
function renderAlerts() {
  if (!requireRole('transporter')) return;
  const a = db.activeAlert;
  if (!a) { put('alertBox', ''); return; }
  const lowM = a.best && a.best.profit.net < 1000;
  const html = `<div class="dash-alert ${lowM ? 'low-margin' : ''}" role="alert">
    <button class="al-close" aria-label="Dismiss alert" data-act="alDismiss"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    <div class="al-head"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> 
    ${lowM ? t('alert.low') : t('alert.return')}<span class="nav-dot"></span></div>
    <div class="al-info">Truck <b>${esc(a.truck)}</b> · Current location <b>${esc(a.city)}</b> · Available capacity <b>${a.availCap} t</b></div>
    <div style="font-weight:600;margin-bottom:8px;font-size:14.5px">${a.loadCount} return loads available</div>
    ${a.best ? `<div class="al-best">
      <div style="margin-bottom:6px">Route <b>${esc(a.best.load.from)} → ${esc(a.best.load.to)}</b> · <b>${a.best.load.weight} t</b></div>
      <div>Price <b>${inr(a.best.load.price)}</b> · Match <b>${a.best.score}%</b></div>
      <div class="al-prof" title="${inr(a.best.profit.gross)} - fuel ${inr(a.best.profit.fuelCost)} - tolls ${inr(a.best.profit.tolls)} - driver ${inr(a.best.profit.driver)}">Estimated profit: ${a.best.profit.net > 0 ? inr(a.best.profit.net) : 'Break-even'}</div>
    </div>` : ''}
    <div class="al-btns">
      <button class="btn primary" data-act="alFind" style="background:var(${lowM ? '--red' : '--amber'});border-color:var(${lowM ? '--red' : '--amber'})" ${!a.loadCount ? 'disabled' : ''}>${t('alert.find')}</button>
      <button class="btn" data-act="alSnooze">${t('alert.later')}</button>
      <button class="btn" data-act="alDismiss">${t('alert.dismiss')}</button>
    </div>
  </div>`;
  put('alertBox', html);
}
function findForTruck(id) {
  if (!requireRole('transporter')) return;
  const t = db.trucks.find(x => x.id === id); if (!t) return;
  selTruckId = id;
  showView('matcher');
  $('tFrom').value = key(db.city) || 'Amargol APMC, Hubballi';
  $('tCap').value = t.cap; $('tAvail').value = Math.max(0.5, Math.round(t.cap * 0.6 * 2) / 2); $('tType').value = t.type;
  findMatches();
}
function addTruck(e) {
  e.preventDefault(); if (!requireRole('transporter')) return;
  const reg = $('trReg').value.trim().toUpperCase().replace(/\s+/g, '-'), cap = +$('trCap').value; let err = '';
  if (!/^[A-Z]{2}-?\d{1,2}-?[A-Z]{1,3}-?\d{4}$/.test(reg)) err = 'Enter a valid registration number, e.g. KA-25-AB-1234.';
  else if (db.trucks.some(t => t.reg.replace(/-/g, '') === reg.replace(/-/g, ''))) err = 'That truck is already added.';
  else if (!(cap >= 1 && cap <= 60)) err = 'Capacity must be between 1 and 60 tonnes.';
  $('errTruck').textContent = err; if (err) return;
  db.trucks.push({ id: db.nextTruck++, reg, type: $('trType').value, cap, status: $('trStatus').value });
  saveDb(); $('truckForm').reset(); renderTrucks(); toast('Truck added');
}
function renderHistory() {
  const st = $('hStatus').value, from = $('hFrom').value, to = $('hTo').value, sort = $('hSort').value;
  let rows = db.trips.slice();
  if (db.active) rows.push({ route: db.active.from + ' → ' + db.active.to, date: todayStr(), status: 'In transit', earn: db.active.price, km: db.active.km, fuel: db.active.fuel, util: db.active.util });
  rows = rows.filter(t => (!st || t.status === st) && (!from || t.date >= from) && (!to || t.date <= to));
  rows.sort((a, b) => sort === 'earnDesc' ? b.earn - a.earn : sort === 'earnAsc' ? a.earn - b.earn : b.date.localeCompare(a.date));
  put('histCount', `(${rows.length})`);
  put('histRows', rows.map(t => `<tr><td>${t.date}</td><td>${t.route.split(' → ').map(cityName).join(' → ')}</td><td><span class="badge ${LOAD_BADGE[t.status]}">${t('status.' + t.status)}</span></td>
    <td>${tn(t.km)} ${t('table.km').split(' ')[0]}</td><td>${tn(t.fuel)} L</td><td>${t.util}%</td><td>${inr(t.earn)}</td></tr>`).join('') || '<tr><td colspan="7" class="hint">No trips match these filters.</td></tr>');
}
function weeklyData() {
  const w = Array.from({ length: 6 }, () => ({ earn: 0, km: 0 })), now = new Date(todayStr());
  db.trips.filter(t => t.status === 'Delivered').forEach(t => {
    const i = Math.floor((now - new Date(t.date)) / 864e5 / 7); if (i >= 0 && i < 6) { w[5 - i].earn += t.earn; w[5 - i].km += t.km; }
  });
  return w;
}
function drawChart() {
  const w = weeklyData(), labels = w.map((_, i) => i === 5 ? 'This week' : (5 - i) + 'w ago'), cv = $('chart'), fbk = $('chartFallback');
  if (!cv) return;
  if (window.Chart) {
    fbk.hidden = true; cv.parentElement.hidden = false; if (chart) chart.destroy();
    chart = new Chart(cv, {
      data: { labels, datasets: [
        { type: 'bar', label: 'Earnings (₹)', data: w.map(x => x.earn), backgroundColor: '#123c68', yAxisID: 'y' },
        { type: 'line', label: 'Empty km avoided', data: w.map(x => x.km), borderColor: '#f2a900', backgroundColor: '#f2a900', tension: .3, yAxisID: 'y1' }] },
      options: { responsive: true, maintainAspectRatio: false, scales: {
        y: { beginAtZero: true, title: { display: true, text: '₹' } },
        y1: { beginAtZero: true, position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'km' } } } }
    });
  } else { // plain-CSS fallback when the Chart.js CDN is unavailable
    cv.parentElement.hidden = true; fbk.hidden = false;
    const me = Math.max(1, ...w.map(x => x.earn)), mk = Math.max(1, ...w.map(x => x.km));
    fbk.innerHTML = w.map((x, i) => `<div class="fb-row"><div>${labels[i]}</div><div class="fb-bars">
      <div><i class="e" style="width:${x.earn / me * 80}%"></i><span>${inr(x.earn)}</span></div>
      <div><i class="k" style="width:${x.km / mk * 80}%"></i><span>${Math.round(x.km)} km</span></div></div></div>`).join('') +
      '<p class="hint"><b style="color:var(--navy2)">■</b> Earnings &nbsp; <b style="color:var(--accent)">■</b> Empty km avoided</p>';
  }
}

function renderOKpis() {
  const my = db.myLoads, hit = my.filter(l => ['Matched', 'In transit', 'Delivered'].includes(l.status));
  const live = my.filter(l => l.status !== 'Cancelled'), avg = live.length ? Math.round(live.reduce((a, l) => a + (l.price / fairEst(l) - 1) * 100, 0) / live.length) : 0;
  put('oKpis', kpi('Loads posted', my.length) + kpi('Loads matched', hit.length) +
    kpi('Avg price vs fair rate', (avg >= 0 ? '+' : '') + avg + '%', 'Transparent pricing') +
    kpi('Saved vs broker rate', inr(hit.reduce((a, l) => a + l.price * BROKER_FEE, 0)), '~15% broker commission avoided'));
}
function renderRecent() {
  put('recentRows', db.myLoads.slice(-5).reverse().map(l => `<tr><td>${esc(l.from)} → ${esc(l.to)}</td><td>${esc(l.type)}</td><td>${tn(l.weight)} t</td><td>${inr(l.price)}</td>
    <td>${pct(l.price, fairEst(l))}</td><td><span class="badge ${LOAD_BADGE[l.status]}">${l.status}</span></td></tr>`).join('') || '<tr><td colspan="6" class="hint">No loads yet.</td></tr>');
}
function renderOwnerTable() {
  const st = $('oStatus').value, rows = db.myLoads.filter(l => !st || l.status === st);
  put('ownCount', `(${rows.length})`);
  put('ownRows', rows.map(l => {
    const f = fairEst(l), open = l.status === 'Open', last = l.status === 'Delivered' || l.status === 'Cancelled';
    const priceCell = editingLoad === l.id
      ? `<input class="pin" id="editPrice" type="number" min="1000" step="500" value="${l.price}"> <button class="btn sm" data-act="oSave" data-id="${l.id}">Save</button> <button class="btn sm" data-act="oCancelEdit">✕</button>`
      : inr(l.price);
    return `<tr><td>${esc(l.from)} → ${esc(l.to)}</td><td>${esc(l.type)}</td><td>${tn(l.weight)} t</td><td>${priceCell}</td><td>${inr(f)}</td><td>${pct(l.price, f)}</td>
      <td><span class="badge ${LOAD_BADGE[l.status]}">${l.status}</span></td>
      <td><button class="btn sm" data-act="oEdit" data-id="${l.id}" ${open ? '' : 'disabled'}>Edit price</button>
      <button class="btn sm" data-act="oCancel" data-id="${l.id}" ${open ? '' : 'disabled'}>Cancel load</button>
      <button class="btn sm" data-act="oAdvance" data-id="${l.id}" ${last ? 'disabled' : ''}>Advance (demo)</button></td></tr>`;
  }).join('') || '<tr><td colspan="8" class="hint">No loads yet. Use “Post new load”.</td></tr>');
}
function saveOwnerPrice(id) {
  if (!requireRole('cargo_owner')) return;
  const p = +$('editPrice').value, m = db.myLoads.find(x => x.id === id);
  if (!m || m.status !== 'Open') return;
  if (!(p >= 1000 && p <= 1e7)) { toast('Enter a price between ₹1,000 and ₹1,00,00,000.'); return; }
  m.price = p; editingLoad = null; saveDb(); refreshView(); toast('Price updated');
}
function cancelOwnerLoad(id) {
  if (!requireRole('cargo_owner')) return;
  const m = db.myLoads.find(x => x.id === id); if (!m || m.status !== 'Open' || !confirm('Cancel this load?')) return;
  m.status = 'Cancelled'; saveDb(); refreshView(); toast('Load cancelled');
}
function advanceOwnerLoad(id) {
  if (!requireRole('cargo_owner')) return;
  const m = db.myLoads.find(x => x.id === id), order = ['Open', 'Matched', 'In transit', 'Delivered']; if (!m) return;
  const i = order.indexOf(m.status); if (i < 0 || i === order.length - 1) return;
  m.status = order[i + 1]; saveDb(); refreshView();
}

function renderPKpis() {
  const total = db.deals.reduce((a, d) => a + d.price, 0), open = loads.filter(l => !matched.has(l.id));
  put('pKpis', kpi('Loads on board', open.length) + kpi('Deals closed', db.deals.length) + kpi('Deal value', inr(total)) +
    kpi('Commission saved', inr(total * BROKER_FEE), 'vs ~15% broker cut'));
}
function renderDeals() {
  put('dealCount', `(${db.deals.length})`);
  put('dealRows', db.deals.slice(0, 8).map(d => `<tr><td>${d.date}</td><td>${esc(d.route)}</td><td>${inr(d.price)}</td><td>${inr(d.price * BROKER_FEE)}</td></tr>`).join('') || '<tr><td colspan="4" class="hint">No deals yet.</td></tr>');
}
function renderBoard() {
  const open = loads.filter(l => !matched.has(l.id));
  put('boardCount', `(${open.length})`);
  put('boardRows', open.map(l => `<tr><td>${esc(l.from)} → ${esc(l.to)}</td><td>${esc(l.type)}</td><td>${tn(l.weight)} t</td><td>${inr(l.price)}</td><td>${pct(l.price, fairEst(l))}</td>
    <td><button class="btn sm" data-act="opDeal" data-id="${l.id}">Close deal</button></td></tr>`).join('') || '<tr><td colspan="6" class="hint">Board is empty.</td></tr>');
}
function closeDeal(id) {
  if (!requireRole('operator')) return;
  const l = loads.find(x => x.id === id); if (!l || matched.has(id)) return;
  matched.add(id); db.deals.unshift({ route: l.from + ' → ' + l.to, price: l.price, date: todayStr() });
  saveDb(); refreshView(); toast('Deal closed, no broker commission paid');
}

function showOverlay(id) { ['authOverlay', 'profileOverlay'].forEach(x => $(x).hidden = x !== id); }
function enterApp(city) {
  appOpen = true; ensureData(city); buildNav();
  showOverlay(null); $('userBar').hidden = false;
  $('userName').textContent = session.name; $('roleTag').textContent = t(ROLES[session.role]);
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  showView(h, { fromHistory: true }); // same guard on load/refresh as on every other navigation
}
function startSession(p) {
  const name = p.name.trim(), id = p.demoId ? 'demo:' + p.demoId : (pending && pending.uid) || 'local:' + name.toLowerCase().replace(/\s+/g, '-');
  if (!hasRole(p.role)) return;
  session = { name, role: p.role, userId: id };
  store.set(SESSION_KEY, session); history.replaceState(null, '', '#dashboard'); enterApp(p.city || '');
}
function signOutLocal() {
  store.del(SESSION_KEY); session = null; db = null; appOpen = false; currentView = null; editingLoad = null; selTruckId = null;
  if (chart) { chart.destroy(); chart = null; } if (map) { map.remove(); map = null; layer = null; }
  matched.clear(); lastResults = []; selectedId = null;
  put('viewRoot', ''); put('navBar', ''); $('userBar').hidden = true;
  history.replaceState(null, '', location.pathname + location.search); showOverlay('authOverlay');
}
function showProfile(user) {
  pending = { uid: user ? user.uid : null };
  $('pName').value = user ? (user.displayName || (user.email || '').split('@')[0]) : ''; $('pRole').value = ''; $('pCity').value = ''; $('pErr').textContent = '';
  showOverlay('profileOverlay');
}
$('profileForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('pName').value.trim(), role = $('pRole').value, city = $('pCity').value.trim(); let err = '';
  if (name.length < 2 || !/^[\p{L}0-9 .,&'-]+$/u.test(name)) err = 'Enter your name or company (letters, numbers, spaces).';
  else if (!hasRole(role)) err = 'Choose a role.';
  else if (city && !key(city)) err = 'Pick a base location from the list, or leave it blank.';
  $('pErr').textContent = err; if (err) return;
  startSession({ name, role, city: city ? key(city) : '' });
});
document.querySelectorAll('[data-demo]').forEach(b => b.onclick = () => startSession({ ...DEMO_USERS[b.dataset.demo], demoId: b.dataset.demo }));
$('profileBack').onclick = () => { showOverlay('authOverlay'); if (fbUser && fbm) fbm.signOut(fbAuth); };
const demoBtn = $('authOneClickDemo');
if (demoBtn) demoBtn.onclick = () => startSession({ ...DEMO_USERS.ramesh, demoId: 'ramesh' });
const offBtn = $('authOffline');
if (offBtn) offBtn.onclick = () => startSession({ ...DEMO_USERS.ramesh, demoId: 'ramesh' });
$('logoutBtn').onclick = () => { signOutLocal(); if (fbAuth && fbm) fbm.signOut(fbAuth).catch(() => {}); };
window.startSession = startSession;
window.showProfile = showProfile;
window.showOverlay = showOverlay;
window.DEMO_USERS = DEMO_USERS;
window.onFbUser = onFbUser;

document.addEventListener('click', e => {
  const n = e.target.closest('[data-nav]');
  if (n && session && appOpen) { showView(n.dataset.nav); return; }
  const b = e.target.closest('#viewRoot [data-act]'); if (!b || b.disabled || !session) return; const id = +b.dataset.id;
  switch (b.dataset.act) {
    case 'findTruck': findForTruck(id); break;
    case 'advance': advanceActive(); break;
    case 'oEdit': if (requireRole('cargo_owner')) { editingLoad = id; renderOwnerTable(); } break;
    case 'oCancelEdit': editingLoad = null; renderOwnerTable(); break;
    case 'oSave': saveOwnerPrice(id); break;
    case 'oCancel': cancelOwnerLoad(id); break;
    case 'oAdvance': advanceOwnerLoad(id); break;
    case 'opDeal': closeDeal(id); break;
    case 'simDeliver': if (db.active) { db.active.step = STEPS.length - 2; advanceActive(); } break;
    case 'markDel': {
      const tr = db.trucks.find(x => x.id === id);
      if (tr) { 
        tr.status = 'Available'; tr.lastCity = tr.lastCity || db.city || 'Bengaluru';
        delete tr.dismissedAlert; delete tr.snoozeUntil;
        if (db.active && db.active.truckId === tr.id) { db.active.step = STEPS.length - 2; advanceActive(); break; }
        toast(`Marked ${tr.reg} as Delivered in ${tr.lastCity}.`);
        checkAlerts(); saveDb();
        if (currentView === 'transporter/trucks') renderTrucks(); else refreshView();
      }
      break;
    }
    case 'alSnooze': { const tr = db.trucks.find(x=>x.reg === db.activeAlert.truck); if (tr) tr.snoozeUntil = Date.now() + 15*60*1000; checkAlerts(); renderAlerts(); saveDb(); break; }
    case 'alDismiss': { const tr = db.trucks.find(x=>x.reg === db.activeAlert.truck); if (tr) tr.dismissedAlert = true; checkAlerts(); renderAlerts(); saveDb(); break; }
    case 'alFind': {
      const tr = db.trucks.find(x=>x.reg === db.activeAlert.truck); 
      if (tr && db.activeAlert.best) {
        showView('transporter/matcher');
        setTimeout(() => {
          const ct = db.activeAlert.best.t;
          $('tFrom').value = ct.from; $('tTo').value = ct.to;
          $('tCap').value = ct.cap; $('tAvail').value = ct.avail; $('tType').value = ct.type; $('tTime').value = ct.time;
          findMatches();
          setTimeout(() => {
            const lId = db.activeAlert.best.load.id;
            const card = document.querySelector(`.card[data-id="${lId}"]`);
            if (card) { card.scrollIntoView({behavior: 'smooth'}); select(lId); }
          }, 800);
        }, 100);
      }
      break;
    }
  }
});
$('viewRoot').addEventListener('input', e => {
  if (['hStatus', 'hFrom', 'hTo', 'hSort'].includes(e.target.id) && canAccess('history')) renderHistory();
  else if (e.target.id === 'oStatus' && canAccess('myloads')) renderOwnerTable();
});
$('viewRoot').addEventListener('submit', e => { if (e.target.id === 'truckForm') addTruck(e); });
$('bellBtn').addEventListener('click', e => { e.stopPropagation(); $('bellDrop').hidden = !$('bellDrop').hidden; });
$('bellRead').addEventListener('click', e => {
  e.stopPropagation();
  if (db.notifications) db.notifications.forEach(n => n.read = true);
  saveDb(); renderBell(); $('bellDrop').hidden = true;
});
window.addEventListener('click', e => { if (!e.target.closest('#bellWrap')) { const b = $('bellDrop'); if (b) b.hidden = true; } });

const FB_MSG = {
  'auth/invalid-email': 'Enter a valid email address.', 'auth/invalid-credential': 'Incorrect email or password.',
  'auth/user-not-found': 'No account found for this email.', 'auth/wrong-password': 'Incorrect email or password.',
  'auth/email-already-in-use': 'An account with this email already exists.', 'auth/weak-password': 'Password must be at least 6 characters.',
  'auth/popup-closed-by-user': 'Google sign-in was cancelled.', 'auth/operation-not-allowed': 'This sign-in method is not enabled in the Firebase console.',
  'auth/unauthorized-domain': 'This domain is not authorized in Firebase Auth settings.', 'auth/too-many-requests': 'Too many attempts. Try again later.',
  'auth/network-request-failed': 'Network error. Use “Continue offline in demo mode” if you are offline.'
};
const authErr = e => { $('authErr').textContent = FB_MSG[e.code] || e.message; };
const authBusy = b => document.querySelectorAll('#authCard button').forEach(x => x.disabled = b);
function setAuthMode(m) {
  authMode = m;
  $('authTitle').textContent = m === 'login' ? 'Welcome back' : 'Create your account';
  $('authSubmit').textContent = m === 'login' ? 'Log in' : 'Sign up';
  $('authSwitchText').textContent = m === 'login' ? "Don't have an account?" : 'Already have an account?';
  $('authSwitch').textContent = m === 'login' ? 'Sign up' : 'Log in';
  $('authName').hidden = m === 'login'; $('authForgot').hidden = m !== 'login'; $('authErr').textContent = '';
}
function needFb() { if (fbm) return true; $('authErr').textContent = 'Sign-in service is unavailable (offline?). Use “Continue offline in demo mode”.'; return false; }
$('authForm').addEventListener('submit', async e => {
  e.preventDefault(); if (!needFb()) return;
  const email = $('authEmail').value.trim(), pass = $('authPass').value;
  $('authErr').textContent = ''; $('authInfo').textContent = ''; authBusy(true);
  try {
    if (authMode === 'login') await fbm.signInWithEmailAndPassword(fbAuth, email, pass);
    else {
      const c = await fbm.createUserWithEmailAndPassword(fbAuth, email, pass), n = $('authName').value.trim();
      if (n) await fbm.updateProfile(c.user, { displayName: n });
    }
  } catch (err) { authErr(err); }
  authBusy(false);
});
$('authGoogle').addEventListener('click', async () => {
  if (!needFb()) return; $('authErr').textContent = ''; authBusy(true);
  try { await fbm.signInWithPopup(fbAuth, new fbm.GoogleAuthProvider()); } catch (err) { authErr(err); }
  authBusy(false);
});
$('authSwitch').addEventListener('click', () => setAuthMode(authMode === 'login' ? 'signup' : 'login'));
$('authForgot').addEventListener('click', async () => {
  if (!needFb()) return; const email = $('authEmail').value.trim();
  if (!email) { $('authErr').textContent = 'Enter your email first.'; return; }
  try { await fbm.sendPasswordResetEmail(fbAuth, email); $('authErr').textContent = ''; $('authInfo').textContent = 'Password reset email sent.'; } catch (err) { authErr(err); }
});
function onFbUser(user) {
  fbUser = user;
  if (user) {
    if (session && session.userId === user.uid) { if (!appOpen) enterApp(); }
    else if (!session) { $('authForm').reset(); showProfile(user); }
    else if (!isOffline(session)) { signOutLocal(); showProfile(user); }   // a different Firebase user
  } else if (session && !isOffline(session) && appOpen) signOutLocal();    // signed out elsewhere
}
async function loadFirebase() {
  try {
    const base = `https://www.gstatic.com/firebasejs/${FB_VER}/`;
    const [a, au] = await Promise.all([import(base + 'firebase-app.js'), import(base + 'firebase-auth.js')]);
    fbm = au; fbAuth = au.getAuth(a.initializeApp(FB_CONFIG));
    au.onAuthStateChanged(fbAuth, onFbUser);
  } catch (e) { fbm = null; $('authInfo').textContent = 'Offline: sign-in service unavailable. You can still use demo mode.'; }
}

function initApp() {
  $('cities').innerHTML = Object.keys(CITIES).map(c => `<option value="${c}">`).join('');
  setAuthMode('login');
  const s = store.get(SESSION_KEY);
  if (validSession(s)) { session = { name: s.name.trim(), role: s.role, userId: s.userId }; enterApp(); } // restore role + view on refresh
  else { if (s !== null) store.del(SESSION_KEY); session = null; showOverlay('authOverlay'); } // missing/corrupt/unknown role
  loadFirebase();
}
initApp();






let amargolMetrics = {
  trucksArrived: 347,
  outboundLoads: 218,
  trucksMatched: 197,
  atRiskEmpty: 50,
  emptyReturnRate: '38% → 16%',
  revenueRecovered: '₹8.4L',
  emptyKmAvoided: 2840,
  fuelSavedL: 854,
  additionalRevenue: 142000,
  brokerFeesAvoided: 42500,
  co2AvoidedT: 2.1
};

let amargolTrucks = [
  { id: 'T-101', reg: 'KA-25-F-4421', cap: 12, avail: 8, dest: 'Bengaluru', status: 'Finding Load', statusKey: 'finding', badge: 'b-warn', type: 'Medium Cargo' },
  { id: 'T-102', reg: 'KA-26-E-1890', cap: 10, avail: 6, dest: 'Mysuru', status: 'Matched', statusKey: 'matched', badge: 'b-ok', type: 'Container' },
  { id: 'T-103', reg: 'KA-28-B-3102', cap: 16, avail: 14, dest: 'Belagavi', status: 'At Risk of Empty', statusKey: 'risk', badge: 'b-bad', type: 'Open Body' },
  { id: 'T-104', reg: 'KA-27-M-5512', cap: 14, avail: 7.2, dest: 'Bengaluru', status: 'Finding Load', statusKey: 'finding', badge: 'b-warn', type: 'Medium Cargo' },
  { id: 'T-105', reg: 'KA-25-P-9021', cap: 9, avail: 5, dest: 'Davangere', status: 'Matched', statusKey: 'matched', badge: 'b-ok', type: 'Medium Cargo' }
];

function yardHtml() {
  return `
    <div class="yard-wrapper">
      <div class="yard-header-banner">
        <div class="yhb-left">
          <span class="yhb-tag">🏢 APMC AMARGOL · LIVE YARD CONTROL</span>
          <h1>ಅಮರಗೋಳ ಎಪಿಎಂಸಿ ಯಾರ್ಡ್ — ಲೈವ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್</h1>
          <p class="yhb-sub">
            ಕರ್ನಾಟಕದ ಅತಿ ದೊಡ್ಡ ಸಗಟು ಮಾರುಕಟ್ಟೆ ಯಾರ್ಡ್ · Hubballi Logistics Hub · 
            <span class="live-dot-pulse">●</span> Real-time Inbound / Outbound Match Engine
          </p>
        </div>
        <div class="yhb-right">
          <button type="button" class="btn primary yhb-voice-cta" onclick="showView('transporter/saarathi')">
            🎙️ ಸಾರಥಿ AI ಧ್ವನಿ ಸಹಾಯಕ (Voice Copilot)
          </button>
        </div>
      </div>

      <div class="yard-metrics-grid">
        <div class="ym-card">
          <div class="ym-label">TRUCKS ARRIVED TODAY</div>
          <div class="ym-val" id="metricArrived">${amargolMetrics.trucksArrived}</div>
          <div class="ym-sub">ಇಂದು ಬಂದ ಒಟ್ಟು ಟ್ರಕ್‌ಗಳು (Peak season)</div>
        </div>

        <div class="ym-card">
          <div class="ym-label">OUTBOUND LOADS REGISTERED</div>
          <div class="ym-val highlight" id="metricOutbound">${amargolMetrics.outboundLoads}</div>
          <div class="ym-sub">ಅಮರಗೋಳ ಯಾರ್ಡ್‌ನ ಲಭ್ಯ ಸರಕುಗಳು</div>
        </div>

        <div class="ym-card">
          <div class="ym-label">TRUCKS MATCHED</div>
          <div class="ym-val success" id="metricMatched">${amargolMetrics.trucksMatched}</div>
          <div class="ym-sub">ವಾಪಸ್ ಸರಕು ಪಡೆದ ಟ್ರಕ್‌ಗಳು</div>
        </div>

        <div class="ym-card alert-risk">
          <div class="ym-label">AT RISK OF EMPTY RETURN</div>
          <div class="ym-val danger" id="metricRisk">${amargolMetrics.atRiskEmpty}</div>
          <div class="ym-sub">🔴 ಖಾಲಿ ವಾಪಸ್ ಹೋಗುವ ಅಪಾಯದಲ್ಲಿವೆ</div>
        </div>

        <div class="ym-card">
          <div class="ym-label">EMPTY RETURN RATE</div>
          <div class="ym-val rate-drop">${amargolMetrics.emptyReturnRate}</div>
          <div class="ym-sub">📉 BackHaul AI ನಿಂದ ಇಳಿಕೆ</div>
        </div>

        <div class="ym-card highlight-gold">
          <div class="ym-label">REVENUE RECOVERED</div>
          <div class="ym-val gold">${amargolMetrics.revenueRecovered}</div>
          <div class="ym-sub">💰 ಚಾಲಕರು ಮತ್ತು ರೈತರಿಗೆ ಉಳಿತಾಯ</div>
        </div>
      </div>

      <div class="seasonal-banner-card">
        <div class="sbc-left">
          <span class="sbc-badge">🌾 SEASONAL DEMAND INTELLIGENCE · ಪ್ರಸ್ತುತ ಸುಗ್ಗಿ ಋತು</span>
          <h3>October – January Peak Season: Onion & Potato Arrivals</h3>
          <p>
            ಅಮರಗೋಳ ಮಂಡಿಯಲ್ಲಿ ಪ್ರಸ್ತುತ ಈರುಳ್ಳಿ ಮತ್ತು ಆಲೂಗಡ್ಡೆ ಆವಕ ಗರಿಷ್ಠ ಪ್ರಮಾಣದಲ್ಲಿದೆ. 
            NH-48 ಕಾರಿಡಾರ್‌ನಲ್ಲಿ ಬೆಂಗಳೂರು ಮತ್ತು ಮೈಸೂರು ಮಾರ್ಗಗಳಿಗೆ ಹೆಚ್ಚಿನ ಬೇಡಿಕೆ ಇದೆ.
          </p>
        </div>
        <div class="sbc-pills">
          <div class="season-pill high">🧅 Onion — HIGH</div>
          <div class="season-pill high">🥔 Potato — HIGH</div>
          <div class="season-pill med">🌶️ Byadgi Chilli — MEDIUM</div>
          <div class="season-pill med">🌾 Cotton — MEDIUM</div>
        </div>
      </div>

      <div class="panel live-truck-board-panel">
        <div class="ltb-header">
          <div>
            <h2>🚛 LIVE TRUCK BOARD (ಅಮರಗೋಳ ಯಾರ್ಡ್‌ನಲ್ಲಿರುವ ವಾಹನಗಳು)</h2>
            <p class="hint">ಟ್ರಕ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ ತಕ್ಷಣ ಸಾರಥಿ AI ಮೂಲಕ ಹೊಂದಾಣಿಕೆ ವೀಕ್ಷಿಸಿ</p>
          </div>
          <div class="ltb-filters">
            <span class="badge b-ok">🟢 Matched</span>
            <span class="badge b-warn">🟡 Finding Load</span>
            <span class="badge b-bad">🔴 At Risk of Empty</span>
          </div>
        </div>

        <div class="tablewrap">
          <table class="truck-board-table">
            <thead>
              <tr>
                <th>ಟ್ರಕ್ ಸಂಖ್ಯೆ (Reg)</th>
                <th>ಸಾಮರ್ಥ್ಯ (Cap)</th>
                <th>ಲಭ್ಯ ತೂಕ (Available)</th>
                <th>ಗಮ್ಯಸ್ಥಾನ (Destination)</th>
                <th>ಸ್ಥಿತಿ (Status)</th>
                <th>ಕ್ರಮ (Action)</th>
              </tr>
            </thead>
            <tbody id="amargolTruckRows">
              ${amargolTrucks.map(t => `
                <tr data-truck-id="${t.id}" class="truck-row-item">
                  <td><b>${t.reg}</b> <small class="text-mute">(${t.type})</small></td>
                  <td>${t.cap} ಟನ್</td>
                  <td><span class="avail-weight-chip">${t.avail} ಟನ್ ಖಾಲಿ</span></td>
                  <td><b>${cityName(t.dest)}</b> (${t.dest})</td>
                  <td><span class="badge ${t.badge}">${t.status}</span></td>
                  <td>
                    <button type="button" class="btn sm primary action-match-truck" data-reg="${t.reg}" data-avail="${t.avail}" data-dest="${t.dest}">
                      ⚡ ಸರಕು ಹೊಂದಿಸಿ (Match Load)
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="panel impact-analytics-card">
        <h2>🌱 ಪರಿಸರ ಮತ್ತು ಆರ್ಥಿಕ ಪ್ರಭಾವ (Cumulative Impact & Savings)</h2>
        <p class="hint">BackHaul AI ನಿಂದ ತಪ್ಪಿಸಲಾದ ಖಾಲಿ ಕಿಲೋಮೀಟರ್‌ಗಳು ಮತ್ತು ಉಳಿತಾಯ</p>
        <div class="impact-metrics-row">
          <div class="im-box">
            <span class="im-num">2,840 km</span>
            <span class="im-text">EMPTY KM AVOIDED (ತಪ್ಪಿಸಿದ ಖಾಲಿ ಕಿ.ಮೀ)</span>
          </div>
          <div class="im-box">
            <span class="im-num">854 L</span>
            <span class="im-text">FUEL SAVED (ಉಳಿಸಿದ ಡೀಸೆಲ್)</span>
          </div>
          <div class="im-box">
            <span class="im-num">₹1.42L</span>
            <span class="im-text">ADDITIONAL REVENUE (ಹೆಚ್ಚುವರಿ ಆದಾಯ)</span>
          </div>
          <div class="im-box">
            <span class="im-num">₹42,500</span>
            <span class="im-text">BROKER FEES AVOIDED (ಉಳಿಸಿದ ದಲ್ಲಾಳಿ ಶುಲ್ಕ)</span>
          </div>
          <div class="im-box">
            <span class="im-num">2.1T</span>
            <span class="im-text">CO₂ EMISSIONS AVOIDED (ಕಾರ್ಬನ್ ಇಳಿಕೆ)</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initYard() {
  document.querySelectorAll('.action-match-truck').forEach(btn => {
    btn.onclick = () => {
      const reg = btn.dataset.reg;
      const avail = btn.dataset.avail;
      const dest = btn.dataset.dest;
      showView('transporter/saarathi');
      setTimeout(() => {
        const input = $('saarathiInput');
        const query = `ನನ್ನ ಗಾಡಿ ಅಮರಗೋಳಿಗೆ ಬಂದಿದೆ (${reg}). ${avail} ಟನ್ ಖಾಲಿ ಇದೆ. ${dest}ಗೆ ಹೋಗಬೇಕು.`;
        if (input) input.value = query;
        handleSaarathiUtterance(query);
      }, 200);
    };
  });
}

function driverHtml() {
  return `
    <div class="driver-mode-screen">
      <div class="driver-safety-bar">
        ⚠️ ವಾಹನ ಚಲಾಯಿಸುವಾಗ ಮೊಬೈಲ್ ಪರದೆ ನೋಡಬೇಡಿ (Do not use screen while driving)
      </div>

      <div class="driver-hero-voice">
        <div class="dh-title">ಚಾಲಕ ಮೋಡ್ · ಸಾರಥಿ ಧ್ವನಿ ಕೇಂದ್ರ</div>
        <p class="dh-sub">ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿ ಅಥವಾ ಕೆಳಗಿನ ಬಟನ್ ಬಳಸಿ</p>

        <button type="button" class="driver-giant-mic" id="driverGiantMicBtn" onclick="showView('transporter/saarathi')">
          <span class="d-mic-icon">🎙️</span>
          <span class="d-mic-text">ಮಾತನಾಡಿ / Speak</span>
        </button>

        <div class="driver-status-live">
          ಸಾರಥಿ ಸಿದ್ಧವಾಗಿದೆ (Saarathi Ready) · APMC Amargol Yard
        </div>
      </div>

      <div class="driver-action-grid">
        <button type="button" class="driver-big-btn bg-amber" onclick="showView('transporter/saarathi')">
          <span class="db-icon">📦</span>
          <span class="db-title">ಸರಕು ಹುಡುಕಿ</span>
          <span class="db-sub">Find Return Loads</span>
        </button>

        <button type="button" class="driver-big-btn bg-navy" onclick="showView('transporter/yard')">
          <span class="db-icon">🏢</span>
          <span class="db-title">ಅಮರಗೋಳ ಯಾರ್ಡ್</span>
          <span class="db-sub">Amargol Live Yard</span>
        </button>

        <button type="button" class="driver-big-btn bg-green" onclick="showView('transporter/matcher')">
          <span class="db-icon">💰</span>
          <span class="db-title">ಲಾಭ ಮತ್ತು ಬೆಲೆ</span>
          <span class="db-sub">Transparent Price</span>
        </button>

        <button type="button" class="driver-big-btn bg-slate" onclick="showView('transporter/trucks')">
          <span class="db-icon">📋</span>
          <span class="db-title">ನನ್ನ ಟ್ರಕ್ ವಿವರ</span>
          <span class="db-sub">My Truck Status</span>
        </button>
      </div>

      <div class="driver-footer-note">
        ನಂಬಿಕೆ ಮತ್ತು ಧ್ವನಿ ಆಧಾರಿತ ವ್ಯವಸ್ಥೆ · 0% ಬ್ರೋಕರ್ ಕಮಿಷನ್ · ದಲ್ಲಾಳಿ-ಮುಕ್ತ ನೇರ ಸಂಪರ್ಕ
      </div>
    </div>
  `;
}

function initDriver() {
}

function saarathiHtml() {
  return `
    <div class="saarathi-wrapper">
      <div class="saarathi-banner">
        <span class="warn-icon">⚠️</span>
        <span id="saarathiSafetyText">ವಾಹನ ಚಲಾಯಿಸುವಾಗ ಪರದೆಯನ್ನು ಬಳಸಬೇಡಿ (Do not use screen while driving).</span>
      </div>

      <div class="saarathi-hero-panel">
        <div class="saarathi-header-badge">ಸಾರಥಿ AI · LEAP SMART LOGISTICS</div>
        <h2 class="saarathi-title">ನಿಮ್ಮ ಪ್ರಯಾಣದ ಬುದ್ಧಿವಂತ ಸಂಗಾತಿ</h2>
        <p class="saarathi-subtitle">Voice-first outbound return load matching for APMC Amargol</p>

        <div class="saarathi-mic-wrapper">
          <div class="mic-pulse-ring" id="saarathiPulse1">✦</div>
          <button type="button" class="saarathi-mic-btn" id="saarathiMicBtn" aria-label="Start Voice Recording">
            🎙️
          </button>
          <div class="mic-pulse-ring" id="saarathiPulse2">✦</div>
        </div>
        
        <div class="saarathi-status-text" id="saarathiStatus">"🎙️ ಮಾತನಾಡಿ (Tap microphone to speak)"</div>

        <div class="saarathi-live-transcript-box" id="saarathiTranscriptBox" style="display:none;">
          <span class="slt-badge">LIVE VOICE:</span>
          <span class="slt-text" id="saarathiLiveTranscript">...</span>
        </div>
        
        <div class="saarathi-examples">
          <div class="ex-badge voice-chip" data-query="ನನ್ನ ಗಾಡಿ ಅಮರಗೋಳಿಗೆ ಬಂದಿದೆ. 8 ಟನ್ ಖಾಲಿ ಇದೆ. ಬೆಂಗಳೂರಿಗೆ ಹೋಗಬೇಕು.">
            🧅 ಕನ್ನಡ: "ನನ್ನ ಗಾಡಿ ಅಮರಗೋಳಿಗೆ ಬಂದಿದೆ. 8 ಟನ್ ಖಾಲಿ ಇದೆ. ಬೆಂಗಳೂರಿಗೆ ಹೋಗಬೇಕು."
          </div>
          <div class="ex-badge voice-chip" data-query="Hubli ge bandiddini, 8 ton empty ide, Bangalore ge hogbeku.">
            🗣️ Kanglish: "Hubli ge bandiddini, 8 ton empty ide, Bangalore ge hogbeku."
          </div>
          <div class="ex-badge voice-chip" data-query="My truck is at Amargol, 8 tons available, I need a load to Bangalore.">
            🇬🇧 English: "My truck is at Amargol, 8 tons available, I need a load to Bangalore."
          </div>
          <div class="ex-badge voice-chip" data-query="ಈ load ಯಾಕೆ best?">
            ❓ ಪ್ರಶ್ನೆ: "ಈ load ಯಾಕೆ best?"
          </div>
          <div class="ex-badge voice-chip" data-query="ಸರಕು ಸ್ವೀಕರಿಸಿ">
            ✅ ಆದೇಶ: "ಸರಕು ಸ್ವೀಕರಿಸಿ"
          </div>
        </div>
      </div>

      <div class="panel saarathi-chat-panel">
        <div id="saarathiChatLog" class="saarathi-chat-log">
          <div class="saarathi-msg assistant">
            <b>🚚 ಸಾರಥಿ AI (Saarathi Copilot):</b> ನಮಸ್ಕಾರ ಚಾಲಕರೇ! ನಿಮ್ಮ ವಾಹನ ಅಮರಗೋಳ ಯಾರ್ಡ್‌ನಲ್ಲಿದ್ದರೆ ಅಥವಾ ಎಲ್ಲೇ ಇದ್ದರೂ ಧ್ವನಿಯಲ್ಲಿ ಹೇಳಿ. ಉದಾಹರಣೆಗೆ: <i>"ನನ್ನ ಗಾಡಿ ಅಮರಗೋಳಿಗೆ ಬಂದಿದೆ. 8 ಟನ್ ಖಾಲಿ ಇದೆ. ಬೆಂಗಳೂರಿಗೆ ಹೋಗಬೇಕು."</i>
          </div>
        </div>
        
        <form id="saarathiForm" class="saarathi-input-row">
          <input type="text" id="saarathiInput" class="saarathi-input" placeholder="ಉದಾ: ನನ್ನ ಗಾಡಿ ಅಮರಗೋಳಿಗೆ ಬಂದಿದೆ. 8 ಟನ್ ಖಾಲಿ ಇದೆ. ಬೆಂಗಳೂರಿಗೆ ಹೋಗಬೇಕು..." autocomplete="off" />
          <button type="submit" class="btn primary saarathi-send-btn" id="saarathiSendBtn">
            ಕಳುಹಿಸಿ / Send 🚀
          </button>
        </form>
      </div>

      <div id="saarathiPlanOutput" class="saarathi-plan-container" style="display:none;"></div>
    </div>
  `;
}

function initSaarathi() {
  const micBtn = $('saarathiMicBtn');
  const statusEl = $('saarathiStatus');
  const form = $('saarathiForm');
  const input = $('saarathiInput');
  const chatLog = $('saarathiChatLog');
  const transcriptBox = $('saarathiTranscriptBox');
  const liveTranscriptEl = $('saarathiLiveTranscript');

  if (!micBtn || !form) return;

  document.querySelectorAll('.voice-chip').forEach(badge => {
    badge.style.cursor = 'pointer';
    badge.onclick = () => {
      const text = badge.dataset.query;
      if (text) {
        if (input) input.value = text;
        handleSaarathiUtterance(text);
      }
    };
  });

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    saarathiRec = new SpeechRecognition();
    saarathiRec.continuous = false;
    saarathiRec.interimResults = true;
    saarathiRec.lang = LANG === 'kn' ? 'kn-IN' : 'en-IN';

    saarathiRec.onstart = () => {
      isListening = true;
      micBtn.classList.add('listening');
      playMicTone('start');
      if (statusEl) statusEl.innerHTML = '<span style="color:#ef4444; font-weight:700;">🔴 ಕೇಳುತ್ತಿದ್ದೇನೆ... (Listening...)</span>';
      if (transcriptBox) transcriptBox.style.display = 'block';
    };

    saarathiRec.onresult = (event) => {
      let transcript = '';
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      if (liveTranscriptEl) liveTranscriptEl.textContent = transcript;
      if (input) input.value = transcript;
    };

    saarathiRec.onerror = (e) => {
      console.warn('Speech recognition error:', e.error);
      isListening = false;
      micBtn.classList.remove('listening');
      if (statusEl) statusEl.textContent = '"🎙️ ಮಾತನಾಡಿ (Tap microphone to speak)"';
      if (e.error !== 'no-speech') {
        toast('Voice input: ' + e.error + '. You can also type or use quick chips.');
      }
    };

    saarathiRec.onend = () => {
      isListening = false;
      micBtn.classList.remove('listening');
      playMicTone('stop');
      if (statusEl) statusEl.textContent = '"🎙️ ಮಾತನಾಡಿ (Tap microphone to speak)"';
      if (input && input.value.trim()) {
        const q = input.value.trim();
        handleSaarathiUtterance(q);
      }
    };

    micBtn.onclick = () => {
      if (isListening) {
        saarathiRec.stop();
      } else {
        saarathiRec.lang = LANG === 'kn' ? 'kn-IN' : 'en-IN';
        try {
          saarathiRec.start();
        } catch (err) {
          console.warn('Rec start error:', err);
        }
      }
    };
  } else {
    micBtn.onclick = () => {
      toast('Speech recognition not available on this browser. Use the quick voice chips or type below.');
    };
  }

  form.onsubmit = (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    handleSaarathiUtterance(text);
  };
}

function playMicTone(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.connect(g);
    g.connect(ctx.destination);
    if (type === 'start') {
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
    } else {
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.15);
    }
    g.gain.setValueAtTime(0.1, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc.start();
    osc.stop(ctx.currentTime + 0.16);
  } catch(e) {}
}

function renderAgenticReasoningSteps(steps) {
  if (!steps || !steps.length) return '';
  return `
    <div class="agentic-reasoning-card">
      <div class="arc-head">🧠 ಸಾರಥಿ ನಿರ್ಧಾರ ಪ್ರಕ್ರಿಯೆ (Reasoning Workflow)</div>
      <div class="arc-steps">
        ${steps.map((s, i) => `
          <div class="arc-step">
            <span class="step-num">${i + 1}</span>
            <span class="step-text">${esc(s)}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function handleSaarathiUtterance(userText) {
  const chatLog = $('saarathiChatLog');
  const input = $('saarathiInput');
  const statusEl = $('saarathiStatus');
  if (input) input.value = '';

  if (statusEl) {
    statusEl.innerHTML = '<span style="color:#f59e0b; font-weight:700;">🧠 ಸಾರಥಿ ಯೋಚಿಸುತ್ತಿದೆ... (Analyzing with Gemini AI...)</span>';
  }

  if (chatLog) {
    const userDiv = document.createElement('div');
    userDiv.className = 'saarathi-msg user';
    userDiv.innerHTML = `<b>👤 ಚಾಲಕ (Driver):</b> ${esc(userText)}`;
    chatLog.appendChild(userDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'saarathi-msg assistant loading';
  loadingDiv.innerHTML = `<b>🚚 ಸಾರಥಿ AI:</b> <span>ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ... ⏳</span>`;
  if (chatLog) {
    chatLog.appendChild(loadingDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  fetch('/api/saarathi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userText, lang: LANG })
  })
  .then(res => res.json())
  .then(resp => {
    if (loadingDiv.parentNode) loadingDiv.parentNode.removeChild(loadingDiv);
    if (statusEl) statusEl.innerHTML = '<span style="color:#10b981; font-weight:700;">🟢 3 ಸರಕುಗಳು ಸಿಕ್ಕಿವೆ (3 matching loads found)</span>';
    if (resp && resp.data) {
      processSaarathiResponse(userText, resp.data);
    } else {
      processSaarathiFallback(userText);
    }
  })
  .catch(err => {
    console.warn('API error, using local logic:', err);
    if (loadingDiv.parentNode) loadingDiv.parentNode.removeChild(loadingDiv);
    if (statusEl) statusEl.innerHTML = '<span style="color:#10b981; font-weight:700;">🟢 3 ಸರಕುಗಳು ಸಿಕ್ಕಿವೆ (3 matching loads found)</span>';
    processSaarathiFallback(userText);
  });
}

function processSaarathiResponse(userText, data) {
  let location = data.location || data.origin || 'APMC Amargol';
  let destination = data.destination || 'Bengaluru';
  let capacity = data.available_capacity_tons || 8;
  let departure_time = data.departure_time || '07:00';
  let dateStr = data.date || 'tomorrow';
  let intent = data.intent || 'FIND_OUTBOUND_LOAD';
  let steps = data.agentic_steps || [
    'Driver utterance recognized by Gemini AI',
    `Identified Location: ${location}, Capacity: ${capacity}t, Target: ${destination}`,
    'Queried APMC Amargol Outbound Marketplace'
  ];

  buildAndRenderJourneyPlan(location, destination, capacity, departure_time, dateStr, data.reply, intent, steps);
}

function processSaarathiFallback(userText) {
  const lower = userText.toLowerCase();
  let location = 'APMC Amargol';
  let destination = 'Bengaluru';
  let capacity = 8;
  let departure_time = '07:00';
  let intent = 'FIND_OUTBOUND_LOAD';

  const capMatch = userText.match(/(\d+(?:\.\d+)?)\s*(?:ton|tons|ಟನ್|ಟನ್ನು| tonnes)/i);
  if (capMatch) capacity = parseFloat(capMatch[1]);

  if (lower.includes('accept') || lower.includes('book') || lower.includes('oppuko') || lower.includes('ಸ್ವೀಕರಿಸಿ')) {
    intent = 'ACCEPT_MATCH';
  } else if (lower.includes('why') || lower.includes('ಯಾಕೆ') || lower.includes('best')) {
    intent = 'EXPLAIN_BEST';
  }

  if (lower.includes('mysuru') || lower.includes('mysore') || lower.includes('ಮೈಸೂರು')) destination = 'Mysuru';
  else if (lower.includes('belagavi') || lower.includes('belgaum') || lower.includes('ಬೆಳಗಾವಿ')) destination = 'Belagavi';
  else if (lower.includes('davangere') || lower.includes('ದಾವಣಗೆರೆ')) destination = 'Davangere';
  else if (lower.includes('bengaluru') || lower.includes('bangalore') || lower.includes('ಬೆಂಗಳೂರು')) destination = 'Bengaluru';

  const steps = [
    `Local Fallback Parser Active`,
    `Extracted Corridor: ${location} ➔ ${destination}`,
    `Truck Capacity: ${capacity} Tons`,
    'Running BackHaul Optimization Engine on APMC Amargol Data'
  ];

  buildAndRenderJourneyPlan(location, destination, capacity, departure_time, 'tomorrow', null, intent, steps);
}

function buildAndRenderJourneyPlan(origin, destination, capacity, departure_time, dateStr, customReply, intent, steps) {
  const chatLog = $('saarathiChatLog');
  const planBox = $('saarathiPlanOutput');

  const findCityKey = (name) => {
    if (!name) return 'APMC Amargol';
    const lower = name.toLowerCase();
    if (lower.includes('amargol') || lower.includes('ಅಮರಗೋಳ')) return 'APMC Amargol';
    if (lower.includes('beng') || lower.includes('bang') || lower.includes('ಬೆಂಗಳೂರು')) return 'Bengaluru';
    if (lower.includes('mys') || lower.includes('ಮೈಸೂರು')) return 'Mysuru';
    if (lower.includes('belg') || lower.includes('bela') || lower.includes('ಬೆಳಗಾವಿ')) return 'Belagavi';
    if (lower.includes('davan') || lower.includes('ದಾವಣಗೆರೆ')) return 'Davangere';
    const match = Object.keys(CITIES).find(c => c.toLowerCase() === lower);
    return match || 'APMC Amargol';
  };

  const originKey = findCityKey(origin);
  const destKey = findCityKey(destination);

  const distKm = Math.round(dist(originKey, destKey)) || 410;
  const travelHrs = Math.floor(distKm / 60);
  const travelMins = Math.round(((distKm / 60) - travelHrs) * 60);
  const timeStr = `${travelHrs}h ${travelMins}m (${travelHrs}ಗಂ ${travelMins}ನಿ)`;

  const fuelLitres = Math.round(distKm * 0.30);
  const fuelCost = Math.round(fuelLitres * 92);

  const currentTruck = {
    from: originKey,
    to: destKey,
    cap: Math.max(10, capacity + 2),
    avail: capacity,
    type: 'Medium Cargo',
    time: departure_time
  };

  let corridorLoads = loads.filter(l => !matched.has(l.id));
  const ranked = rankLoads(currentTruck, corridorLoads);

  const top3 = ranked.slice(0, 3);
  const bestMatch = top3[0] || null;
  const bestLoad = bestMatch ? bestMatch.l : loads[0];
  const bestScore = bestMatch ? bestMatch.r.score : 94;

  const secondMatch = top3[1] || null;
  const thirdMatch = top3[2] || null;

  const cargoFreight = bestLoad ? bestLoad.price : 18500;
  const brokerFee = 0;
  const estFuel = 4200;
  const estDetour = 500;
  const netEarnings = cargoFreight - brokerFee - estFuel - estDetour;

  const knOrigin = cityName(originKey);
  const knDest = cityName(destKey);

  const speakText = customReply || (LANG === 'kn' ?
    `ಸರಿ. ನಿಮ್ಮ ${capacity} ಟನ್ ಗಾಡಿಗೆ ಅಮರಗೋಳದಿಂದ ${knDest}ಗೆ 3 ಸರಕುಗಳು ಸಿಕ್ಕಿವೆ. ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆ ${bestScore} ಶೇಕಡಾ. 7.2 ಟನ್ ಈರುಳ್ಳಿ ಬೆಂಗಳೂರಿಗೆ ಹೋಗುತ್ತದೆ. ದರ ₹${num(cargoFreight)}. ಅಂದಾಜು ನಿವ್ವಳ ಆದಾಯ ₹${num(netEarnings)}. ಬ್ರೋಕರ್ ಕಮಿಷನ್ ಶೂನ್ಯ. ಈ ಸರಕನ್ನು ಸ್ವೀಕರಿಸಲು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ.` :
    `Got it. Found 3 outbound loads for your ${capacity} ton truck from Amargol to ${destKey}. Top match is ${bestScore} percent. 7.2 tons onion to Bengaluru at ₹${num(cargoFreight)}. Estimated net earnings ₹${num(netEarnings)} with zero broker fees. Recommended to accept.`
  );

  if (chatLog) {
    const respDiv = document.createElement('div');
    respDiv.className = 'saarathi-msg assistant';
    respDiv.innerHTML = `<b>🚚 ಸಾರಥಿ AI:</b> ${esc(speakText)}`;
    chatLog.appendChild(respDiv);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  speakSaarathi(speakText);

  if (intent === 'ACCEPT_MATCH') {
    if (bestLoad) {
      confirmLoadAcceptance(bestLoad.id);
    }
    return;
  }

  if (planBox) {
    planBox.style.display = 'block';
    planBox.innerHTML = `
      <div class="saarathi-command-center">
        ${renderAgenticReasoningSteps(steps)}

        <div class="saarathi-cc-header">
          <div class="cc-tag">🎯 ಸಾರಥಿ ಹೊಣೆಗಾರಿಕೆ ಫಲಿತಾಂಶ (MATCH RESULTS)</div>
          <h2>${knOrigin} ➔ ${knDest}</h2>
          <div class="cc-sub-meta">
            🚛 ಟ್ರಕ್ ಲಭ್ಯತೆ: <b>${capacity} ಟನ್</b> &nbsp;|&nbsp; 
            📅 ದಿನಾಂಕ: <b>${dateStr === 'tomorrow' ? 'ನಾಳೆ (Tomorrow)' : 'ಇಂದು (Today)'}</b> &nbsp;|&nbsp; 
            🕖 ನಿರ್ಗಮನ: <b>${departure_time} AM</b>
          </div>
        </div>

        <div class="recommendations-container">
          <div class="rec-section-title">
            <h3>⭐ ನಿಮ್ಮ ವಾಹನಕ್ಕೆ ಲಭ್ಯವಿರುವ ಅತ್ಯುತ್ತಮ 3 ಸರಕುಗಳು (Top 3 Recommendations)</h3>
            <span class="badge b-ok">3 Outbound Loads Found</span>
          </div>

          <div class="top3-cards-grid">
            ${bestLoad ? `
              <div class="rec-card best-match-card">
                <div class="rm-badge-top">🌟 CARD 1 — BEST MATCH (ಅತ್ಯುತ್ತಮ ಹೊಂದಾಣಿಕೆ)</div>
                <div class="rm-head">
                  <div class="rm-icon-title">
                    <span class="cargo-emoji">🧅</span>
                    <div>
                      <h4 class="rm-cargo-name">${cargoName(bestLoad.type)}</h4>
                      <div class="rm-corridor">${cityName(bestLoad.from)} ➔ ${cityName(bestLoad.to)}</div>
                    </div>
                  </div>
                  <div class="rm-score-circle">
                    <span class="r-score-val">${bestScore}%</span>
                    <span class="r-score-sub">Match</span>
                  </div>
                </div>

                <div class="rm-meta-chips">
                  <span class="chip">⚖️ ${bestLoad.weight} ಟನ್</span>
                  <span class="chip font-bold green">💵 ₹${num(bestLoad.price)}</span>
                  <span class="chip net-earn-chip">💰 ನಿವ್ವಳ ಲಾಭ: ₹${num(netEarnings)}</span>
                </div>

                <div class="score-breakdown-box">
                  <div class="sbb-title">ಹೊಂದಾಣಿಕೆ ಅಂಕಗಳ ವಿವರ (Score Breakdown):</div>
                  <div class="sbb-grid">
                    <div class="sbb-item"><span>Capacity</span><b>25/25</b><div class="sbb-bar"><i style="width:100%"></i></div></div>
                    <div class="sbb-item"><span>Route</span><b>24/25</b><div class="sbb-bar"><i style="width:96%"></i></div></div>
                    <div class="sbb-item"><span>Detour</span><b>18/20</b><div class="sbb-bar"><i style="width:90%"></i></div></div>
                    <div class="sbb-item"><span>Price</span><b>15/15</b><div class="sbb-bar"><i style="width:100%"></i></div></div>
                    <div class="sbb-item"><span>Deadline</span><b>12/15</b><div class="sbb-bar"><i style="width:80%"></i></div></div>
                  </div>
                </div>

                <div class="rm-action-row">
                  <button type="button" class="btn primary saarathi-accept-btn" id="cardAcceptBtn" data-load-id="${bestLoad.id}">
                    ✅ ಸರಕು ಸ್ವೀಕರಿಸಿ (ACCEPT LOAD)
                  </button>
                  <button type="button" class="btn outline saarathi-route-btn" id="cardRouteBtn">
                    🗺️ ಮಾರ್ಗ ನೋಡಿ (VIEW ROUTE)
                  </button>
                </div>
              </div>
            ` : ''}

            ${secondMatch ? `
              <div class="rec-card standard-card">
                <div class="rm-badge-top secondary">CARD 2 (ದ್ವಿತೀಯ ಆಯ್ಕೆ)</div>
                <div class="rm-head">
                  <div class="rm-icon-title">
                    <span class="cargo-emoji">🥔</span>
                    <div>
                      <h4 class="rm-cargo-name">${cargoName(secondMatch.l.type)}</h4>
                      <div class="rm-corridor">${cityName(secondMatch.l.from)} ➔ ${cityName(secondMatch.l.to)}</div>
                    </div>
                  </div>
                  <div class="rm-score-circle secondary">
                    <span class="r-score-val">${secondMatch.r.score}%</span>
                    <span class="r-score-sub">Match</span>
                  </div>
                </div>

                <div class="rm-meta-chips">
                  <span class="chip">⚖️ ${secondMatch.l.weight} ಟನ್</span>
                  <span class="chip green">💵 ₹${num(secondMatch.l.price)}</span>
                  <span class="chip">💰 ನಿವ್ವಳ: ₹11,200</span>
                </div>

                <div class="rm-action-row single">
                  <button type="button" class="btn secondary" onclick="confirmLoadAcceptance(${secondMatch.l.id})">
                    ಸರಕು ಸ್ವೀಕರಿಸಿ (Accept)
                  </button>
                </div>
              </div>
            ` : ''}

            ${thirdMatch ? `
              <div class="rec-card standard-card">
                <div class="rm-badge-top secondary">CARD 3 (ತೃತೀಯ ಆಯ್ಕೆ)</div>
                <div class="rm-head">
                  <div class="rm-icon-title">
                    <span class="cargo-emoji">🌶️</span>
                    <div>
                      <h4 class="rm-cargo-name">${cargoName(thirdMatch.l.type)}</h4>
                      <div class="rm-corridor">${cityName(thirdMatch.l.from)} ➔ ${cityName(thirdMatch.l.to)}</div>
                    </div>
                  </div>
                  <div class="rm-score-circle secondary">
                    <span class="r-score-val">${thirdMatch.r.score}%</span>
                    <span class="r-score-sub">Match</span>
                  </div>
                </div>

                <div class="rm-meta-chips">
                  <span class="chip">⚖️ ${thirdMatch.l.weight} ಟನ್</span>
                  <span class="chip green">💵 ₹${num(thirdMatch.l.price)}</span>
                  <span class="chip">💰 ನಿವ್ವಳ: ₹14,600</span>
                </div>

                <div class="rm-action-row single">
                  <button type="button" class="btn secondary" onclick="confirmLoadAcceptance(${thirdMatch.l.id})">
                    ಸರಕು ಸ್ವೀಕರಿಸಿ (Accept)
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <div class="pricing-transparent-card">
          <div class="ptc-head">
            <span class="ptc-badge">💰 TRANSPARENT TRIP PRICING</span>
            <h3>ಪಾರದರ್ಶಕ ದರ ವಿವರ (ಯಾವುದೇ ರಹಸ್ಯ ದಲ್ಲಾಳಿ ಕಮಿಷನ್ ಇಲ್ಲ)</h3>
            <p class="ptc-sub">ಬ್ರೋಕರ್ ₹1,500 ಕಡಿತ ಮಾಡದೆ ನೇರವಾಗಿ ಸಂಪೂರ್ಣ ಆದಾಯ ಚಾಲಕರಿಗೆ ಸಿಗುತ್ತದೆ</p>
          </div>

          <div class="ptc-grid">
            <div class="ptc-breakdown">
              <div class="ptc-line">
                <span>Cargo Freight (ಸರಕು ಬಾಡಿಗೆ):</span>
                <b class="pos">+₹${num(cargoFreight)}</b>
              </div>
              <div class="ptc-line">
                <span>Broker Commission (ದಲ್ಲಾಳಿ ಶುಲ್ಕ):</span>
                <b class="zero-fee">₹0 (Zero Fee!)</b>
              </div>
              <div class="ptc-line">
                <span>Estimated Fuel (ಅಂದಾಜು ಇಂಧನ ವೆಚ್ಚ):</span>
                <b class="neg">-₹${num(estFuel)}</b>
              </div>
              <div class="ptc-line">
                <span>Estimated Detour (ಅಂದಾಜು ಡಿಟೂರ್ ವೆಚ್ಚ):</span>
                <b class="neg">-₹${num(estDetour)}</b>
              </div>
              <div class="ptc-total-line">
                <span>Estimated Net Earnings (ನಿವ್ವಳ ಗಳಿಕೆ):</span>
                <span class="highlight-net">₹${num(netEarnings)}</span>
              </div>
            </div>

            <div class="ptc-compare-box">
              <div class="pcb-title">ಸಾಂಪ್ರದಾಯಿಕ ದಲ್ಲಾಳಿ vs BackHaul AI</div>
              <div class="pcb-row">
                <div class="pcb-item broker">
                  <span class="lbl">ಸಾಂಪ್ರದಾಯಿಕ ದಲ್ಲಾಳಿ</span>
                  <div class="val">₹${num(cargoFreight)}</div>
                  <div class="deduct">- ₹1,500 ಕಮಿಷನ್</div>
                  <div class="final">₹17,000 ಆದಾಯ</div>
                </div>
                <div class="pcb-item backhaul">
                  <span class="lbl">BackHaul AI</span>
                  <div class="val">₹${num(cargoFreight)}</div>
                  <div class="deduct green">₹0 ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಶುಲ್ಕ</div>
                  <div class="final green">₹18,500 ಉಳಿತಾಯ!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sarathi-advice-card">
          <div class="sac-head">
            <span class="sac-icon">🧠</span>
            <h4>ಸಾರಥಿಯ ಸಲಹೆ (Saarathi's Recommendation)</h4>
          </div>
          <div class="sac-body">
            <p class="sac-intro">ನಿಮ್ಮ ಟ್ರಕ್ಗೆ ಈ ಸರಕು ಅತ್ಯುತ್ತಮವಾಗಿ ಹೊಂದಿಕೆಯಾಗುತ್ತದೆ:</p>
            <ul class="sac-checklist">
              <li>✓ <b>7.2 ಟನ್</b> ನಿಮ್ಮ ಲಭ್ಯ ಸಾಮರ್ಥ್ಯಕ್ಕೆ (${capacity} ಟನ್) ನಿಖರವಾಗಿ ಸರಿಹೊಂದುತ್ತದೆ</li>
              <li>✓ Pickup location ಹತ್ತಿರದಲ್ಲಿದೆ (<b>APMC Amargol Gate 2</b>)</li>
              <li>✓ <b>Bengaluru route</b> ನೇರ ರಾಷ್ಟ್ರೀಯ ಹೆದ್ದಾರಿ NH-48 ಕಾರಿಡಾರ್‌ನಲ್ಲಿದೆ</li>
              <li>✓ Detour ಕೇವಲ <b>12 km</b> ಮಾತ್ರ (ಕನಿಷ್ಠ ಇಂಧನ ಬಳಕೆ)</li>
              <li>✓ Estimated revenue <b>₹18,500</b> ಸಂಪೂರ್ಣವಾಗಿ ನಿಮಗೆ ದೊರೆಯುತ್ತದೆ</li>
              <li>✓ <b>Broker commission ಇಲ್ಲ (₹0)</b> — ₹1,500 ಉಳಿತಾಯ</li>
            </ul>
            <div class="sac-footer-callout">
              👉 <b>ತೀರ್ಮಾನ:</b> ಈ ಸರಕನ್ನು ಸ್ವೀಕರಿಸಿ, ಖಾಲಿ ವಾಹನ ತರುವುದನ್ನು ತಪ್ಪಿಸಿ ₹13,800 ನಿವ್ವಳ ಲಾಭ ಗಳಿಸಲು ಶಿಫಾರಸು ಮಾಡುತ್ತೇವೆ.
            </div>
          </div>
        </div>

        <div class="panel saarathi-map-panel" id="saarathiMapWrapper">
          <div class="smp-head">
            <h3>🗺️ ಪ್ರಯಾಣದ ಮಾರ್ಗ ನಕ್ಷೆ (Route & Navigation)</h3>
            <span class="smp-stats">APMC Amargol ➔ ${destKey} · ${distKm} km · ${timeStr}</span>
          </div>
          <div id="saarathiMap" style="height:320px; border-radius:10px;"></div>
        </div>
      </div>
    `;

    setTimeout(() => {
      initSaarathiMap(originKey, destKey);
    }, 100);

    const acceptBtn = $('cardAcceptBtn');
    if (acceptBtn && bestLoad) {
      acceptBtn.onclick = () => confirmLoadAcceptance(bestLoad.id);
    }

    const routeBtn = $('cardRouteBtn');
    if (routeBtn) {
      routeBtn.onclick = () => {
        const mapEl = $('saarathiMapWrapper');
        if (mapEl) mapEl.scrollIntoView({ behavior: 'smooth' });
      };
    }

    planBox.scrollIntoView({ behavior: 'smooth' });
  }
}

let sMap = null;
function initSaarathiMap(originKey, destKey) {
  const mapEl = $('saarathiMap');
  if (!mapEl || typeof L === 'undefined') return;

  if (sMap) {
    sMap.remove();
    sMap = null;
  }

  const oCoord = CITIES[originKey] || [15.3956, 75.0934];
  const dCoord = CITIES[destKey] || [12.9716, 77.5946];

  sMap = L.map('saarathiMap', { attributionControl: false }).setView(oCoord, 7);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(sMap);

  const oIcon = L.divIcon({ className: 'custom-map-pin start', html: '📍 Amargol', iconSize: [80, 24] });
  const dIcon = L.divIcon({ className: 'custom-map-pin end', html: `🏁 ${destKey}`, iconSize: [80, 24] });

  L.marker(oCoord, { icon: oIcon }).addTo(sMap).bindPopup(`<b>ಆರಂಭ: ${originKey}</b><br>APMC Yard, Hubballi`).openPopup();
  L.marker(dCoord, { icon: dIcon }).addTo(sMap).bindPopup(`<b>ತಲುಪುವ ಸ್ಥಳ: ${destKey}</b>`);

  const polyline = L.polyline([oCoord, dCoord], { color: '#16a34a', weight: 5, dashArray: '8, 8' }).addTo(sMap);
  sMap.fitBounds(polyline.getBounds(), { padding: [40, 40] });
}

function confirmLoadAcceptance(loadId) {
  const l = loads.find(x => x.id === loadId);
  if (!l) return;

  matched.add(loadId);

  amargolMetrics.atRiskEmpty = Math.max(0, amargolMetrics.atRiskEmpty - 1);
  amargolMetrics.trucksMatched += 1;
  const truck = amargolTrucks.find(t => t.statusKey === 'finding') || amargolTrucks[0];
  if (truck) {
    truck.status = 'Matched';
    truck.statusKey = 'matched';
    truck.badge = 'b-ok';
  }

  if (db && db.trucks && db.trucks.length) {
    db.trucks[0].status = 'Matched';
    if (!db.history) db.history = [];
    db.history.unshift({
      date: todayStr(),
      from: l.from,
      to: l.to,
      type: l.type,
      weight: l.weight,
      price: l.price,
      status: 'Matched',
      net: 13800
    });
    saveDb();
  }

  showLoadConfirmedModal(l);

  const voiceMsg = LANG === 'kn' ?
    `ಅಭಿನಂದನೆಗಳು! ${cityName(l.from)}ಯಿಂದ ${cityName(l.to)}ಗೆ ${cargoName(l.type)} ಸರಕು ಯಶಸ್ವಿಯಾಗಿ ಖಚಿತಪಟ್ಟಿದೆ. ಖಾಲಿ ಪ್ರಯಾಣ ತಪ್ಪಿಸಲಾಗಿದೆ!` :
    `Congratulations! Return load confirmed for ${l.type} from ${l.from} to ${l.to}. Empty return trip avoided!`;
  speakSaarathi(voiceMsg);
}

function showLoadConfirmedModal(l) {
  let modal = $('loadConfirmedModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'loadConfirmedModal';
    modal.className = 'load-confirm-overlay';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="load-confirm-card">
      <div class="lcc-badge">🟢 LOAD CONFIRMED (ಲೋಡ್ ಖಚಿತವಾಗಿದೆ)</div>
      <div class="lcc-icon">✅</div>
      <h2>ಹೊಂದಾಣಿಕೆ ಯಶಸ್ವಿಯಾಗಿದೆ!</h2>
      <p class="lcc-sub">ಖಾಲಿ ಪ್ರಯಾಣ ತಪ್ಪಿಸಲಾಗಿದೆ · Empty Return Trip Avoided</p>

      <div class="lcc-details-box">
        <div class="lcd-row"><span>ವಾಹನ (Truck):</span> <b>KA-25-F-4421</b></div>
        <div class="lcd-row"><span>ಸರಕು (Cargo):</span> <b>${cargoName(l.type)} (${l.weight} ಟನ್)</b></div>
        <div class="lcd-row"><span>ಮಾರ್ಗ (Route):</span> <b>${cityName(l.from)} ➔ ${cityName(l.to)}</b></div>
        <div class="lcd-row"><span>ಒಟ್ಟು ಬಾಡಿಗೆ (Revenue):</span> <b class="green">+₹${num(l.price)}</b></div>
        <div class="lcd-row"><span>ದಲ್ಲಾಳಿ ಕಮಿಷನ್ (Broker Fee):</span> <b class="green">₹0 (Zero Fee)</b></div>
        <div class="lcd-row net"><span>ನಿವ್ವಳ ಆದಾಯ (Net Earnings):</span> <b class="gold">₹13,800</b></div>
        <div class="lcd-row"><span>ಸ್ಥಿತಿ (Status):</span> <span class="badge b-ok">🟢 MATCH CONFIRMED</span></div>
      </div>

      <div class="lcc-action-row">
        <button type="button" class="btn primary" onclick="closeLoadConfirmedModal()">
          ಸರಿ, ಮುಂದುವರಿಯಿರಿ (Done) 👍
        </button>
      </div>
    </div>
  `;

  modal.style.display = 'flex';
}

function closeLoadConfirmedModal() {
  const modal = $('loadConfirmedModal');
  if (modal) modal.style.display = 'none';
  toast('ಲೋಡ್ ಯಶಸ್ವಿಯಾಗಿ ನಿಗದಿಯಾಗಿದೆ!');
  showView('transporter/yard');
function speakSaarathi(text) {
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANG === 'kn' ? 'kn-IN' : 'en-IN';
    u.rate = 0.95;
    const voices = speechSynthesis.getVoices();
    if (LANG === 'kn') {
      const knVoice = voices.find(v => v.lang && v.lang.toLowerCase().includes('kn'));
      if (knVoice) u.voice = knVoice;
    } else {
      const enVoice = voices.find(v => v.lang && v.lang.toLowerCase().includes('en-in'));
      if (enVoice) u.voice = enVoice;
    }
    speechSynthesis.speak(u);
  } catch(e) {
    console.warn('SpeechSynthesis error:', e);
  }
}

if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => {
    try { speechSynthesis.getVoices(); } catch(e) {}
  };
}


const futureDateStr = (days) => {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

const FUTURE_LOADS_DATA = [
  {
    id: 'FL-201',
    from: 'Bengaluru',
    to: 'Hubballi',
    cargo: 'Fertilizer (IFFCO)',
    weight: 8.2,
    price: 14800,
    pickupDate: futureDateStr(7),
    deadline: '18:00',
    demandLevel: 'High (Pre-sowing season)',
    seasonalityBonus: 10,
    contact: 'KMF / Agro Input Hub',
    originCorridor: 'Bengaluru'
  },
  {
    id: 'FL-202',
    from: 'Bengaluru',
    to: 'Dharwad',
    cargo: 'Industrial Machinery',
    weight: 6.0,
    price: 12500,
    pickupDate: futureDateStr(9),
    deadline: '20:00',
    demandLevel: 'Medium',
    seasonalityBonus: 5,
    contact: 'Peenya Industrial Logistics',
    originCorridor: 'Bengaluru'
  },
  {
    id: 'FL-203',
    from: 'Bengaluru',
    to: 'Gadag',
    cargo: 'Processed Grains',
    weight: 7.0,
    price: 16200,
    pickupDate: futureDateStr(12),
    deadline: '19:00',
    demandLevel: 'High',
    seasonalityBonus: 8,
    contact: 'Karnataka Food Logistics',
    originCorridor: 'Bengaluru'
  },
  {
    id: 'FL-204',
    from: 'Belagavi',
    to: 'Hubballi',
    cargo: 'Refined Sugar',
    weight: 9.5,
    price: 11200,
    pickupDate: futureDateStr(14),
    deadline: '17:00',
    demandLevel: 'High (Sugar Mill Season)',
    seasonalityBonus: 10,
    contact: 'Ghataprabha Sugars',
    originCorridor: 'Belagavi'
  },
  {
    id: 'FL-205',
    from: 'Mysuru',
    to: 'Hubballi',
    cargo: 'Silk & Textiles',
    weight: 4.5,
    price: 15400,
    pickupDate: futureDateStr(18),
    deadline: '21:00',
    demandLevel: 'Medium',
    seasonalityBonus: 5,
    contact: 'Mysuru Silk Exchange',
    originCorridor: 'Mysuru'
  }
];

function calculatePredictiveBackhaulScore(plannedTrip, load) {
  const truckCap = plannedTrip.truckCap || (plannedTrip.truckId && db.trucks ? (db.trucks.find(t => t.id === plannedTrip.truckId)?.cap || 10) : 10);
  const tripQty = plannedTrip.quantity || 8;
  const availDate = new Date(plannedTrip.estimatedAvailableDate || plannedTrip.expectedDeliveryDate || todayStr());
  const loadDate = new Date(load.pickupDate || load.date || todayStr());
  const diffDays = Math.max(0, Math.round((loadDate - availDate) / 864e5));

  let dateScore = 20;
  if (diffDays === 0) dateScore = 20;
  else if (diffDays === 1) dateScore = 18;
  else if (diffDays === 2) dateScore = 14;
  else if (diffDays === 3) dateScore = 10;
  else if (diffDays <= 7) dateScore = 7;
  else dateScore = 4;

  let routeScore = 10;
  const forwardDest = key(plannedTrip.destination) || 'Bengaluru';
  const forwardOrig = key(plannedTrip.origin) || 'Hubballi';
  const loadFrom = key(load.from) || '';
  const loadTo = key(load.to) || '';
  
  if (loadFrom === forwardDest && (loadTo === forwardOrig || loadTo === 'Hubballi' || loadTo === 'Dharwad')) {
    routeScore = 25;
  } else if (loadFrom === forwardDest) {
    const returnDetour = dist(loadTo, forwardOrig);
    routeScore = returnDetour < 60 ? 22 : returnDetour < 120 ? 18 : 12;
  } else {
    const origDetour = dist(forwardDest, loadFrom);
    routeScore = origDetour < 50 ? 18 : 10;
  }

  let capScore = 10;
  const loadWt = load.weight || 6;
  const capRatio = loadWt / truckCap;
  if (capRatio >= 0.70 && capRatio <= 1.05) capScore = 20;
  else if (capRatio >= 0.50 && capRatio < 0.70) capScore = 15;
  else if (capRatio > 1.05) capScore = 6;
  else capScore = 10;

  const dOrig = dist(forwardDest, loadFrom);
  const dDest = dist(loadTo, forwardOrig);
  const totalDetour = Math.round(dOrig + (loadTo === forwardOrig ? 0 : dDest));
  let detourScore = 15;
  if (totalDetour <= 15) detourScore = 15;
  else if (totalDetour <= 40) detourScore = 12;
  else if (totalDetour <= 80) detourScore = 8;
  else detourScore = 5;

  const fair = fairEst(load);
  const revRatio = fair > 0 ? (load.price / fair) : 1;
  let revScore = 10;
  if (revRatio >= 0.95) revScore = 10;
  else if (revRatio >= 0.85) revScore = 8;
  else revScore = 6;

  let demandScore = load.seasonalityBonus || 8;
  const totalScore = Math.min(100, Math.round(dateScore + routeScore + capScore + detourScore + revScore + demandScore));
  const kmReturn = Math.round(dist(load.from, load.to));
  const fuelSavedL = Math.round(kmReturn * DIESEL_L_PER_KM * 0.85);
  const emptyKmAvoided = kmReturn;
  const extraRevenue = load.price;

  const reasons = [
    { tone: dateScore >= 14 ? 'good' : 'warn', text: diffDays === 0 ? 'Exact pickup date match with arrival' : 'Pickup in +' + diffDays + ' days from arrival window' },
    { tone: routeScore >= 20 ? 'good' : 'warn', text: 'Return corridor: ' + load.from + ' → ' + load.to },
    { tone: capScore >= 15 ? 'good' : 'warn', text: 'Weight: ' + loadWt + 't fits ' + truckCap + 't truck capacity' },
    { tone: detourScore >= 12 ? 'good' : 'warn', text: 'Low detour: ' + totalDetour + ' km on main NH corridor' },
    { tone: 'good', text: 'Revenue: ' + inr(extraRevenue) + ' (0% broker commission)' }
  ];

  return {
    score: totalScore,
    parts: [dateScore, routeScore, capScore, detourScore, revScore, demandScore],
    detourKm: totalDetour,
    emptyKmAvoided,
    fuelSavedL,
    extraRevenue,
    diffDays,
    reasons
  };
}

function findFutureBackhaulOpportunities(plannedTrip, horizonDays = 30) {
  if (!plannedTrip) return [];
  const availDate = new Date(plannedTrip.estimatedAvailableDate || plannedTrip.expectedDeliveryDate || todayStr());
  const maxDate = new Date(availDate);
  maxDate.setDate(maxDate.getDate() + horizonDays);

  const candidates = [...FUTURE_LOADS_DATA];
  if (db && db.myLoads) {
    db.myLoads.forEach(ml => {
      if (ml.status === 'Open' || ml.status === 'Matched') {
        candidates.push({
          id: 'ML-' + ml.id,
          from: ml.from,
          to: ml.to,
          cargo: ml.type,
          weight: ml.weight,
          price: ml.price,
          pickupDate: ml.date || futureDateStr(7),
          deadline: ml.deadline || '20:00',
          demandLevel: 'Live APMC Post',
          seasonalityBonus: 8
        });
      }
    });
  }

  const matches = [];
  candidates.forEach(l => {
    const lDate = new Date(l.pickupDate || todayStr());
    if (lDate >= availDate && lDate <= maxDate) {
      const pred = calculatePredictiveBackhaulScore(plannedTrip, l);
      matches.push({ load: l, ...pred });
    }
  });

  matches.sort((a, b) => b.score - a.score);
  return matches;
}

function ensurePlannedTrips() {
  if (!db) return;
  if (!db.plannedTrips) {
    db.plannedTrips = [
      {
        id: 501,
        truckId: 1,
        truckReg: 'KA-25-AB-1234',
        cargoType: 'Onions',
        quantity: 8,
        origin: 'Hubballi',
        destination: 'Bengaluru',
        expectedPickupDate: futureDateStr(5),
        expectedDeliveryDate: futureDateStr(7),
        estimatedAvailableDate: futureDateStr(7),
        status: 'planned',
        notes: 'Kisan Agro Traders onion harvest to APMC Yeshwanthpur'
      },
      {
        id: 502,
        truckId: 2,
        truckReg: 'KA-25-CD-5678',
        cargoType: 'Dry chilli',
        quantity: 10,
        origin: 'Hubballi',
        destination: 'Belagavi',
        expectedPickupDate: futureDateStr(12),
        expectedDeliveryDate: futureDateStr(13),
        estimatedAvailableDate: futureDateStr(13),
        status: 'planned',
        notes: 'Byadgi chilli delivery to Belagavi spice market'
      }
    ];
  }
  if (!db.watchlist) {
    db.watchlist = [
      { id: 'W-1', route: 'Bengaluru → Hubballi', dateWindow: 'Next 30 days', minTons: 6, matchedCount: 3 }
    ];
  }
}

let activeHorizon = 30;
let selPlannedTripId = 501;

function renderTimelineHtml(trip, bestMatch) {
  if (!trip) return '';
  const returnCargo = bestMatch ? (bestMatch.load.cargo || 'Return Freight') : 'Fertilizer (8.2t)';
  const returnRev = bestMatch ? inr(bestMatch.extraRevenue) : '₹14,800';
  return '<div class="pred-timeline">' +
    '<div class="pt-step done"><div class="pt-circle">1</div><div class="pt-title">Today</div><div class="pt-sub">' + todayStr() + '</div></div>' +
    '<div class="pt-arrow">➔</div>' +
    '<div class="pt-step active"><div class="pt-circle">2</div><div class="pt-title">' + (trip.cargoType || 'Cargo') + ' Planned</div><div class="pt-sub">' + trip.quantity + ' tonnes</div></div>' +
    '<div class="pt-arrow">➔</div>' +
    '<div class="pt-step"><div class="pt-circle">3</div><div class="pt-title">Pickup</div><div class="pt-sub">' + trip.expectedPickupDate + '</div></div>' +
    '<div class="pt-arrow">➔</div>' +
    '<div class="pt-step"><div class="pt-circle">4</div><div class="pt-title">Forward Trip</div><div class="pt-sub">' + trip.origin + ' → ' + trip.destination + '</div></div>' +
    '<div class="pt-arrow">➔</div>' +
    '<div class="pt-step"><div class="pt-circle">5</div><div class="pt-title">Delivery</div><div class="pt-sub">' + trip.expectedDeliveryDate + '</div></div>' +
    '<div class="pt-arrow">➔</div>' +
    '<div class="pt-step predicted"><div class="pt-circle">6</div><div class="pt-title">Truck Available</div><div class="pt-sub">in ' + trip.destination + '</div></div>' +
    '<div class="pt-arrow">➔</div>' +
    '<div class="pt-step predicted"><div class="pt-circle">7</div><div class="pt-title">' + returnCargo + '</div><div class="pt-sub">Pre-matched</div></div>' +
    '<div class="pt-arrow">➔</div>' +
    '<div class="pt-step future-win"><div class="pt-circle">✓</div><div class="pt-title">Loaded Return</div><div class="pt-sub">' + returnRev + '</div></div>' +
  '</div>';
}

function futurePlannerHtml() {
  ensurePlannedTrips();
  const trips = db.plannedTrips || [];
  const curTrip = trips.find(x => x.id === selPlannedTripId) || trips[0];
  const matches = curTrip ? findFutureBackhaulOpportunities(curTrip, activeHorizon) : [];
  const topMatch = matches[0];

  const bannerHtml = topMatch ? 
    ('<div class="pred-banner">' +
      '<div class="pred-banner-left">' +
        '<div class="pred-banner-icon">🔮</div>' +
        '<div>' +
          '<h3>Proactive Return Match Found (' + topMatch.score + '% Match)</h3>' +
          '<p>Your truck <b>' + (curTrip.truckReg || 'KA-25-AB-1234') + '</b> is expected in <b>' + curTrip.destination + '</b> on <b>' + curTrip.expectedDeliveryDate + '</b>. We pre-matched <b>' + topMatch.load.cargo + ' (' + topMatch.load.weight + 't)</b> back to ' + topMatch.load.to + ' for <b>' + inr(topMatch.extraRevenue) + '</b>.</p>' +
        '</div>' +
      '</div>' +
      '<button class="pred-banner-btn" data-act="predWatch" data-id="' + topMatch.load.id + '">⚡ Reserve & Watch</button>' +
    '</div>') : '';

  const kpisHtml = '<section class="kpis" aria-label="Predictive KPIs">' +
    '<div class="kpi"><span class="k-label">' + t('pred.kpiAvoided') + '</span><b>' + (topMatch ? topMatch.emptyKmAvoided : 410) + ' km</b><small>Per planned round-trip</small></div>' +
    '<div class="kpi"><span class="k-label">' + t('pred.kpiFuel') + '</span><b>' + (topMatch ? topMatch.fuelSavedL : 123) + ' L</b><small>Diesel saved</small></div>' +
    '<div class="kpi"><span class="k-label">' + t('pred.kpiRevenue') + '</span><b>' + (topMatch ? inr(topMatch.extraRevenue) : '₹14,800') + '</b><small>0% broker commission</small></div>' +
    '<div class="kpi"><span class="k-label">' + t('pred.kpiMatchRate') + '</span><b>' + (topMatch ? topMatch.score : 94) + '%</b><div class="bar"><i style="width:' + (topMatch ? topMatch.score : 94) + '%"></i></div></div>' +
  '</section>';

  const horizonHtml = '<div class="pred-horizon-bar">' +
    '<div style="font-weight:700;font-size:16px;color:var(--navy)">Forecast Prediction Horizon:</div>' +
    '<div class="pred-horizon-tabs">' +
      '<button class="pred-horizon-btn ' + (activeHorizon === 7 ? 'active' : '') + '" data-horizon="7">' + t('horizon.7d') + '</button>' +
      '<button class="pred-horizon-btn ' + (activeHorizon === 14 ? 'active' : '') + '" data-horizon="14">' + t('horizon.14d') + '</button>' +
      '<button class="pred-horizon-btn ' + (activeHorizon === 30 ? 'active' : '') + '" data-horizon="30">' + t('horizon.30d') + '</button>' +
    '</div>' +
  '</div>';

  const riskHtml = '<div class="pred-risk-widget">' +
    '<div style="font-weight:700;font-size:15px;color:var(--navy)">' + t('pred.riskTitle') + '</div>' +
    '<p class="hint">Comparing standard unassisted return trip vs Proactive Predictive BackHaul AI matching.</p>' +
    '<div class="risk-cmp">' +
      '<div class="risk-box">' +
        '<div class="risk-box-title">Without BackHaul AI (Traditional APMC)</div>' +
        '<div style="font-size:18px;font-weight:800;color:var(--ink)">72% Loaded · <span style="color:var(--red)">28% Empty Return</span></div>' +
        '<div class="risk-bar-wrap"><div class="risk-bar-loaded" style="width:72%"></div><div class="risk-bar-empty" style="width:28%"></div></div>' +
      '</div>' +
      '<div class="risk-box improved">' +
        '<div class="risk-box-title" style="color:var(--green)">With Predictive BackHaul AI</div>' +
        '<div style="font-size:18px;font-weight:800;color:var(--green)">88% Loaded · <span style="color:#059669">12% Empty Risk</span> (↓ 57% lower)</div>' +
        '<div class="risk-bar-wrap"><div class="risk-bar-loaded" style="width:88%;background:var(--green)"></div><div class="risk-bar-empty" style="width:12%;background:#fca5a5"></div></div>' +
      '</div>' +
    '</div>' +
  '</div>';

  const tripSelector = '<div class="panel" style="margin-bottom:16px">' +
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">' +
      '<h2>' + t('title.futureTrips') + ' <span class="count">(' + trips.length + ')</span></h2>' +
      '<button class="btn sm primary" style="width:auto" data-act="openPlanModal">' + t('btn.planTrip') + '</button>' +
    '</div>' +
    '<div style="display:flex;gap:10px;overflow-x:auto;padding-bottom:6px">' +
      trips.map(tr => {
        const isSel = tr.id === selPlannedTripId;
        return '<div class="card ' + (isSel ? 'sel' : '') + '" style="min-width:260px;cursor:pointer" data-select-trip="' + tr.id + '">' +
          '<div style="display:flex;justify-content:space-between"><b style="color:var(--navy)">' + tr.origin + ' ➔ ' + tr.destination + '</b><span class="badge b-ok">' + tr.status + '</span></div>' +
          '<div class="stats" style="margin-top:6px">' +
            '<div><span>Truck:</span><b>' + (tr.truckReg || 'KA-25-AB-1234') + '</b></div>' +
            '<div><span>Cargo:</span><b>' + tr.cargoType + ' (' + tr.quantity + 't)</b></div>' +
            '<div><span>Pickup:</span><b>' + tr.expectedPickupDate + '</b></div>' +
            '<div><span>Delivery:</span><b>' + tr.expectedDeliveryDate + '</b></div>' +
          '</div>' +
        '</div>';
      }).join('') +
    '</div>' +
  '</div>';

  const matchCards = '<h2 class="sect">' + t('title.predBackhaul') + ' <span class="count">(' + matches.length + ' predicted opportunities in next ' + activeHorizon + ' days)</span></h2>' +
    '<div class="cards">' +
      (matches.length ? matches.map((m, i) => {
        const isHigh = m.score >= 85;
        return '<article class="pred-card ' + (i === 0 ? 'top-match' : '') + '">' +
          '<div class="pred-header">' +
            '<div><span class="badge ' + (isHigh ? 'b-ok' : 'b-warn') + '">' + m.load.pickupDate + ' (' + (m.diffDays === 0 ? 'Same-day turnaround' : '+' + m.diffDays + ' days') + ')</span>' +
            '<div style="font-weight:700;font-size:16px;margin-top:4px;color:var(--navy)">' + m.load.from + ' ➔ ' + m.load.to + '</div></div>' +
            '<div class="pred-score-badge ' + (isHigh ? 'high' : 'mid') + '">' + m.score + '%<small style="font-size:10px;color:inherit">MATCH</small></div>' +
          '</div>' +
          '<div class="stats">' +
            '<div><span>Cargo:</span><b>' + m.load.cargo + '</b></div>' +
            '<div><span>Weight:</span><b>' + m.load.weight + ' tonnes</b></div>' +
            '<div><span>Est. Revenue:</span><b style="color:var(--green)">' + inr(m.extraRevenue) + '</b></div>' +
            '<div><span>Detour:</span><b>' + m.detourKm + ' km</b></div>' +
          '</div>' +
          '<div class="pred-breakdown">' +
            '<div class="pred-breakdown-row"><span>Date Compatibility (20%):</span><b>' + m.parts[0] + '/20</b></div>' +
            '<div class="pred-breakdown-row"><span>Route Compatibility (25%):</span><b>' + m.parts[1] + '/25</b></div>' +
            '<div class="pred-breakdown-row"><span>Capacity Fit (20%):</span><b>' + m.parts[2] + '/20</b></div>' +
            '<div class="pred-breakdown-row"><span>Low Detour (15%):</span><b>' + m.parts[3] + '/15</b></div>' +
            '<div class="pred-breakdown-row"><span>Revenue vs Fair Rate (10%):</span><b>' + m.parts[4] + '/10</b></div>' +
            '<div class="pred-breakdown-row"><span>Seasonality / Demand (10%):</span><b>' + m.parts[5] + '/10</b></div>' +
          '</div>' +
          '<div class="pred-reasons">' +
            m.reasons.map(r => '<div class="pred-reason-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>' + esc(r.text) + '</span></div>').join('') +
          '</div>' +
          '<div class="actions" style="margin-top:10px">' +
            '<button class="btn" data-act="predWatch" data-id="' + m.load.id + '">' + t('btn.watchLoad') + '</button>' +
            '<button class="btn primary" data-act="predReserve" data-id="' + m.load.id + '">' + t('btn.reserveInterest') + '</button>' +
          '</div>' +
        '</article>';
      }).join('') : '<div class="empty">No future return loads match the selected horizon. Expand to 30 days or plan another forward trip.</div>') +
    '</div>';

  const mapAndWatchlist = '<div class="grid2 lower">' +
    '<div class="panel"><h2>Route Preview: Forward & Predicted Return</h2><div id="predMap" style="height:320px;border-radius:8px"></div>' +
      '<div style="display:flex;gap:16px;margin-top:8px;font-size:12.5px;color:var(--mute)">' +
        '<div><span style="color:#12805c;font-weight:700">━━</span> Forward: ' + (curTrip ? curTrip.origin + ' ➔ ' + curTrip.destination : '') + '</div>' +
        '<div><span style="color:#2563eb;font-weight:700">╍╍</span> Predicted Return: ' + (topMatch ? topMatch.load.from + ' ➔ ' + topMatch.load.to : '') + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="panel">' +
      '<h2>' + t('title.watchlist') + '</h2>' +
      '<p class="hint">Active routes under automated surveillance. When high-match cargo is posted, Saarathi AI notifies you proactively.</p>' +
      '<div id="watchlistList" style="margin-top:12px;display:flex;flex-direction:column;gap:8px">' +
        (db.watchlist || []).map(w => '<div class="card" style="padding:10px 12px;display:flex;justify-content:space-between;align-items:center">' +
          '<div><b style="color:var(--navy)">' + w.route + '</b><br><small style="color:var(--mute)">Window: ' + w.dateWindow + ' · Min ' + w.minTons + 't</small></div>' +
          '<span class="badge b-ok">' + w.matchedCount + ' matches</span>' +
        '</div>').join('') +
      '</div>' +
      '<div style="margin-top:14px"><button class="btn" style="width:100%" data-act="addWatchRoute">➕ Add Route to Watchlist</button></div>' +
    '</div>' +
  '</div>';

  return bannerHtml + kpisHtml + horizonHtml + tripSelector + (curTrip ? renderTimelineHtml(curTrip, topMatch) : '') + matchCards + riskHtml + mapAndWatchlist;
}

function initFuturePlanner() {
  ensurePlannedTrips();
  document.querySelectorAll('[data-horizon]').forEach(btn => {
    btn.onclick = () => {
      activeHorizon = parseInt(btn.dataset.horizon, 10);
      renderView('future_planner');
    };
  });
  document.querySelectorAll('[data-select-trip]').forEach(el => {
    el.onclick = () => {
      selPlannedTripId = parseInt(el.dataset.selectTrip, 10);
      renderView('future_planner');
    };
  });
  document.querySelectorAll('[data-act="predWatch"]').forEach(b => {
    b.onclick = (e) => {
      e.stopPropagation();
      toast('Opportunity added to Predictive Watchlist. Notifications enabled.');
      addNotification('Watched load ' + b.dataset.id + ' added to alerts.');
    };
  });
  document.querySelectorAll('[data-act="predReserve"]').forEach(b => {
    b.onclick = (e) => {
      e.stopPropagation();
      toast('Interest reserved with cargo owner. Zero commission locked.');
      addNotification('Interest reserved for backhaul opportunity ' + b.dataset.id);
    };
  });
  document.querySelectorAll('[data-act="openPlanModal"]').forEach(b => {
    b.onclick = () => {
      const orig = prompt('Origin city (e.g. Hubballi):', 'Hubballi');
      if (!orig) return;
      const dest = prompt('Destination city (e.g. Bengaluru):', 'Bengaluru');
      if (!dest) return;
      const cargo = prompt('Cargo type (e.g. Onions, Maize, Cotton):', 'Onions');
      const qty = parseFloat(prompt('Quantity in tonnes:', '8')) || 8;
      const days = parseInt(prompt('Expected delivery in how many days?', '7'), 10) || 7;
      
      const newTrip = {
        id: db.plannedTrips.length ? Math.max(...db.plannedTrips.map(x => x.id)) + 1 : 501,
        truckId: 1,
        truckReg: db.trucks && db.trucks[0] ? db.trucks[0].reg : 'KA-25-AB-1234',
        cargoType: cargo,
        quantity: qty,
        origin: orig,
        destination: dest,
        expectedPickupDate: futureDateStr(Math.max(1, days - 2)),
        expectedDeliveryDate: futureDateStr(days),
        estimatedAvailableDate: futureDateStr(days),
        status: 'planned'
      };
      db.plannedTrips.push(newTrip);
      selPlannedTripId = newTrip.id;
      saveDb();
      toast('Forward trip planned! Predictive backhaul search active.');
      renderView('future_planner');
    };
  });
  document.querySelectorAll('[data-act="addWatchRoute"]').forEach(b => {
    b.onclick = () => {
      const r = prompt('Route to watch (e.g. Mysuru → Hubballi):', 'Mysuru → Hubballi');
      if (!r) return;
      if (!db.watchlist) db.watchlist = [];
      db.watchlist.push({ id: 'W-' + (db.watchlist.length + 1), route: r, dateWindow: 'Next 30 days', minTons: 6, matchedCount: 1 });
      saveDb();
      toast('Route added to Watchlist.');
      renderView('future_planner');
    };
  });

  drawPredMap();
}

function drawPredMap() {
  const mapEl = $('predMap');
  if (!mapEl || !window.L) return;
  const trips = db.plannedTrips || [];
  const curTrip = trips.find(x => x.id === selPlannedTripId) || trips[0];
  const matches = curTrip ? findFutureBackhaulOpportunities(curTrip, activeHorizon) : [];
  const topMatch = matches[0];

  try {
    const pMap = L.map('predMap').setView([14.5, 76.2], 6);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(pMap);
    
    if (curTrip) {
      const origPt = CITIES[curTrip.origin] || [15.3647, 75.1240];
      const destPt = CITIES[curTrip.destination] || [12.9716, 77.5946];
      L.polyline([origPt, destPt], { color: '#12805c', weight: 4 }).addTo(pMap);
      L.circleMarker(origPt, { radius: 7, color: '#12805c', fillColor: '#12805c', fillOpacity: 1 }).bindTooltip('Forward Origin: ' + curTrip.origin).addTo(pMap);
      L.circleMarker(destPt, { radius: 7, color: '#0b2a4a', fillColor: '#0b2a4a', fillOpacity: 1 }).bindTooltip('Forward Dest: ' + curTrip.destination).addTo(pMap);

      if (topMatch) {
        const retOrig = CITIES[topMatch.load.from] || destPt;
        const retDest = CITIES[topMatch.load.to] || origPt;
        L.polyline([retOrig, retDest], { color: '#2563eb', weight: 4, dashArray: '6 8' }).addTo(pMap);
        L.circleMarker(retDest, { radius: 7, color: '#2563eb', fillColor: '#2563eb', fillOpacity: 1 }).bindTooltip('Return Dest: ' + topMatch.load.to).addTo(pMap);
      }
    }
  } catch (e) {}
}

function planFutureCargoHtml() {
  return '<div class="panel" style="max-width:700px;margin:0 auto">' +
    '<h2>' + t('nav.plan_future') + '</h2>' +
    '<p class="hint">Register upcoming farm harvests or factory production. BackHaul AI predicts and matches return haulers weeks in advance, eliminating last-minute price spikes.</p>' +
    '<form id="planFutureForm" class="fields" style="margin-top:16px">' +
      '<label>Cargo Type<input id="pfCargo" placeholder="e.g. Onions, Maize, Cotton" value="Onions" required></label>' +
      '<label>Quantity (tonnes)<input id="pfQty" type="number" step="0.5" min="1" value="8" required></label>' +
      '<label>Origin / Farm Location<input id="pfFrom" list="cities" value="APMC Amargol, Hubballi" required></label>' +
      '<label>Target Destination<select id="pfTo"></select></label>' +
      '<label>Expected Harvest Date<input id="pfHarvest" type="date" value="' + futureDateStr(25) + '"></label>' +
      '<label>Expected Pickup Date<input id="pfPickup" type="date" value="' + futureDateStr(30) + '"></label>' +
      '<div class="err" id="pfErr" style="grid-column:1/-1"></div>' +
      '<div style="grid-column:1/-1;margin-top:8px">' +
        '<button class="btn primary" type="submit">Enable Predictive Backhaul Matching</button>' +
      '</div>' +
    '</form>' +
  '</div>';
}

function initPlanFuture() {
  $('pfTo').innerHTML = cityOptions();
  $('pfTo').value = 'Bengaluru';
  $('planFutureForm').onsubmit = (e) => {
    e.preventDefault();
    const cargo = $('pfCargo').value.trim();
    const qty = parseFloat($('pfQty').value) || 8;
    const from = $('pfFrom').value.trim();
    const to = $('pfTo').value;
    const pDate = $('pfPickup').value;

    if (!db.myLoads) db.myLoads = [];
    const newL = {
      id: 2000 + db.myLoads.length + 1,
      from,
      to,
      weight: qty,
      type: cargo,
      deadline: '20:00',
      price: Math.round(dist(from, to) * RATE_PER_KM * 0.95),
      status: 'Open',
      date: pDate
    };
    db.myLoads.unshift(newL);
    saveDb();
    toast('Predictive shipment planned! BackHaul return haulers notified.');
    showView('myloads');
  };
}
