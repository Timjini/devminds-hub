"use client";
import { useDictionary } from "@/contexts";
import {
    AlertCircle,
    Briefcase,
    ChevronRight,
    Code,
    Download,
    ExternalLink,
    Filter,
    Globe,
    Languages,
    Layers,
    MapPin,
    Palette,
    Search,
    TrendingUp,
    X,
    Zap,
} from "lucide-react";
import { useMemo, useState } from "react";
import { BRAND_DESIGNS, BrandDesign, PROJECTS_DATA } from "../shared/data";

export default function Content() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedEnv, setSelectedEnv] = useState("All");
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedBrandModal, setSelectedBrandModal] =
    useState<BrandDesign | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(PROJECTS_DATA.map((p) => p.ind));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.stack.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.framework.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.url.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || project.ind === selectedCategory;

      const matchesEnv = selectedEnv === "All" || project.env === selectedEnv;

      return matchesSearch && matchesCategory && matchesEnv;
    });
  }, [searchQuery, selectedCategory, selectedEnv]);

  const projectStats = useMemo(() => {
    const total = PROJECTS_DATA.length;
    const active = PROJECTS_DATA.filter((p) => p.status === "up").length;
    const staging = PROJECTS_DATA.filter((p) => p.env === "staging").length;
    return { total, active, staging };
  }, []);

  const dict = useDictionary();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-200 selection:bg-teal-500 selection:text-white dark:selection:text-slate-950">
      {/* Background Subtle Glows */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/3 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-10 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800/80 px-4 lg:px-12 py-3 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-teal-500/20">
              HL
            </div>
            <div>
              <div className="font-bold text-slate-900 dark:text-white text-base tracking-tight flex items-center gap-2">
                {dict.header.name}
                <span className="text-xs font-normal px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-400 border border-teal-300 dark:border-teal-800">
                  {dict.header.location}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {dict.header.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCvModalOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-md shadow-teal-500/20 active:scale-95 cursor-pointer"
            >
              <Download size={16} />
              <span>{dict.header.downloadCv}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 lg:px-12 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/60 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs text-teal-600 dark:text-teal-400 font-mono">
              <span>{dict.hero.badge}</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              {dict.hero.titlePrefix} <br />
              <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 dark:from-teal-400 dark:via-emerald-400 dark:to-sky-400 bg-clip-text text-transparent">
                {dict.hero.titleHighlight}
              </span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
              {dict.hero.description.part1}{" "}
              <strong className="text-slate-900 dark:text-white">
                {dict.hero.description.boldTech}
              </strong>
              {dict.hero.description.part2}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
                <MapPin
                  size={14}
                  className="text-rose-500 dark:text-rose-400"
                />
                <span>{dict.hero.location}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
                <Languages
                  size={14}
                  className="text-teal-500 dark:text-teal-400"
                />
                <span>{dict.hero.languages}</span>
              </div>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/80">
              <div className="bg-white/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                  {projectStats.total}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Globe
                    size={12}
                    className="text-teal-500 dark:text-teal-400"
                  />{" "}
                  {dict.hero.stats.liveProjects}
                </div>
              </div>
              <div className="bg-white/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                  $1M+
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <TrendingUp
                    size={12}
                    className="text-emerald-500 dark:text-emerald-400"
                  />{" "}
                  {dict.hero.stats.ecomRevenue}
                </div>
              </div>
              <div className="bg-white/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 font-mono">
                  4
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Zap size={12} className="text-sky-500 dark:text-sky-400" />{" "}
                  {dict.hero.stats.consulting}
                </div>
              </div>
              <div className="bg-white/80 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-mono">
                  7+ Yrs
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Briefcase
                    size={12}
                    className="text-indigo-500 dark:text-indigo-400"
                  />{" "}
                  {dict.hero.stats.experience}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Skill & Tech Card */}
          <div className="lg:col-span-4 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                <Code size={16} className="text-teal-500 dark:text-teal-400" />{" "}
                {dict.techCard.title}
              </h3>
              <span className="text-[10px] bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-400 px-2 py-0.5 rounded font-mono">
                {dict.techCard.badge}
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-1.5">
                  {dict.techCard.categories.ecom}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Shopify",
                    "WooCommerce",
                    "Google Ads",
                    "GA4",
                    "GTM",
                    "Ahrefs SEO",
                    "Meta Ads",
                    "CRO",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 px-2 py-0.5 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-1.5">
                  {dict.techCard.categories.engineering}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Ruby on Rails",
                    "Next.js",
                    "React",
                    "React Native / Expo",
                    "Laravel",
                    "Node.js",
                    "Vite",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800/60 px-2 py-0.5 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-slate-500 dark:text-slate-400 font-medium mb-1.5">
                  {dict.techCard.categories.devops}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Docker",
                    "Kubernetes",
                    "Apache Kafka",
                    "CI/CD",
                    "REST APIs",
                    "TDD (RSpec)",
                  ].map((item) => (
                    <span
                      key={item}
                      className="bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 px-2 py-0.5 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase Section */}
      <section className="px-4 lg:px-12 py-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-lime-100 dark:bg-lime-950/60 text-lime-800 dark:text-lime-400 border border-lime-300 dark:border-lime-800/50 text-xs font-mono mb-2">
              <Palette size={14} /> {dict.brandShowcase.badge}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {dict.brandShowcase.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-xl">
              {dict.brandShowcase.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BRAND_DESIGNS.map((brand: BrandDesign) => (
            <div
              key={brand.id}
              onClick={() => setSelectedBrandModal(brand)}
              className={`group cursor-pointer rounded-2xl p-6 bg-white dark:bg-slate-900/80 border ${brand.borderColor} hover:border-slate-300 dark:hover:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-xl relative overflow-hidden`}
            >
              <div
                className={`absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br ${brand.color} rounded-full blur-2xl group-hover:scale-150 transition-transform`}
              />

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {brand.category}
                    </span>
                    <span className="text-xs text-lime-600 dark:text-lime-400 font-mono flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      {dict.brandShowcase.viewShowcase}{" "}
                      <ChevronRight size={14} />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-rose-500 dark:group-hover:text-rose-300 transition-colors">
                    {brand.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-3">
                    {dict.brandShowcase.partnerLabel}: {brand.partner}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {brand.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {brand.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    {Object.entries(brand.stats)
                      .slice(0, 2)
                      .map(([k, v]) => (
                        <span key={k}>
                          <strong className="text-slate-900 dark:text-white">
                            {v}
                          </strong>{" "}
                          ({k})
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Table Section */}
      <section
        className="px-4 lg:px-12 py-12 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-900"
        id="projects-table"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-teal-100 dark:bg-teal-950/60 text-teal-800 dark:text-teal-400 border border-teal-300 dark:border-teal-800/50 text-xs font-mono mb-2">
              <Layers size={14} /> {dict.projectsTable.badge}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {dict.projectsTable.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              {dict.projectsTable.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
              {dict.projectsTable.showing}{" "}
              <strong className="text-teal-600 dark:text-teal-400">
                {filteredProjects.length}
              </strong>{" "}
              {dict.projectsTable.of} {PROJECTS_DATA.length}{" "}
              {dict.projectsTable.assets}
            </span>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white/80 dark:bg-slate-900/90 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 mb-6 space-y-4 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={16}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={dict.projectsTable.searchPlaceholder}
                className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-teal-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="md:col-span-7 flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1 font-mono">
                <Filter size={12} /> {dict.projectsTable.industryLabel}
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-teal-500 text-slate-950 font-bold shadow-md shadow-teal-500/20"
                      : "bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Master Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-xl">
          <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-100 dark:bg-slate-950/90 text-slate-600 dark:text-slate-400 uppercase font-mono tracking-wider border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="py-3.5 px-4">
                  {dict.projectsTable.headers.industry}
                </th>
                <th className="py-3.5 px-4">
                  {dict.projectsTable.headers.projectName}
                </th>
                <th className="py-3.5 px-4">
                  {dict.projectsTable.headers.domainUrl}
                </th>
                <th className="py-3.5 px-4">
                  {dict.projectsTable.headers.techStack}
                </th>
                <th className="py-3.5 px-4">
                  {dict.projectsTable.headers.status}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-sans">
              {filteredProjects.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    <AlertCircle
                      size={24}
                      className="mx-auto mb-2 text-slate-400 dark:text-slate-600"
                    />
                    {dict.projectsTable.emptyState}
                  </td>
                </tr>
              ) : (
                filteredProjects.map((project) => (
                  <tr
                    key={project.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors group"
                  >
                    <td className="py-3 px-4 font-medium">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono ${
                          project.ind === "Tourism"
                            ? "bg-sky-100 text-sky-800 border border-sky-300 dark:bg-sky-950 dark:text-sky-400 dark:border-sky-800/50"
                            : project.ind === "Sports"
                              ? "bg-amber-100 text-amber-800 border border-amber-300 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-800/50"
                              : project.ind === "E-com"
                                ? "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950 dark:text-emerald-400 dark:border-emerald-800/50"
                                : project.ind === "Business"
                                  ? "bg-indigo-100 text-indigo-800 border border-indigo-300 dark:bg-indigo-950 dark:text-indigo-400 dark:border-indigo-800/50"
                                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {project.ind}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-300 transition-colors">
                      {project.name}
                    </td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-400 font-mono">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1"
                      >
                        {project.displayUrl} <ExternalLink size={12} />
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono text-[11px]">
                        {project.stack}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                          project.status === "up"
                            ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                            : "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${project.status === "up" ? "bg-emerald-500" : "bg-rose-500"}`}
                        />
                        {project.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* CV Download Modal */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setCvModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center">
                <Download size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {dict.header.downloadCv}
              </h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              Download the full resume in PDF format.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <a
                href={process.env.NEXT_PUBLIC_EN_CV}
                download
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Download size={14} /> Download PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Brand Showcase Modal */}
      {selectedBrandModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedBrandModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white p-1 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 inline-block mb-3">
              {selectedBrandModal.category}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
              {selectedBrandModal.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
              {dict.brandShowcase.partnerLabel}: {selectedBrandModal.partner}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
              {selectedBrandModal.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedBrandModal.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
              {Object.entries(selectedBrandModal.stats).map(([k, v]) => (
                <div key={k}>
                  <strong className="text-slate-900 dark:text-white text-base block">
                    {v}
                  </strong>
                  <span>{k}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
