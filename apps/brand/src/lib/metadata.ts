import type { Metadata } from 'next';
import { SEO_GENERAL_DATA, type SupportedLocale } from './seo';

export interface ConstructMetadataOptions {
  locale?: SupportedLocale;
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  locale = 'en',
  title,
  description,
  canonical,
  image = SEO_GENERAL_DATA.home.cover,
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const localeContent = SEO_GENERAL_DATA.locales[locale] ?? SEO_GENERAL_DATA.locales.en;
  const resolvedTitle = title ?? localeContent.title;
  const resolvedDescription = description ?? localeContent.description;
  const resolvedCanonical =
    canonical ?? `${SEO_GENERAL_DATA.domain}/${locale}`;

  return {
    metadataBase: new URL(SEO_GENERAL_DATA.domain),
    title: title
      ? { default: title, template: `%s | ${SEO_GENERAL_DATA.brandName}` }
      : { default: localeContent.title, template: `%s | ${SEO_GENERAL_DATA.brandName}` },
    description: resolvedDescription,
    keywords: [...localeContent.keywords],
    applicationName: SEO_GENERAL_DATA.brandName,
    alternates: {
      canonical: resolvedCanonical,
      languages: {
        'en': `${SEO_GENERAL_DATA.domain}/en`,
        'de': `${SEO_GENERAL_DATA.domain}/de`,
        'fr': `${SEO_GENERAL_DATA.domain}/fr`,
        'x-default': `${SEO_GENERAL_DATA.domain}/en`,
      },
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: resolvedCanonical,
      siteName: SEO_GENERAL_DATA.brandName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
      locale: localeContent.ogLocale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDescription,
      images: [image],
    },
  };
}
