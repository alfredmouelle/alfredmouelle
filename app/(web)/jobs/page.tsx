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
import Link from "next/link";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <Section className="hero">
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Parcours professionnel</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <SectionTitle>Parcours professionnel</SectionTitle>

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
