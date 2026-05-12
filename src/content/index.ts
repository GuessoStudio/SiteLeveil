// src/content/index.ts
import React, { type FC } from "react";

// ⚠️ RÈGLE ABSOLUE — NE PAS MODIFIER CE PATTERN
// Tous les articles DOIVENT être importés via React.lazy()
// Un import statique ici fait regonfler le bundle de +800kB sans warning
// Pattern obligatoire :
// const MonArticle = React.lazy(() => import('../articles/MonArticle'))

// Dynamic imports — chaque article devient un chunk séparé chargé à la demande.
// Gain bundle : chunk index 1,6 MB → ~200-300 kB.
const NeuroDopamineRoutine = React.lazy(() => import("../articles/NeuroDopamineRoutine"));
const RejetSocial = React.lazy(() => import("../pages/Blog/RejetSocial"));
const ConfianceEnSoi = React.lazy(() => import("../articles/ConfianceEnSoi"));
const NeuroplasticiteCerveau = React.lazy(() => import("../articles/NeuroplasticiteCerveau"));
const AttentionFragmenteeArticle = React.lazy(() => import("../articles/AttentionFragmenteeArticle"));
const RuminationMentale = React.lazy(() => import("../articles/RuminationMentale"));
const ProcrastinationCerveau = React.lazy(() => import("../articles/ProcrastinationCerveau"));
const MethodeAcrRepondreAuxBonnesNouvelles = React.lazy(() => import("../articles/MethodeAcrRepondreAuxBonnesNouvelles"));
const SyndromeImposteur = React.lazy(() => import("../articles/SyndromeImposteur"));
const SommeilReparateur = React.lazy(() => import("../articles/SommeilReparateur"));
const LumiereNaturelle = React.lazy(() => import("../articles/LumiereNaturelle"));
const BdnfAugmenterNaturellement = React.lazy(() => import("../articles/BdnfAugmenterNaturellement"));
const SystemeLimbique = React.lazy(() => import("../articles/SystemeLimbique"));
const PlasticiteSynaptique = React.lazy(() => import("../articles/PlasticiteSynaptique"));
const EmpathieNeuronesMiroirs = React.lazy(() => import("../articles/EmpathieNeuronesMiroirs"));
const NeurotransmetteurHumeur = React.lazy(() => import("../articles/NeurotransmetteurHumeur"));
const CortisolStressChronique = React.lazy(() => import("../articles/CortisolStressChronique"));
const CommunicationNonViolente = React.lazy(() => import("../articles/CommunicationNonViolente"));
const EcouteActive = React.lazy(() => import("../articles/EcouteActive"));

// Mappe chaque slug vers le composant de l'article correspondant.
// ➜ le slug ici DOIT être identique à meta.slug dans chaque fichier d'article.
export const articlesBySlug: Record<string, FC> = {
  "neuro-dopamine-routine": NeuroDopamineRoutine,
  "surmonter-rejet-social": RejetSocial,
  "confiance-en-soi-durable": ConfianceEnSoi,
  "neuroplasticite-cerveau": NeuroplasticiteCerveau,
  "attention-fragmentee-concentration-numerique": AttentionFragmenteeArticle,
  "rumination-mentale-pensees-obsessionnelles": RuminationMentale,
  "procrastination-cerveau-agir-neurosciences": ProcrastinationCerveau,
  "methode-acr-repondre-aux-bonnes-nouvelles": MethodeAcrRepondreAuxBonnesNouvelles,
  "syndrome-imposteur-solutions": SyndromeImposteur,
  "sommeil-reparateur-7-strategies-validees": SommeilReparateur,
  "lumiere-naturelle-cerveau-sommeil-sante-mentale": LumiereNaturelle,
  "bdnf-augmenter-naturellement-neurosciences": BdnfAugmenterNaturellement,
  "systeme-limbique-cerveau-emotionnel": SystemeLimbique,
  "plasticite-synaptique-apprentissage-cerveau": PlasticiteSynaptique,
  "empathie-neurones-miroirs-connexion-humaine": EmpathieNeuronesMiroirs,
  "neurotransmetteurs-humeur-cerveau": NeurotransmetteurHumeur,
  "cortisol-stress-chronique-cerveau-memoire": CortisolStressChronique,
  "communication-non-violente-cnv": CommunicationNonViolente,
  "ecoute-active-technique-carl-rogers": EcouteActive,
};
