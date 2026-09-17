import { languages } from "@/lib/languages";

export const i18n = {
  defaultLocale: "en-GB",
  locales: languages,
} as const;

export type Locale = (typeof i18n)["locales"][number];
