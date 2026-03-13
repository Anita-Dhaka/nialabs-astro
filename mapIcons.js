const fs = require('fs');

const rawData = fs.readFileSync('rawCityData.js', 'utf8');
// Evaluate the raw data to get the array
let cityData;
eval(rawData.replace('export const cityData =', 'cityData ='));

const keywords = {
  ai: ['face', 'fingerprint', 'recognition', 'ai', 'biometric', 'identify'],
  cloud: ['cloud', 'server', 'web', 'online', 'central'],
  speed: ['speed', 'rapid', 'fast', 'quick', 'instant'],
  time: ['time', 'shift', 'leave', 'overtime', 'ot ', 'schedule', 'roster', 'hour', 'late', 'absent'],
  spoofing: ['proxy', 'tamper', 'spoof', 'fake', 'error', 'manipulat', 'buddy'],
  kiosk: ['light', 'busy', 'door', 'environment', 'outdoor', 'gate', 'traffic', 'harsh', 'dust', 'rain', 'weather', 'contactless', 'hygien'],
  reporting: ['parent', 'alert', 'notification', 'notify'],
  integration: ['integrate', 'sync', 'hrms', 'erp', 'payroll', 'software'],
  mobile: ['mobile', 'app', 'phone', 'device'],
  gps: ['gps', 'location', 'geofence', 'field', 'remote', 'site'],
  security: ['security', 'privacy', 'access', 'secure', 'protect', 'safe', 'compliant'],
  analytics: ['report', 'analytic', 'dashboard', 'monitor', 'track', 'audit'],
  setup: ['install', 'setup', 'plug', 'deploy', 'onboard'],
  cost: ['cost', 'warranty', 'amc', 'price', 'budget', 'afford', 'econom'],
  team: ['team', 'support', 'service', 'staff', 'employee', 'worker', 'personnel', 'admin', 'hr ', 'local'],
  globe: ['multi', 'branch', 'center', 'global', 'city', 'region', 'area', 'state', 'nation', 'outlet', 'store']
};

function getSemanticIcon(text) {
  text = text.toLowerCase();
  for (const [icon, words] of Object.entries(keywords)) {
    for (const word of words) {
      if (text.includes(word)) return icon;
    }
  }
  return 'check'; // default fallback
}

cityData.forEach(city => {
  if (city.whyNia && city.whyNia.points) {
    city.whyNia.points.forEach(p => p.icon = getSemanticIcon(p.text));
  }
  if (city.features && city.features.points) {
    city.features.points.forEach(p => p.icon = getSemanticIcon(p.text));
  }
  if (city.whyBetter && city.whyBetter.points) {
    city.whyBetter.points.forEach(p => p.icon = getSemanticIcon(p.text));
  }
  
  // Also clean up industry and product image paths to make sure they are valid
  if (city.industries && city.industries.points) {
    city.industries.points.forEach(p => {
        if (!p.icon || p.icon === '') p.icon = '/headerImages/industries/cowork.webp';
        // map /uhfReader/ to /headerImages/industries/
        p.icon = p.icon.replace('/uhfReader/', '/headerImages/industries/');
    });
  }
  if (city.deviceOffer && city.deviceOffer.points) {
    city.deviceOffer.points.forEach(p => {
        // map /HeaderImages/ to /product/
        p.icon = p.icon.replace('/HeaderImages/', '/product/').replace('product/ai10', '/product/ai10').replace('product/ai09', '/product/ai09');
        if (!p.icon.startsWith('/')) p.icon = '/' + p.icon;
    });
  }
});

const output = `export interface CityPoint { icon: string; text: string; }
export interface IndustryPoint { icon: string; title: string; desc: string; }
export interface DevicePoint { icon: string; title: string; machine?: string; desc: string; }
export interface Testimonial { desc: string; position: string; place: string; district?: string; }
export interface FAQ { question: string; solution: string; }

export interface CityData {
  route: string;
  metaTitle: string;
  metaDesc: string;
  heading: string;
  subHeading: string;
  image: string;
  desc: string[];
  whyNia: { title: string; points: CityPoint[] };
  features: { title: string; desc: string; points: CityPoint[] };
  industries: { title: string; points: IndustryPoint[] };
  deviceOffer: { title: string; points: DevicePoint[] };
  whyBetter: { title: string; desc: string; points: CityPoint[] };
  testimonials: { title: string; points: Testimonial[] };
  faqs: FAQ[];
  cta: { title: string; desc: string[] };
}

export const cityData: CityData[] = ${JSON.stringify(cityData, null, 2)};
`;

fs.writeFileSync('src/data/cityData.ts', output);
console.log("Successfully wrote mapped city data to src/data/cityData.ts");
