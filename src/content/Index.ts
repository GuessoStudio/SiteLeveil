// src/content/index.ts
import NeuroDopamineRoutine from "../articles/NeuroDopamineRoutine";

export const articlesBySlug: Record<string, React.FC> = {
  "neuro-dopamine-routine": NeuroDopamineRoutine,
  // "autre-slug": AutreArticle,
};
