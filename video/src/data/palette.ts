// Palette d'accent par pilier éditorial. Le champ "accent" du JSON peut être
// soit un hex (#RRGGBB), soit une clé de cette table (ex: "dopamine").
// Une couleur d'accent par vidéo = signature visuelle cohérente.
export const ACCENTS: Record<string, string> = {
  neuro: "#6c7bff",      // neurosciences — bleu
  dopamine: "#FF8A3D",   // récompense, motivation — orange vif
  stress: "#FF4444",     // cortisol, anxiété — rouge
  sommeil: "#4ECDC4",    // sommeil, repos — cyan
  eveil: "#9b7cff",      // éveil, synthèse — violet
  emotions: "#ff6b9d",   // émotions — rose
  social: "#5BC0EB",     // psychologie sociale — bleu clair
  growth: "#A3E635",     // développement perso — vert lime
};

// Résout un accent : hex direct ou clé de palette. Repli sur le violet éveil.
export const resolveAccent = (accent: string): string =>
  accent?.startsWith("#") ? accent : ACCENTS[accent] ?? ACCENTS.eveil;
