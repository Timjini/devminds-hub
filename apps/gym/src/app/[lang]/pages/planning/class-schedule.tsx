"use client";

import {
  CategoryFilter,
  FilterItem,
} from "@/app/shared/ui/filter/category-filter";
import IconHeader from "@/app/shared/ui/header/icon-header";
import { useDictionary, useLanguage } from "@/contexts";
import CustomModal from "@/widgets/custom-modal";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Clock, Flame, User } from "lucide-react";
import { useMemo, useState } from "react";

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

type CalendarDayCell = {
  empty: boolean;
  id: string;
  dayNum?: number;
  dateObj?: Date;
  sessions?: (ScheduleItem & { uniqueId: string; dateObj: Date })[];
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

export const ClassSchedule = () => {
  const dict = useDictionary();
  const lang = useLanguage();

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

  // Weekday header labels starting from Monday
  const weekDaysHeader =
    lang === "fr"
      ? ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]
      : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Generate calendar month matrix
  const calendarDays = useMemo(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    let startingDayIndex = firstDayOfMonth.getDay(); // 0 = Sunday
    // Adjust index to start week on Monday (0 = Mon, 6 = Sun)
    startingDayIndex = startingDayIndex === 0 ? 6 : startingDayIndex - 1;

    const days: CalendarDayCell[] = [];

    // Padding for days before the 1st of the month
    for (let i = 0; i < startingDayIndex; i++) {
      days.push({ empty: true, id: `empty-${i}` });
    }

    // Days of the month
    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const dateObj = new Date(year, month, dayNum);
      const jsDay = dateObj.getDay();
      const scheduleDay = jsDay === 0 ? 6 : jsDay - 1;

      const sessions = SCHEDULE_DATA.filter(
        (item) =>
          item.day === scheduleDay &&
          (selectedCategory === "all" || item.category === selectedCategory),
      ).map((item) => ({
        ...item,
        uniqueId: `${item.id}-${dayNum}`,
        dateObj,
      }));

      days.push({
        empty: false,
        id: `day-${dayNum}`,
        dayNum,
        dateObj,
        sessions,
      });
    }

    return days;
  }, [selectedCategory]);

  const currentMonthName = new Date().toLocaleDateString(
    lang === "fr" ? "fr-FR" : "en-US",
    { month: "long", year: "numeric" },
  );

  return (
    <section className="pt-24 min-h-screen   font-sans selection:bg-brand-primary selection:text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-175 h-100 bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">
        {/* Header with Title and Month Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <IconHeader
            icon={<Flame className="w-4 h-4 animate-pulse text-red-500" />}
            title={dict.calendar.title}
            description={dict.calendar.description}
          />
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 font-mono text-xs uppercase tracking-wider">
            <CalendarDays className="w-4 h-4 text-red-500" />
            <span>{currentMonthName}</span>
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter<CombatCategory>
          items={categories}
          selectedItem={selectedCategory}
          onSelectItem={setSelectedCategory}
        />

        {/* Monthly Calendar Table Grid */}
        <div className="bg-stone-950/60 border border-stone-800 rounded-3xl overflow-hidden backdrop-blur-md">
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 border-b border-stone-800 bg-stone-900/60 text-center font-mono text-xs uppercase tracking-wider text-stone-400 py-3">
            {weekDaysHeader.map((d, idx) => (
              <div key={idx}>{d}</div>
            ))}
          </div>

          {/* Calendar Grid Cells */}
          <div className="grid grid-cols-7 auto-rows-[minmax(120px,1fr)] divide-x divide-y divide-stone-800/80">
            {calendarDays.map((cell) => {
              if (cell.empty) {
                return (
                  <div
                    key={cell.id}
                    className="bg-stone-950/30 p-2 opacity-30"
                  />
                );
              }

              const isToday =
                cell.dateObj?.toDateString() === new Date().toDateString();

              return (
                <div
                  key={cell.id}
                  className={`p-2 sm:p-3 flex flex-col gap-2 transition-colors ${
                    isToday ? "bg-red-950/10" : "hover:bg-stone-900/20"
                  }`}
                >
                  {/* Day Number */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
                        isToday
                          ? "bg-red-600 text-white"
                          : "text-stone-400 bg-stone-900/80"
                      }`}
                    >
                      {cell.dayNum}
                    </span>
                  </div>

                  {/* Sessions inside day cell */}
                  <div className="flex flex-col gap-1.5 overflow-y-auto max-h-36">
                    {cell.sessions?.map((session) => (
                      <motion.div
                        key={session.uniqueId}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveModalItem(session)}
                        className="p-2 rounded-xl bg-stone-900/90 border border-stone-800 hover:border-red-600/60 cursor-pointer transition-all text-left group"
                      >
                        <div className="font-aldrich text-xs font-bold text-stone-200 group-hover:text-red-400 truncate">
                          {session.title}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-stone-400 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-red-500" />
                            {session.time.split(" - ")[0]}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for session details */}
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
