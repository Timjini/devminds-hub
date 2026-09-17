"use client";

import { motion } from "framer-motion";

export interface FilterItem<T extends string = string> {
  id: T;
  label: string;
}

export interface CategoryFilterProps<T extends string = string> {
  /** Array of category objects or string labels */
  items: (FilterItem<T> | string)[];
  /** Currently selected item ID/label */
  selectedItem: T;
  /** Callback triggered when a category is selected */
  onSelectItem: (id: T) => void;
  /** Unique layoutId for Framer Motion sliding tab animation across instances */
  layoutId?: string;
  /** Optional container style overrides */
  className?: string;
}

export function CategoryFilter<T extends string = string>({
  items,
  selectedItem,
  onSelectItem,
  layoutId = "activeCategoryTab",
  className = "",
}: CategoryFilterProps<T>) {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`}
    >
      {items.map((item) => {
        // Handle both object { id, label } and plain string item inputs
        const id = (typeof item === "string" ? item : item.id) as T;
        const label = typeof item === "string" ? item : item.label;
        const isActive = selectedItem === id;

        return (
          <button
            key={id}
            onClick={() => onSelectItem(id)}
            className={`relative px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-colors ${
              isActive
                ? "text-accent-foreground font-bold"
                : "bg-muted/50 text-muted-foreground hover:text-foreground border border-border"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-accent rounded-full shadow-md bg-brand-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
