import About from "../components/about";
import FeaturedCities from "../components/featured-cities";
import Hero from "../components/hero";
import SolutionsSection from "../components/solutions-section";
import { getDictionary } from "../lib/dictionary";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const solutions = [
    {
      id: "1",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/agadir/4x4-massa-tiznit-mini-sahara1.jpg",
      title:
        dict?.solutions?.items?.customTours?.title ??
        "Polish-speaking Tour Guides",
      description:
        dict?.solutions?.items?.customTours?.description ??
        "Led by El Ouafi, a professional in the field...",
      url: "/pages/contact",
    },
    {
      id: "2",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/marrakech/ait-ben-haddou-ouarzazate-tour-1.jpeg",
      title:
        dict?.solutions?.items?.corporateEvents?.title ??
        "Unique and Authentic Tours",
      description:
        dict?.solutions?.items?.corporateEvents?.description ??
        "Immerse yourself in real Moroccan culture...",
      url: "/pages/contact",
    },
    {
      id: "3",
      image:
        "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/home/eguide-banner.png",
      title:
        dict?.solutions?.items?.transportation?.title ??
        "Enhance your tours experience.",
      description:
        dict?.solutions?.items?.transportation?.description ??
        "Stay connected with live communication...",
      url: "https://e-guidesolutions.com",
    },
  ];

  return (
    <>
      <Hero />
      <SolutionsSection solutions={solutions} />
      <FeaturedCities />
      <About />
    </>
  );
}
