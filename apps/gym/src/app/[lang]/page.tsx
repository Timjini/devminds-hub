import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { gymData } from "@/data/main";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const data = gymData;
  console.log(data);
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col h-screen  justify-center align-center items-center gap-8 px-6">
      <span
        className="font-knockout text-white text-center text-2xl lg:text-6xl hover:scale-105 bg-red-700
                   p-2 w-full md:w-120 rounded-sm shadow-lg transition delay-150 duration-300 ease-in-out"
      >
        {data.name}
      </span>
      <h1 className="p-8 font-display text-center text-6xl lg:text-7xl uppercase  bg-clip-text text-transparent object-fill bg-[url(https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] text-wrap">
        {dict.welcome.title}
      </h1>
      <p className="font-montserrat text-2xl"> {dict.welcome.description}</p>
    </div>
  );
}
