import { Icons } from "@/components/icons";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { getJob, getJobs } from "@/jobs-helper";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { MdxJob } from "../_components/mdx-job";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = await getJobs();
  return files.map((job) => ({ slug: job.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const job = await getJob(params.slug);

  if (!job) return notFound();

  return {
    title: `${job.position} at ${job.company}`,
  };
}

export const dynamic = "force-static";

export default async function JobPage({ params }: PageProps) {
  const job = (await getJob(params.slug))!;

  return (
    <Section>
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
          Visiter le site web
          <Icons.link className="ml-2 h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
