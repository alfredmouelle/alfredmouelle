import Link from 'next/link';

import { getCurrentLocale, getScopedI18n } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { Icon } from '@/components/icons';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';

export async function NotFound() {
  const locale = getCurrentLocale();
  setStaticParamsLocale(locale);
  const t = await getScopedI18n('notFound');

  return (
    <Section
      skipFadeIn={true}
      className="hero mt-20 flex h-full flex-1 flex-col items-center justify-center text-center"
    >
      <h1 className="mb-4 text-4xl font-bold">{t('title')}</h1>
      <p className="mb-8 text-xl text-muted-foreground">{t('message')}</p>
      <Link href="/">
        <Button>
          <Icon name="home" className="mr-2 size-4" />
          {t('backHome')}
        </Button>
      </Link>
    </Section>
  );
}
