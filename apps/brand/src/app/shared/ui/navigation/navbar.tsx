'use client';

import Link from 'next/link';
import { AnimatedLogo } from '../animated-logo';
import { NavButton } from '../button/nav-button';
import { useDictionary } from '@/contexts';

export const Navbar = () => {
  const dict = useDictionary();
  const { navbar } = dict;

  return (
    <header className="w-full border-b-brutal border-line bg-surface text-ink sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 sm:px-10 h-20 flex items-center justify-between">
        <AnimatedLogo />

        {/* Navigation Links & Primary Action */}
        <nav aria-label={navbar.ariaLabel} className="flex items-center gap-6 sm:gap-10">
          <Link
            href={navbar.links.capabilities.href}
            className="hidden md:inline-block text-sm font-black tracking-cta uppercase text-ink hover:underline underline-offset-4 decoration-2"
          >
            {navbar.links.capabilities.label}
          </Link>
          <Link
            href={navbar.links.notes.href}
            className="hidden md:inline-block text-sm font-black tracking-cta uppercase text-ink hover:underline underline-offset-4 decoration-2"
          >
            {navbar.links.notes.label}
          </Link>
          <NavButton
            href={navbar.cta.href}
            size="sm"
            icon={null}
            fullWidthOnMobile={false}
          >
            {navbar.cta.label}
          </NavButton>
        </nav>
      </div>
    </header>
  );
};
