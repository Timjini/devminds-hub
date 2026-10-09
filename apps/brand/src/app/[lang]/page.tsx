import { DictionaryProvider, LanguageProvider } from "@/contexts";
import Content from "./content";
import { getDictionary } from "@/lib/dictionary";

export default async function Page({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <LanguageProvider value={lang}>
        <DictionaryProvider dictionary={dict}>
          <Content />
        </DictionaryProvider>
      </LanguageProvider>
    </>
  )
}
