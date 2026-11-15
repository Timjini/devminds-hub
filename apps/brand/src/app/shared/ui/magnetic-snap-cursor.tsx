'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const MagneticSnapCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [targetBox, setTargetBox] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const spring = { stiffness: 450, damping: 32, mass: 0.4 };
  const boxX = useSpring(-100, spring);
  const boxY = useSpring(-100, spring);
  const boxW = useSpring(24, spring);
  const boxH = useSpring(24, spring);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    document.documentElement.classList.add('devminds-custom-cursor');

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);

      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        'a, button, [role="button"], input, textarea, select'
      );

      if (el) {
        const rect = el.getBoundingClientRect();
        const pad = 6;
        setTargetBox({ x: rect.left - pad, y: rect.top - pad, width: rect.width + pad * 2, height: rect.height + pad * 2 });
        boxX.set(rect.left - pad);
        boxY.set(rect.top - pad);
        boxW.set(rect.width + pad * 2);
        boxH.set(rect.height + pad * 2);
      } else {
        setTargetBox(null);
        boxX.set(e.clientX - 12);
        boxY.set(e.clientY - 12);
        boxW.set(24);
        boxH.set(24);
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
  }, [boxH, boxW, boxX, boxY, mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      animate={{ opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference"
    >
      {/* Instant Center Dot */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 bg-white"
      />

      {/* Morphing Corner-Bracket Frame */}
      <motion.div
        style={{ x: boxX, y: boxY, width: boxW, height: boxH }}
        className="fixed top-0 left-0"
      >
        <span className="absolute top-0 left-0 h-2.5 w-2.5 border-t-2 border-l-2 border-white" />
        <span className="absolute top-0 right-0 h-2.5 w-2.5 border-t-2 border-r-2 border-white" />
        <span className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b-2 border-l-2 border-white" />
        <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-white" />
        {targetBox && (
          <span className="absolute -top-4 right-0 font-mono text-[8px] font-black tracking-widest text-white uppercase">
            TARGET_LOCKED
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};
