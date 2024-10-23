import { Metadata } from 'next';
import Link from 'next/link';

import { getCurrentLocale, getI18n } from '@locales/server';
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
  params: Promise<{ locale: ReturnType<typeof getCurrentLocale> }>;
}

const domain = getDomain();

export const metadata = {
  alternates: {
    canonical: `${domain}/en/jobs`,
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
  setStaticParamsLocale(params.locale);
  const locale = getCurrentLocale();

  const jobs = await getJobs(locale);
  const t = await getI18n();

  return (
    <Section className="hero mt-20" skipFadeIn={true}>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link
              href="/"
              className="hover:text-foreground transition-colors duration-150 ease-in"
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
        <Icon name="briefcase" className="size-8 mr-2" />
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
