import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const library = defineCollection({
  loader: glob({ pattern: ["**/index.md", "!_template/**"], base: "./src/content/library" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    type: z.enum(["book", "article", "practical", "story", "research", "video"]),
    topics: z.array(z.string()).optional().default([]),
    language: z.string().optional().default("uk"),
    status: z.enum(["published", "in-progress", "evolving"]).optional().default("published"),
    access: z.enum(["free", "paid"]).optional().default("free"),
    description: z.string(),
    cover: image().optional(),
    pdf: z.string().optional(),
    externalUrl: z.string().url().optional(),
    externalLabel: z.string().optional(),
    featured: z.boolean().optional().default(false),
    editorialOrder: z.number().optional().default(99),
    draft: z.boolean().optional().default(false),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: ["**/index.md", "!_template/**"], base: "./src/content/journal" }),
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

export const collections = { library, journal };
