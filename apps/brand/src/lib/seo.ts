export type SupportedLocale = 'en' | 'de' | 'fr';

export const SEO_GENERAL_DATA = {
  brandName: 'AskYourFiles',
  domain: 'https://askyourfiles.eu',
  home: {
    url: 'https://askyourfiles.eu',
    canonical: 'https://askyourfiles.eu',
    cover: 'https://askyourfiles.eu/og-cover.png',
    twitter_image_cover: 'https://askyourfiles.eu/og-cover.png',
  },
  locales: {
    en: {
      ogLocale: 'en_IE',
      title: 'AskYourFiles | Private Office Document Search & PDF Assistant (EU)',
      description:
        'Search company folders, understand invoices and PDFs, draft letters, and translate documents privately. Hosted exclusively in the EU under strict GDPR compliance with one flat monthly rate.',
      keywords: [
        'private document search',
        'GDPR document assistant',
        'EU hosted office search',
        'PDF invoice reader for business',
        'private company knowledge base',
        'European data sovereignty software',
      ],
    },
    de: {
      ogLocale: 'de_DE',
      title: 'AskYourFiles | Privater Büro-Assistent für Dokumente & PDFs (DSGVO)',
      description:
        'Durchsuchen Sie eigene Firmenordner, erklären Sie PDFs und Rechnungen, entwerfen Sie Briefe und übersetzen Sie Dokumente – 100 % DSGVO-konform in der EU gehostet zum festen Monatspreis.',
      keywords: [
        'DSGVO Dokumentensuche',
        'privater Büro Assistent',
        'PDF Rechnungen erklären Software',
        'EU Hosting Datenschutz Büro',
        'interne Wissensdatenbank KMU',
        'europäische Datensouveränität',
      ],
    },
    fr: {
      ogLocale: 'fr_FR',
      title: 'AskYourFiles | Assistant privé pour documents & PDF de bureau (RGPD)',
      description:
        'Recherchez dans vos dossiers d’entreprise, analysez vos factures PDF, rédigez vos courriers et traduisez vos documents. Hébergé exclusivement dans l’UE en conformité RGPD au forfait fixe.',
      keywords: [
        'recherche documentaire privée RGPD',
        'assistant bureautique confidentiel',
        'lecture facture PDF entreprise',
        'hébergement UE souveraineté des données',
        'base documentaire interne PME',
        'gestion documentaire sécurisée',
      ],
    },
  },
} as const;
