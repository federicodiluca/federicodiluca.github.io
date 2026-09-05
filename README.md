# federicodiluca.github.io

Sorgente del sito personale di Federico Di Luca, costruito con [Astro](https://astro.build).

## Funzionalità

- **Bilingue** (IT/EN), con routing i18n nativo di Astro (`/en/` per l'inglese)
- **Dark/light mode** con persistenza in `localStorage` e rispetto della preferenza di sistema
- **Blog a categorie** con filtro client-side ([src/pages/blog/index.astro](src/pages/blog/index.astro)):
  educazione, AI, backend, SCADA, sicurezza, ricerca
- **Diagrammi Mermaid** nei contenuti del blog (flowchart, sequence diagram, architetture),
  renderizzati lato client via script di trasformazione nel [BaseLayout](src/layouts/BaseLayout.astro)
- **Pubblicazioni scientifiche** collegate come card esterne (no pagina dedicata), sia in home
  che nella sezione Ricerca del blog
- **SEO**: sitemap automatica, schema.org (Person), Open Graph, hreflang, redirect www→non-www

## Sviluppo locale

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build statico in ./dist
npm run preview   # serve la build di dist/
```

Richiede Node.js 20.3+ o 22+.

## Contenuti

- Testi principali (esperienze, formazione, pubblicazioni, skill): [src/data/site-data.ts](src/data/site-data.ts)
- Configurazione sito (URL, autore, lingue): [src/consts.ts](src/consts.ts)
- Articoli del blog: file Markdown con frontmatter (`category`, `tags`, `date`) in [src/content/blog/](src/content/blog/)
- Pagine IT: [src/pages/](src/pages/) · Pagine EN: [src/pages/en/](src/pages/en/)

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

Per un diagramma, usa un blocco ` ```mermaid ` nel corpo — viene trasformato e renderizzato
automaticamente lato client.

## Progetti collegati

- [Vocabe](https://federicodiluca.github.io/vocabe/) — app PWA per il vocabolario italiano,
  pubblicata come sottopercorso dello stesso dominio GitHub Pages (repo separato). La sua sitemap
  è dichiarata nel [robots.txt](src/pages/robots.txt.ts) di questo sito, perché GitHub Pages
  serve un solo `robots.txt` per l'intero dominio (quello del repo root/user page).

## Deploy

Il deploy è automatico: ogni push sul branch `main` esegue il workflow
[.github/workflows/deploy.yml](.github/workflows/deploy.yml), che builda il sito e lo pubblica su
GitHub Pages. Puoi anche avviarlo manualmente da GitHub → tab **Actions** → *Build and deploy site*
→ **Run workflow**.

**Prerequisito da impostare una sola volta**: su GitHub, in questo repository vai su
**Settings → Pages** e imposta come *Source* → **GitHub Actions** (non "Deploy from a branch").

## Passare a un dominio personalizzato

Oggi il sito vive su `federicodiluca.github.io`. Per passare a un dominio proprio (es.
`federicodiluca.it`) in futuro:

1. Acquista il dominio e punta i suoi DNS a GitHub Pages (record `A`/`ALIAS` verso gli IP di
   GitHub Pages, o `CNAME` se è un sottodominio).
2. Crea un file `public/CNAME` con dentro il solo nome del dominio, es. `federicodiluca.it`.
3. Aggiorna `SITE_URL` in [src/consts.ts](src/consts.ts) con il nuovo dominio.
4. Su GitHub → **Settings → Pages**, imposta il custom domain e attendi la verifica del
   certificato HTTPS.

Nessun altro file va toccato: canonical URL, sitemap, hreflang e i meta tag social si aggiornano
automaticamente perché derivano tutti da `SITE_URL`.
