// src/content/index.ts
import type { FC } from "react";

// ⚠️ Les chemins et les noms doivent correspondre EXACTEMENT aux fichiers
import NeuroDopamineRoutine from "../articles/NeuroDopamineRoutine";
import RejetSocial from "../pages/Blog/RejetSocial";
import ConfianceEnSoi from "../articles/ConfianceEnSoi";
import NeuroplasticiteCerveau from "../articles/NeuroplasticiteCerveau";
import AttentionFragmenteeArticle from "../articles/AttentionFragmenteeArticle";
import RuminationMentale from "../articles/RuminationMentale";
import ProcrastinationCerveau from "../articles/ProcrastinationCerveau";
import MethodeAcrRepondreAuxBonnesNouvelles from "../articles/MethodeAcrRepondreAuxBonnesNouvelles";
import SyndromeImposteur from "../articles/SyndromeImposteur";
import SommeilReparateur from "../articles/SommeilReparateur";
import LumiereNaturelle from "../articles/LumiereNaturelle";
import BdnfAugmenterNaturellement from "../articles/BdnfAugmenterNaturellement";
import SystemeLimbique from "../articles/SystemeLimbique";
import PlasticiteSynaptique from "../articles/PlasticiteSynaptique";
import EmpathieNeuronesMiroirs from "../articles/EmpathieNeuronesMiroirs";
import NeurotransmetteurHumeur from "../articles/NeurotransmetteurHumeur";
import CortisolStressChronique from "../articles/CortisolStressChronique";

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
};
