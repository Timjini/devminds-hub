"use client";

import { languagesObject } from "@/lib/languages";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const LanguageSelect = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedLang, setSelectedLang] = useState(lang);

  const setLanguage = async (selectedLanguage: string) => {
    if (selectedLanguage === selectedLang) return;

    setSelectedLang(selectedLanguage);

    // Set cookie via API
    await fetch(`/api/language`, {
      method: "POST",
      body: JSON.stringify({ lang: selectedLanguage }),
    });

    // Reconstruct URL with new locale
    const pathArray = pathname.split("/");
    const rest = pathArray.slice(2).join("/");
    const query = searchParams.toString();
    const url = `/${selectedLanguage}/${rest}${query ? `?${query}` : ""}`;

    router.push(url);
    router.refresh();
  };

  return (
    <div className="flex justify-center">
      <div className="inline-flex p-1  brand-border rounded-xl gap-1">
        {Object.entries(languagesObject).map(([key, value]) => {
          const isActive = selectedLang === value;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setLanguage(value)}
              aria-pressed={isActive}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase transition-all duration-200 ${
                isActive
                  ? "bg-brand-primary text-brand-text shadow-md"
                  : "text-stone-400 hover:text-stone-100 hover:bg-stone-800/50"
              }`}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSelect;
