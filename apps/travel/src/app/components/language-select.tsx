"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { languagesObject } from "../lib/languages";

const LanguageSelect = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedLang, setSelectedLang] = useState(lang);

  const setLanguage = async (selectedLanguage: string) => {
    if (selectedLanguage === selectedLang) return;

    setSelectedLang(selectedLanguage);

    await fetch(`/api/language`, {
      method: "POST",
      body: JSON.stringify({ lang: selectedLanguage }),
    });

    const pathArray = pathname.split("/");
    const rest = pathArray.slice(2).join("/");
    const query = searchParams.toString();
    const url = `/${selectedLanguage}/${rest}${query ? `?${query}` : ""}`;

    router.push(url);
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <div className="relative inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-amber-950/10 backdrop-blur-md border border-amber-500/20 shadow-[0_8px_32px_0_rgba(193,155,119,0.15)] transition-all duration-300 hover:border-amber-500/40">
        {Object.entries(languagesObject).map(([key, value]) => {
          const isActive = selectedLang === value;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setLanguage(value)}
              aria-pressed={isActive}
              className={`relative px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-out focus:outline-none ${
                isActive
                  ? "bg-linear-to-r from-[#C19B77] to-[#A07A56] text-white shadow-[0_4px_12px_rgba(193,155,119,0.4)] scale-105"
                  : "text-amber-900/70 hover:text-amber-950 hover:bg-amber-900/10 active:scale-95"
              }`}
            >
              {/* Subtle top glare highlight on active state */}
              {isActive && (
                <span className="absolute inset-x-0 top-0 h-px bg-white/40 rounded-t-xl" />
              )}
              <span className="relative z-10">{key}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelect;
