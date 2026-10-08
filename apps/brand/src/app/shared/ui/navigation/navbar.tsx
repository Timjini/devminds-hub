"use client";
import { navLinks } from "@/data/main";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";
import AppLogo from "../app-logo";
import NavigationButton from "../button/navigation-button";
import FlatLinkList from "../list/flat-link-list";
import { Download } from "lucide-react";

const Navbar: React.FC = () => {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 60);

    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80 px-4 lg:px-12 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-teal-500/20">
            HL
          </div>
          <div>
            <div className="font-bold text-white text-base tracking-tight flex items-center gap-2">
              Houssam L.
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
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-semibold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-md shadow-teal-500/20 active:scale-95"
          >
            <Download size={16} />
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
