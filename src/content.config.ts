import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const journal = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/journal" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(["event", "library", "research", "project", "field-note", "process", "social", "womens-space", "icra", "update"]).optional().default("update"),
    author: z.string().optional(),
    excerpt: z.string().optional(),
    cover: image().optional(),
    draft: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
    relatedLibraryItem: z.string().optional(),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { journal };
