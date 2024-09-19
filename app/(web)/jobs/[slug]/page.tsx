import { MdxJob } from "@/components/mdx-job";
import { Section } from "@/components/page-wrapper";
import { getJob, getJobs } from "@/jobs-helper";
import { notFound } from "next/navigation";

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
    </Section>
  );
}
