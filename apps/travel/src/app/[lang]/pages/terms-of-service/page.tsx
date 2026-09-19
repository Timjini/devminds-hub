"use client";

import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Mail, Scale } from "lucide-react";

export default function TermsOfServicePage() {
  const dict = useDictionary();
  const termsDict = dict?.terms;

  return (
    <div className="relative min-h-screen bg-linear-to-b from-amber-50/60 via-orange-50/20 to-amber-100/50 px-6 py-24 md:px-12 text-gray-800">
      {/* Background Ambient Glows */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-12 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-900 shadow-sm backdrop-blur-md mb-4">
            <Scale className="w-4 h-4 text-amber-700" />
            {termsDict?.badge ?? "Legal Agreement"}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {termsDict?.title ?? "Terms of Service"}
          </h1>
          <p className="mt-3 text-sm font-medium text-amber-900/70">
            {termsDict?.lastUpdated ?? "Last updated: September 2026"}
          </p>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-xl backdrop-blur-xl md:p-12 space-y-10"
        >
          {/* Section 1: Intro */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-700" />
              {termsDict?.sections?.intro?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {termsDict?.sections?.intro?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 2: Services */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {termsDict?.sections?.services?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {termsDict?.sections?.services?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 3: Payments */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {termsDict?.sections?.payments?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {termsDict?.sections?.payments?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 4: Traveler Responsibilities */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {termsDict?.sections?.responsibilities?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {termsDict?.sections?.responsibilities?.content}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {termsDict?.sections?.responsibilities?.items?.map(
                (item: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-gray-700 bg-amber-50/50 p-3 rounded-xl border border-amber-200/50"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 5: Alterations */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {termsDict?.sections?.alterations?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {termsDict?.sections?.alterations?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 6: Intellectual Property */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {termsDict?.sections?.intellectualProperty?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {termsDict?.sections?.intellectualProperty?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 7: Contact */}
          <section className="space-y-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-600/10 p-6 border border-amber-200/80">
            <h2 className="text-xl font-bold text-amber-950 flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-700" />
              {termsDict?.sections?.contact?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              {termsDict?.sections?.contact?.content}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
