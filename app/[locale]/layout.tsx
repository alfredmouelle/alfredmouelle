import { I18nProviderClient } from '@locales/client';
import { getStaticParams } from '@locales/server';
import { Toaster } from 'sonner';

import { DynamicPostHogPageView } from '@/components/analytics/dynamic-ph-page-view';

import { AppConfig } from '@/app.config';
import { cn } from '@/lib/utils';

import '../globals.css';
import { BackToTop } from './(layout)/back-to-top';
import { BeVietnamPro } from './(layout)/fonts';
import { Footer } from './(layout)/footer';
import { Header } from './(layout)/header';
import { CSPostHogProvider } from './(providers)/posthog.provider';
import { Provider } from './provider';

interface PageProps {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export const metadata = AppConfig.metadata[AppConfig.defaultMetadataLocale];

// export async function generateMetadata(props: PageProps) {
//   const params = await props.params;
//   return AppConfig.metadata[params.locale as 'fr' | 'en'];
// }

export function generateStaticParams() {
  return getStaticParams();
}

export default async function RootLayout(props: PageProps) {
  const params = await props.params;

  return (
    <html
      lang="fr"
      className={cn('h-full scroll-smooth antialiased', BeVietnamPro.className)}
      suppressHydrationWarning
    >
      <CSPostHogProvider>
        <body
          className={cn(
            'font-global relative flex h-full min-h-screen flex-col bg-background'
          )}
        >
          <I18nProviderClient locale={params.locale}>
            <Provider>
              <Header />
              <main className="grow">{props.children}</main>
              <Footer />
            </Provider>

            <BackToTop />

            <DynamicPostHogPageView />
            <Toaster richColors />
          </I18nProviderClient>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
