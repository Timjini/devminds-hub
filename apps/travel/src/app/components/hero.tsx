"use client";

import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import Link from "next/link";

// Animation Variants for Container Staggering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

// Animation Variants for Individual Elements
const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
} as const;

export default function Hero() {
  const dict = useDictionary();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Animated Background Glow Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-16 w-72 h-72 bg-brand-accent/30 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-10 w-64 h-64 bg-brand-accent/40 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main Glassmorphic Container with Scale & Fade Entrance */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-3xl mx-auto px-6 py-12 backdrop-blur-xl bg-white/40 shadow-2xl rounded-3xl border border-white/40"
      >
        {/* Brand Tag / Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 text-brand-primary-dark font-medium text-sm border border-white/60 shadow-sm">
            Maroko Ekspert
          </span>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight"
        >
          {dict?.welcome?.title ?? "Welcome"}
        </motion.h1>

        {/* Animated Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed"
        >
          {dict?.welcome?.description ??
            "Discover unmatched Moroccan travel experiences tailored for you."}
        </motion.p>

        {/* Interactive Animated Call To Action Button */}
        <motion.div variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-brand-primary hover:bg-brand-primary-dark text-brand-white rounded-full px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-2xl transition-colors duration-300"
            >
              {dict.about.contact_button}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
