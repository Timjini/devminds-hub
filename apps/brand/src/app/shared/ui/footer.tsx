'use client';

import { ArrowUp } from 'lucide-react';
import { NavButton } from './button/nav-button';
import { useDictionary } from '@/contexts';

export const Footer = () => {
  const { footer } = useDictionary();
  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-brutal border-line bg-surface text-ink">
      {/* Ready to Launch Callout Band */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 border-b-brutal border-line flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div>
          <p className="text-xs sm:text-sm font-black tracking-label uppercase mb-3 text-ink">
            {footer.eyebrow}
          </p>
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-[-0.04em] leading-[0.94] uppercase text-ink">
            {footer.headline}
          </h2>
        </div>

        <NavButton href={footer.cta.href}>
          {footer.cta.label}
        </NavButton>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="text-xs sm:text-sm font-black tracking-cta uppercase text-ink">
          {footer.brandName} &copy; {new Date().getFullYear()} — {footer.tagline}
        </div>

        <div className="flex items-center gap-6">
          {adminEmail && (
            <a
              href={`mailto:${adminEmail}`}
              className="text-xs sm:text-sm font-black tracking-cta uppercase underline decoration-2 underline-offset-4 text-ink hover:bg-surface-inverse hover:text-ink-inverse px-2 py-1 transition-colors duration-150"
            >
              {adminEmail}
            </a>
          )}

          <button
            type="button"
            onClick={scrollToTop}
            aria-label={footer.backToTopAria}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black tracking-cta uppercase px-3 py-1.5 border-brutal border-line bg-surface text-ink hover:bg-surface-inverse hover:text-ink-inverse transition-colors duration-150 cursor-pointer"
          >
            {footer.backToTop}
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
