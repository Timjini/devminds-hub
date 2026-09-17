"use client";

import { motion } from "framer-motion";
import React from "react";

type VideoComponentProps = {
  decoration?: React.ReactNode;
  videoUrl: string;
  videoId?: string;
  customClass?: string;
  containerClass?: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({
  videoId,
  videoUrl,
  decoration,
  customClass = "block min-h-screen w-auto rounded-2xl object-cover",
  containerClass = "relative overflow-hidden rounded-2xl",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`group ${containerClass}`}
    >
      {/* Animated Video Element */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        id={videoId}
        className={`${customClass} transition-transform duration-700 ease-out group-hover:scale-105`}
        initial={{ filter: "brightness(0.7)" }}
        whileInView={{ filter: "brightness(1)" }}
        transition={{ duration: 1 }}
      >
        <source src={videoUrl} type="video/mp4" />
      </motion.video>

      {/* Decorative Overlay Animation */}
      {decoration && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pointer-events-none absolute inset-0 z-10"
        >
          {decoration}
        </motion.div>
      )}

      {/* Combat Sports Glow Border Accent */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-red-600/30 opacity-60 transition-all duration-500 group-hover:border-red-600 group-hover:shadow-[inset_0_0_30px_rgba(220,38,38,0.3)] z-20" />
    </motion.div>
  );
};

export default VideoComponent;
