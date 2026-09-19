"use client";

import { useDictionary } from "@/contexts";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export interface CityItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  description: string;
  url?: string;
  gridSpan?: string;
  badgeBg?: string;
  accentGradient?: string;
}

// Framer Motion Variants with explicit typing to prevent TS errors
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

export default function FeaturedCitiesBento() {
  const dict = useDictionary();
  const router = useRouter();

  const defaultCities: CityItem[] = [
    {
      id: "marrakech",
      title: dict?.cities?.marrakech?.title ?? "Marrakech",
      subtitle: dict?.cities?.marrakech?.subtitle ?? "The Imperial Pearl",
      tagline:
        dict?.cities?.marrakech?.tagline ?? "Lively Medinas & Historic Palaces",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/marrakech/marrakech-by-night-tour-1.jpeg",
      description:
        dict?.cities?.marrakech?.desc ??
        "Uncover sensory magic in Jemaa el-Fnaa, luxury riads, vibrant souks, and lush tropical gardens tucked within red earthen walls.",
      gridSpan: "md:col-span-2 md:row-span-2 min-h-[420px] md:min-h-[520px]",
      badgeBg: "bg-amber-100/90 text-amber-900 border-amber-200/80",
      accentGradient: "from-amber-500 via-orange-500 to-amber-600",
    },
    {
      id: "chefchaouen",
      title: dict?.cities?.chefchaouen?.title ?? "Chefchaouen",
      subtitle: dict?.cities?.chefchaouen?.subtitle ?? "The Blue Pearl",
      tagline: dict?.cities?.chefchaouen?.tagline ?? "Rif Mountain Haven",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/home/agadir.jpg",
      description:
        dict?.cities?.chefchaouen?.desc ??
        "Wander through dreamy indigo-washed alleyways tucked quietly into the dramatic Rif mountains.",
      gridSpan: "md:col-span-1 md:row-span-1 min-h-[320px]",
      badgeBg: "bg-sky-100/90 text-sky-950 border-sky-200/80",
      accentGradient: "from-sky-500 via-blue-600 to-indigo-600",
    },
    {
      id: "fes",
      title: dict?.cities?.fes?.title ?? "Fes",
      subtitle: dict?.cities?.fes?.subtitle ?? "Spiritual Capital",
      tagline: dict?.cities?.fes?.tagline ?? "Living Medieval Heritage",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/home/authentic-food.png",
      description:
        dict?.cities?.fes?.desc ??
        "Journey back in time through Fes el-Bali, the world's largest car-free urban sanctuary and cultural heart of Morocco.",
      gridSpan: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-full",
      badgeBg: "bg-emerald-100/90 text-emerald-950 border-emerald-200/80",
      accentGradient: "from-emerald-600 via-teal-600 to-emerald-700",
    },
    {
      id: "agadir",
      title: dict?.cities?.agadir?.title ?? "Agadir",
      subtitle: dict?.cities?.agadir?.subtitle ?? "Sunshine & Coast",
      tagline:
        dict?.cities?.agadir?.tagline ?? "Golden Beaches & Modern Resorts",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/home/agadir.jpg",
      description:
        dict?.cities?.agadir?.desc ??
        "Bask in year-round sunshine along crescent bay beaches, vibrant promenades, and world-class surfing along the Atlantic coast.",
      gridSpan: "md:col-span-1 md:row-span-1 min-h-[320px]",
      badgeBg: "bg-yellow-100/90 text-yellow-950 border-yellow-200/80",
      accentGradient: "from-amber-400 via-yellow-500 to-orange-500",
    },
    {
      id: "rabat",
      title: dict?.cities?.rabat?.title ?? "Rabat",
      subtitle: dict?.cities?.rabat?.subtitle ?? "The Capital City",
      tagline:
        dict?.cities?.rabat?.tagline ?? "Coastal Elegance & Royal Palaces",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/adventures/jet-ski-1.jpg",
      description:
        dict?.cities?.rabat?.desc ??
        "Discover refined royal heritage, the picturesque Kasbah of the Udayas, and modern avant-garde architecture.",
      gridSpan: "md:col-span-1 md:row-span-1 min-h-[320px]",
      badgeBg: "bg-indigo-100/90 text-indigo-950 border-indigo-200/80",
      accentGradient: "from-blue-600 via-indigo-600 to-purple-600",
    },
    {
      id: "ouarzazate",
      title: dict?.cities?.ouarzazate?.title ?? "Ouarzazate & Ait Ben Haddou",
      subtitle: dict?.cities?.ouarzazate?.subtitle ?? "Doorway to the Sahara",
      tagline:
        dict?.cities?.ouarzazate?.tagline ?? "Clay Kasbahs & Film Studios",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/adventures/4wd-massa-1.jpeg",
      description:
        dict?.cities?.ouarzazate?.desc ??
        "Explore iconic UNESCO earthen fortresses, dramatic desert valleys, and legendary cinematic film locations.",
      gridSpan: "md:col-span-2 md:row-span-1 min-h-[320px]",
      badgeBg: "bg-stone-100/90 text-stone-900 border-stone-200/80",
      accentGradient: "from-orange-600 via-stone-600 to-amber-700",
    },
    {
      id: "tangier",
      title: dict?.cities?.tangier?.title ?? "Tangier",
      subtitle: dict?.cities?.tangier?.subtitle ?? "Gateway to Africa",
      tagline:
        dict?.cities?.tangier?.tagline ??
        "Where the Mediterranean Meets the Atlantic",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/home/guided-tours.jpg",
      description:
        dict?.cities?.tangier?.desc ??
        "Experience legendary bohemian allure, cliffside cafes, historical medina vistas, and sweeping sea views.",
      gridSpan: "md:col-span-1 md:row-span-1 min-h-[320px]",
      badgeBg: "bg-teal-100/90 text-teal-950 border-teal-200/80",
      accentGradient: "from-teal-500 via-emerald-600 to-cyan-600",
    },
  ];

  return (
    <section
      id="tours"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50/60 via-orange-100/30 to-amber-100/70 px-6 py-24 md:px-12"
    >
      {/* Background Animated Ambient Glows */}
      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-12 -top-12 h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.15, 1],
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-10 bottom-10 h-[480px] w-[480px] rounded-full bg-orange-400/20 blur-3xl"
      />

      {/* Main Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 max-w-3xl text-center md:mb-18"
        >
          <span className="mb-3 inline-block rounded-full border border-amber-200/60 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-900 shadow-sm">
            {dict?.cities?.badge ?? "Top Destinations"}
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {dict?.cities?.title ?? "Explore Iconic Moroccan Destinations"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            {dict?.cities?.subtitle ??
              "From ancient imperial medinas to serene coastal towns and golden Sahara dunes."}
          </p>
          <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-amber-500 to-orange-600" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid w-full auto-rows-[minmax(280px,auto)] grid-cols-1 gap-6 md:grid-cols-3"
        >
          {defaultCities.map((city, index) => {
            const isFeatured = index === 0;

            return (
              <motion.div
                key={city.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-white hover:shadow-2xl md:p-8 ${city.gridSpan}`}
              >
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-amber-900/20">
                  <Image
                    src={city.image}
                    alt={city.title}
                    fill
                    priority={isFeatured}
                    sizes={
                      city.gridSpan?.includes("col-span-2")
                        ? "(max-width: 768px) 100vw, 66vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Top Glowing Edge on Hover */}
                <div
                  className={`absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r ${city.accentGradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                {/* Top Badge */}
                <div className="relative z-10 flex w-full items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${city.badgeBg}`}
                  >
                    {city.subtitle}
                  </span>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 mt-auto pt-12 text-white">
                  <span className="mb-1 block text-xs font-medium uppercase tracking-widest text-amber-200/90">
                    {city.tagline}
                  </span>
                  <h3
                    className={`mb-2 font-extrabold tracking-tight text-white ${
                      isFeatured
                        ? "text-3xl md:text-4xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {city.title}
                  </h3>
                  <p
                    className={`mb-6 font-light leading-relaxed text-gray-200/90 ${
                      isFeatured ? "max-w-xl text-base md:text-lg" : "text-sm"
                    }`}
                  >
                    {city.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => router.push("/pages/contact")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/20 px-5 py-2.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-gray-900 md:text-sm"
                  >
                    {dict?.common?.explore ?? "Explore Destination"}
                    <svg
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
