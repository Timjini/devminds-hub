"use client";

import { motion, Variants } from "framer-motion";
import { Clock, User } from "lucide-react";
import React from "react";

export interface ScheduleItem {
  id: string | number;
  time: string;
  level: string;
  category: string;
  title: string;
  trainer: string;
  duration: string;
}

export interface ScheduleCardProps {
  item: ScheduleItem;
  /** Callback triggered when card is clicked */
  onClick?: (item: ScheduleItem) => void;
  /** Framer Motion variants passed from a parent grid container */
  variants?: Variants;
  /** Optional element to render ambient glow effect */
  RingGlowAccent?: React.ComponentType;
  /** Optional custom class overrides */
  className?: string;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({
  item,
  onClick,
  variants,
  RingGlowAccent,
  className = "",
}) => {
  return (
    <motion.div
      key={item.id}
      variants={variants}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick?.(item)}
      className={`group relative rounded-2xl shadow-xl p-6 border brand-border hover:border-red-600/70 shadow-xl cursor-pointer transition-all overflow-hidden ${className}`}
    >
      {RingGlowAccent && <RingGlowAccent />}

      {/* Header: Time & Experience Level */}
      <div className="flex items-center justify-between pb-4">
        <span className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold uppercase tracking-wider">
          <Clock className="w-4 h-4" />
          {item.time}
        </span>
        <span className="px-2.5 py-1 rounded-md text-[10px] reverse-background font-mono uppercase tracking-widest brand-border">
          {item.level}
        </span>
      </div>

      {/* Main Content: Category & Class Title */}
      <div className="py-4 space-y-2">
        <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold block">
          {item.category}
        </span>
        <h3 className="font-aldrich text-xl font-black uppercase group-hover:text-red-500 transition-colors">
          {item.title}
        </h3>
      </div>

      {/* Footer: Coach/Trainer & Session Duration */}
      <div className="flex items-center justify-between pt-2 text-xs font-mono">
        <span className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-red-500" />
          {item.trainer}
        </span>
        <span className="text-stone-500">{item.duration}</span>
      </div>
    </motion.div>
  );
};

export default ScheduleCard;
