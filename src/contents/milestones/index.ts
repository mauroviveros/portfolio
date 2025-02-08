import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const schema = z.object({
    title: z.string(),
    organization: z.string(),
    type: z.enum(['work', 'education']),
    url: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    summary: z.string(),
});

export type Milestone = z.infer<typeof schema>;
export const milestones = defineCollection({
    loader: glob({ pattern: './src/contents/milestones/*.md' }),
    schema
});
