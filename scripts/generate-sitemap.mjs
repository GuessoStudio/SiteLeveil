import { writeFileSync } from "fs";

const base = "https://leveilmental.fr";
const staticRoutes = ["/", "/blog", "/about", "/resources", "/contact", "/legal", "/test-personnalite-big-five"];
const articles = [
  "/blog/surmonter-rejet-social",
  "/blog/neuroplasticite-cerveau",
  "/blog/confiance-en-soi-durable",
  "/blog/neuro-dopamine-routine",
  "/blog/rumination-mentale-pensees-obsessionnelles",
  "/blog/attention-fragmentee-concentration-numerique",
  "/blog/procrastination-cerveau-agir-neurosciences",
  "/blog/methode-acr-repondre-aux-bonnes-nouvelles",
  "/blog/syndrome-imposteur-solutions",
  "/blog/sommeil-reparateur-7-strategies-validees",
  "/blog/lumiere-naturelle-cerveau-sommeil-sante-mentale"
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
