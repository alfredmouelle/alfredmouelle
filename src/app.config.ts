import { Metadata } from 'next';

export const AppConfig = {
  metadata: {
    metadataBase: new URL('https://alfredmouelle.vercel.app'),
    creator: 'Alfred Mouelle',
    category: 'Portfolio',
    title: 'Alfred Mouelle - Développeur Web et Mobile',
    authors: {
      name: 'Alfred Mouelle',
      url: 'https://alfredmouelle.vercel.app',
    },
    icons: ['/assets/logo.svg'],
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
      url: 'https://alfredmouelle.vercel.app',
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
      title: 'Alfred Mouelle | Portfolio - Développeur Web et Mobile',
      description:
        "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
      images: ['/assets/images/og.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { follow: true, index: true }
    }
  } satisfies Metadata,
};
