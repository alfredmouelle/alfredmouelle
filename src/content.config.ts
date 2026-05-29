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

const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.mdx',
    base: './src/content/projects',
    generateId: ({ entry }) =>
      entry.replace(/(?<=^[a-z]{2}\/)\d+-/, '').replace(/\.mdx$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      year: z.number(),
      role: z.string().optional(),
      stacks: z.array(z.string()).default([]),
      url: z.string().optional(),
      repo: z.string().optional(),
      cover: image().optional(),
      featured: z.boolean().default(false),
      order: z.number().optional(),
      readTime: z.number().optional(),
      published: z.boolean().default(true),
      meta: z
        .object({ keywords: z.array(z.string()) })
        .default({ keywords: [] }),
    }),
});

export const collections = { jobs, projects };
