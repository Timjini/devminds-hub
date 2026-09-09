import NavigationButton from "@/app/shared/ui/button/navigation-button";
import ImageCard from "@/app/shared/ui/card/image-card";
import Hero from "@/app/shared/ui/section/hero";
import DecoText from "@/app/shared/ui/text/deco-text";
import VideoComponent from "@/app/shared/ui/video/video-component";
import { notFound } from "next/navigation";
import Marquee from "react-fast-marquee";
import { getDictionary, hasLocale } from "../dictionaries";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);
  return (
    <main>
      <Hero
        section={
          <>
            <VideoComponent
              videoId="boxingVideo"
              videoUrl="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing1.mp4"
              customClass="block h-screen w-screen rounded-3xl object-cover p-0 lg:p-2"
              decoration={
                <div className="p-2 object-cover pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-t from-black/95 via-black/60 to-transparent" />
              }
            />
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

      <section className="flex flex-row justify-center align-center items-center mx-auto p-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto bg-stone-100 max-w-6xl p-12 rounded-lg">
          <div className="col-span-1">
            <h1 className="text-5xl text-stone-900">
              {dict.homePage.actionSection.title}
            </h1>
          </div>
          <div className="col-span-1 md:col-end-4">
            <div className="max-w-48">
              <NavigationButton
                label={dict.homePage.actionSection.buttonText}
                href="/"
                btnType="primary"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="py-24 max-w-6xl min-h-screen gap-10 flex mx-auto flex-col items-center justify-center">
          <h1 className="text-6xl  font-display uppercase text-center">
            {dict.homePage.mainSection.title}
          </h1>

          <p className=" text-center lead-0 max-w-3xl">
            {dict.homePage.mainSection.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            <ImageCard img="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg" />
            <ImageCard img="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg" />
            <ImageCard img="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg" />
          </div>
          <NavigationButton
            label={dict.homePage.secondarySection.buttonText}
            href="/"
            btnType="primary"
          />
        </div>
      </section>

      <div className="">
        <Marquee className="bg-brand-primary">
          <h2 className="text-center font-display h-24 flex flex-row justify-center align-center items-center text-4xl uppercase font-black">
            {dict.homePage.mainSection.marqueeText} -{" "}
            {dict.homePage.mainSection.marqueeText} -{" "}
            {dict.homePage.mainSection.marqueeText} -{" "}
            {dict.homePage.mainSection.marqueeText} -{" "}
          </h2>
        </Marquee>
      </div>

      <section className=" flex flex-col items-center justify-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl my-24 mx-auto gap-12 px-4">
          <div className="col-span-1">
            <div>
              <h2 className=" text-4xl font-display">
                {dict.homePage.secondarySection.title}
              </h2>
              <p className=" text-lg">
                {dict.homePage.secondarySection.description}
              </p>
            </div>
          </div>
          <div className="col-span-2 flex flex-row gap-4">
            <ImageCard img="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg" />
            <ImageCard img="https://pub-b6b56492600944d2a120f4f26623677a.r2.dev/public/boxing.jpg" />
          </div>
        </div>
      </section>

      <section className="bg-brand-primary">
        <div>
          <span className="truncate text-brand-primary-background text-[500px] font-display uppercase">
            {dict.homePage.hugeText}
          </span>
        </div>
      </section>
    </main>
  );
}
