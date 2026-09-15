"use client";

import {
    CategoryFilter,
    FilterItem,
} from "@/app/shared/ui/filter/category-filter";
import IconHeader from "@/app/shared/ui/header/icon-header";
import RingGlowAccent from "@/app/shared/ui/pattern/ring-glow-accent";
import { DaySelector } from "@/app/shared/ui/select/day-selector";
import { useDictionary, useLanguage } from "@/contexts";
import CustomModal from "@/widgets/custom-modal";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Flame } from "lucide-react";
import { useState } from "react";
import EmptySlate from "./empty-slate";
import { ScheduleCard } from "./schedule-card";

type ClassLevel = "Beginner" | "Intermediate" | "Advanced" | "All Levels";

export type CombatCategory = "all" | "kickboxing" | "boxing" | "mma" | "bjj";

type ScheduleItem = {
  id: string;
  title: string;
  category: "kickboxing" | "boxing" | "mma" | "bjj";
  time: string;
  duration: string;
  trainer: string;
  level: ClassLevel;
  description: string;
  day: number; // 0 = Monday, 6 = Sunday
};

const SCHEDULE_DATA: ScheduleItem[] = [
  // Monday
  {
    id: "1",
    title: "Kickboxing Fundamentals",
    category: "kickboxing",
    time: "09:00 - 10:30",
    duration: "90 min",
    trainer: "Coach Amine",
    level: "Beginner",
    description:
      "Master heavy bag strike combos, stance control, and Dutch-style kickboxing basics.",
    day: 0,
  },
  {
    id: "2",
    title: "Pro Boxing Conditioning",
    category: "boxing",
    time: "18:00 - 19:30",
    duration: "90 min",
    trainer: "Coach Youssef",
    level: "Advanced",
    description:
      "High-intensity mitt work, footwork drills, and ring strategy for competition prep.",
    day: 0,
  },
  // Tuesday
  {
    id: "3",
    title: "No-Gi BJJ & Takedowns",
    category: "bjj",
    time: "17:30 - 19:00",
    duration: "90 min",
    trainer: "Coach Tariq",
    level: "All Levels",
    description:
      "Submission wrestling focus: joint locks, choke mechanics, and wrestling sweeps.",
    day: 1,
  },
  {
    id: "4",
    title: "MMA Striking & Cage Work",
    category: "mma",
    time: "19:30 - 21:00",
    duration: "90 min",
    trainer: "Coach Amine",
    level: "Intermediate",
    description:
      "Wall wrestling, cage control, and wall-and-stall strikes transition.",
    day: 1,
  },
  // Wednesday
  {
    id: "5",
    title: "Dutch Style Sparring",
    category: "kickboxing",
    time: "18:30 - 20:00",
    duration: "90 min",
    trainer: "Coach Youssef",
    level: "Advanced",
    description:
      "Controlled technical sparring sessions. Mandatory mouthguard & 16oz gloves.",
    day: 2,
  },
  // Thursday
  {
    id: "6",
    title: "Boxing Heavy Bag Burn",
    category: "boxing",
    time: "10:00 - 11:00",
    duration: "60 min",
    trainer: "Coach Tariq",
    level: "All Levels",
    description:
      "Endurance-focused heavy bag workout designed to build stamina and speed.",
    day: 3,
  },
  // Friday
  {
    id: "7",
    title: "Fight Night Sparring Open Mat",
    category: "mma",
    time: "19:00 - 21:00",
    duration: "120 min",
    trainer: "Head Coach Amine",
    level: "Advanced",
    description:
      "Open floor for MMA, BJJ, and Boxing controlled rounds under head trainer supervision.",
    day: 4,
  },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export const ClassSchedule = () => {
  const dict = useDictionary();
  const lang = useLanguage();

  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [activeModalItem, setActiveModalItem] = useState<ScheduleItem | null>(
    null,
  );

  const [selectedCategory, setSelectedCategory] =
    useState<CombatCategory>("all");

  const categories: FilterItem<CombatCategory>[] = Object.entries(
    dict.calendar.categories,
  ).map(([id, label]) => ({
    id: id as CombatCategory,
    label: label as string,
  }));

  // Filter Schedule based on Day and Discipline Category
  const filteredSchedule = SCHEDULE_DATA.filter((item) => {
    const matchesDay = item.day === selectedDay;
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesDay && matchesCategory;
  });

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden select-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-100 bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* header with icon */}
        <IconHeader
          icon={<Flame className="w-4 h-4 animate-pulse text-red-500" />}
          title={dict.calendar.title}
          description={dict.calendar.description}
        />

        {/* reusable day selector */}
        <DaySelector
          days={dict.days}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
        />

        {/* category selector */}
        <CategoryFilter<CombatCategory>
          items={categories}
          selectedItem={selectedCategory}
          onSelectItem={setSelectedCategory}
        />

        {/* schedule */}
        <div className="min-h-87.5">
          <AnimatePresence mode="wait">
            {filteredSchedule.length > 0 ? (
              <motion.div
                key={`${selectedDay}-${selectedCategory}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredSchedule.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={cardVariants}
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveModalItem(item)}
                    className="group relative  rounded-2xl p-6  hover:border-red-600/70  cursor-pointer transition-all overflow-hidden"
                  >
                    <ScheduleCard
                      key={item.id}
                      item={item}
                      onClick={(selected: any) => setActiveModalItem(selected)}
                      RingGlowAccent={RingGlowAccent}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // when no schedule
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <EmptySlate description="No classes scheduled for this day or filter." />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeModalItem && (
          <CustomModal
            action={() => setActiveModalItem(null)}
            htmlContent={
              <>
                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-red-950 text-red-500 border border-red-800/50 inline-block">
                    {activeModalItem.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-aldrich uppercase italic text-stone-100">
                    {activeModalItem.title}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-stone-800 text-xs font-mono text-stone-400">
                  <div>
                    <span className="block text-stone-500">Time</span>
                    <p className="text-stone-200 font-bold">
                      {activeModalItem.time}
                    </p>
                  </div>
                  <div>
                    <span className="block text-stone-500">Trainer</span>
                    <p className="text-stone-200 font-bold">
                      {activeModalItem.trainer}
                    </p>
                  </div>
                  <div>
                    <span className="block text-stone-500">Level</span>
                    <p className="text-stone-200 font-bold">
                      {activeModalItem.level}
                    </p>
                  </div>
                  <div>
                    <span className="block text-stone-500">Duration</span>
                    <p className="text-stone-200 font-bold">
                      {activeModalItem.duration}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed font-light">
                  {activeModalItem.description}
                </p>
              </>
            }
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClassSchedule;
