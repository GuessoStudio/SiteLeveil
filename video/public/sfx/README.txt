SFX — Le Petit Éveillé
======================

Dépose ici tes bruitages (mp3 courts, ~0,3 à 2 s). Puis ouvre
src/data/sfxRegistry.ts et remplace le `null` du son correspondant par son
chemin (ex: impact_heavy: "sfx/impact-heavy.mp3").

Tant qu'un son vaut `null`, il est ignoré : le rendu marche sans aucun fichier.
Tu peux donc les activer un par un.

LISTE À RÉCUPÉRER (freesound.org, Pixabay, Uppbeat — libres de droits)
----------------------------------------------------------------------
impact_heavy   : impact sourd / sub-bass hit (≈0,5 s) — déclic, coup de poing
                 → zoom_smash, blackout, adrénaline
whoosh_clean   : whoosh net et rapide (≈0,4 s)
                 → flash_reverse (ouverture de plan)
whoosh_soft    : whoosh doux/feutré (≈0,5 s)
                 → color_shift (changement de sujet)
glitch         : grésillement court type TV cassée (≈0,3 s)
                 → static_noise (mythe / erreur)
sub_pulse      : battement de coeur grave, BOUCLABLE (≈1 s)
                 → cortisol (stress), empathie
spark_trigger  : étincelle / connexion électrique (≈0,4 s)
                 → synapses, neuroplasticité, eurêka (gamma)
space_suction  : aspiration spatiale montante (≈1 s)
                 → flow_state
shimmer        : scintillement cristallin léger (≈0,6 s)
                 → dopamine
dark_drone     : nappe grave continue, BOUCLABLE (≈4-8 s)
                 → ambiance globale (champ "ambience": "dark_drone" en tête de JSON)

CONSEILS
--------
- Mono ou stéréo, 44,1 kHz, mp3 128 kbps suffit.
- Garde les one-shots TRÈS courts (l'attaque est ce qui compte).
- sub_pulse et dark_drone doivent boucler proprement (pas de silence au bout).
- Les volumes se règlent dans SFX_VOLUME (src/data/sfxRegistry.ts).
