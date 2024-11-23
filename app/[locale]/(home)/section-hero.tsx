import Image from 'next/image';

import HeroImage from '@assets/images/hero-avatar.webp';
import { getScopedI18n } from '@locales/server';

import { GradientBorder } from '@/components/animations/gradient-border';
import TypewriterText from '@/components/animations/typewritter-text';
import { Section } from '@/components/section';

import { ContactButton } from './contact-button';
import { DownloadCvButton } from './download-cv-button';

export const SectionHero = async () => {
  const t = await getScopedI18n('section_hero');

  return (
    <Section
      id="section_hero"
      skipFadeIn={true}
      className="mt-20 bg-gradient-to-b from-transparent via-transparent to-blue-500/25"
    >
      <div className="hero grid min-h-[calc(100vh-20rem)] items-center gap-4 md:grid-cols-3">
        <div className="hero-brand relative order-2 flex flex-col gap-y-2 text-center md:order-none md:col-span-2 md:text-left">
          <p className="text-muted-foreground">{t('greetings')}</p>
          <h1 className="bg-gradient-to-r from-primary via-primary to-[#9c60d7] bg-clip-text text-3xl font-bold text-transparent">
            Alfred Mouelle
          </h1>

          <div className="mx-auto flex w-fit items-center justify-center gap-x-0.5 rounded-sm border bg-card/10 px-4 shadow-lg md:mx-0 md:justify-start">
            <span className="text-xl font-medium">{'<'}</span>
            <TypewriterText
              text={t('position')}
              className="text-xl font-medium"
            />
            <span className="text-xl font-medium">{'/>'}</span>
          </div>

          <p className="text-justify text-muted-foreground">
            {t('description')}
          </p>

          <div className="z-10 mt-4 flex flex-col flex-wrap items-center gap-2 md:flex-row">
            <DownloadCvButton />
            <ContactButton />
          </div>
        </div>

        <GradientBorder>
          <div className="gradient order-1 rounded-full md:order-none">
            <Image
              priority
              width={500}
              height={500}
              src={HeroImage}
              alt="Photo de moi"
              placeholder="blur"
              className="rounded-full shadow-lg transition-transform duration-150 ease-in hover:scale-[1.01]"
            />
          </div>
        </GradientBorder>
      </div>
    </Section>
  );
};
