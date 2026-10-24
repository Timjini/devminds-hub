import { ClassSchedule } from "@/entities/calendar/class-schedule";
import { getDictionary } from "@/lib/dictionary";
import ActionSection from "../shared/ui/section/action-section";
import FloatingCommunitySection from "../shared/ui/section/floating-community-section";
import { GallerySection } from "../shared/ui/section/gallery-section";
import MainInfoSection from "../shared/ui/section/main-info-section";
import { SecondarySection } from "../shared/ui/section/secondary-section";
import { CombatLineSeparator } from "../shared/ui/separator/combatLine-separator";
import { DiagonalSeparator } from "../shared/ui/separator/diagonal-separator";
import { cardsData, combatStories, GalleryData, galleryImages } from "@/data/temp";
import VerticalGallery from "@/features/showcases/vertical-gallery";
import StoriesPlayer from "../shared/ui/video/story-player";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main>
      <div className="relative w-screen h-screen overflow-hidden bg-black m-1 rounded-2xl">
        <StoriesPlayer
          stories={combatStories}
          containerClass="relative w-full h-full overflow-hidden"
        />
      </div>
      <ActionSection dict={dict} />

      <VerticalGallery />

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
        tag={dict.homePage.homeGallery.tag}
        title={dict.homePage.homeGallery.title}
        url="https://localhost"
        urlTitle="@KBMGymAgadir"
        galleryTitle="@KBMGymAgadir"
        galleryIcon="Flame"
      />
    </main>
  );
}
