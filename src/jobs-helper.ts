import matter from 'gray-matter';
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

const jobsDir = path.join(process.cwd(), '/content/jobs');

export const JobSchema = z.object({
    startDate: z.coerce.date(),
    endDate: z.coerce.date().nullish(),
    title: z.string(),
    description: z.string(),
    position: z.string(),
    siteUrl: z.string(),
    stacks: z.array(z.string()),
    published: z.boolean(),
    meta: z.object({
        keywords: z.array(z.string())
    })
});

type Job = z.infer<typeof JobSchema> & { id: string; content: string }

export const getJobs = async () => {
    let fileNames = await fs.readdir(jobsDir);
    fileNames = fileNames.filter(f => f.endsWith('.mdx'));

    const jobs: Job[] = [];

    for await (const fileName of fileNames) {
        const fullPath = path.join(jobsDir, fileName);
        const fileContent = await fs.readFile(fullPath, 'utf-8');

        const frontmatter = matter(fileContent);
        
        const data = JobSchema.parse(frontmatter.data);

        if (process.env.NODE_ENV === 'production' && !data.published) {
            continue;
        }

        jobs.push({
            id: fileName.replace('.mdx', ''),
            content: frontmatter.content,
            ...data
        })
    }

    jobs.sort((a, b) => new Date(b.endDate || b.startDate).getTime() - new Date(a.endDate || a.startDate).getTime());

    return jobs;
}

export const getJob = async (id: string) => {
    const jobs = await getJobs();

    const job = jobs.find(j => j.id === id);

    return job
}