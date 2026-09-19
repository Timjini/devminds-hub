"use client";
import ContactSection from "@/app/components/contact-section";
import PageHero from "@/app/components/page-hero";
import { useDictionary } from "@/contexts";

export default function Page() {
  const dict = useDictionary();
  return (
    <>
      <PageHero
        img="https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/agadir/essaouira-mogador-full-day-trip2.jpeg"
        tag={dict?.contact?.badge}
        description={dict?.contact?.subtitle}
        title={dict?.contact?.title}
      />
      <ContactSection />
    </>
  );
}
