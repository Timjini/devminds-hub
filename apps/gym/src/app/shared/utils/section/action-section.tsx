"use client";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import NavigationButton from "../button/navigation-button";

export default function ActionSection({ dict }: { dict: any }) {
  return (
    <section className="relative flex flex-row justify-center items-center mx-auto px-4 py-12 md:p-12 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mx-auto max-w-6xl w-full p-8 md:p-12  rounded-2xl border-2 border-brand-primary/40 shadow-[0_0_50px_rgba(220,38,38,0.15)] overflow-hidden group"
      >
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-primary/20 transition-all duration-700" />

        <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-brand-primary/20 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="lg:col-span-8 flex flex-col justify-center space-y-4 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center gap-2 text-xs md:text-sm font-black uppercase tracking-widest text-brand-primary"
          >
            <Flame className="w-4 h-4 animate-pulse text-brand-primary" />
            <span>KBM Gym Agadir</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight italic  font-aldrich leading-none drop-shadow-md"
          >
            {dict.homePage.actionSection.title}
          </motion.h1>
        </div>

        {/* RIGHT COLUMN: Action CTA */}
        <div className="lg:col-span-4 flex items-center justify-start lg:justify-end z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto min-w-50"
          >
            <div className="relative group/btn">
              <div className="absolute -inset-0.5 bg-stone-400 rounded-lg blur opacity-50 group-hover/btn:opacity-100 transition duration-300" />

              <div className="relative  rounded-lg p-1">
                <NavigationButton
                  label={dict.homePage.actionSection.buttonText}
                  href="/pages/onboarding"
                  btnType="primary"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-brand-primary to-transparent opacity-70" />
      </motion.div>
    </section>
  );
}
