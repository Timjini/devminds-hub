import Hero from "@/app/shared/ui/section/hero";
import DecoText from "@/app/shared/ui/text/deco-text";
import VideoComponent from "@/app/shared/ui/video/video-component";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return (
    <main>
      <Hero
        section={
          <VideoComponent
            videoId="boxingVideo"
            videoUrl="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing1.mp4"
            customClass="block h-screen w-screen rounded-3xl object-cover p-0 lg:p-2"
            decoration={
              <div className="p-2 object-cover pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/95 via-black/60 to-transparent" />
            }
          />
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
    </main>
  );
}
