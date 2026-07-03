// src/content/index.ts
import { lazy, type ComponentType, type LazyExoticComponent } from "react";

// ⚠️ Les chemins et les noms doivent correspondre EXACTEMENT aux fichiers.
//
// Code-splitting : chaque article est chargé en import dynamique (React.lazy).
// Sans ça, les 21 articles étaient bundlés dans le chunk app-*.js (~1,67 Mo)
// chargé sur TOUTES les pages (home comprise). Désormais chaque article a son
// propre chunk, chargé uniquement quand on visite /blog/<slug>.
//
// Le pré-rendu SSG reste complet : vite-react-ssg rend via renderToPipeableStream
// + onAllReady, qui attend la résolution de toutes les frontières Suspense avant
// d'émettre le HTML. Le HTML pré-rendu contient donc l'article entier (SEO intact).
export const articlesBySlug: Record<string, LazyExoticComponent<ComponentType>> = {
  "neuro-dopamine-routine": lazy(() => import("../articles/NeuroDopamineRoutine")),
  "surmonter-rejet-social": lazy(() => import("../pages/Blog/RejetSocial")),
  "confiance-en-soi-durable": lazy(() => import("../articles/ConfianceEnSoi")),
  "neuroplasticite-cerveau": lazy(() => import("../articles/NeuroplasticiteCerveau")),
  "attention-fragmentee-concentration-numerique": lazy(() => import("../articles/AttentionFragmenteeArticle")),
  "rumination-mentale-pensees-obsessionnelles": lazy(() => import("../articles/RuminationMentale")),
  "procrastination-cerveau-agir-neurosciences": lazy(() => import("../articles/ProcrastinationCerveau")),
  "methode-acr-repondre-aux-bonnes-nouvelles": lazy(() => import("../articles/MethodeAcrRepondreAuxBonnesNouvelles")),
  "syndrome-imposteur-solutions": lazy(() => import("../articles/SyndromeImposteur")),
  "sommeil-reparateur-7-strategies-validees": lazy(() => import("../articles/SommeilReparateur")),
  "lumiere-naturelle-cerveau-sommeil-sante-mentale": lazy(() => import("../articles/LumiereNaturelle")),
  "bdnf-augmenter-naturellement-neurosciences": lazy(() => import("../articles/BdnfAugmenterNaturellement")),
  "systeme-limbique-cerveau-emotionnel": lazy(() => import("../articles/SystemeLimbique")),
  "plasticite-synaptique-apprentissage-cerveau": lazy(() => import("../articles/PlasticiteSynaptique")),
  "empathie-neurones-miroirs-connexion-humaine": lazy(() => import("../articles/EmpathieNeuronesMiroirs")),
  "neurotransmetteurs-humeur-cerveau": lazy(() => import("../articles/NeurotransmetteurHumeur")),
  "cortisol-stress-chronique-cerveau-memoire": lazy(() => import("../articles/CortisolStressChronique")),
  "communication-non-violente-cnv": lazy(() => import("../articles/CommunicationNonViolente")),
  "ecoute-active-technique-carl-rogers": lazy(() => import("../articles/EcouteActive")),
  "mindset-de-croissance-psychologie-dweck": lazy(() => import("../articles/MindsetDeCroissance")),
  "routine-matinale-scientifique-cerveau": lazy(() => import("../articles/RoutineMatinaleScientifique")),
  "regulation-emotionnelle-techniques-psychologie": lazy(() => import("../articles/RegulationEmotionnelle")),
  "resoudre-un-conflit-methodes-psychologie": lazy(() => import("../articles/ResoudreUnConflit")),
  "objectifs-smart-methode-neurosciences": lazy(() => import("../articles/ObjectifsSmart")),
  "formation-habitudes-cerveau-neurosciences": lazy(() => import("../articles/FormationHabitudes")),
  "concentration-profonde-deep-work-neurosciences": lazy(() => import("../articles/ConcentrationProfonde")),
  "biais-cognitifs-liste-psychologie": lazy(() => import("../articles/BiaisCognitifs")),
  "anxiete-mecanismes-neurologiques-solutions-scientifiques": lazy(() => import("../articles/AnxieteMecanismes")),
  "burn-out-signaux-neurobiologiques-recuperation": lazy(() => import("../articles/BurnOut")),
  "meditation-effets-cerveau": lazy(() => import("../articles/MeditationEffetsCerveau")),
};
