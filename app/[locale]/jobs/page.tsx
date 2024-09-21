import { JobCard } from "@/components/job-card";
import { Section, SectionTitle } from "@/components/section";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getJobs } from "@/jobs-helper";
import { getCurrentLocale, getI18n } from "@locales/server";
import Link from "next/link";

export default async function JobsPage() {
  const locale = getCurrentLocale();

  const jobs = await getJobs(locale);
  const t = await getI18n();

  return (
    <Section className="hero">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{t("breadcrumb.home")}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{t("breadcrumb.jobs")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <SectionTitle>{t("section_jobs.title")}</SectionTitle>

      <ul className="grid gap-4 md:grid-cols-2">
        {jobs.map((job) => (
          <li key={job.id}>
            <Link href={`/jobs/${job.id}`}>
              <JobCard job={job} />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
