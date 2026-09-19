import About from "../components/about";
import FeaturedCities from "../components/featured-cities";
import Hero from "../components/hero";
import SolutionsSection from "../components/solutions-section";
import { MOCK_SOLUTIONS } from "../data";
import { getDictionary } from "../lib/dictionary";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero />
      <SolutionsSection solutions={MOCK_SOLUTIONS} />
      <FeaturedCities />
      <About />
    </>
  );
}
