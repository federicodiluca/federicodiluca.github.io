// Dominio del sito personale. Se cambia, aggiornare anche public/CNAME di conseguenza.
export const SITE_URL = "https://federicodiluca.com";

/** I progetti personali vivono ciascuno su un sottodominio, es. https://vocabe.federicodiluca.com/.
 *  Il sottodominio non coincide per forza col nome del repo: è senza trattini
 *  (repo school-feed-monitor → schoolfeedmonitor.federicodiluca.com). */
export const projectUrl = (subdomain: string) => `https://${subdomain}.${new URL(SITE_URL).host}/`;

export const SITE_NAME = "Federico Di Luca";

export const AUTHOR = {
  name: "Federico Di Luca",
  email: "federico.diluca95@gmail.com",
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

export const GOOGLE_SITE_VERIFICATION = "X0BmpFodd4vC_DDKqsoSQPTMt_RCasON0NkJ7_OmJ7k";
