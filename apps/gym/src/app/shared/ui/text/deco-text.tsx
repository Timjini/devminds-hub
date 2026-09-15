"use client";

import { motion } from "framer-motion";
import React from "react";

type DecoTextProps = {
  backgroundImg: string;
  text: string;
  className?: string;
};

const DecoText: React.FC<DecoTextProps> = ({
  backgroundImg,
  text,
  className = "",
}) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-4 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.25, scale: 1.1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bg-brand-primary/30 blur-3xl pointer-events-none rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9, skewX: -6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, skewX: -6 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ scale: 1.03, skewX: -4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 cursor-default"
      >
        <h1
          className={`p-4 md:p-8 font-aldrich text-center text-5xl sm:text-6xl md:text-7xl lg:text-8xl 
          font-black tracking-tighter uppercase  bg-clip-text text-transparent 
          bg-cover bg-center bg-no-repeat transition-all duration-500 ${className}`}
          style={{
            backgroundImage: `url(${backgroundImg})`,
            WebkitBackgroundClip: "text",
          }}
        >
          {text}
        </h1>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="h-1 w-full bg-linear-to-r from-transparent via-brand-primary to-transparent -mt-2 md:-mt-4 opacity-80"
        />
      </motion.div>
    </div>
  );
};

export default DecoText;
