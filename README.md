# federicodiluca.github.io

Sorgente del sito personale di Federico Di Luca, costruito con [Astro](https://astro.build).

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
- Articoli del blog: file Markdown in [src/content/blog/](src/content/blog/)
- Pagine: [src/pages/](src/pages/)

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
