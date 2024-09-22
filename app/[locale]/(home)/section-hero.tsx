import Image from 'next/image';

import { getScopedI18n } from '@locales/server';

import { Section } from '@/components/section';
import TypewriterText from '@/components/typewritter-text';

import { ContactButton } from './contact-button';
import { DownloadCvButton } from './download-cv-button';

export const SectionHero = async () => {
  const t = await getScopedI18n('section_hero');

  return (
    <Section>
      <div className="hero grid min-h-[calc(100vh-14rem)] items-center gap-4 md:grid-cols-3">
        <div className="hero-brand relative order-2 flex flex-col gap-y-2 text-center md:order-none md:col-span-2 md:text-left">
          <p>{t('greetings')}</p>
          <h1 className="text-3xl font-bold">Alfred Mouelle</h1>

          <div className="flex items-center justify-center gap-x-1 md:justify-start">
            <span className="text-xl font-medium">{'<'}</span>
            <TypewriterText
              text={t('position')}
              className="text-xl font-medium"
            />
            <span className="text-xl font-medium">{'/>'}</span>
          </div>

          <p className="text-balance">{t('description')}</p>

          <div className="mt-4 flex flex-col gap-2 md:flex-row">
            <DownloadCvButton />
            <ContactButton />
          </div>
        </div>

        <div className="order-1 md:order-none">
          <Image
            src="/assets/images/hero-avatar.webp"
            className="rounded-full shadow-lg"
            alt="Photo de moi"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Section>
  );
};
