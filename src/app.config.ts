import { Metadata } from 'next';

export const AppConfig = {
  metadata: {
    metadataBase: new URL('https://alfredmouelle.com'),
    creator: 'Alfred Mouelle',
    category: 'Portfolio',
    title: 'Alfred Mouelle - Développeur Web et Mobile',
    authors: {
      name: 'Alfred Mouelle',
      url: 'https://alfredmouelle.com',
    },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/assets/logo.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-touch-icon.webp',
    },
    manifest: '/manifest.webmanifest',
    description:
      "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
    keywords: [
      'Alfred Mouelle',
      'portfolio',
      'développeur fullstack',
      'développeur web',
      'développeur mobile',
      'freelance',
    ],
    openGraph: {
      title: 'Alfred Mouelle - Développeur Web et Mobile',
      description:
        "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
      url: 'https://alfredmouelle.com',
      type: 'website',
      siteName: 'Portfolio Alfred Mouelle',
      images: [
        {
          width: 800,
          height: 800,
          alt: 'Portfolio Alfred Mouelle',
          url: '/assets/images/og.webp',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@alfredmouelle',
      title: 'Alfred Mouelle - Développeur Web et Mobile',
      description:
        "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
      images: ['/assets/images/og.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { follow: true, index: true },
    },
    other: {
      'google-site-verification': '1UkBQgE4Mk9e9-dhGk1NiHAzu5d80bPt3NKUaqoUyDM',
    },
  } satisfies Metadata,
};
