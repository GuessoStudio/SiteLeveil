import { writeFileSync, readFileSync } from "fs";

const base = "https://leveilmental.fr";
const today = new Date().toISOString().split("T")[0];

// Extraire dateModified depuis un fichier TSX article
function getDateModified(filePath) {
  try {
    const content = readFileSync(filePath, "utf-8");
    const match = content.match(/dateModified:\s*["']([0-9]{4}-[0-9]{2}-[0-9]{2})/);
    return match ? match[1] : today;
  } catch {
    return today;
  }
}

const staticRoutes = [
  { path: "/", lastmod: today },
  { path: "/blog/", lastmod: today },
  { path: "/a-propos/", lastmod: today },
  { path: "/ressources/", lastmod: today },
  { path: "/contact/", lastmod: today },
  { path: "/test-personnalite-big-five/", lastmod: today },
  { path: "/neuro-journal/", lastmod: today },
  { path: "/stress-zero/", lastmod: today },
  { path: "/calculateur-sommeil/", lastmod: today },
  { path: "/habit-tracker/", lastmod: today },
];

const articles = [
  { path: "/blog/surmonter-rejet-social/",                          file: "src/articles/RejetSocial.tsx" },
  { path: "/blog/neuroplasticite-cerveau/",                         file: "src/articles/NeuroplasticiteCerveau.tsx" },
  { path: "/blog/confiance-en-soi-durable/",                        file: "src/articles/ConfianceEnSoi.tsx" },
  { path: "/blog/neuro-dopamine-routine/",                          file: "src/articles/NeuroDopamineRoutine.tsx" },
  { path: "/blog/rumination-mentale-pensees-obsessionnelles/",      file: "src/articles/RuminationMentale.tsx" },
  { path: "/blog/attention-fragmentee-concentration-numerique/",    file: "src/articles/AttentionFragmenteeArticle.tsx" },
  { path: "/blog/procrastination-cerveau-agir-neurosciences/",      file: "src/articles/ProcrastinationCerveau.tsx" },
  { path: "/blog/methode-acr-repondre-aux-bonnes-nouvelles/",       file: "src/articles/MethodeAcrRepondreAuxBonnesNouvelles.tsx" },
  { path: "/blog/syndrome-imposteur-solutions/",                    file: "src/articles/SyndromeImposteur.tsx" },
  { path: "/blog/sommeil-reparateur-7-strategies-validees/",        file: "src/articles/SommeilReparateur.tsx" },
  { path: "/blog/lumiere-naturelle-cerveau-sommeil-sante-mentale/", file: "src/articles/LumiereNaturelle.tsx" },
  { path: "/blog/bdnf-augmenter-naturellement-neurosciences/",      file: "src/articles/BdnfAugmenterNaturellement.tsx" },
  { path: "/blog/systeme-limbique-cerveau-emotionnel/",             file: "src/articles/SystemeLimbique.tsx" },
  { path: "/blog/plasticite-synaptique-apprentissage-cerveau/",     file: "src/articles/PlasticiteSynaptique.tsx" },
  { path: "/blog/empathie-neurones-miroirs-connexion-humaine/",     file: "src/articles/EmpathieNeuronesMiroirs.tsx" },
  { path: "/blog/neurotransmetteurs-humeur-cerveau/",               file: "src/articles/NeurotransmetteurHumeur.tsx" },
  { path: "/blog/cortisol-stress-chronique-cerveau-memoire/",       file: "src/articles/CortisolStressChronique.tsx" },
  { path: "/blog/communication-non-violente-cnv/",                  file: "src/articles/CommunicationNonViolente.tsx" },
  { path: "/blog/ecoute-active-technique-carl-rogers/",             file: "src/articles/EcouteActive.tsx" },
  { path: "/blog/mindset-de-croissance-psychologie-dweck/",         file: "src/articles/MindsetDeCroissance.tsx" },
  { path: "/blog/routine-matinale-scientifique-cerveau/",           file: "src/articles/RoutineMatinaleScientifique.tsx" },
  { path: "/blog/regulation-emotionnelle-techniques-psychologie/",  file: "src/articles/RegulationEmotionnelle.tsx" },
  { path: "/blog/resoudre-un-conflit-methodes-psychologie/",         file: "src/articles/ResoudreUnConflit.tsx" },
  { path: "/blog/objectifs-smart-methode-neurosciences/",            file: "src/articles/ObjectifsSmart.tsx" },
  { path: "/blog/formation-habitudes-cerveau-neurosciences/",        file: "src/articles/FormationHabitudes.tsx" },
  { path: "/blog/concentration-profonde-deep-work-neurosciences/",   file: "src/articles/ConcentrationProfonde.tsx" },
  { path: "/blog/biais-cognitifs-liste-psychologie/",                file: "src/articles/BiaisCognitifs.tsx" },
  { path: "/blog/anxiete-mecanismes-neurologiques-solutions-scientifiques/", file: "src/articles/AnxieteMecanismes.tsx" },
  { path: "/blog/burn-out-signaux-neurobiologiques-recuperation/", file: "src/articles/BurnOut.tsx" },
  { path: "/blog/meditation-effets-cerveau/",                       file: "src/articles/MeditationEffetsCerveau.tsx" },
  { path: "/blog/axe-intestin-cerveau-microbiote-humeur/",          file: "src/articles/AxeIntestinCerveau.tsx" },
  { path: "/blog/resilience-psychologique-developper/",             file: "src/articles/ResiliencePsychologique.tsx" },
  { path: "/blog/intelligence-sociale-competences-relationnelles/", file: "src/articles/IntelligenceSociale.tsx" },
  { path: "/blog/influence-sociale-conformisme/",                   file: "src/articles/InfluenceSociale.tsx" },
  { path: "/blog/pensee-critique-developper/",                      file: "src/articles/PenseeCritique.tsx" },
];

const allUrls = [
  ...staticRoutes.map(({ path, lastmod }) => ({ path, lastmod, isArticle: false })),
  ...articles.map(({ path, file }) => ({ path, lastmod: getDateModified(file), isArticle: true })),
];

const urls = allUrls.map(({ path, lastmod, isArticle }) => `
  <url>
    <loc>${base}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${isArticle ? "monthly" : "weekly"}</changefreq>
    <priority>${path === "/" ? "1.0" : isArticle ? "0.8" : "0.6"}</priority>
  </url>`).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log("sitemap.xml mis à jour");
