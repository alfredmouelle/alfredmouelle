import { getCurrentLocale } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { SectionContact } from './(home)/section-contact';
import { SectionHero } from './(home)/section-hero';
import { SectionJobs } from './(home)/section-jobs';
import { SectionScholarship } from './(home)/section-scholarship';
import { SectionSkills } from './(home)/section-skills';

interface PageProps {
  params: { locale: ReturnType<typeof getCurrentLocale> };
}

export default async function Home({ params }: PageProps) {
  setStaticParamsLocale(params.locale);

  return (
    <>
      <SectionHero />

      <SectionScholarship />

      <SectionSkills />

      <SectionJobs />

      <SectionContact />
    </>
  );
}
