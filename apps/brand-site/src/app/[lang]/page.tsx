import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    // <div className="max-w-4xl text-center flex flex-col h-screen mx-auto justify-center align-center items-center gap-8 px-6">
    //   <span
    //     className="font-knockout text-white text-center text-2xl lg:text-6xl hover:scale-105 bg-red-700
    //                p-2  rounded-sm shadow-lg transition delay-150 duration-300 ease-in-out"
    //   >
    //     {data.name}
    //   </span>
    //   <h1 className="p-8 font-display text-center text-5xl lg:text-7xl uppercase
    //     bg-clip-text text-transparent object-fill
    //     bg-[url(https://images.unsplash.com/photo-1610543123792-135b26601797?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
    //     text-wrap">
    //     {dict.welcome.title}
    //   </h1>
    //   <p className="font-montserrat text-lg md:text-2xl"> {dict.welcome.description}</p>
    // </div>
    <div></div>
  );
}
