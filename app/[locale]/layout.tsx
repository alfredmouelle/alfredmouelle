import { I18nProviderClient } from '@locales/client';
import { getStaticParams } from '@locales/server';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Toaster } from 'sonner';

import { AppConfig } from '@/app.config';
import { cn } from '@/lib/utils';

import '../globals.css';
import { BackToTop } from './(layout)/back-to-top';
import { BeVietnamPro } from './(layout)/fonts';
import { Footer } from './(layout)/footer';
import { Header } from './(layout)/header';
import { Provider } from './provider';

interface PageProps {
  params: { locale: string };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: PageProps) {
  return AppConfig.metadata[params.locale as 'fr' | 'en'];
}

export function generateStaticParams() {
  return getStaticParams();
}

export default function RootLayout({
  params: { locale },
  children,
}: PageProps) {
  return (
    <html
      lang="fr"
      className={cn('h-full scroll-smooth antialiased', BeVietnamPro.className)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          'flex h-full min-h-screen flex-col bg-background font-global relative'
        )}
      >
        <I18nProviderClient locale={locale}>
          <Provider>
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </Provider>

          <BackToTop />
          <Toaster richColors />
        </I18nProviderClient>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
