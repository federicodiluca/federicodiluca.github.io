import type { APIRoute } from "astro";
import { SITE_URL } from "../consts";

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap-index.xml\nSitemap: ${SITE_URL}/vocabe/sitemap.xml\nSitemap: ${SITE_URL}/school-feed-monitor/sitemap.xml\nSitemap: ${SITE_URL}/la-scimmia-vince/sitemap-index.xml\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
};
