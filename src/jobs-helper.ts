import { getCurrentLocale } from '@locales/server';
import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

const jobsRootDir = function (locale: string) {
  return path.join(process.cwd(), `/content/jobs/${locale}`);
};

export const JobSchema = z.object({
  startDate: z.coerce.date(),
  endDate: z.coerce.date().nullish(),
  company: z.string(),
  description: z.string(),
  position: z.string(),
  siteUrl: z.string(),
  readTime: z.number(),
  featured: z.boolean().default(false),
  stacks: z.array(z.string()),
  published: z.boolean(),
  meta: z.object({
    keywords: z.array(z.string()),
  }),
});

export type Job = z.infer<typeof JobSchema> & { slug: string; content: string };

export const getJobs = async (locale: ReturnType<typeof getCurrentLocale>) => {
  let fileNames = await fs.readdir(jobsRootDir(locale));
  fileNames = fileNames.filter((f) => f.endsWith('.mdx'));

  const jobs: Job[] = [];

  for await (const fileName of fileNames) {
    const jobFile = await fs.readFile(
      path.join(jobsRootDir(locale), fileName),
      'utf-8'
    );
    const { content, data } = matter(jobFile);

    const job = JobSchema.parse(data);

    if (process.env.NODE_ENV === 'production' && !data.published) {
      continue;
    }

    jobs.push({
      slug: fileName.replace(/^\d+-/, '').replace('.mdx', ''),
      content,
      ...job,
    });
  }

  jobs.sort(
    (a, b) =>
      new Date(b.endDate || b.startDate).getTime() -
      new Date(a.endDate || a.startDate).getTime()
  );

  return jobs.sort((a, b) => Number(b.featured) - Number(a.featured));
};

export const getJob = async (
  slug: string,
  locale: ReturnType<typeof getCurrentLocale>
) => {
  const jobs = await getJobs(locale);
  return jobs.find((j) => j.slug === slug);
};
