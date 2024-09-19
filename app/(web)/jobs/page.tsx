import { JobCard } from "@/components/job-card";
import { Section } from "@/components/page-wrapper";
import { SectionTitle } from "@/components/section-title";
import { getJobs } from "@/jobs-helper";
import Link from "next/link";

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <Section>
      <SectionTitle>Mon parcours professionnel</SectionTitle>

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
