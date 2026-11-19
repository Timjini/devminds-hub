'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'motion/react';

type CursorMode = 'default' | 'action' | 'write';

export const OfficePaperCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [label, setLabel] = useState('');

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.documentElement.classList.add('office-custom-cursor');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = e.target as HTMLElement | null;
      if (!el) return;

      const customLabel = el.closest<HTMLElement>('[data-cursor]')?.dataset.cursor;

      if (el.closest('input, textarea, select')) {
        setMode('write');
        setLabel(customLabel || 'Write');
      } else if (el.closest('a, button, [role="button"], [role="tab"], .cursor-pointer')) {
        setMode('action');
        setLabel(customLabel || 'Open');
      } else {
        setMode('default');
        setLabel('');
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('office-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <div className="flex items-start gap-2 -translate-x-0.5 -translate-y-0.5">
        {/* Classic Paper Pointer / Typewriter I-Beam */}
        {mode === 'write' ? (
          <div className="w-[2px] h-4 bg-[#1E4D3B] mt-0.5" />
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M1.5 1.5L13.5 6.8L8.2 8.7L6.3 14L1.5 1.5Z"
              fill={mode === 'action' ? '#1E4D3B' : '#FFFFFF'}
              stroke="#1C1B18"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
          </svg>
        )}

        {/* Small Manila/Paper Index Tag on Hover */}
        {label && (
          <span className="mt-3 px-2 py-0.5 bg-[#FFFFFF] border border-[#CFC8B8] text-[#1C1B18] font-serif text-[11px] leading-tight tracking-wide shadow-[1px_1px_0px_#CFC8B8]">
            {label}
          </span>
        )}
      </div>
    </motion.div>
  );
};
