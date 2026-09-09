"use client";

import { languagesObject } from "@/lib/languages";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSelect = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedLang, setSelectedLang] = useState(lang);

  // useEffect(() => {
  //   setSelectedLang(lang);
  // }, [lang]);

  const setLanguage = async (selectedLanguage: string) => {
    setSelectedLang(selectedLanguage);

    // set cookie via API
    await fetch(`/api/language`, {
      method: "POST",
      body: JSON.stringify({ lang: selectedLanguage }),
    });

    // possibly there is a better approach!
    const pathArray = pathname.split("/");
    const rest = pathArray.slice(2).join("/");
    const query = searchParams.toString();
    const url = `/${selectedLanguage}/${rest}${query ? `?${query}` : ""}`;

    router.push(url);
    router.refresh();
  };

  return (
    <form className="max-w-sm mx-auto">
      <select
        id="languages"
        value={selectedLang}
        className="block w-full px-3 py-2.5 border border-default-medium text-heading text-sm rounded-base hover:bg-brand-primary focus:ring-brand-primary focus:border-brand-primary  shadow-xs placeholder:text-body"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {Object.entries(languagesObject).map(([key, value]) => (
          <option key={value} value={value} className="">
            {key}
          </option>
        ))}
      </select>
    </form>
  );
};

export default LanguageSelect;
