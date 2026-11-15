import { motion } from "motion/react";
import { NavButton } from "../button/nav-button";


export const HeroSection = () => {
  return (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <section
      id="top"
      className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-20 sm:pt-24 sm:pb-32 border-b-2 border-black"
    >
      {/* Eyebrow Tag */}
      <div className="mb-8 sm:mb-12">
        <span className="hover:bg-brand-accent inline-block text-xs sm:text-sm font-black tracking-[0.2em] uppercase border-2 border-black px-3 py-1">
          FOR STARTUPS &amp; EARLY-STAGE FOUNDERS
        </span>
      </div>

      {/* Oversized Swiss Display Headline */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-[-0.04em] leading-[0.94] uppercase max-w-6xl">
        WE BUILD YOUR TECHNICAL FOUNDATION.
      </h1>

      {/* Subtitle & Primary CTA Grid */}
      <div className="mt-12 sm:mt-16 pt-10 border-t-2 border-black grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        <p className="lg:col-span-7 text-xl sm:text-2xl md:text-[1.65rem] font-bold leading-snug tracking-tight">
          Devminds helps startups and early-stage founders handle their technical
          foundation—from infrastructure and hosting to domain management, email setup, and
          CRM integration.
        </p>

        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
          <NavButton href="/pages/start-setup">
            START A PROJECT
          </NavButton>
        </div>
      </div>
      </section>
  </motion.div>
  );
};
