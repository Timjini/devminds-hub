import LanguageSelect from "./select/language-select";

export default function Footer({ lang }: { lang: string }) {
  return (
    <section className="w-full flex flex-col mx-auto gap-6 justify-center align-center items-center  p-12">
      <div className="max-w-6xl">
        <LanguageSelect lang={lang} />
        <hr className="text-amber-800 max-w-2xl" />
        <div className="h-24 mt-24">KBM GYM Morocco</div>
      </div>
    </section>
  );
}
