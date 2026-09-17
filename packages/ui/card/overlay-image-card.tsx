// The card looks like a social media post, with
// title show on hover, icon and background image

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { IconComponent } from "../utils/icon-helper";

interface GridProps {
  idx?: number;
  id: string;
  link: string;
  image: string;
  imageTitle: string;
  category: string;
  title: string;
  tagSentence: string;
  icon: keyof typeof Icons;
}

export const OverlayImageCard: React.FC<GridProps> = ({
  idx = 1,
  id,
  link,
  image,
  imageTitle,
  category,
  title,
  tagSentence,
  icon,
}) => {
  return (
    <motion.a
      key={id}
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="group relative aspect-square overflow-hidden rounded-2xl bg-brand-text brand-border/80 block cursor-pointer"
    >
      {/* Background Image */}
      <img
        src={image}
        alt={imageTitle}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-brand-text via-stone-950/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

      {/* Category Tag (Top Right) */}
      <div className="absolute top-3 right-3 z-10">
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-widest bg-brand-text/80 text-stone-300 border border-stone-800/80 backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Hover Details (Bottom Content) */}
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-aldrich text-lg font-black uppercase text-stone-100 group-hover:text-brand-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-1.5 mt-1 text-xs font-mono text-stone-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {icon && (
            <IconComponent
              iconName={icon}
              customClass="w-3.5 h-3.5 text-brand-primary"
            />
          )}
          <span>{tagSentence}</span>
        </div>
      </div>
    </motion.a>
  );
};
