'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

type CursorMode = 'default' | 'interactive' | 'input';

export const FuturisticCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mode, setMode] = useState<CursorMode>('default');
  const [label, setLabel] = useState<string>('');
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 360, mass: 0.45 };
  const hudX = useSpring(mouseX, springConfig);
  const hudY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsEnabled(true);
    document.documentElement.classList.add('devminds-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const customEl = target.closest<HTMLElement>('[data-cursor]');
      const inputEl = target.closest('input, textarea, select');
      const interactiveEl = target.closest(
        'a, button, [role="button"], label[for], [data-interactive="true"], .cursor-pointer'
      );

      if (customEl) {
        setMode('interactive');
        setLabel(customEl.dataset.cursor || 'CLICK');
      } else if (inputEl) {
        setMode('input');
        setLabel('TYPE');
      } else if (interactiveEl) {
        setMode('interactive');
        setLabel('CLICK');
      } else {
        setMode('default');
        setLabel('');
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('devminds-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference"
    >
      {/* 1. Zero-Lag Core: Crosshair in default mode -> Sharp Futuristic Pointer on buttons */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.85 : 1,
        }}
        transition={{ duration: 0.12 }}
        className="fixed top-0 left-0"
      >
        {mode === 'interactive' ? (
          /* Sharp Brutalist Pointer Cursor anchored at exact tip (0,0) */
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="-translate-x-[2px] -translate-y-[2px]"
          >
            <polygon
              points="2,2 2,23 8,17 13,26 17,24 12,15 21,15"
              fill="#FFFFFF"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinejoin="miter"
            />
          </svg>
        ) : mode === 'input' ? (
          <div className="-translate-x-1/2 -translate-y-1/2 h-5 w-[2px] bg-white" />
        ) : (
          <div className="-translate-x-1/2 -translate-y-1/2 relative flex items-center justify-center">
            <div className="h-1.5 w-1.5 bg-white" />
            <div className="absolute h-[1px] w-4 bg-white/80" />
            <div className="absolute h-4 w-[1px] bg-white/80" />
          </div>
        )}
      </motion.div>

      {/* 2. Spring-Tracked HUD Reticle (collapses smoothly when pointer cursor takes over) */}
      <motion.div
        style={{ x: hudX, y: hudY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: mode === 'interactive' ? 24 : mode === 'input' ? 32 : 38,
          height: mode === 'interactive' ? 24 : mode === 'input' ? 32 : 38,
        }}
        transition={{
          width: { type: 'spring', stiffness: 420, damping: 28 },
          height: { type: 'spring', stiffness: 420, damping: 28 },
          opacity: { duration: 0.15 },
        }}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {mode !== 'interactive' && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-white"
            />
            <span className="absolute top-0 left-0 h-2 w-2 border-t-2 border-l-2 border-white" />
            <span className="absolute top-0 right-0 h-2 w-2 border-t-2 border-r-2 border-white" />
            <span className="absolute bottom-0 left-0 h-2 w-2 border-b-2 border-l-2 border-white" />
            <span className="absolute bottom-0 right-0 h-2 w-2 border-b-2 border-r-2 border-white" />
          </>
        )}

        {/* Live Telemetry Readout Tag */}
        <div
          className={`absolute whitespace-nowrap font-mono text-[9px] font-black tracking-[0.2em] text-white uppercase ${
            mode === 'interactive' ? 'left-7 top-4' : 'left-full ml-3'
          }`}
        >
          {label ? (
            <span className="border border-white px-1.5 py-0.5">[{label}]</span>
          ) : (
            <span className="opacity-75">
              {String(coords.x).padStart(4, '0')}:{String(coords.y).padStart(4, '0')}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
};
