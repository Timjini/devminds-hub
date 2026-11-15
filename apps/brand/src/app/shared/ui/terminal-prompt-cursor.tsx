'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'motion/react';

export const TerminalPromptCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [cmd, setCmd] = useState('idle');
  const [isInteractive, setIsInteractive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.documentElement.classList.add('devminds-custom-cursor');

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = e.target as HTMLElement | null;
      if (!el) return;

      if (el.closest('input, textarea, select')) {
        setCmd('stdin');
        setIsInteractive(true);
      } else if (el.closest('a, button, [role="button"], .cursor-pointer')) {
        const custom = el.closest<HTMLElement>('[data-cursor]')?.dataset.cursor;
        setCmd(custom ? custom.toLowerCase() : 'exec');
        setIsInteractive(true);
      } else {
        setCmd('sys.ok');
        setIsInteractive(false);
      }
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('devminds-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y }}
      animate={{ opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
    >
      <div className="flex items-center gap-1.5 -translate-x-1 -translate-y-2 font-mono text-[10px] font-black tracking-wider text-white uppercase">
        {/* Blinking TTY Block Cursor */}
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.49, 0.5, 1] }}
          className={`inline-block bg-white ${isInteractive ? 'w-3 h-4' : 'w-2 h-3.5'}`}
        />
        <span className={isInteractive ? 'border border-white px-1.5 py-0.5' : 'opacity-75'}>
          $ {cmd}
        </span>
      </div>
    </motion.div>
  );
};
