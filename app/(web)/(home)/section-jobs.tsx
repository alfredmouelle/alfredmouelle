import { Icons } from "@/components/icons";
import { JobCard } from "@/components/job-card";
import { Section } from "@/components/page-wrapper";
import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { getJobs } from "@/jobs-helper";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const SectionJobs = async () => {
  const jobsAll = await getJobs();
  const jobs = jobsAll.splice(0, 2);
  const featuredJob = jobsAll.find((j) => j.featured)!;

  return (
    <Section id="jobs">
      <SectionTitle>Parcours professionnel</SectionTitle>
      <div>
        <ul className="grid gap-4 md:grid-cols-2">
          <li key={featuredJob.id} className="col-span-2">
            <Link href={`/jobs/${featuredJob.id}`}>
              <JobCard job={featuredJob} />
            </Link>
          </li>

          {jobs.map((job) => (
            <li key={job.id} className="col-span-2 md:col-span-1">
              <Link href={`/jobs/${job.id}`}>
                <JobCard job={job} />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/jobs"
          className={cn("mt-4", buttonVariants({ variant: "outline" }))}
        >
          Voir tout
          <Icons.arrowRight className="ml-1.5 h-5 w-5" />
        </Link>
      </div>
    </Section>
  );
};
