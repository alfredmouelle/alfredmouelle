import Link from 'next/link';

import { getCurrentLocale, getI18n } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

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

interface PageProps {
  params: { locale: ReturnType<typeof getCurrentLocale> };
}

export default async function JobsPage({ params }: PageProps) {
  setStaticParamsLocale(params.locale);
  const locale = getCurrentLocale();

  const jobs = await getJobs(locale);
  const t = await getI18n();

  return (
    <Section className="hero">
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

      <SectionTitle>{t('section_jobs.title')}</SectionTitle>

      <ul className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <li key={job.slug}>
            <Link href={`/jobs/${job.slug}`}>
              <JobCard job={job} />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
