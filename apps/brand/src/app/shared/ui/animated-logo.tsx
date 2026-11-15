'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

export const AnimatedLogo: React.FC = () => {
  return (
    <Link
      href="/"
      className="inline-flex items-center select-none focus:outline-none"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ transformStyle: 'preserve-3d' }}
        animate={{
          y: [-5, 5, -5],
          rotateY: [0, 0, 360, 360],
          rotateZ: [-1.5, 1.5, -1.5],
        }}
        transition={{
          y: {
            duration: 3.6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotateZ: {
            duration: 4.8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotateY: {
            duration: 7,
            repeat: Infinity,
            times: [0, 0.72, 0.92, 1],
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        whileHover={{
          scale: 1.06,
          y: -6,
          transition: { type: 'spring', stiffness: 400, damping: 22 },
        }}
      >
        <Image
          alt="Devminds Logo"
          src={process.env.NEXT_PUBLIC_LOGO_URL || '/assets/devminds-logo.png'}
          width={180}
          height={50}
          priority
          className="h-18 md:h-24 w-auto object-contain block"
        />
      </motion.div>
    </Link>
  );
};
