// Repères de mise en page partagés — en % de la hauteur du cadre (1080x1920).
// SOURCE DE VÉRITÉ unique : perso, sol, flaque et reflet lisent ces valeurs, donc
// ils bougent ensemble. La bande caption-safe est réservée au karaoké CapCut :
// aucun élément du moteur (perso, mot-clé, FX, icône) ne doit s'y poser.
//
// Layout vertical visé :
//   ~9–25%  : mot-clé géant (la « claque »)
//   ~38–63% : Le Petit Éveillé + sol à 60%
//   64–77%  : BANDE CAPTION-SAFE (karaoké CapCut)
//   ~82–100%: UI TikTok (pseudo, légende, boutons) — hors-jeu
export const LAYOUT = {
  characterTopPct: 38, // bord haut de la SVG perso (avant : 50.6)
  characterHeightPct: 25, // hauteur perso (avant : 30 — réduit pour libérer la bande)
  floorTopPct: 60, // ligne de sol + flaque ; calé pour garder les pieds au sol (avant : 76.5)
  captionSafe: { topPct: 64, bottomPct: 77 },
};
