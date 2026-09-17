"use client";
import { motion } from "motion/react";
import Image from "next/image";

const ImageCard = ({ img }: { img: string }) => {
  return (
    <motion.div
    whileHover={{opacity: 0.81, cursor: 'pointer'}}
    >
      <Image
        loading="eager"
        src={img}
        className="h-84 w-96 object-cover rounded-xl shadow-xl"
        height={900}
        width={500}
        alt=""
      />
    </motion.div>
  );
};

export default ImageCard;
