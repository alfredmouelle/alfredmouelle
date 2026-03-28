import type { Locale } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { SectionContact } from './(home)/section-contact';
import { SectionHero } from './(home)/section-hero';
import { SectionJobs } from './(home)/section-jobs';
import { SectionScholarship } from './(home)/section-scholarship';
import { SectionSkills } from './(home)/section-skills';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home(props: PageProps) {
  const params = await props.params;
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
