# federicodiluca.github.io

Sito personale (portfolio) di Federico Di Luca, costruito con [Astro](https://astro.build)
e pubblicato su GitHub Pages. Statico, bilingue (IT/EN), zero backend, zero database.

> **Se hai forkato questo repo**: il codice/template è liberamente riusabile (licenza MIT), ma i
> contenuti (testi biografici, esperienze, foto, CV, pubblicazioni) sono personali di
> Federico Di Luca e **non** sono coperti dalla licenza — vanno sostituiti con i tuoi prima di
> pubblicare. Vedi [Personalizzazione](#personalizzazione) e [Licenza](#licenza) sotto.

## Stack

- **[Astro](https://astro.build)** — static site generator, output 100% statico
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** per la sitemap automatica
- Nessun framework JS lato client oltre a piccoli script (dark mode)
- Nessuna richiesta verso domini terzi: tutto è servito da GitHub Pages
- Hosting: **GitHub Pages**, deploy via **GitHub Actions**

## Funzionalità

- **Bilingue** (IT/EN), con routing i18n nativo di Astro (`/en/` per l'inglese)
- **Dark/light mode** con persistenza in `localStorage` e rispetto della preferenza di sistema
- **Privacy by design**: nessun form, nessun analytics, nessun cookie, nessuna risorsa caricata
  da CDN di terzi (icone e script sono serviti dal dominio stesso). Il contatto avviene via email.
  Informativa in [src/pages/privacy/](src/pages/privacy/) (IT) e [src/pages/en/privacy/](src/pages/en/privacy/) (EN)
- **Pubblicazioni scientifiche** collegate come card esterne, in home e in
  [src/pages/pubblicazioni/](src/pages/pubblicazioni/)
- **SEO**: sitemap automatica (esclude le pagine di redirect), JSON-LD (schema.org Person),
  Open Graph, hreflang, `robots.txt` generato dinamicamente, favicon conforme ai requisiti
  Google (48px e multipli)

## Sviluppo locale

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check (astro check) + build statico in ./dist
npm run preview   # serve la build di dist/
```

Richiede Node.js 20.3+ o 22+.

## Struttura del progetto

```text
src/
  consts.ts          Dati anagrafici/configurazione (vedi sotto)
  data/site-data.ts  Esperienze, formazione, pubblicazioni, skill
  layouts/           Layout condivisi (BaseLayout = head, header, footer, dark mode)
  components/        Componenti riusabili (Hero, Timeline, ThemeToggle, Breadcrumb, ...)
  pages/             Routing basato su file (IT alla radice, EN sotto pages/en/)
public/              Asset statici (favicon, icone PWA, CV, immagini, manifest)
.github/workflows/   CI/CD (build + deploy su GitHub Pages)
```

## Personalizzazione

Se stai adattando questo template al posto tuo, i punti da toccare sono:

1. **[src/consts.ts](src/consts.ts)** — nome, email, città, aree di servizio, social, `SITE_URL`,
   codice di verifica Google Search Console
2. **[src/data/site-data.ts](src/data/site-data.ts)** — esperienze lavorative, formazione,
   pubblicazioni, elenco skill
3. **[src/pages/](src/pages/)** — testi discorsivi delle singole pagine (chi-sono, servizi, home,
   ecc. — non sono in `site-data.ts`, sono scritti direttamente nei file `.astro`)
4. **[public/](public/)** — sostituisci foto, CV (`cv-*.pdf`), favicon, `images/social-share.jpg`
5. **[astro.config.mjs](astro.config.mjs)** — togli i `redirects` dei vecchi URL `/blog/`, che
   servono solo a questo sito

## Deploy

Il deploy è automatico: ogni push sul branch **`main`** esegue il workflow
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), che builda il sito e lo pubblica su
GitHub Pages. Puoi anche avviarlo manualmente da GitHub → tab **Actions** → *Build and deploy site*
→ **Run workflow**.

**Prerequisiti da impostare una sola volta, su GitHub:**

1. **Settings → Pages** → *Source* deve essere **GitHub Actions** (non "Deploy from a branch")
2. **Settings → Branches** → il *default branch* del repository deve essere `main`

### Se stai forkando: primo deploy

1. Fai il fork, poi clona in locale
2. Applica le modifiche di [Personalizzazione](#personalizzazione)
3. Elimina `public/CNAME` (o mettici il tuo dominio) e aggiorna `SITE_URL` in `src/consts.ts`. Se pubblichi su `<tuo-utente>.github.io`
   (il repo deve chiamarsi esattamente `<tuo-utente>.github.io` perché GitHub Pages lo riconosca
   come sito root; altrimenti il sito vive sotto un sottopercorso, es. `<tuo-utente>.github.io/<repo>/`
   — in quel caso serve anche configurare `base` in `astro.config.mjs`)
4. Push su `main`: il workflow builda e pubblica in automatico

## Dominio

Il sito è pubblicato su **[federicodiluca.com](https://federicodiluca.com)** (GitHub Pages con
dominio personalizzato):

- [public/CNAME](public/CNAME) contiene il nome del dominio
- `SITE_URL` in [src/consts.ts](src/consts.ts) è l'unica costante da cui derivano canonical URL,
  sitemap, hreflang, robots.txt e meta tag social
- DNS: record `A`/`AAAA` dell'apex verso gli IP di GitHub Pages e `CNAME` di `www` verso
  `federicodiluca.github.io`; su GitHub → **Settings → Pages** il custom domain è impostato con
  *Enforce HTTPS* attivo

## Progetti collegati

Ogni progetto personale ha un repo separato e vive su un **sottodominio** proprio (senza trattini, anche se il nome del repo li ha), costruito da
`projectUrl()` in [src/consts.ts](src/consts.ts):

- [Vocabe](https://vocabe.federicodiluca.com/) — app PWA per il vocabolario italiano
- [School Feed Monitor](https://schoolfeedmonitor.federicodiluca.com/) — avvisi scolastici su Telegram
- [La Scimmia Vince](https://lascimmiavince.federicodiluca.com/) — statistiche sul SuperEnalotto

Per ogni sottodominio servono un record DNS `CNAME` verso `federicodiluca.github.io`, un file
`CNAME` nel repo del progetto e il custom domain impostato nelle sue *Settings → Pages*. Essendo
host distinti, ciascun progetto pubblica il proprio `robots.txt` con la propria sitemap.

## Licenza

Il repository contiene due cose diverse, con due regimi diversi:

- **Il codice** — componenti, layout, script, configurazione, workflow, struttura del progetto —
  è rilasciato sotto **licenza [MIT](LICENSE)**. Puoi usarlo, modificarlo e ridistribuirlo
  liberamente, anche per scopi commerciali, mantenendo la nota di copyright.
- **I contenuti** — testi biografici, esperienze e formazione,
  fotografie, CV, immagine social, pubblicazioni — sono **© Federico Di Luca,
  tutti i diritti riservati**, e **non** sono coperti dalla licenza MIT. Sono nel repository solo
  perché il sito è il sito di una persona reale: se fai un fork, sostituiscili con i tuoi.

Le icone delle tecnologie in `public/icons/` provengono da [Devicon](https://github.com/devicons/devicon)
(licenza MIT) e da [VectorLogoZone](https://www.vectorlogo.zone/) (CC0); i marchi raffigurati
appartengono ai rispettivi titolari.
