import { OGImageRoute } from 'astro-og-canvas';

import { getJobSlug, getJobs } from '~/lib/jobs';
import { getProjectSlug, getProjects } from '~/lib/projects';
import { LOCALES } from '~/locales';

type OgPage = { title: string; description: string };

// Construit la table { "<locale>/<slug>": { title, description } } pour
// chaque projet et chaque job, dans toutes les langues.
const pages: Record<string, OgPage> = {};

for (const locale of LOCALES) {
  const [projects, jobs] = await Promise.all([
    getProjects(locale),
    getJobs(locale),
  ]);

  for (const project of projects) {
    pages[`${locale}/projects/${getProjectSlug(project)}`] = {
      title: project.data.title,
      description: project.data.description,
    };
  }

  for (const job of jobs) {
    pages[`${locale}/jobs/${getJobSlug(job)}`] = {
      title: `${job.data.position} · ${job.data.company}`,
      description: job.data.description,
    };
  }
}

const FONTS = [
  './src/assets/og-fonts/BeVietnamPro-Regular.ttf',
  './src/assets/og-fonts/BeVietnamPro-Bold.ttf',
];

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getSlug: (path) => `${path}.png`,
  getImageOptions: (_path, page: OgPage) => ({
    title: page.title,
    description: page.description,
    bgGradient: [
      [10, 15, 26],
      [23, 33, 66],
    ],
    border: { color: [37, 99, 235], width: 18, side: 'inline-start' },
    padding: 80,
    fonts: FONTS,
    font: {
      title: {
        color: [255, 255, 255],
        size: 64,
        weight: 'Bold',
        lineHeight: 1.2,
        families: ['Be Vietnam Pro'],
      },
      description: {
        color: [148, 163, 184],
        size: 30,
        lineHeight: 1.4,
        families: ['Be Vietnam Pro'],
      },
    },
  }),
});
