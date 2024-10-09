import { Metadata } from 'next';

import { getDomain } from './utils/domain';

const domain = getDomain();

export const AppConfig = {
  metadata: {
    fr: {
      metadataBase: new URL(domain),
      creator: 'Alfred Mouelle',
      category: 'Portfolio',
      title: 'Alfred Mouelle - Développeur FullStack',
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
        "Découvrez le portfolio d'Alfred Mouelle, développeur fullstack. Explorez ses projets, compétences et expériences professionnelles.",
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
        title: 'Alfred Mouelle - Développeur FullStack',
        description:
          "Découvrez le portfolio d'Alfred Mouelle, développeur fullstack. Explorez ses projets, compétences et expériences professionnelles.",
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
        title: 'Alfred Mouelle - Développeur FullStack',
        description:
          "Découvrez le portfolio d'Alfred Mouelle, développeur fullstack. Explorez ses projets, compétences et expériences professionnelles.",
        images: ['/assets/images/og.webp'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { follow: true, index: true },
      },
      other: {
        'google-site-verification':
          '1UkBQgE4Mk9e9-dhGk1NiHAzu5d80bPt3NKUaqoUyDM',
      },
      alternates: {
        canonical: `${domain}/fr`,
        languages: {
          fr: `${domain}/fr`,
          en: `${domain}/en`,
        },
      },
    } satisfies Metadata,
    en: {
      metadataBase: new URL(domain),
      creator: 'Alfred Mouelle',
      category: 'Portfolio',
      title: 'Alfred Mouelle - FullStack Developer',
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
        "Discover Alfred Mouelle's portfolio, fullstack developer. Explore his projects, skills, and professional experiences.",
      keywords: [
        'fullstack developer portfolio',
        'Alfred Mouelle',
        'freelance web developer',
        'freelance mobile developer',
        'React',
        'Node.js',
        'TypeScript',
        'Next.js',
        'React Native',
        'JavaScript',
        'frontend developer',
        'backend developer',
        'API integration',
        'custom web development',
        'mobile app creation',
        'web performance optimization',
        'responsive development',
        'technical SEO',
        'fullstack freelance',
        'web development freelance',
        'web solutions creation',
      ],
      openGraph: {
        title: 'Alfred Mouelle - FullStack Developer',
        description:
          "Discover Alfred Mouelle's portfolio, fullstack developer. Explore his projects, skills, and professional experiences.",
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
        title: 'Alfred Mouelle - FullStack Developer',
        description:
          "Discover Alfred Mouelle's portfolio, fullstack developer. Explore his projects, skills, and professional experiences.",
        images: ['/assets/images/og.webp'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { follow: true, index: true },
      },
      other: {
        'google-site-verification':
          '1UkBQgE4Mk9e9-dhGk1NiHAzu5d80bPt3NKUaqoUyDM',
      },
      alternates: {
        canonical: `${domain}/en`,
        languages: {
          fr: `${domain}/fr`,
          en: `${domain}/en`,
        },
      },
    } satisfies Metadata,
  },
} as const;
