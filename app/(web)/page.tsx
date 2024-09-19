import { ContactButton } from "@/components/contact-button";
import { ContactUs } from "@/components/contact-us";
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
              Je suis Alfred Mouelle, développeur Full Stack basé au Cameroun
              avec 5 ans d’expérience dans le développement web et la conception
              d’applications. Passionné et autodidacte, j’ai acquis des
              compétences solides en ingénierie logicielle à travers de nombreux
              projets. Mon objectif est de maîtriser les nouvelles technologies
              pour non seulement enrichir mes connaissances, mais surtout pour
              offrir des solutions adaptées et de grande qualité à ceux qui en
              ont besoin. En tant que freelance, je suis dévoué à fournir un
              service efficace et à contribuer activement à la réussite des
              projets qui me sont confiés.
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

      <Section id="scholarship">
        <SectionTitle>Parcours scolaire</SectionTitle>
        <div className="grid md:grid-cols-2">
          <Image
            src="/assets/images/education-man.svg"
            width={500}
            height={500}
            alt="Mascotte"
          />
          <div className="relative">
            <div className="absolute left-1/2 h-full -translate-x-1/2 transform border-l-2 border-gray-300"></div>
            <div className="space-y-8">
              <div className="flex w-full items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold">
                    Brevet de Technicien Supérieur
                  </h3>
                  <p className="text-blue-500">Génie Logiciel</p>
                  <p className="text-gray-500">2018 - 2020</p>
                </div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <Icons.check className="text-white" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-gray-500">
                    Institut Universitaire des Grandes Ecoles des Tropiques
                  </p>
                  <p className="text-gray-500">Douala - Cameroun</p>
                </div>
              </div>
              <div className="flex w-full items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold">Baccalauréat</h3>
                  <p className="text-blue-500">Technologie de l’information</p>
                  <p className="text-gray-500">2017 - 2018</p>
                </div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <Icons.check className="text-white" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-gray-500">Lycée Bilingue de Kribi</p>
                  <p className="text-gray-500">Kribi - Cameroun</p>
                </div>
              </div>
              <div className="flex w-full items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-lg font-semibold">Probatoire</h3>
                  <p className="text-blue-500">Technologie de l’information</p>
                  <p className="text-gray-500">2016 - 2017</p>
                </div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <Icons.check className="text-white" />
                </div>
                <div className="w-1/2 pl-8">
                  <p className="text-gray-500">Lycée Bilingue de Kribi</p>
                  <p className="text-gray-500">Kribi - Cameroun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

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

      <Section id="contact">
        <ContactUs />
      </Section>
    </>
  );
}
