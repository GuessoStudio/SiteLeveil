// ============================================================================
// Générateur de poses du Petit Éveillé — SILHOUETTE UNIFIÉE
// ----------------------------------------------------------------------------
// Le corps est obtenu par FUSION booléenne (union) de primitives :
//   tête (cercle) + torse (rect arrondi) + 2 jambes + 2 bras (capsules).
// La fusion efface tous les traits internes (cou, épaules, aisselles, hanches)
// => une seule silhouette propre par pose, jamais de contours superposés.
//
// Une pose = deux angles de bras [gauche, droite] (en degrés, 0 = horizontal
// vers l'intérieur, 90 = le long du corps, 270 = vers le haut).
//
// Usage :
//   npm i polygon-clipping            (dépendance DEV uniquement, hors site)
//   node tools/petit-eveille/generate-poses.mjs > pose-paths.json
//
// Les tracés produits sont injectés dans public/petit-eveille-poses.html
// (objet POSE_PATHS). Pour ajouter une pose : ajouter une entrée dans POSES,
// régénérer, puis recopier le tracé dans POSE_PATHS.
// ============================================================================
import polygonClipping from "polygon-clipping";

const TAU = Math.PI * 2;

// ---- primitives -> anneaux de points [[x,y], ...] ----
function circle(cx, cy, r, n = 72) {
  const p = [];
  for (let i = 0; i < n; i++) { const a = (i / n) * TAU; p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  return [p];
}
function roundRect(x, y, w, h, r, n = 12) {
  const p = [];
  const corners = [
    [x + w - r, y + r, -Math.PI / 2, 0],
    [x + w - r, y + h - r, 0, Math.PI / 2],
    [x + r, y + h - r, Math.PI / 2, Math.PI],
    [x + r, y + r, Math.PI, Math.PI * 1.5],
  ];
  for (const [cx, cy, a0, a1] of corners)
    for (let i = 0; i <= n; i++) { const a = a0 + (a1 - a0) * i / n; p.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  return [p];
}
// capsule (stade) : du pivot A, angle deg, longueur len, largeur w
function capsule(A, deg, len, w, n = 22) {
  const a = (deg * Math.PI) / 180, dx = Math.cos(a), dy = Math.sin(a), r = w / 2;
  const B = [A[0] + dx * len, A[1] + dy * len];
  const px = -dy, py = dx;
  const p = [];
  const aA = Math.atan2(py, px);
  for (let i = 0; i <= n; i++) { const t = aA + Math.PI * (i / n); p.push([A[0] + r * Math.cos(t), A[1] + r * Math.sin(t)]); }
  const aB = Math.atan2(-py, -px);
  for (let i = 0; i <= n; i++) { const t = aB + Math.PI * (i / n); p.push([B[0] + r * Math.cos(t), B[1] + r * Math.sin(t)]); }
  return [p];
}

const ringToPath = (ring) => "M" + ring.map((pt) => pt[0].toFixed(1) + " " + pt[1].toFixed(1)).join(" L") + " Z";
const ringArea = (r) => { let a = 0; for (let i = 0; i < r.length; i++) { const j = (i + 1) % r.length; a += r[i][0] * r[j][1] - r[j][0] * r[i][1]; } return a / 2; };

// ---- proportions du corps (viewBox 0 0 400 720) ----
const BODY = {
  head: [200, 141, 95],
  trunk: [136, 230, 128, 216, 40],
  legPivotL: [170, 438], legPivotR: [230, 438], legLen: 150, legW: 50,
  armPivotL: [150, 250],
  armPivotR: [250, 250],
  armLen: 150,
  armW: 46,
};

// ---- poses : [bras G, bras D, jambe G?, jambe D?] (angles en degrés) ----
//   bras/jambe : 90 = le long du corps (vertical), <90 = avance, >90 = recule.
//   Les jambes restent à 90 par défaut ; walkA/walkB les écartent pour la foulée.
const POSES = {
  idle:  [100, 80],
  point: [100, 35],
  open:  [120, 60],
  think: [100, 242],
  shrug: [236, 304],
  cross: [22, 158],
  wave:  [100, 300],
  lean:  [100, 80], // + inclinaison du corps (gérée par transform dans le HTML)
  // marche : cycle en 2 images = deux appuis en Λ, en miroir. L'appui (la jambe
  // la plus écartée) passe de gauche à droite -> le poids bascule, ça se lit
  // comme un pas. Bras en légère opposition. Renforcé par le balancement
  // vertical + le glissement au sol gérés dans la scène.
  walkA: [88, 100, 104, 86],  // appui jambe gauche (pied gauche écarté)
  walkB: [100, 88, 94, 76],   // appui jambe droite (miroir)
};

function silhouette(la, ra, ll = 90, rl = 90) {
  const parts = [
    circle(...BODY.head),
    roundRect(...BODY.trunk),
    capsule(BODY.legPivotL, ll, BODY.legLen, BODY.legW),
    capsule(BODY.legPivotR, rl, BODY.legLen, BODY.legW),
    capsule(BODY.armPivotL, la, BODY.armLen, BODY.armW),
    capsule(BODY.armPivotR, ra, BODY.armLen, BODY.armW),
  ];
  const u = polygonClipping.union(...parts.map((p) => [p[0]]));
  const out = [];
  for (const poly of u) {
    if (Math.abs(ringArea(poly[0])) < 200) continue;            // jette les miettes
    out.push(ringToPath(poly[0]));                               // contour externe
    for (let k = 1; k < poly.length; k++)                        // garde seulement les gros trous
      if (Math.abs(ringArea(poly[k])) > 500) out.push(ringToPath(poly[k]));
  }
  return out.join(" ");
}

const paths = {};
for (const [name, a] of Object.entries(POSES)) paths[name] = silhouette(a[0], a[1], a[2], a[3]);
process.stdout.write(JSON.stringify(paths, null, 0));
