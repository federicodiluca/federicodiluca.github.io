# federicodiluca.github.io

Sito personale (portfolio + blog) di Federico Di Luca, costruito con [Astro](https://astro.build)
e pubblicato su GitHub Pages. Statico, bilingue (IT/EN), zero backend, zero database.

> **Se hai forkato questo repo**: il codice/template è liberamente riusabile, ma i contenuti
> (testi biografici, esperienze, foto, CV, pubblicazioni) sono personali di Federico Di Luca — vanno
> sostituiti con i tuoi prima di pubblicare. Vedi [Personalizzazione](#personalizzazione) sotto.

## Stack

- **[Astro](https://astro.build)** — static site generator, output 100% statico
- **Content Collections** (`astro:content`) per gli articoli del blog in Markdown
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** per la sitemap automatica
- **[Mermaid](https://mermaid.js.org/)** (via CDN) per i diagrammi nel blog
- Nessun framework JS lato client oltre a piccoli script inline (dark mode, filtri blog, Mermaid)
- Hosting: **GitHub Pages**, deploy via **GitHub Actions**

## Funzionalità

- **Bilingue** (IT/EN), con routing i18n nativo di Astro (`/en/` per l'inglese; il blog resta solo IT)
- **Dark/light mode** con persistenza in `localStorage` e rispetto della preferenza di sistema
- **Blog a categorie** con filtro client-side ([src/pages/blog/index.astro](src/pages/blog/index.astro))
- **Diagrammi Mermaid** nei contenuti del blog (flowchart, sequence diagram, architetture),
  trasformati e renderizzati lato client dallo script nel [BaseLayout](src/layouts/BaseLayout.astro)
- **Pubblicazioni scientifiche** collegate come card esterne (senza pagina dedicata), sia in home
  che nella sezione Ricerca del blog
- **SEO**: sitemap automatica, JSON-LD (schema.org Person), Open Graph, hreflang, redirect
  www→non-www, `robots.txt` generato dinamicamente

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
  content/blog/      Articoli del blog in Markdown
  content.config.ts  Schema/validazione frontmatter degli articoli
  layouts/           Layout condivisi (BaseLayout = head, header, footer, dark mode, Mermaid)
  components/        Componenti riusabili (Hero, Timeline, ThemeToggle, Breadcrumb, ...)
  pages/             Routing basato su file (IT alla radice, EN sotto pages/en/)
  middleware.ts      Redirect www → non-www
public/              Asset statici (favicon, CV, immagini, manifest)
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
5. **[src/content/blog/](src/content/blog/)** — cancella o riscrivi gli articoli d'esempio

### Aggiungere un articolo al blog

Crea un file `.md` in `src/content/blog/` con frontmatter:

```yaml
---
title: "Titolo articolo"
description: "Descrizione breve per meta tag e anteprima"
date: 2025-01-01
category: "ai" # blog | scada | ai | backend | ricerca | educazione | sicurezza | altro
tags: ["tag1", "tag2"]
---
```

Le categorie valide sono definite in [src/content.config.ts](src/content.config.ts) — aggiungine
altre lì se ti servono. Per un diagramma, usa un blocco ` ```mermaid ` nel corpo dell'articolo:
viene rilevato e renderizzato automaticamente lato client, nessuna configurazione aggiuntiva.

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
3. Se pubblichi su `<tuo-utente>.github.io`, aggiorna `SITE_URL` in `src/consts.ts` di conseguenza
   (il repo deve chiamarsi esattamente `<tuo-utente>.github.io` perché GitHub Pages lo riconosca
   come sito root; altrimenti il sito vive sotto un sottopercorso, es. `<tuo-utente>.github.io/<repo>/`
   — in quel caso serve anche configurare `base` in `astro.config.mjs`)
4. Push su `main`: il workflow builda e pubblica in automatico

## Passare a un dominio personalizzato

Per passare da `*.github.io` a un dominio proprio (es. `federicodiluca.it`):

1. Acquista il dominio e punta i suoi DNS a GitHub Pages (record `A`/`ALIAS` verso gli IP di
   GitHub Pages, o `CNAME` se è un sottodominio)
2. Crea un file `public/CNAME` con dentro il solo nome del dominio, es. `federicodiluca.it`
3. Aggiorna `SITE_URL` in [src/consts.ts](src/consts.ts) con il nuovo dominio
4. Su GitHub → **Settings → Pages**, imposta il custom domain e attendi la verifica del
   certificato HTTPS

Nessun altro file va toccato: canonical URL, sitemap, hreflang e i meta tag social si aggiornano
automaticamente perché derivano tutti da `SITE_URL`.

## Progetti collegati

- [Vocabe](https://federicodiluca.github.io/vocabe/) — app PWA per il vocabolario italiano,
  pubblicata come sottopercorso dello stesso dominio GitHub Pages (repo separato). La sua sitemap
  è dichiarata nel [robots.txt](src/pages/robots.txt.ts) di questo sito, perché GitHub Pages
  serve un solo `robots.txt` per l'intero dominio (quello del repo root/user page) — un
  `robots.txt` pubblicato da un altro repo sotto un sottopercorso viene ignorato dai crawler.
