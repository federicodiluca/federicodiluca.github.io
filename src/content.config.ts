import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.enum(["blog", "scada", "ai", "backend", "ricerca", "educazione", "sicurezza", "altro"]).default("blog"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
