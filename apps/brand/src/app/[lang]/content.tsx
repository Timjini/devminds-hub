
'use client';
import React, { useState, useMemo } from 'react';
import {
  Search,
  Download,
  ExternalLink,
  Globe,
  Layers,
  Smartphone,
  Server,
  Zap,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Briefcase,
  Code,
  Palette,
  Sparkles,
  TrendingUp,
  MapPin,
  Languages,
  X,
  ChevronRight,
  Filter,
  Eye,
  Award,
  BarChart3,
  Mail,
} from 'lucide-react';

const PROJECTS_DATA = [
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

const BRAND_DESIGNS: BrandDesign[] = [
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
export default function Content() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEnv, setSelectedEnv] = useState('All');
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedBrandModal, setSelectedBrandModal] = useState<BrandDesign | null>(null);

  // Filter Categories derived from data
  const categories = useMemo(() => {
    const cats = new Set(PROJECTS_DATA.map((p) => p.ind));
    return ['All', ...Array.from(cats)];
  }, []);

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.framework.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.url.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'All' || project.ind === selectedCategory;

      const matchesEnv =
        selectedEnv === 'All' || project.env === selectedEnv;

      return matchesSearch && matchesCategory && matchesEnv;
    });
  }, [searchQuery, selectedCategory, selectedEnv]);

  // Project Stats
  const projectStats = useMemo(() => {
    const total = PROJECTS_DATA.length;
    const active = PROJECTS_DATA.filter((p) => p.status === 'up').length;
    const staging = PROJECTS_DATA.filter((p) => p.env === 'staging').length;
    return { total, active, staging };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-950">
      {/* Background Subtle Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-4 lg:px-12 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-400 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-teal-500/20">
              HL
            </div>
            <div>
              <div className="font-bold text-white text-base tracking-tight flex items-center gap-2">
                Hatim L.
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-teal-950 text-teal-400 border border-teal-800">
                  Berlin, DE
                </span>
              </div>
              <p className="text-xs text-slate-400">E-Commerce & Growth Manager • Lead Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCvModalOpen(true)}
              className="flex items-center gap-2 bg-linear-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-md shadow-teal-500/20 active:scale-95"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </header>

      {}
      <section className="relative px-4 lg:px-12 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-teal-400 font-mono">
              <span>Full-Stack Architecture • E-Commerce Growth • MarTech</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              Building Scalable Tech & <br />
              <span className="bg-linear-to-r from-teal-400 via-emerald-400 to-sky-400 bg-clip-text text-transparent">
                Driving $1M+ E-Commerce Growth
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              Software Developer & E-Commerce Operations Specialist with 7+ years of experience.
              Architected systems on <strong className="text-white">Ruby on Rails, Next.js, Laravel, Kafka & Kubernetes</strong>, while scaling e-commerce platforms, optimizing Google Ads/GTM/SEO, and leading international brand growth.
            </p>

            {/* Language badges & Quick Info */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin size={14} className="text-rose-400" />
                <span>Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Languages size={14} className="text-teal-400" />
                <span>EN (C2) | FR (Native) | AR (Native) | TR (C2) | DE (B1)</span>
              </div>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold text-white font-mono">{projectStats.total}</div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <Globe size={12} className="text-teal-400" /> Live Projects
                </div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold text-emerald-400 font-mono">$1M+</div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <TrendingUp size={12} className="text-emerald-400" /> E-Com Revenue
                </div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold text-sky-400 font-mono">10d</div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <Zap size={12} className="text-sky-400" /> Onboarding (from 30d)
                </div>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <div className="text-2xl font-bold text-indigo-400 font-mono">7+ Yrs</div>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <Briefcase size={12} className="text-indigo-400" /> Full-Stack & Growth
                </div>
              </div>
            </div>
          </div>

          {/* Quick Skill & Tech Card */}
          <div className="lg:col-span-4 bg-linear-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Code size={16} className="text-teal-400" /> Core Tech & MarTech
              </h3>
              <span className="text-[10px] bg-teal-950 text-teal-400 px-2 py-0.5 rounded font-mono">Verified Stack</span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <p className="text-slate-400 font-medium mb-1.5">E-Commerce & Growth</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Shopify', 'WooCommerce', 'Google Ads', 'GA4', 'GTM', 'Ahrefs SEO', 'Meta Ads', 'CRO'].map((item) => (
                    <span key={item} className="bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 px-2 py-0.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-400 font-medium mb-1.5">Software Engineering</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Ruby on Rails', 'Next.js', 'React', 'React Native / Expo', 'Laravel', 'Node.js', 'Vite'].map((item) => (
                    <span key={item} className="bg-sky-950/60 text-sky-300 border border-sky-800/60 px-2 py-0.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-400 font-medium mb-1.5">Infrastructure & DevOps</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Docker', 'Kubernetes', 'Apache Kafka', 'CI/CD', 'REST APIs', 'TDD (RSpec)'].map((item) => (
                    <span key={item} className="bg-indigo-950/60 text-indigo-300 border border-indigo-800/60 px-2 py-0.5 rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="px-4 lg:px-12 py-12 max-w-7xl mx-auto border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-lime-950/60 text-lime-400 border border-lime-800/50 text-xs font-mono mb-2">
              <Palette size={14} /> Brand Identity & Campaign Systems
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Brand Designs & Creative Growth Projects
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              Highlights of brand strategy, sports marketing (Dwain Chambers), e-commerce visuals, and custom ticketing funnels.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRAND_DESIGNS.map((brand: BrandDesign) => (
            <div
              key={brand.id}
              onClick={() => setSelectedBrandModal(brand)}
              className={`group cursor-pointer rounded-2xl p-6 bg-slate-900/80 border ${brand.borderColor} hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/5 relative overflow-hidden`}
            >
              <div className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${brand.color} rounded-full blur-2xl group-hover:scale-150 transition-transform`} />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {brand.category}
                    </span>
                    <span className="text-xs text-lime-400 font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Showcase <ChevronRight size={14} />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-rose-300 transition-colors">
                    {brand.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-3">Partner: {brand.partner}</p>

                  <p className="text-sm text-slate-300 mb-4 line-clamp-2">
                    {brand.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {brand.tags.map((tag) => (
                      <span key={tag} className="text-[11px] bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                    {Object.entries(brand.stats).slice(0, 2).map(([k, v]) => (
                      <span key={k}>
                        <strong className="text-white">{v}</strong> ({k})
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      <section className="px-4 lg:px-12 py-12 max-w-7xl mx-auto border-t border-slate-900" id="projects-table">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-teal-950/60 text-teal-400 border border-teal-800/50 text-xs font-mono mb-2">
              <Layers size={14} /> Comprehensive Live Project Directory
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Software & Digital Assets Registry
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Extracted directly from production infrastructure deployments across Tourism, Sports, E-Commerce & Business SaaS.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              Showing <strong className="text-teal-400">{filteredProjects.length}</strong> of {PROJECTS_DATA.length} assets
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 mb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, stack, framework or domain..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-7 flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 mr-1 flex items-center gap-1 font-mono">
                <Filter size={12} /> Industry:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Filters (Environment) */}
          {/*<div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span>Environment:</span>
              {['All', 'production', 'staging'].map((env) => (
                <button
                  key={env}
                  onClick={() => setSelectedEnv(env)}
                  className={`capitalize px-2.5 py-0.5 rounded text-[11px] font-mono ${
                    selectedEnv === env
                      ? 'bg-slate-700 text-white font-bold'
                      : 'bg-slate-950 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {env}
                </button>
              ))}
            </div>

            {(searchQuery || selectedCategory !== 'All' || selectedEnv !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedEnv('All');
                }}
                className="text-teal-400 hover:underline text-xs flex items-center gap-1"
              >
                Reset Filters
              </button>
            )}
          </div>*/}
        </div>

        {/* Master Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950/90 text-slate-400 uppercase font-mono tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3.5 px-4">Industry</th>
                <th className="py-3.5 px-4">Project Name</th>
                <th className="py-3.5 px-4">Domain / URL</th>
                <th className="py-3.5 px-4">Tech Stack</th>
                <th className="py-3.5 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td className="py-12 text-center text-slate-500">
                    <AlertCircle size={24} className="mx-auto mb-2 text-slate-600" />
                    No projects found matching your filter criteria.
                  </td>
                </tr>
              ) : (
                filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-slate-800/40 transition-colors group"
                  >
                    {/* Industry */}
                    <td className="py-3 px-4 font-medium text-slate-300">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${
                        project.ind === 'Tourism' ? 'bg-sky-950 text-sky-400 border border-sky-800/50' :
                        project.ind === 'Sports' ? 'bg-amber-950 text-amber-400 border border-amber-800/50' :
                        project.ind === 'E-com' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/50' :
                        project.ind === 'Business' ? 'bg-indigo-950 text-indigo-400 border border-indigo-800/50' :
                        'bg-slate-800 text-slate-300'
                      }`}>
                        {project.ind}
                      </span>
                    </td>

                    {/* Name */}
                    <td className="py-3 px-4 font-bold text-white group-hover:text-teal-300 transition-colors">
                      {project.name}
                    </td>

                    {/* Domain / URL */}
                    <td className="py-3 px-4">
                      {project.url && project.url !== '#' ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-mono hover:underline group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>{project.displayUrl}</span>
                          <ExternalLink size={12} />
                        </a>
                      ) : (
                        <span className="text-slate-600 font-mono">--</span>
                      )}
                    </td>

                    {/* Stack */}
                    <td className="py-3 px-4 font-semibold">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                        project.stack === 'NextJs' ? 'bg-black text-white border border-slate-700' :
                        project.stack === 'Laravel' ? 'bg-rose-950 text-rose-300 border border-rose-900' :
                        project.stack === 'RoR' ? 'bg-red-950 text-red-300 border border-red-900' :
                        project.stack === 'Expo' ? 'bg-purple-950 text-purple-300 border border-purple-900' :
                        'bg-slate-800 text-slate-300'
                      }`}>
                        {project.stack}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4">
                      {project.status === 'up' ? (
                        <span className="inline-flex items-center gap-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded text-[11px] font-mono">
                          <CheckCircle2 size={12} className="text-emerald-400" />
                          <span>UP</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 bg-rose-950/80 text-rose-400 border border-rose-800 px-2 py-0.5 rounded text-[11px] font-mono">
                          <XCircle size={12} className="text-rose-400" />
                          <span>DOWN</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-12 px-4 lg:px-12 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-bold text-white text-lg tracking-tight">Hatim L.</div>
            <p className="text-xs text-slate-400 mt-1">
              E-Commerce & Growth Manager • Lead Software Developer • Berlin, Germany
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setCvModalOpen(true)}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-teal-400 border border-teal-800/60 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
            >
              <Download size={14} /> Download German / English CV
            </button>
            <a
              href="mailto:info@devminds.cloud"
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-4 py-2 rounded-xl text-xs font-medium transition-all"
            >
              <Mail size={14} /> Contact
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center text-slate-600 text-[11px] font-mono mt-8 border-t border-slate-900 pt-4">
          © {new Date().getFullYear()} Hatim L. All rights reserved. Portfolio built with React & Tailwind CSS.
        </div>
      </footer>

      {}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => setCvModalOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center text-teal-400">
                <Download size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Download Curriculum Vitae</h3>
                <p className="text-xs text-slate-400">Select your preferred language PDF format</p>
              </div>
            </div>

            {/* English CV Download Button */}
            <a
              href={process.env.ENG_CV}
              download="resume_hatim_en.pdf"
              onClick={() => setCvModalOpen(false)}
              className="group flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-500 transition-all cursor-pointer"
            >
              <div>
                <div className="font-semibold text-white text-sm group-hover:text-teal-400 flex items-center gap-2">
                  English CV (PDF)
                  <span className="text-[10px] bg-teal-950 text-teal-400 px-2 py-0.5 rounded font-mono">Official</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">E-Commerce, MarTech & Lead Software Engineer focus</p>
              </div>
              <ChevronRight size={16} className="text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* German CV Download Button */}
            <a
              href={process.env.DE_CV}
              download="resume_hatim_de.pdf"
              onClick={() => setCvModalOpen(false)}
              className="group flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-teal-500 transition-all cursor-pointer"
            >
              <div>
                <div className="font-semibold text-white text-sm group-hover:text-teal-400 flex items-center gap-2">
                  Deutscher Lebenslauf (PDF)
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">B1 Level</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">E-Commerce, MarTech & Software-Entwicklung</p>
              </div>
              <ChevronRight size={16} className="text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <p className="text-[11px] text-slate-500 text-center font-mono">
              Targeting Berlin Tech Ecosystem • Ready for Immediate Hire
            </p>
          </div>
        </div>
      )}

      {}
      {selectedBrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 lg:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <button
              onClick={() => setSelectedBrandModal(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {selectedBrandModal.category}
            </span>

            <h2 className="text-2xl font-bold text-white mt-2">{selectedBrandModal.title}</h2>
            <p className="text-xs text-teal-400 font-mono mt-0.5">Partner / Client: {selectedBrandModal.partner}</p>

            <p className="text-slate-300 text-sm leading-relaxed my-4">
              {selectedBrandModal.details}
            </p>

            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 my-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase font-mono mb-3">Key Performance & Impact</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.entries(selectedBrandModal.stats).map(([key, val]) => (
                  <div key={key} className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                    <div className="text-lg font-bold text-white font-mono">{val}</div>
                    <div className="text-[10px] text-slate-400 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase font-mono mb-2">Capabilities Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {selectedBrandModal.tags.map((t) => (
                  <span key={t} className="text-xs bg-slate-800 text-slate-200 px-3 py-1 rounded-lg border border-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedBrandModal(null)}
                className="bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-colors"
              >
                Close Showcase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
