import type { Locale } from '~/locales';
import { getDomain } from '~/utils/domain';

const domain = getDomain();

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType: 'website' | 'article';
  canonical: string;
  twitter: {
    creator: string;
    creatorId: string;
    site: string;
  };
  robots: { index: boolean; follow: boolean };
  googleVerification: string;
  manifest: string;
  icons: {
    favicon: string;
    apple: string;
    svg: string;
  };
}

const metadata: Record<Locale, SiteMetadata> = {
  fr: {
    title: 'Alfred Mouelle - Développeur FullStack',
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
      'Astro',
      'React Native',
      'JavaScript',
      'développeur frontend',
      'développeur backend',
      'développement web sur mesure',
      'optimisation des performances web',
      'développement responsive',
      'SEO technique',
      'freelance fullstack',
    ],
    ogImage: '/assets/images/og.webp',
    ogType: 'website',
    canonical: `${domain}/fr`,
    twitter: {
      creator: 'Alfred Mouelle',
      creatorId: '@kali47_',
      site: domain,
    },
    robots: { index: true, follow: true },
    googleVerification: '1UkBQgE4Mk9e9-dhGk1NiHAzu5d80bPt3NKUaqoUyDM',
    manifest: '/manifest.webmanifest',
    icons: {
      favicon: '/favicon.ico',
      apple: '/apple-touch-icon.webp',
      svg: '/assets/logo.svg',
    },
  },
  en: {
    title: 'Alfred Mouelle - FullStack Developer',
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
      'Astro',
      'React Native',
      'JavaScript',
      'frontend developer',
      'backend developer',
      'custom web development',
      'web performance optimization',
      'responsive development',
      'technical SEO',
      'fullstack freelance',
    ],
    ogImage: '/assets/images/og.webp',
    ogType: 'website',
    canonical: `${domain}/en`,
    twitter: {
      creator: 'Alfred Mouelle',
      creatorId: '@kali47_',
      site: domain,
    },
    robots: { index: true, follow: true },
    googleVerification: '1UkBQgE4Mk9e9-dhGk1NiHAzu5d80bPt3NKUaqoUyDM',
    manifest: '/manifest.webmanifest',
    icons: {
      favicon: '/favicon.ico',
      apple: '/apple-touch-icon.webp',
      svg: '/assets/logo.svg',
    },
  },
};

export const AppConfig = {
  defaultMetadataLocale: 'fr' as Locale,
  domain,
  siteName: 'Portfolio Alfred Mouelle',
  author: { name: 'Alfred Mouelle', url: domain },
  metadata,
} as const;
