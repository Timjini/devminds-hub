"use client";

import TopGlow from "@/app/shared/ui/pattern/top-glow";
import LanguageSelect from "@/app/shared/ui/select/language-select";
import ThemeSelect from "@/app/shared/ui/select/theme-select";
import { useDictionary, useLanguage } from "@/contexts";
import { gymData } from "@/data/main";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const dict = useDictionary();
  const lang = useLanguage();
  const isRtl = lang === "ar";

  const socialLinks = [
    {
      name: dict.footer.social.instagram,
      href: "https://instagram.com",
      icon: Mail,
      handle: dict.footer.handles.instagram,
    },
    {
      name: dict.footer.social.facebook,
      href: "https://facebook.com",
      icon: Mail,
      handle: dict.footer.handles.facebook,
    },
    {
      name: dict.footer.social.youtube,
      href: "https://youtube.com",
      icon: Mail,
      handle: dict.footer.handles.youtube,
    },
    {
      name: dict.footer.social.twitter,
      href: "https://twitter.com",
      icon: Mail,
      handle: dict.footer.handles.twitter,
    },
  ];

  const quickLinks = [
    { name: dict.footer.quickLinks.registration, href: "/pages/onboarding" },
    { name: dict.footer.quickLinks.about, href: "/" },
    { name: dict.footer.quickLinks.calendar, href: "/" },
  ];

  return (
    <footer
      className="relative  border-t-2 border-brand-primary/80 
      overflow-hidden pt-16 pb-8"
    >
      {/* Decoration */}
      {/* <HexagonalCombatMeshCornerGlow /> */}
      <TopGlow />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b
         border-stone-800"
        >
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={gymData.logo}
                  alt={gymData.name}
                  width={80}
                  height={80}
                  className="h-16 w-auto object-contain rounded-full border-2 border-red-600/60"
                />
                <div>
                  <h3 className="font-aldrich text-xl font-black uppercase tracking-wider text-stone-100">
                    {dict.footer.brandName}
                  </h3>
                  <span
                    className="text-xs text-red-500 font-mono tracking-widest uppercase flex 
                               items-center gap-1"
                  >
                    <Flame className="w-3 h-3 animate-pulse" />{" "}
                    {dict.footer.location}
                  </span>
                </div>
              </div>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed max-w-sm font-light">
              {dict.footer.description}
            </p>

            {/* Address & Contact Info */}
            <div className="space-y-2 text-xs text-stone-400 font-mono pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{dict.footer.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span>{dict.footer.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-500 shrink-0" />
                <span>{dict.footer.email}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Quick Links & Preferences (Lg: 3 Cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4
                className="font-aldrich text-sm font-bold uppercase tracking-widest text-red-500 
                           border-b border-stone-800 pb-2"
              >
                {dict.footer.navigationTitle}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-stone-300 
                      hover:text-red-500 text-sm font-semibold transition-colors 
                      uppercase tracking-wider"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-red-600 opacity-0 
                      group-hover:opacity-100 transition-opacity"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PREFERENCES: Language & Theme Switchers */}
            <div className="space-y-4 pt-2">
              <h4
                className="font-aldrich text-xs font-bold uppercase tracking-widest
               text-stone-400 border-b border-stone-800/80 pb-2"
              >
                {dict.footer.preferencesTitle}
              </h4>

              {/* Language Switcher */}
              <div className="space-y-1.5">
                <span
                  className="text-[10px] font-mono uppercase tracking-wider 
                  text-stone-500 flex items-center gap-1"
                >
                  <Globe className="w-3 h-3 text-red-500" />
                  {dict.footer.languageLabel}
                </span>
                <LanguageSelect lang={lang} />
              </div>

              {/* Theme Switcher */}
              <ThemeSelect />
            </div>
          </div>

          {/* COLUMN 3: Social Media Accounts (Lg: 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4
              className="font-aldrich text-sm font-bold uppercase tracking-widest 
            text-red-500 border-b border-stone-800 pb-2"
            >
              {dict.footer.communityTitle}
            </h4>

            {/* Social Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, x: isRtl ? -4 : 4 }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center justify-between p-3 rounded-xl 
                    bg-stone-900/80 border border-stone-800 hover:border-red-600/60 transition-all shadow-md hover:shadow-red-600/10"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg bg-stone-950 
                      text-red-500 group-hover:bg-red-600 group-hover:text-stone-950 
                      transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-stone-200 uppercase tracking-wide">
                          {social.name}
                        </span>
                        <span className="block text-[10px] text-stone-500 font-mono">
                          {social.handle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 text-stone-600 group-hover:text-red-500 
                    transition-colors"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: Copyright & Disclaimer */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs 
        text-stone-500 font-mono"
        >
          <p>
            © {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-stone-300 transition-colors">
              {dict.footer.privacyPolicy}
            </Link>
            <Link href="/" className="hover:text-stone-300 transition-colors">
              {dict.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
