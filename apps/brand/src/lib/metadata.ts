import type { Metadata } from 'next';
import { SEO_GENERAL_DATA } from './seo';

export interface ConstructMetadataOptions {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
}

const DEFAULT_TITLE =
  'GoAdway | Advertising, Branding, Web Design & Paid Growth Agency';
const DEFAULT_DESCRIPTION =
  'GoAdway helps ambitious brands scale with bold brand identity, high-converting web design, Meta Ads setup, and performance-driven Google Ads & SEO.';

export function constructMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical = SEO_GENERAL_DATA.home.canonical,
  image = SEO_GENERAL_DATA.home.cover,
  noIndex = false,
}: ConstructMetadataOptions = {}): Metadata {
  const resolvedTitle = title ?? DEFAULT_TITLE;

  return {
    title: title
      ? { default: title, template: '%s | GoAdway' }
      : { default: DEFAULT_TITLE, template: '%s | GoAdway' },
    description,
    alternates: {
      canonical,
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
      description,
      url: canonical,
      siteName: 'GoAdway',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: [image],
    },
  };
}
