"use client";

import { languagesObject } from "@/lib/languages";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSelect = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // const router = useRouter();

  const [currentLanguage, setCurrentLanguage] = useState("");
  const setLanguage = async (selectedLanguage: string) => {
    // set cookies with the chosen languages
    const req = await fetch(`api/language`, {
      method: "POST",
      body: JSON.stringify({ lang: selectedLanguage }),
    });

    const response = await req.json();
    setCurrentLanguage(response.body);
  };

  useEffect(() => {
    const url = `${currentLanguage}${pathname}?${searchParams}`;
    console.log("The URL", url);
    // router.refresh();
  }, [pathname, searchParams, currentLanguage]);

  return (
    <form className="max-w-sm mx-auto">
      <select
        id="countries"
        className="block w-full px-3 py-2.5 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {Object.entries(languagesObject).map(([key, value]) => (
          <option
            defaultValue={lang}
            key={value}
            value={value}
            // selected={lang === value}
            className=""
          >
            {key}
          </option>
        ))}
      </select>
    </form>
  );
};

export default LanguageSelect;
