import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

const jobsRootDir = path.join(process.cwd(), '/content/jobs');

export const JobSchema = z.object({
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullish(),
    company: z.string(),
    description: z.string(),
    position: z.string(),
    siteUrl: z.string(),
    featured: z.boolean().default(false),
    stacks: z.array(z.string()),
    published: z.boolean(),
    meta: z.object({
        keywords: z.array(z.string())
    })
});

export type Job = z.infer<typeof JobSchema> & { id: string; content: string }

export const getJobs = async () => {
    let fileNames = await fs.readdir(jobsRootDir);
    fileNames = fileNames.filter(f => f.endsWith('.mdx'));

    const jobs: Job[] = [];

    for await (const fileName of fileNames) {
        const jobFile = await fs.readFile(path.join(jobsRootDir, fileName), 'utf-8');
        const { content, data } = matter(jobFile);
        
        const job = JobSchema.parse(data);

        if (process.env.NODE_ENV === 'production' && !data.published) {
            continue;
        }

        jobs.push({
            id: fileName.replace('.mdx', ''),
            content,
            ...job
        })
    }

    jobs.sort((a, b) => new Date(b.endDate || b.startDate).getTime() - new Date(a.endDate || a.startDate).getTime());

    return jobs;
}

export const getJob = async (slug: string) => {
    const jobs = await getJobs();
    return jobs.find(j => j.id === slug);
}