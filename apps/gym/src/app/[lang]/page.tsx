import Hero from "@/app/shared/ui/section/hero";
import DecoText from "@/app/shared/ui/text/deco-text";
import { ClassSchedule } from "@/entities/calendar/class-schedule";
import { getDictionary } from "@/lib/dictionary";
import * as Icons from "lucide-react";
import ActionSection from "../shared/ui/section/action-section";
import FloatingCommunitySection from "../shared/ui/section/floating-community-section";
import { GallerySection } from "../shared/ui/section/gallery-section";
import MainInfoSection from "../shared/ui/section/main-info-section";
import { SecondarySection } from "../shared/ui/section/secondary-section";
import { CombatLineSeparator } from "../shared/ui/separator/combatLine-separator";
import { DiagonalSeparator } from "../shared/ui/separator/diagonal-separator";
import { StoriesSection } from "../shared/ui/video/stories-section";

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  likes?: string;
  link: string;
  tagSentence: string;
  icon: keyof typeof Icons;
}

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const GalleryData: GalleryItem[] = [
    {
      id: "1",
      image:
        "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
      title: "Sparring Heavyweights",
      category: "Kickboxing",
      likes: "342",
      link: "https://instagram.com",
      tagSentence: "Amzing Work",
      icon: "Flame",
    },
    {
      id: "2",
      image:
        "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
      title: "Pro Fight Prep",
      category: "MMA",
      likes: "512",
      link: "https://instagram.com",
      tagSentence: "Amzing Work",
      icon: "Flame",
    },
    {
      id: "3",
      image:
        "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
      title: "Heavy Bag Conditioning",
      category: "Boxing",
      likes: "289",
      link: "https://instagram.com",
      tagSentence: "Amzing Work",
      icon: "Flame",
    },
    {
      id: "4",
      image:
        "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
      title: "Youth Champions",
      category: "Junior",
      likes: "420",
      link: "https://instagram.com",
      tagSentence: "Amzing Work",
      icon: "Flame",
    },
  ];

  const galleryImages = [
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
    "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
  ];

  const cardsData = [
    {
      image:
        "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
      alt: "Kickboxing Training",
    },
    {
      image:
        "https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg",
      alt: "Sparring Session",
    },
  ];
  return (
    <main>
      <Hero
        section={
          <>
            <StoriesSection />
          </>
        }
        title={
          <>
            <div className={`absolute bottom-6 z-20 text-white`}>
              <DecoText
                backgroundImg="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg"
                text={dict.welcome.title}
              />
            </div>
          </>
        }
      />

      <ActionSection dict={dict} />

      <MainInfoSection
        title={dict.homePage.mainSection.title}
        description={dict.homePage.mainSection.description}
        buttonText={dict.homePage.secondarySection.buttonText}
      />

      <DiagonalSeparator />

      <ClassSchedule />

      <CombatLineSeparator sentence={dict.tagSentence} />

      <SecondarySection
        subtitle={dict.homePage.secondarySection.subtitle}
        title={dict.homePage.secondarySection.title}
        description={dict.homePage.secondarySection.description}
        cards={cardsData}
      />

      <FloatingCommunitySection
        text={dict.homePage.hugeText}
        images={galleryImages}
      />

      <GallerySection
        GalleryData={GalleryData}
        tag="L'Atmosphère KBM Gym"
        title="Suivez Nos Combattants"
        url="https://localhost"
        urlTitle="@KBMGymAgadir"
        galleryTitle="@KBMGymAgadir"
        galleryIcon="Flame"
      />
    </main>
  );
}
