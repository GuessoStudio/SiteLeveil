import { writeFileSync } from "fs";

const base = "https://siteleveil.netlify.app";
const staticRoutes = ["/", "/blog", "/about", "/resources", "/contact", "/legal"];
const articles = [
  "/blog/surmonter-rejet-social",
  "/blog/neuroplasticite-cerveau",
  // ajoute ici…
];

const urls = [...staticRoutes, ...articles]
  .map((path) => `
  <url>
    <loc>${base}${path}</loc>
    <changefreq>${path.startsWith("/blog/") ? "monthly" : "weekly"}</changefreq>
    <priority>${path === "/" ? "1.0" : path.startsWith("/blog/") ? "0.8" : "0.6"}</priority>
  </url>`).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log("sitemap.xml mis à jour");
