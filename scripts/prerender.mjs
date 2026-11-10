// ---------------------------------------------------------------------
// Build-time prerender (runs after `vite build` + the SSR build).
//
// Writes a fully rendered HTML file for every route, e.g.
//   dist/index.html, dist/about/index.html, dist/expertise/water-sewerage/index.html
// plus dist/404.html. Google, Bing and AI crawlers (GPTBot, ClaudeBot,
// PerplexityBot…, most of which don't run JavaScript) get the real page
// content, title, meta tags and JSON-LD on the first request. In the
// browser, main.tsx hydrates the HTML so the site behaves exactly as before.
//
// It also checks public/sitemap.xml lists exactly the prerendered routes,
// and fails the build if not, so the sitemap can't silently go stale.
// ---------------------------------------------------------------------
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const SITE_URL = "https://breinscope.co.ke";

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, routes } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

// React 19 emits hoisted <title>/<meta>/<link> tags at the very start of
// renderToString output. Peel that leading run off so it can go in <head>.
const HOISTED = /^(?:<title>[^<]*<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*\/?>)+/;

function buildPage(url, { hydrate }) {
  const rendered = render(url);
  const headMatch = rendered.match(HOISTED);
  const headTags = (headMatch ? headMatch[0] : "")
    // Mark them so main.tsx can remove them before React adds its own.
    .replace(/<(title|meta|link)\b/g, "<$1 data-prerender");
  const body = rendered.slice(headMatch ? headMatch[0].length : 0);

  if (!headTags.includes("<title")) throw new Error(`No <title> rendered for ${url}`);

  const rootAttr = hydrate ? ` data-prerendered-path="${url}"` : "";
  return template
    .replace(/<title>[^<]*<\/title>/, "") // placeholder title in index.html
    .replace("</head>", `${headTags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root"${rootAttr}>${body}</div>`);
}

function outFile(url) {
  return url === "/" ? path.join(dist, "index.html") : path.join(dist, url, "index.html");
}

for (const url of routes) {
  const file = outFile(url);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, buildPage(url, { hydrate: true }));
}
// Served by the host with a real 404 status for unknown URLs. Rendered
// without hydration: the client re-renders whatever the URL resolves to.
fs.writeFileSync(path.join(dist, "404.html"), buildPage("/__not-found__", { hydrate: false }));

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes + 404.html`);

// --- Sitemap consistency check ---------------------------------------
const sitemap = fs.readFileSync(path.join(root, "public", "sitemap.xml"), "utf8");
const inSitemap = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim().replace(SITE_URL, "") || "/"),
);
const expected = new Set(routes);
const missing = routes.filter((r) => !inSitemap.has(r));
const extra = [...inSitemap].filter((r) => !expected.has(r));
if (missing.length || extra.length) {
  console.error("\npublic/sitemap.xml is out of sync with the site's routes:");
  missing.forEach((r) => console.error(`  missing from sitemap: ${r}`));
  extra.forEach((r) => console.error(`  in sitemap but not a page: ${r}`));
  console.error("Update public/sitemap.xml (and its <lastmod> dates), then rebuild.\n");
  process.exit(1);
}
console.log(`Sitemap OK (${inSitemap.size} URLs)`);
