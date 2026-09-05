import type { APIRoute } from "astro";
import { SITE_URL } from "../consts";

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\nSitemap: ${SITE_URL}/vocabe/sitemap.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
};
