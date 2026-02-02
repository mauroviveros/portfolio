import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const about = defineCollection({
    loader: glob({ base: './src/contents/about/', pattern: '*.md', }),
    schema: z.object({
      quote: z.string().optional(),
      author: z.string().optional(),
      lifespan: z.string().optional(),
      occupation: z.string().optional(),
    })
});
