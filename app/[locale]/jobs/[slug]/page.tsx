import { Icons } from "@/components/icons";
import { JobDate } from "@/components/job-card";
import { Section } from "@/components/section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { getJob, getJobs } from "@/jobs-helper";
import { cn } from "@/lib/utils";
import { getCurrentLocale, getI18n } from "@locales/server";
import { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import { notFound } from "next/navigation";
import { MdxJob } from "../_components/mdx-job";

interface PageProps {
  params: { slug: string; locale: ReturnType<typeof getCurrentLocale> };
}

export async function generateStaticParams({ params }: PageProps) {
  const files = await getJobs(params.locale);
  return files.map((job) => ({ slug: job.id })).concat();
}

export async function generateMetadata({ params }: PageProps) {
  const job = await getJob(params.slug, params.locale);

  if (!job) return notFound();

  return {
    title: `Alfred Mouelle | ${job.position} at ${job.company}`,
    description: job.description,
    keywords: job.meta.keywords,
    openGraph: {
      title: `Alfred Mouelle | ${job.position} at ${job.company}`,
      description: job.description,
      type: "article",
      authors: "Alfred Mouelle",
    },
  } satisfies Metadata;
}

export default async function JobPage({ params }: PageProps) {
  setStaticParamsLocale(params.locale);
  const job = (await getJob(params.slug, params.locale as any))!;
  const t = await getI18n();

  return (
    <Section className="hero">
      <div className="mb-5 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("breadcrumb.home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/jobs">
                {t("breadcrumb.jobs")}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{job.company}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col items-center justify-center gap-x-4 gap-y-2 md:flex-row">
          <JobDate startDate={job.startDate} endDate={job.endDate} />

          <div className="flex items-center justify-center gap-x-4">
            <p className="text-xs text-muted-foreground">
              {job.readTime} {t("job.readTime")}
            </p>

            <a
              target="_blank"
              href={job.siteUrl}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Icons.link className="h-4 w-4" />
              <span className="sr-only">{t("job.visitWebsite")}</span>
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
            "w-full md:w-auto",
            buttonVariants({ variant: "outline" }),
          )}
        >
          {t("job.visitWebsite")}
          <Icons.link className="ml-2 h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
