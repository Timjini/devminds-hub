"use client";

import { LOGO } from "@/constant/appGlobal";
import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

const TripAdvisorIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.846.626-3.548 1.68-4.908l1.45 1.45a3.996 3.996 0 0 0 .87 5.058c-1.105 0-2-.895-2-2 0-.295.066-.575.181-.827A5.983 5.983 0 0 1 4 12c0 3.309 2.691 6 6 6s6-2.691 6-6c0-1.178-.342-2.278-.931-3.219.115.252.181.532.181.827 0 1.105-.895 2-2 2a3.996 3.996 0 0 0 .87-5.058l1.45-1.45C19.374 8.452 20 10.154 20 12c0 4.411-3.589 8-8 8zm-5-8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
  </svg>
);

interface FooterProps {
  navKeys?: string[];
  handleScroll?: (key: string) => void;
}

const Footer: React.FC<FooterProps> = ({
  navKeys = ["about", "solutions", "cities", "contact"],
  handleScroll,
}) => {
  const dict = useDictionary();

  const socialLinks = [
    { icon: Mail, href: "#", label: "Instagram" },
    { icon: Mail, href: "#", label: "Facebook" },
    { icon: TripAdvisorIcon, href: "#", label: "TripAdvisor" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  // Handle phone numbers array or string gracefully
  const phoneList: string[] = ["+48 725 648 880", "+212 669 035 305"];

  return (
    <footer className="relative bg-linear-to-b from-amber-100/70 via-amber-900 to-gray-950 text-amber-50 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent opacity-80" />

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-amber-500/20">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <img
                  src={LOGO}
                  alt="Maroko Ekspert Logo"
                  className="h-14 w-auto rounded-full shadow-lg border border-amber-400/30 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-amber-200/80 leading-relaxed text-sm md:text-base max-w-md">
              {dict?.footer?.aboutText}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 text-amber-200 hover:text-gray-950 border border-white/10 transition-colors duration-200 shadow-sm"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-amber-500/30 pb-2 inline-block">
              {dict?.footer?.quickLinks ?? "Quick Links"}
            </h3>
            <ul className="space-y-2.5">
              {navKeys.map((key) => (
                <li key={key}>
                  <a
                    href={`/#${key}`}
                    onClick={(e) => {
                      if (handleScroll) {
                        e.preventDefault();
                        handleScroll(key);
                      }
                    }}
                    className="inline-flex items-center text-amber-200/80 hover:text-amber-400 transition-colors duration-200 text-sm capitalize group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-200" />
                    {/* Type-cast key as a key of dict.nav */}
                    {dict?.nav?.[key as keyof typeof dict.nav] ?? key}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b border-amber-500/30 pb-2 inline-block">
              {dict?.footer?.contactTitle}
            </h3>
            <div className="space-y-3.5 text-sm text-amber-200/80">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      dict?.about?.address?.value ??
                      "N°15, 4éme Etage, Imm. Inflass, Bd Abderrahim Bouabid,<br />Agadir 80000, Morocco",
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${dict?.about?.email?.value ?? "biuro@maroko-ekspert.pl"}`}
                  className="hover:text-amber-400 transition-colors break-all"
                >
                  {dict?.about?.email?.value ?? "biuro@maroko-ekspert.pl"}
                </a>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div className="space-y-1">
                  {phoneList.length > 0 ? (
                    phoneList.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                        className="block hover:text-amber-400 transition-colors"
                      >
                        {phone}
                      </a>
                    ))
                  ) : (
                    <span className="hover:text-amber-400 transition-colors">
                      +48 725 648 880
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-amber-300/60 gap-4">
          <p>
            © {new Date().getFullYear()} Maroko Ekspert. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/pages/privacy-policy"
              className="hover:text-amber-300 transition-colors"
            >
              {dict?.footer?.privacy ?? "Privacy Policy"}
            </Link>
            <Link
              href="/pages/terms-of-service"
              className="hover:text-amber-300 transition-colors"
            >
              {dict?.footer?.terms ?? "Terms of Service"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
