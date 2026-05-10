import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    pubDatetime: z.coerce.date(),
    modDatetime: z.coerce.date().optional().nullable(),
    excerpt: z.string().optional().nullable(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    hideDate: z.boolean().default(false),
    pubDatetime: z.coerce.date().optional().nullable(),
    icon: z.string().optional().nullable(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, pages };
