import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);

  if (url.hostname.startsWith("www.")) {
    const newUrl = new URL(context.request.url);
    newUrl.hostname = url.hostname.replace("www.", "");
    return context.redirect(newUrl.toString(), 301);
  }

  return next();
});
