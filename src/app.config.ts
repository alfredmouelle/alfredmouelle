import { Metadata } from 'next';

import { getDomain } from './utils/domain';

const domain = getDomain();

export const AppConfig = {
  metadata: {
    metadataBase: new URL(domain),
    creator: 'Alfred Mouelle',
    category: 'Portfolio',
    title: 'Alfred Mouelle - Développeur Web et Mobile',
    authors: {
      url: domain,
      name: 'Alfred Mouelle',
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
      'portfolio développeur fullstack',
      'Alfred Mouelle',
      'développeur web freelance',
      'développeur mobile freelance',
      'React',
      'Node.js',
      'TypeScript',
      'Next.js',
      'React Native',
      'JavaScript',
      'développeur frontend',
      'développeur backend',
      'intégration d’API',
      'développement web sur mesure',
      'création d’applications mobiles',
      'optimisation des performances web',
      'développement responsive',
      'SEO technique',
      'freelance fullstack',
      'freelance en développement web',
      'création de solutions web',
    ],
    openGraph: {
      title: 'Alfred Mouelle - Développeur Web et Mobile',
      description:
        "Découvrez le portfolio d'Alfred Mouelle, développeur web et mobile. Explorez ses projets, compétences et expériences professionnelles.",
      url: domain,
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
      site: domain,
      creatorId: '@kali47_',
      creator: 'Alfred Mouelle',
      card: 'summary_large_image',
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
    alternates: {
      canonical: `${domain}/fr`,
      languages: {
        fr: `${domain}/fr`,
        en: `${domain}/en`,
      },
    },
  } satisfies Metadata,
} as const;
