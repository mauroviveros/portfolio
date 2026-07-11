import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/experiences' }),
  schema: z.object({
    start_date: z.string(),
    end_date: z.string().nullable(),
    role: z.string(),
    company: z.string(),
    company_url: z.url().optional(),
    location: z.string().optional(),
    stack: z.array(z.string()),
    order: z.number().default(0),
  }),
});

export const collections = { experiences };
