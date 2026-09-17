import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL, LOCALES, DEFAULT_LOCALE } from "./src/consts.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// @astrojs/sitemap non conosce le date del frontmatter dei post: le leggiamo qui
// (semplice regex, il frontmatter è sempre "date: YYYY-MM-DD") per dare a ogni
// URL di articolo un lastmod reale invece di ometterlo del tutto.
function getBlogLastmods() {
  const blogDir = join(__dirname, "src/content/blog");
  const lastmods = {};
  for (const file of readdirSync(blogDir)) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const content = readFileSync(join(blogDir, file), "utf-8");
    const updated = content.match(/^updatedDate:\s*"?([\d-]+)"?/m);
    const published = content.match(/^date:\s*"?([\d-]+)"?/m);
    const dateStr = updated?.[1] ?? published?.[1];
    if (dateStr) lastmods[slug] = new Date(dateStr).toISOString();
  }
  return lastmods;
}

const blogLastmods = getBlogLastmods();

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALES,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: { it: "it", en: "en" },
      },
      serialize(item) {
        const slug = item.url.match(/\/blog\/([^/]+)\/$/)?.[1];
        const lastmod = slug ? blogLastmods[slug] : undefined;
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
