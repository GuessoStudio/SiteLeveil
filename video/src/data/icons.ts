// Jeu d'icônes line-art (style Lucide/Tabler) pour le moteur IconPop.
// Trait blanc fin uniquement (pas de remplissage), viewBox 24x24 — même langage
// visuel minimaliste que le perso. Couvre les 4 piliers éditoriaux.
// Chaque valeur est le contenu interne d'un <svg> (paths/cercles/lignes).

export const ICON_VIEWBOX = "0 0 24 24";

export const ICONS: Record<string, string> = {
  // — Neurosciences —
  brain:
    '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 4 3 3 0 0 0 2 4 3 3 0 0 0 3 3"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 4 3 3 0 0 1-2 4 3 3 0 0 1-3 3"/><path d="M12 4v16"/>',
  bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/>',
  spiral:
    '<path d="M12 12a1 1 0 0 1 1 1 2 2 0 0 1-2 2 3 3 0 0 1-3-3 4 4 0 0 1 4-4 5 5 0 0 1 5 5 6 6 0 0 1-6 6"/>',

  // — Psychologie —
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  lightbulb:
    '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10c1 1 1.2 1.8 1.2 3h5.6c0-1.2.2-2 1.2-3a6 6 0 0 0-4-10z"/>',

  // — Relations / psychologie sociale —
  heart:
    '<path d="M12 21C12 21 4 13.7 4 8.6 4 5.6 6.4 4 8.8 5.4 10.2 6.2 12 8 12 8s1.8-1.8 3.2-2.6C17.6 4 20 5.6 20 8.6 20 13.7 12 21 12 21z"/>',
  users:
    '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"/><path d="M16 5.2A3 3 0 0 1 16 13"/><path d="M18 14.5c2 .6 3 2 3 5"/>',
  link: '<path d="M9 15a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1"/><path d="M15 9a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1"/>',

  // — Développement personnel —
  flame:
    '<path d="M12 3c.5 3 3 4.5 3 8a3 3 0 0 1-6 0c0-1 .4-1.8 1-2.5C10.2 10 11 11 11 12c.6 0 1-.6 1-1.4 0-1.8-1-3-0-7.6z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 4 13C4 7 9 4 20 4 20 12 16 20 11 20z"/><path d="M5 20C9 16 13 12 18 9"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
};
