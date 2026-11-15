'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const sectorName =
    pathname === '/'
      ? 'SECTOR_00 // HUB'
      : `SECTOR_${pathname.replace('/pages/', '').replace(/\//g, '_').toUpperCase()}`;

  return (
    <>
      {/* Tactical HUD Corner Lock-In Overlay */}
      <motion.div
        key={`hud-${pathname}`}
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.55, ease: 'easeOut' }}
        className="pointer-events-none fixed inset-0 z-[9990] flex items-center justify-center"
      >
        {/* Expanding / Locking 4-Corner Tactical Frame */}
        <motion.div
          initial={{ width: '140px', height: '140px' }}
          animate={{ width: '96vw', height: '94vh' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Top-Left Bracket */}
          <span className="absolute top-0 left-0 h-8 w-8 border-t-4 border-l-4 border-black" />
          {/* Top-Right Bracket */}
          <span className="absolute top-0 right-0 h-8 w-8 border-t-4 border-r-4 border-black" />
          {/* Bottom-Left Bracket */}
          <span className="absolute bottom-0 left-0 h-8 w-8 border-b-4 border-l-4 border-black" />
          {/* Bottom-Right Bracket */}
          <span className="absolute bottom-0 right-0 h-8 w-8 border-b-4 border-r-4 border-black" />
        </motion.div>

        {/* Center Sector Telemetry Tag */}
        <motion.div
          initial={{ scale: 0.9, opacity: 1 }}
          animate={{ scale: 1.04, opacity: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bg-black text-white px-4 py-2 border-2 border-black font-mono text-xs font-black tracking-[0.25em] uppercase flex items-center gap-3"
        >
          <span className="inline-block h-2 w-2 bg-white animate-ping" />
          <span>{sectorName}</span>
        </motion.div>
      </motion.div>

      {/* Page Reveal */}
      <motion.div
        key={`view-${pathname}`}
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
