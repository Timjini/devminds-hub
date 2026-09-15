"use client";
import { motion, Variants } from "framer-motion";
import { Flame } from "lucide-react";
import React from "react";
import NavigationButton from "../button/navigation-button";
import ImageCard from "../card/image-card";

export type MainInfoSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  badgeText?: string;
  images?: string[];
  className?: string;
};

// Container stagger animation variant
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Individual item punch-in animation variant
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const DEFAULT_IMAGES = [
  "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
  "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
  "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
];

const MainInfoSection: React.FC<MainInfoSectionProps> = ({
  title,
  description,
  buttonText,
  buttonHref = "/pages/onboarding",
  badgeText,
  images = DEFAULT_IMAGES,
  className = "",
}) => {
  return (
    <section
      className={`relative w-full overflow-hidden py-16 md:py-24 px-4 sm:px-6 ${className}`}
    >
      {/* Background Ambient Boxing Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl min-h-[80vh] gap-10 flex mx-auto flex-col items-center justify-center relative z-10"
      >
        {/* Optional Combat Badge / Tag */}
        {badgeText && (
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary/30 bg-red-950/20 text-brand-primary-light font-mono text-xs uppercase tracking-widest"
          >
            <Flame className="w-4 h-4 animate-pulse text-brand-primary-light" />
            <span>{badgeText}</span>
          </motion.div>
        )}

        {/* Aggressive Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-black font-aldrich uppercase text-center italic tracking-tight  max-w-5xl leading-[0.95] drop-shadow-md"
        >
          {title}
        </motion.h1>

        {/* Description Text */}
        <motion.p
          variants={itemVariants}
          className=" text-center text-base sm:text-md md:text-lg leading-relaxed max-w-3xl font-light"
        >
          {description}
        </motion.p>

        {/* Interactive Image Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full my-4"
        >
          {images.map((imgUrl, idx) => (
            <motion.div
              key={`${imgUrl}-${idx}`}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group rounded-2xl overflow-hidden brand-border hover:border-brand-primary/60 transition-colors shadow-2xl"
            >
              {/* Corner Ring Glow Effect on Hover */}
              <div className="absolute inset-0 bg-linear-to-t from-red-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <ImageCard img={imgUrl} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="pt-4"
        >
          <NavigationButton
            label={buttonText}
            href={buttonHref}
            btnType="primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MainInfoSection;
