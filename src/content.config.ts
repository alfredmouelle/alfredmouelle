import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const jobs = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.mdx',
    base: './src/content/jobs',
    generateId: ({ entry }) =>
      entry.replace(/(?<=^[a-z]{2}\/)\d+-/, '').replace(/\.mdx$/, ''),
  }),
  schema: z.object({
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
  }),
});

export const collections = { jobs };
