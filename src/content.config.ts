import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/experiences' }),
  schema: z.object({
    start: z.string(),
    end: z.string().nullable(),
    role: z.string(),
    company: z.string(),
    companyUrl: z.string().url().optional(),
    location: z.string().optional(),
    highlights: z.array(z.string()),
    stack: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { experiences };
