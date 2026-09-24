import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL, LOCALES, DEFAULT_LOCALE } from "./src/consts.ts";

// La sezione articoli è stata rimossa: i vecchi URL già indicizzati puntano alla
// pagina più vicina per argomento. GitHub Pages non fa 301 veri, Astro genera una
// pagina con meta refresh + canonical, che Google tratta come redirect.
const SVILUPPO = "/servizi/sviluppo-software/";
const FORMAZIONE = "/servizi/formazione/";
const PUBBLICAZIONI = "/pubblicazioni/";
const blogRedirects = {
  "da-technical-leader-a-docente": "/chi-sono/",
  "architettura-backend-monolite-microservizi": SVILUPPO,
  "automazione-industriale-plc-scada": SVILUPPO,
  "mlops-modelli-produzione": SVILUPPO,
  "programmazione-concorrente": SVILUPPO,
  "regressione-previsioni-pratiche": SVILUPPO,
  "scada-magazzini-automatici": SVILUPPO,
  "scalabilita-backend-patterns": SVILUPPO,
  "diagrammi-flusso-algoritmi": FORMAZIONE,
  "pensiero-computazionale": FORMAZIONE,
  "programmazione-ia-oggi": FORMAZIONE,
  "python-analisi-numerica-grafici": FORMAZIONE,
  "sicurezza-attacchi-hacker": FORMAZIONE,
  "vpn-privacy-networking": FORMAZIONE,
  "machine-learning-classificazione": PUBBLICAZIONI,
  "ricerca-sviluppo-azienda": PUBBLICAZIONI,
};

export default defineConfig({
  site: SITE_URL,
  trailingSlash: "always",
  redirects: {
    "/blog/": "/",
    ...Object.fromEntries(
      Object.entries(blogRedirects).map(([slug, to]) => [`/blog/${slug}/`, to]),
    ),
  },
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
    }),
  ],
});
