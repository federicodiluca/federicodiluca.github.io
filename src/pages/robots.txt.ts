import type { APIRoute } from "astro";
import { SITE_URL } from "../consts";

// I progetti vivono su sottodomini propri (es. vocabe.federicodiluca.com): ognuno
// pubblica il suo robots.txt con la sua sitemap, qui va dichiarata solo quella del sito.
export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
};
