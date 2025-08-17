// src/content/index.ts
import type { FC } from "react";

// ⚠️ Les chemins et les noms doivent correspondre EXACTEMENT aux fichiers
import NeuroDopamineRoutine from "../articles/NeuroDopamineRoutine";
import RejetSocial from "../articles/RejetSocial";

// Mappe chaque slug vers le composant de l’article correspondant.
// ➜ le slug ici DOIT être identique à meta.slug dans chaque fichier d’article.
export const articlesBySlug: Record<string, FC> = {
  "neuro-dopamine-routine": NeuroDopamineRoutine,
  "surmonter-rejet-social": RejetSocial,
};
