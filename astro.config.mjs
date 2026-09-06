import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL, LOCALES, DEFAULT_LOCALE } from "./src/consts.ts";

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
      // /progetti/ è solo un redirect 301 verso /blog/: se resta in sitemap
      // Search Console lo segnala come "pagina con reindirizzamento".
      filter: (page) => !page.includes("/progetti/"),
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: { it: "it", en: "en" },
      },
    }),
  ],
});
