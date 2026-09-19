"use client";
import { LOGO } from "@/constant/appGlobal";
import { useDictionary, useLanguage } from "@/contexts";
import Link from "next/link";
import { useState } from "react";
import LanguageSelect from "./language-select";

const Navbar = () => {
  const dict = useDictionary();
  const lang = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  const navKeys = ["services", "tours", "about"] as const;

  return (
    <nav className="absolute z-40 w-full p-6 text-gray-900">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="z-10">
          <img
            src={LOGO}
            className="h-12 w-auto rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110 md:h-16"
            alt="Maroko Ekspert Logo"
          />
        </Link>

        {/* 2. Center: Desktop Nav Links (Truly Centered) */}
        <div className="absolute inset-x-0 hidden items-center justify-center gap-8 md:flex">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`/#${key}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(key);
              }}
              className="text-base font-semibold capitalize text-gray-800 transition-colors duration-200 hover:text-[#C19B77]"
            >
              {dict?.nav?.[key] ?? key}
            </a>
          ))}
        </div>

        {/* 3. Right: Language Selector (Desktop) + Mobile Toggle */}
        <div className="z-10 flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageSelect lang={lang} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-gray-800 focus:outline-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="mt-4 flex w-full flex-col gap-3 rounded-xl bg-linear-to-br from-[#fdf6ec] via-[#fbe4c1] to-[#f6c68a] p-6 shadow-xl backdrop-blur-md md:hidden">
          {navKeys.map((key) => (
            <a
              key={key}
              href={`/#${key}`}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(key);
                setIsMenuOpen(false);
              }}
              className="text-lg font-medium capitalize text-gray-800 transition-colors duration-200 hover:text-[#C19B77]"
            >
              {dict?.nav?.[key] ?? key}
            </a>
          ))}
          <div className="pt-2 border-t border-amber-900/10">
            <LanguageSelect lang={lang} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
