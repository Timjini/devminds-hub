"use client";

import { languagesObject } from "@/lib/languages";
import { usePathname, useSearchParams,useRouter } from "next/navigation";

const LanguageSelect = ({ lang }: { lang: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const setLanguage = async (selectedLanguage: string) => {
    const req = await fetch(`/api/language`, {
      method: "POST",
      body: JSON.stringify({ lang: selectedLanguage }),
    });
    const response = await req.json();
    const newLang = response.body;

    const pathArray = pathname.split('/');
    const rest = pathArray.slice(2).join('/');
    const url = `/${newLang}/${rest}${searchParams ? `?${searchParams}` : ''}`;

    router.push(url);
    // router.refresh() if you need to re-run server components
  };


  return (
    <form className="max-w-sm mx-auto">
      <select
        id="countries"
        className="block w-full px-3 py-2.5 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {Object.entries(languagesObject).map(([key, value]) => (
          <option
            key={value}
            value={value}
            selected={lang === value}
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
