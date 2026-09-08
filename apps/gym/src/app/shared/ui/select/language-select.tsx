"use client";

import { languagesObject } from "@/lib/languages";

const LanguageSelect = ({ lang }: { lang: string }) => {
  console.log("current lang", lang);
  const setLanguage = async (selectedLanguage: string) => {
    console.log("target", selectedLanguage);
    const res = await fetch(`api/language`, {
      method: "POST",
      body: JSON.stringify({ lang: selectedLanguage }),
    });
    console.log(res);
  };
  return (
    <form className="max-w-sm mx-auto">
      <select
        id="countries"
        className="block w-full px-3 py-2.5 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {Object.entries(languagesObject).map(([key, value]) => (
          <option key={value} value={value} defaultValue={lang} className="">
            {key}
          </option>
        ))}
      </select>
    </form>
  );
};

export default LanguageSelect;
