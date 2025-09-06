// src/content/index.ts
import type { FC } from "react";

// ⚠️ Les chemins et les noms doivent correspondre EXACTEMENT aux fichiers
import NeuroDopamineRoutine from "../articles/NeuroDopamineRoutine";
import RejetSocial from "../articles/RejetSocial";
import ConfianceEnSoi from "../articles/ConfianceEnSoi";
import NeuroplasticiteCerveau from "../articles/NeuroplasticiteCerveau";
import AttentionFragmenteeArticle from '../articles/AttentionFragmenteeArticle';
import RuminationMentale from "../articles/RuminationMentale";
import ProcrastinationCerveau from "../articles/ProcrastinationCerveau";
import MethodeAcrRepondreAuxBonnesNouvelles from "../articles/MethodeAcrRepondreAuxBonnesNouvelles";
import SyndromeImposteur from "../articles/SyndromeImposteur";
import SommeilReparateur from "../articles/SommeilReparateur";

// Mappe chaque slug vers le composant de l’article correspondant.
// ➜ le slug ici DOIT être identique à meta.slug dans chaque fichier d’article.
export const articlesBySlug: Record<string, FC> = {
  "neuro-dopamine-routine": NeuroDopamineRoutine,
  "surmonter-rejet-social": RejetSocial,
  "confiance-en-soi-durable": ConfianceEnSoi,
  "neuroplasticite-cerveau": NeuroplasticiteCerveau,
  'attention-fragmentee-concentration-numerique': AttentionFragmenteeArticle,
  "rumination-mentale-pensees-obsessionnelles": RuminationMentale,
  "procrastination-cerveau-agir-neurosciences": ProcrastinationCerveau,
  "methode-acr-repondre-aux-bonnes-nouvelles": MethodeAcrRepondreAuxBonnesNouvelles,
  "syndrome-imposteur-solutions": SyndromeImposteur,
  "sommeil-reparateur-7-strategies-validees": SommeilReparateur,
};

