import { langagues } from "@/lib/languages";

export const i18n = {
  defaultLocale: "en-GB",
  locales: langagues,
} as const;

export type Locale = (typeof i18n)["locales"][number];
