
export interface BrandStats {
  ticketsSold?: string;
  revenueGenerated?: string;
  conversionRate?: string;
  channels?: string;
  [key: string]: string | undefined;
}

export interface BrandDesign {
  id: string;
  title: string;
  category: string;
  partner?: string;
  description: string;
  tags: string[];
  color: string;
  borderColor: string;
  stats: BrandStats;
  details: string;
  link?: string;
}

export const PROJECTS_DATA = [
  { id: 1, ind: 'Tourism', name: 'One world', env: 'production', url: 'https://oneworld-dmcs.com', displayUrl: 'oneworld-dmcs.com', arch: 'u86', stack: 'NextJs', status: 'up', framework: 'Jest' },
  { id: 2, ind: 'Tourism', name: 'E-Guide Solutions', env: 'production', url: 'https://app.e-guidesolutions.com', displayUrl: 'app.e-guidesolutions.com', arch: 'u86', stack: 'Laravel', status: 'up', framework: 'PHP' },
  { id: 3, ind: 'Tourism', name: 'E-Guide Solutions Mobile App', env: 'production', url: 'https://play.google.com/store/apps/details?id=com.eguidesolutions', displayUrl: 'Google Play Store', arch: '--', stack: 'Expo', status: 'up', framework: 'React Native' },
  { id: 4, ind: 'Tourism', name: 'E-Guide Solutions Website', env: 'production', url: 'https://e-guidesolutions.com/', displayUrl: 'e-guidesolutions.com', arch: 'u86', stack: 'PHP', status: 'up', framework: 'HTML/CSS' },
  { id: 5, ind: 'Tourism', name: 'E-Guide Solutions API', env: 'production', url: 'https://api.e-guidesolutions.com', displayUrl: 'api.e-guidesolutions.com', arch: '--', stack: 'NodeJs', status: 'up', framework: 'Express' },
  { id: 6, ind: 'Tourism', name: 'E-Guide Solutions Microservice', env: 'production', url: 'https://eguide-token.vercel.app/', displayUrl: 'eguide-token.vercel.app', arch: '--', stack: 'NodeJs', status: 'up', framework: 'Vercel' },
  { id: 7, ind: 'Tourism', name: 'Emotions Travel CRM', env: 'production', url: 'https://admin.emotions-travel.com/login', displayUrl: 'admin.emotions-travel.com', arch: 'u86', stack: 'Laravel', status: 'up', framework: 'PHP' },
  { id: 8, ind: 'Tourism', name: 'Emotions Travel', env: 'production', url: 'https://emotions-travel.com/', displayUrl: 'emotions-travel.com', arch: 'u86', stack: 'PHP', status: 'up', framework: 'WordPress' },
  { id: 9, ind: 'Tourism', name: 'Emotions Morocco', env: 'production', url: 'https://emotions-morocco.com/', displayUrl: 'emotions-morocco.com', arch: '--', stack: 'PHP', status: 'up', framework: 'Custom' },
  { id: 10, ind: 'Tourism', name: 'Emotions Morocco CRM', env: 'production', url: 'https://emotions-morocco.com/crm/login', displayUrl: 'emotions-morocco.com/crm', arch: 'u86', stack: 'Laravel', status: 'up', framework: 'PHP' },
  // { id: 11, ind: 'Tourism', name: 'Emotions Morocco CRM', env: 'staging', url: 'https://emotions-morocco.com/crm-staging/login', displayUrl: 'emotions-morocco.com/crm-staging', arch: 'u86', stack: 'Laravel', status: 'up', framework: 'PHP' },
  { id: 12, ind: 'Tourism', name: 'Maroko Ekspert', env: 'production', url: 'https://www.maroko-ekspert.pl', displayUrl: 'maroko-ekspert.pl', arch: '--', stack: 'NextJs', status: 'up', framework: 'React' },
  { id: 13, ind: 'Marketing/IT', name: 'GoAdway', env: 'production', url: 'https://goadway.com/', displayUrl: 'goadway.com', arch: '--', stack: 'Marketing Platform', status: 'down', framework: '--' },
  { id: 14, ind: 'IT', name: 'DevMinds', env: 'production', url: 'https://devminds.cloud', displayUrl: 'devminds.cloud', arch: '--', stack: 'Cloud Infrastructure', status: 'up', framework: 'NodeJs' },
  // { id: 15, ind: 'Portfolio', name: 'DevHl', env: 'production', url: 'https://devhl.dev', displayUrl: 'devhl.dev', arch: '--', stack: 'NextJs', status: 'up', framework: 'Tailwind CSS' },
  { id: 16, ind: 'Sports', name: 'Kickboxing Morocco', env: 'production', url: 'https://kickboxingmorocco.club/', displayUrl: 'kickboxingmorocco.club', arch: 'u86', stack: 'Web App', status: 'up', framework: '--' },
  { id: 17, ind: 'Sports', name: 'Coach Issam', env: 'production', url: 'https://coachissam.com', displayUrl: 'coachissam.com', arch: 'u86', stack: 'Full Stack', status: 'up', framework: '--' },
  { id: 18, ind: 'Sports', name: 'KBM Gym', env: 'production', url: 'https://kbmgym.com', displayUrl: 'kbmgym.com', arch: '--', stack: 'Web App', status: 'up', framework: '--' },
  // { id: 19, ind: 'Sports', name: 'DCPA (Staging)', env: 'staging', url: 'https://staging.chambersforsport.com', displayUrl: 'staging.chambersforsport.com', arch: 'u86', stack: 'RoR', status: 'down', framework: 'Ruby on Rails' },
  { id: 20, ind: 'Sports', name: 'DCPA (Club)', env: 'production', url: 'https://club.chambersforsport.com', displayUrl: 'club.chambersforsport.com', arch: 'u86', stack: 'RoR', status: 'up', framework: 'Ruby on Rails' },
  { id: 21, ind: 'Sports', name: 'CFS website', env: 'production', url: 'https://chambersforsport.com', displayUrl: 'chambersforsport.com', arch: '--', stack: 'NextJs', status: 'up', framework: 'React' },
  // { id: 22, ind: 'Sports', name: 'CFS website (Staging)', env: 'staging', url: 'https://cfs-client-staging.chambersforsport.com', displayUrl: 'cfs-client-staging...', arch: '--', stack: 'NextJs', status: 'up', framework: 'React' },
  { id: 23, ind: 'Sports', name: 'CFS 4F1T Event', env: 'production', url: 'https://www.4f1t.com/', displayUrl: '4f1t.com', arch: 'u86', stack: 'ViteJs', status: 'up', framework: 'React' },
  { id: 24, ind: 'Sports', name: '4F1T ChambersForSport', env: 'production', url: 'https://4f1t.chambersforsport.com', displayUrl: '4f1t.chambersforsport.com', arch: '--', stack: 'Subdomain', status: 'down', framework: '--' },
  // { id: 25, ind: 'Sports', name: 'DCPA Main', env: 'production', url: 'https://dcpa.chambersforsport.com', displayUrl: 'dcpa.chambersforsport.com', arch: '--', stack: 'Portal', status: 'down', framework: '--' },
  { id: 26, ind: 'E-com', name: 'CFS Store', env: 'production', url: 'https://store.chambersforsport.com', displayUrl: 'store.chambersforsport.com', arch: '--', stack: 'Shopify / Custom', status: 'down', framework: '--' },
  { id: 27, ind: 'Sports', name: 'The Plyometric Toolkit', env: 'production', url: 'https://theplyometrictoolkit.com/', displayUrl: 'theplyometrictoolkit.com', arch: '--', stack: 'Wix', status: 'up', framework: 'E-Com' },
  { id: 28, ind: 'Sports', name: 'Next Phase', env: 'production', url: 'https://nxtphs.com', displayUrl: 'nxtphs.com', arch: '--', stack: 'NextJs', status: 'up', framework: 'React' },
  { id: 29, ind: 'Sports', name: 'Next Phase Admin', env: 'production', url: 'https://admin.nxtphs.com', displayUrl: 'admin.nxtphs.com', arch: 'u45', stack: 'Laravel', status: 'up', framework: 'PHP' },
  { id: 30, ind: 'Business', name: 'UrOwnStorage Website', env: 'production', url: 'https://urownstorage.com', displayUrl: 'urownstorage.com', arch: '--', stack: 'NextJs', status: 'up', framework: 'React' },
  // { id: 31, ind: 'Business', name: 'UrOwnStorage SaaS (Staging)', env: 'staging', url: 'https://staging.urownstorage.com', displayUrl: 'staging.urownstorage.com', arch: 'u86', stack: 'RoR', status: 'up', framework: 'Ruby on Rails' },
  { id: 32, ind: 'Business', name: 'UrOwnStorage Business SaaS', env: 'production', url: 'https://business.urownstorage.com', displayUrl: 'business.urownstorage.com', arch: 'u86', stack: 'RoR', status: 'up', framework: 'Ruby on Rails' },
  { id: 33, ind: 'Business', name: 'UrOwnStorage Mobile App', env: 'production', url: 'https://play.google.com/store/apps/details?id=com.urownstorage', displayUrl: 'Google Play Store', arch: '--', stack: 'Expo', status: 'up', framework: 'React Native' },
  { id: 34, ind: 'Business', name: 'BCE USA Main', env: 'production', url: 'https://bce-usa.com/', displayUrl: 'bce-usa.com', arch: 'u45', stack: 'Laravel', status: 'up', framework: 'PHP' },
  { id: 35, ind: 'E-com', name: 'BCE Store', env: 'production', url: 'https://store.bce-usa.com/', displayUrl: 'store.bce-usa.com', arch: 'u45', stack: 'Laravel', status: 'down', framework: 'E-Com' },
  // { id: 36, ind: 'Business', name: 'BCE Pages Login', env: 'production', url: 'https://pages.bce-usa.com/login', displayUrl: 'pages.bce-usa.com/login', arch: 'u45', stack: 'Laravel', status: 'up', framework: 'PHP' }
];

export const BRAND_DESIGNS: BrandDesign[] = [
  {
    id: 'cfs',
    title: 'ChambersForSport & Dwain Chambers',
    category: 'Sports & Event Marketing',
    partner: 'Dwain Chambers (Olympic Sprinter)',
    description: 'Complete brand identity, ticket promotional funnels, camp registration assets, and digital event campaigns for elite athletic training.',
    tags: ['Brand Identity', 'Ticket Funnels', 'Social Assets', 'Next.js UI', 'Event Design'],
    color: 'from-amber-500/20 to-rose-500/20',
    borderColor: 'border-amber-500/30',
    stats: { ticketsSold: '5,000+', conversionRate: '+34%', channels: 'Social, Meta, Google' },
    details: 'Co-created the digital aesthetic and ticketing funnel for 4F1T and ChambersForSport camps. Designed marketing assets, web registration flows, and automated emails.'
  },
  {
    id: 'urownstorage',
    title: 'UrOwnStorage P2P Ecosystem',
    category: 'SaaS & Mobile App Branding',
    partner: 'UrOwnStorage Marketplace',
    description: 'Visual identity system for a peer-to-peer storage platform. Created modern host/seeker dashboards, mobile app icons, and trust-building UI elements.',
    tags: ['UI/UX Systems', 'Logo Design', 'App Design', 'React Native UI'],
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    stats: { activeHosts: '200+', appRating: '4.8/5', platformRevenue: 'Scaling' },
    details: 'Designed cohesive brand language connecting space hosts with seekers. Developed custom icon sets, onboarding illustrations, and responsive dashboard layouts.'
  },
  {
    id: 'monocloth',
    title: 'Monocloth E-Commerce & D2C',
    category: 'E-Commerce Growth & Fashion',
    partner: 'Monocloth Global',
    description: 'End-to-end e-commerce store design, photography direction, B2B wholesale portal branding, and high-converting Google/Meta ad creative sets.',
    tags: ['Shopify Plus', 'Photoshots', 'D2C Marketing', '$1M Revenue'],
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'border-indigo-500/30',
    stats: { revenue: '$1M USD (2019)', catalogItems: '250+', ROAS: '4.2x' },
    details: 'Spearheaded visual branding for international street fashion D2C brand. Directed photoshoots, optimized Shopify layout for mobile conversions, and managed B2B catalogs.'
  },
  {
    id: 'toms',
    title: 'TOMS of E-Guide & Tourism Suite',
    category: 'Travel & Destination Branding',
    partner: 'TOMS of E-Guide / Emotions Travel',
    description: 'Branding for B2B tourism CRM and destination management agency. Designed partner dashboards, excursion booking flows, and marketing collateral.',
    tags: ['Tourism UX', 'CRM Design', 'Multi-Language UI', 'Morocco Tourism'],
    color: 'from-sky-500/20 to-blue-500/20',
    borderColor: 'border-sky-500/30',
    stats: { partnersOnboarded: '20+', bookingVol: '$--', markets: 'EU & MENA' },
    details: 'Engineered clean UI/UX for travel booking platforms across Morocco and European markets. Designed printable itineraries, web portals, and CRM dashboards.'
  }
];
