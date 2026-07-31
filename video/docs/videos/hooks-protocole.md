# Protocole hooks — typologie et test en rotation

> ⚠️ **Document de travail, pas un référentiel figé.** Écrit le 2026-07-29
> à la demande de l'utilisateur (« avec des pincettes, pas un truc
> immuable »). Tout ce qui suit est une **hypothèse en cours de test**,
> fondée sur des données trop minces pour être considérée comme acquise.
> À réviser dès que les données contredisent — voir §5 « Ce qui
> invaliderait tout ça ».

---

## 1. L'hypothèse centrale : la boucle ouverte

### Ce qu'on observe

Une seule paire du catalogue constitue un vrai A/B : même sujet, même
chercheur, même durée, seul le hook change.

| Vidéo | Hook | Rétention YT |
|---|---|---:|
| `procrastination` | « Tu ne procrastines pas par paresse. **Tu fuis une émotion.** » | 8,5 % |
| `procrastination-2` | « Tu repousses encore à demain. Et encore. Ce n'est pas de la paresse. » | **58,8 %** |

Les deux sont des hooks « contrarian ». La différence proposée :
l'original **referme la boucle** (négation + réponse données ensemble, il
ne reste rien à découvrir), la V2 la **laisse ouverte** (pas la paresse →
alors quoi ?).

Un cas corrobore : `effet-projecteur` (44,6 %) — « Personne ne te regarde
autant que tu le crois » affirme sans donner le pourquoi. Boucle ouverte.

### 🔴 Pourquoi il faut s'en méfier

- **n = 1 paire propre.** Un seul A/B contrôlé ne suffit pas à établir une
  règle. Le ×7 est spectaculaire, ce qui invite justement à la prudence :
  un effet aussi gros sur un seul point de données peut cacher autre chose
  (moment de publication, hasard algorithmique, différence de voix off).
- **Les deux vidéos sont séparées de 7 jours.** L'audience et l'algorithme
  ont pu changer entre les deux.
- **Le corroborant est faible** : `effet-projecteur` n'a pas de version
  jumelle à boucle fermée pour comparer.
- **Contre-exemples possibles non explorés** : plusieurs vidéos à boucle
  ouverte font des scores moyens (`rejet-social-2` 30,8 %). L'ouverture de
  boucle n'est donc au mieux qu'un facteur parmi d'autres.

**Statut : hypothèse plausible, pas établie.**

---

## 2. La typologie de référence (source externe)

[OpusClip](https://www.opus.pro/blog/tiktok-hooks-that-go-viral-2026) —
analyse de 34 635 clips, 12 types : Curiosity Gap, Contrarian, Identity
Call, Result First, Mid-Action, Number/Stat, Confession, Question,
Controversy, Storytelling, Shock Value, Social Proof.

Pour l'éducatif/science, le hook « fait surprenant » rendrait le
spectateur [2,5× plus susceptible de s'arrêter](https://topmostads.com/2025/09/11/tiktok-hook-formulas-educational-content-2025/).

### 🔴 Réserve sur ces sources

Ce sont des **contenus marketing d'éditeurs d'outils** (OpusClip vend un
outil de clipping), pas des publications évaluées par les pairs. Les
chiffres cités ne sont ni reproductibles ni auditables depuis l'extérieur.
À traiter comme une **grille de vocabulaire utile**, pas comme une preuve.
La seule donnée fiable ici reste celle du compte.

---

## 3. Les 5 familles mises en rotation

| # | Famille | Testée | Meilleur score | Fiabilité |
|---|---|---|---|---|
| 1 | Contrarian à boucle ouverte | ×4 | 58,8 % (`procrastination-2`) | faible (n=4, sujets différents) |
| 2 | Chiffre / Stat | ×2 | 45 % (`intestin-cerveau-2`) — mais 269 vues sur `dopamine-2` | très faible, résultats contradictoires |
| 3 | Question / Quiz | ×2 | 45,4 % (`pensee-critique-2`) | très faible |
| 4 | Scène concrète (storytelling) | ×1 | 30,8 % YT, meilleur engagement TikTok | anecdotique |
| 5 | Identity Call (« si tu fais X, c'est pour toi ») | **0** | — | jamais testé |

Règle appliquée aux 5 (issue de l'hypothèse §1, donc **provisoire**) : le
hook pose le problème, jamais la réponse.

---

## 4. Protocole de test

**Principe** : une famille par vidéo, notée dans la fiche. Après ~20
vidéos (4 par famille), comparer les **médianes** de rétention YouTube.

**Pourquoi pas d'A/B strict** : refaire des paires original/V2 sur le même
sujet donnerait des données plus propres, mais crée des quasi-doublons —
or la coupure des recommandations Facebook du 24/07 est survenue
précisément pendant une série de versions #2 (`mesure-14-jours.md` §8.7).
Le risque de démotion pour contenu répétitif n'en vaut pas la chandelle.

**Conséquence assumée** : la rotation ne contrôle pas le sujet. Un score
élevé pourra toujours venir du thème plutôt que du hook. **On accepte du
bruit en échange de l'absence de doublons.** Ne pas conclure trop vite.

**Seuil de décision indicatif** : ne rien conclure avant 4 vidéos par
famille. Et même là, un écart de moins de 10 points de rétention entre
deux familles ne devrait pas être considéré comme significatif vu la
variance observée (30 % à 59 % sur des vidéos comparables).

### Journal de rotation

Une ligne par vidéo post-labo. **Aucune moyenne de famille tant qu'une
colonne n'atteint pas 4 lignes.**

| # | Publié | Vidéo | Famille | Rét. YT | Rét. TT | TT 0:01 | IG view rate |
|---:|---|---|---|---:|---:|---:|---:|
| 1 | 30/07 | attention-fragmentee | **Identity Call** | 40,7 % | 34,9 % | 73 % | 44,9 % ⚠️ |
| 2 | — | — | *(à venir)* | | | | |

⚠️ *`attention-fragmentee` : l'horaire Instagram a changé (12:00 vs 18:30)
sur la même vidéo. La colonne IG view rate n'est pas exploitable pour
juger la famille de hook.*

Décompte par famille : Identity Call 1/4 · Boucle ouverte 0/4 ·
Contradiction 0/4 · Scène concrète 0/4 · Chiffre choc 0/4.

---

## 5. Ce qui invaliderait tout ça

À surveiller activement — si l'un de ces cas se produit, réviser le
document plutôt que de défendre l'hypothèse :

- Une vidéo à **boucle fermée** qui dépasse 45 % de rétention → l'hypothèse
  §1 tombe.
- Deux vidéos de la **même famille** avec des scores très éloignés (par ex.
  25 % et 55 %) → la famille n'est pas la variable qui compte.
- Une corrélation plus forte avec **le sujet** qu'avec la famille de hook
  (ex. tout ce qui touche au microbiote ou aux biais performe, quel que
  soit le hook) → arrêter d'optimiser le hook, optimiser le choix de sujet.
- Un changement d'algorithme sur YouTube qui décorrèle rétention et
  distribution.

---

## 6. Point de friction non résolu

Une donnée externe contredit partiellement le test labo #2 (« couper sous
30 s double la rétention ») : [40 s à 60 % de rétention surperformerait
20 s à 70 %](https://www.opus.pro/blog/tiktok-length-format-retention-data),
le temps de visionnage total comptant davantage que le pourcentage.

Les deux peuvent coexister — le labo mesurait un **pourcentage**, cette
source parle de **volume total**. Mais ça invite à ne pas descendre sous
~28 s (règle des 90 mots) et à ne pas traiter « toujours plus court »
comme un objectif.

**Non tranché.** À réexaminer quand plusieurs vidéos courtes et longues
auront des relevés à +7 j.

---

## 7. Limite générale de toutes les données citées ici

Tous les verdicts du labo reposent sur des relevés à **+18-20 h**. Les
relevés +72 h et +7 j n'ont jamais été faits. Les scores peuvent évoluer,
en particulier sur YouTube où la distribution Shorts s'étale. **Toute
conclusion tirée ici est provisoire par construction.**
