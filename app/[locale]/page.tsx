import { notFound } from 'next/navigation';
import { isLocale } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { SectionContact } from './(home)/section-contact';
import { SectionHero } from './(home)/section-hero';
import { SectionJobs } from './(home)/section-jobs';
import { SectionScholarship } from './(home)/section-scholarship';
import { SectionSkills } from './(home)/section-skills';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Home(props: PageProps) {
  const params = await props.params;
  if (!isLocale(params.locale)) notFound();
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
