"use client";

import { motion, Variants } from "framer-motion";
import ImageCard from "../card/image-card";

export interface ImageCardData {
  image: string;
  alt?: string;
  title?: string;
  badge?: string;
}

interface SecondarySectionProps {
  title: string;
  description: string;
  subtitle?: string;
  cards: ImageCardData[];
  className?: string;
}

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function SecondarySection({
  title,
  description,
  subtitle,
  cards = [],
  className = "",
}: SecondarySectionProps) {
  return (
    <section
      className={`flex flex-col items-center justify-center w-full py-16 md:py-24 px-4 ${className}`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-3 max-w-6xl mx-auto gap-8 lg:gap-12 items-center"
      >
        {/* Left Column: Heading & Description */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 space-y-4 text-left"
        >
          {subtitle && (
            <span className="text-xs font-mono uppercase tracking-widest text-brand-primary font-bold block">
              {subtitle}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-aldrich uppercase tracking-tight  leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <ImageCard
                img={card.image}
                alt={card.alt || `Image ${idx + 1}`}
                {...card}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
