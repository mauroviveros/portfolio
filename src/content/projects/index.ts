import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const projects = defineCollection({
  loader: glob({ base: './src/content/projects/', pattern: '*.md' }),
  schema: z.object({
    title: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    image: z.string().url().optional(),
    techStack: z.array(z.string()),
    description: z.object({
        es: z.string(),
        en: z.string(),
    }),
  })
});
