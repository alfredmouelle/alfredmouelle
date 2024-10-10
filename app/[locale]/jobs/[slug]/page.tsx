import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getCurrentLocale, getI18n } from '@locales/server';
import { setStaticParamsLocale } from 'next-international/server';

import { Icon } from '@/components/icons';
import { JobDate } from '@/components/job-card';
import { Section } from '@/components/section';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { buttonVariants } from '@/components/ui/button';

import { getJob, getJobs } from '@/jobs-helper';
import { cn } from '@/lib/utils';
import { getDomain } from '@/utils/domain';

import { MdxJob } from '../_components/mdx-job';

const domain = getDomain();

interface PageProps {
  params: { slug: string; locale: ReturnType<typeof getCurrentLocale> };
}

export async function generateStaticParams({ params }: PageProps) {
  const files = await getJobs(params.locale);
  return files.map((job) => ({ slug: job.slug })).concat();
}

export async function generateMetadata({ params }: PageProps) {
  const job = await getJob(params.slug, params.locale);

  if (!job) return notFound();

  const title = `${job.position} at ${job.company}`;

  return {
    title,
    description: job.description,
    keywords: job.meta.keywords,
    authors: [
      {
        url: domain,
        name: 'Alfred Mouelle',
      },
    ],
    openGraph: {
      title,
      description: job.description,
      type: 'article',
      authors: 'Alfred Mouelle',
      url: `${domain}/jobs/${params.slug}`,
    },
    twitter: {
      title,
      site: domain,
      creatorId: '@kali47_',
      creator: 'Alfred Mouelle',
      description: job.description,
      card: 'summary_large_image',
    },
    alternates: {
      canonical: `${domain}/en/jobs/${params.slug}`,
      languages: {
        fr: `${domain}/fr/jobs/${params.slug}`,
        en: `${domain}/en/jobs/${params.slug}`,
      },
    },
  } satisfies Metadata;
}

export default async function JobPage({ params }: PageProps) {
  setStaticParamsLocale(params.locale);
  const job = await getJob(params.slug, params.locale);
  if (!job) notFound();

  const t = await getI18n();

  return (
    <Section className="hero mt-20">
      <div className="mb-5 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link
                href="/"
                className="hover:text-foreground transition-colors duration-200 ease-in"
              >
                {t('breadcrumb.home')}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link
                href="/jobs"
                className="hover:text-foreground transition-colors duration-150 ease-in"
              >
                {t('breadcrumb.jobs')}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{job.company}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex items-center justify-center gap-x-2 gap-y-2 flex-row text-muted-foreground">
          <JobDate startDate={job.startDate} endDate={job.endDate} />
          <span className="text-muted-foreground">-</span>
          <div className="flex items-center justify-center gap-x-2">
            <p className="text-xs">
              {job.readTime} {t('job.readTime')}
            </p>

            <a
              target="_blank"
              href={job.siteUrl}
              className={cn(
                'text-foreground',
                buttonVariants({ variant: 'ghost', size: 'icon' })
              )}
            >
              <Icon name="link" className="size-4" />
              <span className="sr-only">{t('job.visitWebsite')}</span>
            </a>
          </div>
        </div>
      </div>

      <MdxJob job={job} />

      <div className="mt-10 flex w-full items-center md:justify-center">
        <a
          target="_blank"
          href={job.siteUrl}
          className={cn(
            'w-full md:w-auto',
            buttonVariants({ variant: 'outline' })
          )}
        >
          {t('job.visitWebsite')}
          <Icon name="link" className="ml-2 size-4" />
        </a>
      </div>
    </Section>
  );
}
