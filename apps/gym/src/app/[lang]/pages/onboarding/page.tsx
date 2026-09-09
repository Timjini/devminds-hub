"use client";
import PageHero from "@/app/shared/ui/section/page-hero";
import { LanguageContext } from "@/contexts";
import { useContext } from "react";

export default function Page() {
  const language = useContext(LanguageContext);
  console.log("lanaguage in onboarding page ===<", language);
  //   const dict = await getDictionary(language || "en");
  return (
    <section>
      <PageHero
        img="https://images.unsplash.com/photo-1509563268479-0f004cf3f58b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        tag="Contract"
        title="KBM GYM AGADIR"
        description="SPORTS SEASON 2026/2027"
      />

      <div className="mx-auto flex flex-col justify-center">
        <h1 className="text-5xl ">MINOR ANNUAL MEMBERSHIP CONTRACT</h1>
      </div>
    </section>
  );
}
