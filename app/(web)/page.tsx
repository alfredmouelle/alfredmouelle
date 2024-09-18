import { ContactButton } from "@/components/contact-button";
import { ContactUs } from "@/components/contact-us.form";
import { DownloadCvButton } from "@/components/download-cv-button";
import { Icons } from "@/components/icons";
import { JobCard } from "@/components/job-card";
import { Section } from "@/components/page-wrapper";
import { SectionTitle } from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { getJobs } from "@/jobs-helper";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const jobs = (await getJobs()).splice(0, 2);

  return (
    <>
      <Section>
        <div className="grid h-[calc(100vh-14rem)] items-center">
          <div className="flex flex-col gap-y-2">
            <p>Salut, je suis</p>
            <h1 className="text-3xl font-bold">Alfred Mouelle</h1>

            <p className="text-xl font-medium">{"<Développeur Web />"}</p>
            <p className="text-balance">
              Je suis un jeune extrêmement autodidacte avec une expérience de 5
              ans dans le développement Web et la conception d’application. De
              plus en plus de technologies abondent le développent; je
              m&apos;efforce de me les approprier non seulement pour la
              connaissance personnelle, mais également pour rendre le plus
              possible service à ceux qui en ont besoin.
            </p>

            <div className="mt-4 flex flex-col gap-2 md:flex-row">
              <DownloadCvButton />
              <ContactButton />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Mes réalisations</SectionTitle>
        <div id="jobs">
          <ul className="grid gap-4 md:grid-cols-2">
            {jobs.map((job) => (
              <li key={job.id}>
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

      <Section>
        <ContactUs />
      </Section>
    </>
  );
}
