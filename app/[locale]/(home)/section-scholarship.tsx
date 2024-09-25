import Image from 'next/image';

import { getScopedI18n } from '@locales/server';

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

      <div className="grid md:grid-cols-2">
        <Image
          src="/assets/images/education-man.svg"
          width={500}
          height={500}
          alt="Mascotte"
          className="hover:scale-[1.01] transition-transform duration-300 ease-out"
        />

        <div className="relative">
          <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-2 border-gray-300"></div>
          <div className="space-y-8">
            <div className="flex w-full items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold">{t('bts.title')}</h3>
                <p className="text-blue-500">{t('bts.specialty')}</p>
                <p className="text-gray-500">2018 - 2020</p>
              </div>

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>
              <div className="w-1/2 pl-8">
                <p className="text-gray-500">{t('bts.academy')}</p>
                <p className="text-gray-500">{t('bts.location')}</p>
              </div>
            </div>

            <div className="flex w-full items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold">{t('bac.title')}</h3>
                <p className="text-blue-500">{t('bac.specialty')}</p>
                <p className="text-gray-500">2017 - 2018</p>
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>
              <div className="w-1/2 pl-8">
                <p className="text-gray-500">{t('bac.location1')}</p>
                <p className="text-gray-500">{t('bac.location2')}</p>
              </div>
            </div>

            <div className="flex w-full items-center">
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-lg font-semibold">
                  {t('probatoire.title')}
                </h3>
                <p className="text-blue-500">{t('bac.specialty')}</p>
                <p className="text-gray-500">2016 - 2017</p>
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                <Icons.check className="text-white" />
              </div>
              <div className="w-1/2 pl-8">
                <p className="text-gray-500">{t('bac.location1')}</p>
                <p className="text-gray-500">{t('bac.location2')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
