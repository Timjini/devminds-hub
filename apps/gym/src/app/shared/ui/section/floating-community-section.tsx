"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useMemo } from "react";

type FloatingCommunitySectionProps = {
  text: string;
  images?: string[];
  className?: string;
};

// Simple pseudo-random helper so layouts are consistent between renders
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
};

export const FloatingCommunitySection: React.FC<
  FloatingCommunitySectionProps
> = ({ text, images = [], className = "" }) => {
  const floatedCards = useMemo(() => {
    if (!images || images.length === 0) return [];

    return images.map((imgSrc, index) => {
      // Seeded random math based on index
      const seed = index + 1;
      const rand1 = pseudoRandom(seed * 1.1);
      const rand2 = pseudoRandom(seed * 2.2);
      const rand3 = pseudoRandom(seed * 3.3);
      const rand4 = pseudoRandom(seed * 4.4);

      // Spread positions across the container grid bounds (avoiding exact center where text is)
      // Left: 2% to 85%
      const top = Math.floor(rand1 * 75) + 5; // 5% to 80% top offset
      const left = Math.floor(rand2 * 80) + 2; // 2% to 82% left offset

      // Varied rotation angle (-18deg to +18deg)
      const initialRotate = Math.floor(rand3 * 36) - 18;

      // Varied floating speeds & offsets
      const duration = 4 + rand1 * 4; // 4s to 8s loop
      const yOffset = 10 + rand2 * 15; // 10px to 25px movement range

      // Dynamic sizes (Small, Medium, Large)
      const sizeVariants = [
        "w-24 h-32 md:w-36 md:h-48 z-10", // Small
        "w-32 h-44 md:w-48 md:h-64 z-20", // Medium
        "w-40 h-56 md:w-56 md:h-72 z-30", // Large
      ];
      const sizeClass = sizeVariants[Math.floor(rand4 * sizeVariants.length)];

      return {
        id: index,
        src: imgSrc,
        style: {
          top: `${top}%`,
          left: `${left}%`,
        },
        initialRotate,
        duration,
        yOffset,
        sizeClass,
      };
    });
  }, [images]);

  return (
    <section
      className={`relative w-full min-h-[90vh] lg:min-h-screen bg-brand-primary overflow-hidden flex items-center justify-center py-24 select-none ${className}`}
    >
      {/* Background Combat Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* DYNAMIC FLOATING IMAGES */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {floatedCards.map((card) => (
          <motion.div
            key={card.id}
            style={card.style}
            initial={{ opacity: 0, scale: 0.6, rotate: card.initialRotate }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [-card.yOffset, card.yOffset, -card.yOffset],
              rotate: [
                card.initialRotate,
                card.initialRotate + 4,
                card.initialRotate,
              ],
            }}
            transition={{
              y: {
                duration: card.duration,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: card.duration + 1,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.6, delay: (card.id % 5) * 0.1 },
            }}
            whileHover={{ scale: 1.15, rotate: 0, zIndex: 50 }}
            className={`absolute pointer-events-auto rounded-2xl overflow-hidden border-2 border-stone-950 shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer transition-shadow duration-300 hover:shadow-red-600/40 ${card.sizeClass}`}
          >
            <Image
              src={card.src}
              alt={`Community member ${card.id + 1}`}
              fill
              className="object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 150px, 300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* GIANT OVERSIZED CENTER TEXT */}
      <div className="relative z-20 w-full flex items-center justify-center px-4 overflow-hidden pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-aldrich font-black uppercase tracking-tighter italic text-brand-primary-background 
          text-[18vw] leading-none text-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] mix-blend-difference"
        >
          {text}
        </motion.h1>
      </div>

      {/* BOTTOM SLANTED STRIPE ACCENT */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-stone-950 opacity-90 z-30" />
    </section>
  );
};

export default FloatingCommunitySection;
