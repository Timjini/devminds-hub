"use client";
import { motion } from "motion/react";

export const ImageCard = ({ img }: { img: string }) => {
  return (
    <motion.div whileHover={{ opacity: 0.81, cursor: "pointer" }}>
      <img
        loading="eager"
        src={img}
        className="h-84 w-full object-cover rounded-xl shadow-xl"
        height={900}
        width={500}
        alt=""
      />
    </motion.div>
  );
};
