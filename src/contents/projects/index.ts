import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const schema = z.object({
    title: z.string(),
    url: z.string().url().optional(),
    repo: z.string().url().optional(),
    techStack: z.array(z.string()),
});

export type Project = z.infer<typeof schema>;
export const projects = defineCollection({
    loader: glob({ pattern: './src/contents/projects/*.md' }),
    schema
});
