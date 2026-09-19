"use client";

import { HOME } from "@/constant/appGlobal";
import { useDictionary } from "@/contexts";
import { motion, Variants } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants: Variants = {
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
} as const;

const About = () => {
  const dict = useDictionary();
  const router = useRouter();

  const toggleModal = () => {
    router.push("/pages/contact");
  };
  const phoneList: string[] = ["+48 725 648 880", "+212 669 035 305"];

  return (
    <section
      id="about"
      className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden bg-linear-to-b from-amber-50/50 via-orange-100/30 to-amber-100/60"
    >
      {/* 1. Ambient Background Glow Blobs */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl pointer-events-none"
      />

      {/* 2. Main Content Grid */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
        >
          {/* LEFT SIDE: Brand Story & Profile */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 md:p-10 shadow-xl backdrop-blur-xl transition-all duration-300"
          >
            <div>
              {/* Header Badge & Title */}
              <div className="mb-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-900 font-semibold text-xs tracking-widest uppercase mb-3 border border-amber-200/60 shadow-sm">
                  {dict?.about?.badge ?? "About Us"}
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  {dict?.about?.title ?? "Who We Are"}
                </h2>
                <div className="mt-3 w-20 h-1 bg-amber-600 rounded-full" />
              </div>

              {/* Profile Image Banner with Glass Effect */}
              <div className="relative overflow-hidden rounded-2xl shadow-md group my-6 border border-white/80">
                <img
                  src={`${HOME}/elOuafi.png`}
                  alt="ElOuafi"
                  className="w-full h-auto max-h-80 object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              {/* Description Paragraph */}
              <div
                className="text-base md:text-lg leading-relaxed text-gray-700 space-y-4 pt-2"
                dangerouslySetInnerHTML={{
                  __html: dict?.about?.description ?? "",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: Information & Contact Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-between overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-8 md:p-10 shadow-xl backdrop-blur-xl transition-all duration-300 relative group"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

            <div>
              {/* Card Title */}
              <div className="mb-8 border-b border-amber-900/10 pb-4">
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  {dict?.about?.information ?? "Contact Information"}
                </h3>
              </div>

              {/* Contact Information List */}
              <div className="space-y-6 text-gray-700">
                {/* Address Item */}
                <div className="flex gap-4 items-start group/item">
                  <div className="flex-shrink-0 bg-amber-100/80 p-3.5 rounded-2xl text-amber-700 shadow-sm transition-transform duration-200 group-hover/item:scale-110 group-hover/item:bg-amber-600 group-hover/item:text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-1">
                      {dict?.about?.address?.label ?? "Address"}
                    </h4>
                    <address
                      className="text-gray-600 not-italic leading-relaxed text-sm md:text-base"
                      dangerouslySetInnerHTML={{
                        __html: dict?.about?.address?.value ?? "",
                      }}
                    />
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-amber-900/10 to-transparent" />

                {/* Email Item */}
                <div className="flex gap-4 items-start group/item">
                  <div className="flex-shrink-0 bg-amber-100/80 p-3.5 rounded-2xl text-amber-700 shadow-sm transition-transform duration-200 group-hover/item:scale-110 group-hover/item:bg-amber-600 group-hover/item:text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-1">
                      {dict?.about?.email?.label ?? "Email"}
                    </h4>
                    <a
                      href={`mailto:${dict?.about?.email?.value ?? ""}`}
                      className="text-gray-700 font-medium hover:text-amber-700 transition-colors text-sm md:text-base break-all"
                    >
                      {dict?.about?.email?.value}
                    </a>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-amber-900/10 to-transparent" />

                {/* Phone Item */}
                <div className="flex gap-4 items-start group/item">
                  <div className="flex-shrink-0 bg-amber-100/80 p-3.5 rounded-2xl text-amber-700 shadow-sm transition-transform duration-200 group-hover/item:scale-110 group-hover/item:bg-amber-600 group-hover/item:text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-amber-900 uppercase tracking-wider mb-1">
                      {dict?.about?.phone?.label ?? "Phone"}
                    </h4>
                    <div className="space-y-1">
                      {phoneList.map((phone, index) => (
                        <Link
                          key={index}
                          href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                          className="block text-gray-700 font-medium hover:text-amber-700 transition-colors text-sm md:text-base"
                        >
                          {phone}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Button CTA */}
            <div className="pt-10 mt-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={toggleModal}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-4 text-base font-semibold text-white shadow-lg hover:from-amber-700 hover:to-amber-800 hover:shadow-xl transition-all duration-200 focus:outline-none"
              >
                {dict?.about?.contact_button ?? "Get in Touch"}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
