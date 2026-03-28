import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getI18n, isLocale } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { SlideLiIntoView } from '@/components/animations/slide-li-into-view';
import { Icon } from '@/components/icons';
import { JobCard } from '@/components/job-card';
import { Section, SectionTitle } from '@/components/section';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { getJobs } from '@/jobs-helper';
import { getDomain } from '@/utils/domain';

interface PageProps {
  params: Promise<{ locale: string }>;
}

const domain = getDomain();

export const metadata = {
  alternates: {
    canonical: `${domain}/jobs`,
    languages: {
      fr: `${domain}/fr/jobs`,
      en: `${domain}/en/jobs`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
} satisfies Metadata;

export default async function JobsPage(props: PageProps) {
  const params = await props.params;
  if (!isLocale(params.locale)) notFound();
  setStaticParamsLocale(params.locale);

  const jobs = await getJobs(params.locale);
  const t = await getI18n();

  return (
    <Section className="hero mt-20" skipFadeIn={true}>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link
              href="/"
              className="transition-colors duration-150 ease-in hover:text-foreground"
            >
              {t('breadcrumb.home')}
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t('breadcrumb.jobs')}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <SectionTitle className="flex items-center">
        <Icon name="briefcase" className="mr-2 size-8" />
        {t('section_jobs.title')}
      </SectionTitle>

      <ul className="grid gap-4 md:grid-cols-2">
        {jobs.map((job, index) => (
          <SlideLiIntoView index={index} key={index}>
            <Link href={`/jobs/${job.slug}`}>
              <JobCard job={job} />
            </Link>
          </SlideLiIntoView>
        ))}
      </ul>
    </Section>
  );
}
