import Image from 'next/image';

import { getScopedI18n } from '@locales/server';

import { ScaleWhenView } from '@/components/animations/scale-when-view';
import { SlideDivIntoView } from '@/components/animations/slide-div-into-view';
import { Icons } from '@/components/icons';
import { Section, SectionTitle } from '@/components/section';

export const SectionScholarship = async () => {
  const t = await getScopedI18n('section_scholarship');

  return (
    <Section
      id="scholarship"
      className="bg-gradient-to-b from-blue-500/25 via-transparent to-transparent"
    >
      <SectionTitle>{t('title')}</SectionTitle>

      <div className="grid lg:grid-cols-2">
        <ScaleWhenView className="flex items-center justify-center">
          <Image
            width={500}
            height={500}
            quality={85}
            alt="Mascotte"
            src="/assets/images/education-man.svg"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            className="hover:scale-[1.01] transition-transform duration-300 ease-in"
          />
        </ScaleWhenView>

        <div className="relative">
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-2 border-gray-300"></div>
          <div className="space-y-8">
            <div className="flex w-full items-center">
              <SlideDivIntoView className="w-1/2 pr-8 text-right" offset={-100}>
                <h2 className="text-lg font-semibold">{t('bts.title')}</h2>
                <p className="text-blue-500">{t('bts.specialty')}</p>
                <p className="text-gray-500">2018 - 2020</p>
              </SlideDivIntoView>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>

              <SlideDivIntoView className="w-1/2 pl-8" offset={100}>
                <p className="text-gray-500">{t('bts.academy')}</p>
                <p className="text-gray-500">{t('bts.location')}</p>
              </SlideDivIntoView>
            </div>

            <div className="flex w-full items-center">
              <SlideDivIntoView
                delay={0.05}
                offset={-100}
                className="w-1/2 pr-8 text-right"
              >
                <h2 className="text-lg font-semibold">{t('bac.title')}</h2>
                <p className="text-blue-500">{t('bac.specialty')}</p>
                <p className="text-gray-500">2017 - 2018</p>
              </SlideDivIntoView>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>

              <SlideDivIntoView
                className="w-1/2 pl-8"
                offset={100}
                delay={0.05}
              >
                <p className="text-gray-500">{t('bac.location1')}</p>
                <p className="text-gray-500">{t('bac.location2')}</p>
              </SlideDivIntoView>
            </div>

            <div className="flex w-full items-center">
              <SlideDivIntoView
                delay={0.08}
                offset={-100}
                className="w-1/2 pr-8 text-right"
              >
                <h2 className="text-lg font-semibold">
                  {t('probatoire.title')}
                </h2>
                <p className="text-blue-500">{t('bac.specialty')}</p>
                <p className="text-gray-500">2016 - 2017</p>
              </SlideDivIntoView>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>

              <SlideDivIntoView
                className="w-1/2 pl-8"
                offset={100}
                delay={0.08}
              >
                <p className="text-gray-500">{t('bac.location1')}</p>
                <p className="text-gray-500">{t('bac.location2')}</p>
              </SlideDivIntoView>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
