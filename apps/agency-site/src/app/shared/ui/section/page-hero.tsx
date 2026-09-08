import Image from "next/image";

interface PageHeroProps {
  img: string;
  tag: string;
  title: string;
  description: string;
}
const PageHero = ({ img, tag, title, description }: PageHeroProps) => {
  return (
    <section className="relative flex pt-24 h-[25vh] min-h-100 items-center justify-center overflow-hidden bg-gray-100">
      <Image
        loading="eager"
        src={img}
        alt="Destinations Hero"
        fill
        className="absolute inset-0 object-cover opacity-80"
        priority
      />

      <div className="absolute inset-0 bg-gray/20 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-gray/30"></div>

      <div className="relative z-10 px-6 text-center">
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold tracking-widest text-white uppercase backdrop-blur-md">
          {tag}
        </span>
        <h1 className="text-5xl font-bold text-white drop-shadow-2xl md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-500">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
