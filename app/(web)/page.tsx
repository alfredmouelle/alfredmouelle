import { ContactButton } from "@/components/contact-button";
import { ContactUs } from "@/components/contact-us.form";
import { DownloadCvButton } from "@/components/download-cv-button";
import { Icons } from "@/components/icons";
import { JobCard } from "@/components/job-card";
import { Section } from "@/components/page-wrapper";
import { SectionTitle } from "@/components/section-title";
import TypewriterText from "@/components/typewritter-text";
import { buttonVariants } from "@/components/ui/button";
import { getJobs } from "@/jobs-helper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const jobsAll = await getJobs();
  const jobs = jobsAll.splice(0, 2);
  const featuredJob = jobsAll.find((j) => j.featured)!;

  return (
    <>
      <Section>
        <div className="hero grid min-h-[calc(100vh-14rem)] items-center gap-4 md:grid-cols-3">
          <div className="hero-brand relative order-2 flex flex-col gap-y-2 text-center md:order-none md:col-span-2 md:text-left">
            <p>Salut, je suis</p>
            <h1 className="text-3xl font-bold">Alfred Mouelle</h1>

            <div className="flex items-center justify-center gap-x-1 md:justify-start">
              <span className="text-xl font-medium">{"<"}</span>
              <TypewriterText
                text="Développeur Web"
                className="text-xl font-medium"
              />
              <span className="text-xl font-medium">{"/>"}</span>
            </div>

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

          <div className="order-1 md:order-none">
            <Image
              src="/assets/images/hero-avatar.webp"
              className="rounded-full shadow-lg"
              alt="Photo de moi"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Parcours professionnel</SectionTitle>
        <div id="jobs">
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

      <Section>
        <ContactUs />
      </Section>
    </>
  );
}
