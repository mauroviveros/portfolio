import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const experiences = defineCollection({
  loader: glob({ base: './src/content/experiences/', pattern: '**/*.md', }),
  schema: z.object({
    title: z.string(),
    organization: z.string(),
    type: z.enum(['work', 'education']),
    url: z.string().url(),
    startDate: z.date(),
    endDate: z.date().optional()
  })
});
