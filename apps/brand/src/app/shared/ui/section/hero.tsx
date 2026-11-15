'use client';

import { motion } from 'motion/react';
import { NavButton } from '../button/nav-button';
import { useDictionary } from '@/contexts';

export const HeroSection = () => {
  const { hero } = useDictionary();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <section
        id="top"
        className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-20 sm:pt-24 sm:pb-32 border-b-brutal border-line bg-surface text-ink"
      >
        {/* Eyebrow Tag */}
        <div className="mb-8 sm:mb-12">
          <span className="bg-surface text-ink hover:bg-highlight inline-block text-xs sm:text-sm font-black tracking-label uppercase border-brutal border-line px-3 py-1 transition-colors duration-150">
            {hero.eyebrow}
          </span>
        </div>

        {/* Oversized Swiss Display Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-black tracking-[-0.04em] leading-[0.94] uppercase max-w-6xl text-ink">
          {hero.headline}
        </h1>

        {/* Subtitle & Primary CTA Grid */}
        <div className="mt-12 sm:mt-16 pt-10 border-t-brutal border-line grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <p className="lg:col-span-7 text-xl sm:text-2xl md:text-[1.65rem] font-bold leading-snug tracking-tight text-ink">
            {hero.subtitle}
          </p>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-4">
            <NavButton href={hero.cta.href}>
              {hero.cta.label}
            </NavButton>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
