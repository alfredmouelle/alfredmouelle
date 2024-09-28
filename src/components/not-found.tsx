import Link from 'next/link';

import { getCurrentLocale, getScopedI18n } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { Icons } from '@/components/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';

export async function NotFound() {
  const locale = getCurrentLocale();
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('notFound');

  return (
    <Section
      skipFadeIn={true}
      className="hero flex flex-col items-center justify-center flex-1 h-full text-center mt-20"
    >
      <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
      <p className="text-xl mb-8 text-muted-foreground">{t('message')}</p>
      <Link href="/">
        <Button>
          <Icons.home className="w-4 h-4 mr-2" />
          {t('backHome')}
        </Button>
      </Link>
    </Section>
  );
}
