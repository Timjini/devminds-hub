import { gymData } from "@/data/main";
import { notFound } from "next/navigation";
import LanguageSelect from "../shared/ui/select/language-select";
import DecoText from "../shared/ui/text/deco-text";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const data = gymData;
  console.log("what language", lang);
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="max-w-4xl text-center flex flex-col h-screen mx-auto justify-center align-center items-center gap-8 px-6">
      <span
        className="font-knockout text-white text-center text-2xl lg:text-6xl hover:scale-105 bg-red-700
                   p-2  rounded-sm shadow-lg transition delay-150 duration-300 ease-in-out"
      >
        {data.name}
      </span>
      <LanguageSelect lang={lang} />
      <DecoText
        text={dict.welcome.title}
        backgroundImg="https://images.unsplash.com/photo-1620123449946-30d6efd4b8ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <p className="font-montserrat text-lg md:text-2xl">
        {" "}
        {dict.welcome.description}
      </p>
    </div>
  );
}
