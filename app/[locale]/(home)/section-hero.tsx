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
      className="bg-gradient-to-b from-transparent via-transparent to-blue-500/25 mt-20"
    >
      <div className="hero grid min-h-[calc(100vh-20rem)] items-center gap-4 md:grid-cols-3">
        <div className="hero-brand relative order-2 flex flex-col gap-y-2 text-center md:order-none md:col-span-2 md:text-left">
          <p className="text-muted-foreground">{t('greetings')}</p>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#9c60d7] from-primary via-primary">
            Alfred Mouelle
          </h1>

          <div className="flex items-center justify-center gap-x-0.5 md:justify-start bg-card/10 border shadow-lg w-fit px-4 rounded-sm mx-auto md:mx-0">
            <span className="text-xl font-medium">{'<'}</span>
            <TypewriterText
              text={t('position')}
              className="text-xl font-medium"
            />
            <span className="text-xl font-medium">{'/>'}</span>
          </div>

          <p className="text-balance text-muted-foreground">
            {t('description')}
          </p>

          <div className="mt-4 flex flex-wrap flex-col gap-2 md:flex-row z-10 items-center">
            <DownloadCvButton />
            <ContactButton />
          </div>
        </div>

        <GradientBorder>
          <div className="order-1 md:order-none gradient rounded-full">
            <Image
              priority
              width={500}
              height={500}
              src={HeroImage}
              alt="Photo de moi"
              placeholder="blur"
              className="rounded-full shadow-lg hover:scale-[1.01] transition-transform duration-150 ease-in"
            />
          </div>
        </GradientBorder>
      </div>
    </Section>
  );
};
