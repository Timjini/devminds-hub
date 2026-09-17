"use client";

import { motion } from "framer-motion";
import React from "react";

export interface DaySelectorProps {
  /** Array of day names or localized strings (e.g., dict.days or dict.selectDates) */
  days: string[];
  /** Index of currently selected day */
  selectedDay: number;
  /** Callback function triggered when a day tab is selected */
  onSelectDay: (index: number) => void;
  /** Unique layoutId for Framer Motion sliding tab animation across multiple instances */
  layoutId?: string;
  /** Optional container style overrides */
  className?: string;
}

export const DaySelector: React.FC<DaySelectorProps> = ({
  days,
  selectedDay,
  onSelectDay,
  layoutId = "activeDayTab",
  className = "",
}) => {
  if (!days || days.length === 0) return null;

  return (
    <div
      className={`flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start md:justify-center ${className}`}
    >
      {days.map((dayName, idx) => {
        const isActive = selectedDay === idx;

        return (
          <button
            key={`${dayName}-${idx}`}
            onClick={() => onSelectDay(idx)}
            className={`relative px-5 py-3 rounded-xl font-aldrich text-xs md:text-sm font-bold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 border ${
              isActive
                ? "text-white brand-border bg-brand-primary"
                : "bg-card text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-primary rounded-xl shadow-md"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{dayName}</span>
          </button>
        );
      })}
    </div>
  );
};

export default DaySelector;
