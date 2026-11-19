'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);
  const slug = segments[segments.length - 1];
  const folderLabel =
    !slug || ['en', 'de', 'fr'].includes(slug)
      ? 'Main Desk'
      : slug
          .replace(/[-_]/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <>
      {/* Manila Folder / Fresh Paper Sheet Slide-Away Overlay */}
      <motion.div
        key={`sheet-${pathname}`}
        aria-hidden="true"
        initial={{ y: '0%' }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-0 z-[9990] bg-[#F4F0E6] border-b border-[#CFC8B8] flex items-end justify-between px-8 py-6 shadow-[0_2px_10px_rgba(28,27,24,0.06)]"
      >
        {/* Top-edge File Folder Tab & Stamp */}
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 bg-[#1E4D3B]" />
          <span className="font-serif text-sm text-[#1C1B18] tracking-wide">
            {folderLabel}
          </span>
        </div>

        <span className="px-2.5 py-0.5 bg-[#FFFFFF] border border-[#CFC8B8] font-serif text-[11px] uppercase tracking-[0.15em] text-[#5C574E]">
          AskYourFiles
        </span>
      </motion.div>

      {/* Page Reveal (Settling gently like a sheet of paper placed on a desk) */}
      <motion.div
        key={`view-${pathname}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.18, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </>
  );
}
