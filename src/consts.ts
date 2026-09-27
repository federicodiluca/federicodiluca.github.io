// Dominio del sito personale. Se cambia, aggiornare anche public/CNAME di conseguenza.
export const SITE_URL = "https://federicodiluca.com";

/** I progetti personali vivono ciascuno su un sottodominio, es. https://vocabe.federicodiluca.com/.
 *  Il sottodominio non coincide per forza col nome del repo: è senza trattini
 *  (repo school-feed-monitor → schoolfeedmonitor.federicodiluca.com). */
export const projectUrl = (subdomain: string) => `https://${subdomain}.${new URL(SITE_URL).host}/`;

/** Interruttore unico per lezioni private e ripetizioni. Con false spariscono da menu, home,
 *  chi sono, contatti, dati strutturati e sitemap, e /lezioni-private/ rimanda a /servizi/formazione/.
 *  Per riattivarle basta rimettere true. */
export const SHOW_PRIVATE_LESSONS = false;

export const SITE_NAME = "Federico Di Luca";

export const AUTHOR = {
  name: "Federico Di Luca",
  email: "info@federicodiluca.com",
  jobTitle: "Sviluppatore software freelance & Docente di Informatica",
  city: "Pesaro",
  province: "PU",
  region: "Marche",
  country: "IT",
  serviceArea: ["Pesaro", "Fano", "Urbino", "Rimini"],
  sameAs: [
    "https://github.com/federicodiluca",
    "https://www.linkedin.com/in/federico-di-luca-ing/",
    projectUrl("vocabe"),
  ],
};

export const DEFAULT_LOCALE = "it";
export const LOCALES = ["it", "en"] as const;

/** Solo le pagine elencate qui hanno una vera controparte tradotta: un hreflang che punta
 *  a una pagina inesistente (es. /en/chi-sono/, mai creata) è peggio che non averlo.
 *  Da qui leggono sia i <link rel="alternate"> delle pagine sia la sitemap, così non divergono. */
export const IT_TO_EN_PATHS: Record<string, string> = {
  "/": "/en/",
  "/contatti/": "/en/contact/",
  "/privacy/": "/en/privacy/",
};

/** Coppia { it, en } di percorsi per una pagina tradotta, undefined se non ha traduzione. */
export function translationPair(path: string): { it: string; en: string } | undefined {
  if (IT_TO_EN_PATHS[path]) return { it: path, en: IT_TO_EN_PATHS[path] };
  const it = Object.keys(IT_TO_EN_PATHS).find((k) => IT_TO_EN_PATHS[k] === path);
  return it ? { it, en: path } : undefined;
}

export const GOOGLE_SITE_VERIFICATION = "X0BmpFodd4vC_DDKqsoSQPTMt_RCasON0NkJ7_OmJ7k";
