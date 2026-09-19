"use client";

import { useDictionary } from "@/contexts";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface SolutionItem {
  id?: string | number;
  image: string;
  title: string;
  description: string;
  url?: string;
}

interface SolutionsSectionProps {
  solutions?: SolutionItem[];
  onRedirect?: (url?: string) => void;
}

// Staggered reveal container animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Header fade-up animation
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Solution card fade-up + slight scale animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function SolutionsSection({
  solutions = [],
  onRedirect,
}: SolutionsSectionProps) {
  const dict = useDictionary();
  const router = useRouter();

  const redirectToContact = () => {
    router.push("/pages/contact");
  };

  return (
    <section
      id="services"
      className="relative min-h-screen bg-linear-to-b from-amber-50 via-orange-100/50 to-amber-100/80 py-24 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-300/20 blur-3xl pointer-events-none" />

      <motion.div
        className="container mx-auto px-4 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div variants={headerVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-gray-900 drop-shadow-sm">
            {dict?.solutions?.title}
          </h2>
          <motion.div
            className="w-24 h-1 bg-amber-600 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions?.map((solution, index) => (
            <motion.div
              key={solution.id ?? index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Decorative Top Accent Light */}
              <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

              {/* Image Container */}
              <div className="relative w-full h-60 overflow-hidden bg-amber-200/30">
                <Image
                  height={500}
                  width={500}
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                {/* Subtle hover overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Area */}
              <div className="flex flex-1 flex-col justify-between p-8 text-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 tracking-tight transition-colors duration-200 group-hover:text-amber-800">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {solution.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="pt-8">
                  <button
                    type="button"
                    // onClick={() => onRedirect?.(solution.url)}
                    onClick={redirectToContact}
                    className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-amber-600 to-amber-700 px-8 py-3 text-sm font-semibold text-white shadow-md hover:from-amber-700 hover:to-amber-800 hover:shadow-xl active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  >
                    {dict?.common?.learnMore}
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
