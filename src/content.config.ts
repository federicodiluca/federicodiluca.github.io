import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Il racconto di ciascun progetto, uno per file: src/content/progetti/<slug>.md, dove slug
// è quello del progetto in src/data/site-data.ts. Con draft: true la pagina non viene
// generata, così un racconto a metà non finisce online né nella sitemap.
const progetti = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/progetti" }),
  schema: z.object({
    /** Il <title> e il titolo della pagina, senza il nome del sito (lo aggiunge il layout). */
    title: z.string(),
    /** Meta description: una frase che dica di cosa parla il racconto, non dell'app. */
    description: z.string(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { progetti };
