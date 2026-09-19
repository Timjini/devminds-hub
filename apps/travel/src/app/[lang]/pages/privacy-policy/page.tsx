"use client";

import { useDictionary } from "@/contexts";
import { motion } from "framer-motion";
import { CheckCircle2, Lock, Mail, ShieldCheck } from "lucide-react";

export default function Page() {
  const dict = useDictionary();
  const privacyDict = dict?.privacy;

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
            <ShieldCheck className="w-4 h-4 text-amber-700" />
            {privacyDict?.badge ?? "Legal & Security"}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {privacyDict?.title ?? "Privacy Policy"}
          </h1>
          <p className="mt-3 text-sm font-medium text-amber-900/70">
            {privacyDict?.lastUpdated ?? "Last updated: September 2026"}
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
              <Lock className="w-5 h-5 text-amber-700" />
              {privacyDict?.sections?.intro?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {privacyDict?.sections?.intro?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 2: Data We Collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {privacyDict?.sections?.dataCollection?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {privacyDict?.sections?.dataCollection?.content}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {privacyDict?.sections?.dataCollection?.items?.map(
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

          {/* Section 3: How We Use Your Data */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {privacyDict?.sections?.dataUsage?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {privacyDict?.sections?.dataUsage?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 4: Third Parties */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {privacyDict?.sections?.thirdParties?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {privacyDict?.sections?.thirdParties?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 5: Cookies & Security */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {privacyDict?.sections?.cookies?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {privacyDict?.sections?.cookies?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 6: Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-900">
              {privacyDict?.sections?.rights?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              {privacyDict?.sections?.rights?.content}
            </p>
          </section>

          <hr className="border-amber-200/50" />

          {/* Section 7: Contact */}
          <section className="space-y-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-600/10 p-6 border border-amber-200/80">
            <h2 className="text-xl font-bold text-amber-950 flex items-center gap-2">
              <Mail className="w-5 h-5 text-amber-700" />
              {privacyDict?.sections?.contact?.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-700">
              {privacyDict?.sections?.contact?.content}
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
