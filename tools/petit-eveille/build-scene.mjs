// ============================================================================
// Build de la SCÈNE (Phase 2) — public/petit-eveille-scene.html
// ----------------------------------------------------------------------------
// Réutilise le personnage validé (CSS émotions/poses + tracés des silhouettes +
// spirales) depuis public/petit-eveille-poses.html, et l'installe sur un décor
// TikTok 9:16 : fond violet nuit, sol lumineux + halo au sol, reflet, particules,
// vignette, teinte réactive au mode, emplacements titre + sous-titre.
//
// Source de vérité = petit-eveille-poses.html (le « labo »). Ce script ne fait
// que l'habiller. Régénérer après toute évolution du personnage :
//   node tools/petit-eveille/build-scene.mjs
// ============================================================================
import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const poses = readFileSync(resolve(root, "public/petit-eveille-poses.html"), "utf8");

// --- extraits du personnage ---
const charCSS = poses.slice(
  poses.indexOf("  /* ---------- Pivots d'animation"),
  poses.indexOf("  /* ============================== UI")
).trim();
const pathsJson = poses.match(/var POSE_PATHS = (\{[\s\S]*?\});/)[1];
const P  = JSON.parse(pathsJson);
const hs = poses.match(/id="head-spiral" d="([^"]+)"/)[1];
const ts = poses.match(/id="torso-spiral" d="([^"]+)"/)[1];

const charSVG = `<svg id="petit-eveille" class="mode-eveil emo-calme" viewBox="0 0 400 720" role="img" aria-label="Le Petit Éveillé">
      <defs>
        <radialGradient id="halo"><stop offset="0" stop-color="#FFFFFF" stop-opacity="0.6"/><stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.25"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>
        <clipPath id="clip-head-spiral"><circle cx="200" cy="141" r="84"/></clipPath>
        <clipPath id="clip-torso-spiral"><rect x="133" y="240" width="134" height="185" rx="40"/></clipPath>
      </defs>
      <g id="character"><g id="body">
        <path id="silhouette" d="${P.idle}" fill="#0D0B1E" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <g id="torso-spiral-clip" clip-path="url(#clip-torso-spiral)"><path id="torso-spiral" d="${ts}" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/></g>
        <g id="torso-core"><circle id="torso-glow" cx="200" cy="328" r="20" fill="url(#halo)"/><circle id="torso-dot" cx="200" cy="328" r="8" fill="#FFFFFF"/></g>
        <g id="bubbles-torso"></g>
        <g id="head-spiral-clip" clip-path="url(#clip-head-spiral)"><path id="head-spiral" d="${hs}" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/></g>
        <g id="head-core"><circle id="head-glow" cx="200" cy="141" r="24" fill="url(#halo)"/><circle id="head-dot" cx="200" cy="141" r="8" fill="#FFFFFF"/></g>
        <g id="bubbles-head"></g>
      </g></g>
    </svg>`;
const reflSVG = `<svg class="reflection" viewBox="0 0 400 720" aria-hidden="true"><path id="refl-silhouette" d="${P.idle}" fill="var(--tint)" stroke="none"/></svg>`;

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex">
<title>Le Petit Éveillé — Phase 2 : la scène (TikTok 9:16)</title>
<!--
  PHASE 2 — LA SCÈNE. Décor vertical 9:16 pour TikTok. Généré par
  tools/petit-eveille/build-scene.mjs à partir de petit-eveille-poses.html.
-->
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  html,body { background:#07050f; min-height:100vh; color:#A8A3C7; font-family:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
  body { display:flex; flex-direction:column; align-items:center; gap:18px; padding:24px 16px 56px; }

  .frame {
    position:relative; width:min(92vw, calc(84vh * 9 / 16)); aspect-ratio:9/16;
    margin:0 auto; border-radius:20px; overflow:hidden; isolation:isolate;
    --tint:#9b7cff;
    background:linear-gradient(180deg,#140d36 0%, #1b1248 52%, #0a0720 100%);
  }
  .frame.mode-neuro    { --tint:#6c7bff; }
  .frame.mode-emotions { --tint:#ff6b9d; }
  .frame.mode-eveil    { --tint:#9b7cff; }

  .layer { position:absolute; inset:0; pointer-events:none; }
  .glow-bg { background:radial-gradient(ellipse 60% 42% at 50% 40%, var(--tint), transparent 62%); opacity:.30; transition:opacity .6s, background .6s; }

  .floor { position:absolute; left:-12%; right:-12%; top:76.5%; height:0;
    border-top:2px solid var(--tint); opacity:.55;
    box-shadow:0 0 26px 7px var(--tint); transition:border-color .6s, box-shadow .6s; }
  .pool { position:absolute; left:50%; top:76.5%; width:64%; height:11%;
    transform:translate(-50%,-46%);
    background:radial-gradient(ellipse at center, var(--tint), transparent 68%);
    filter:blur(7px); opacity:.55; transition:background .6s; }

  .reflection { position:absolute; left:50%; top:76.5%; height:57%; width:auto;
    transform:translateX(-50%) scaleY(-1); transform-origin:top center;
    opacity:.16; filter:blur(3px);
    -webkit-mask-image:linear-gradient(to bottom, transparent 0%, #000 55%);
            mask-image:linear-gradient(to bottom, transparent 0%, #000 55%); }

  #petit-eveille { position:absolute; left:50%; top:29.5%; height:57%; width:auto; transform:translateX(-50%); display:block; overflow:visible; }

  .title { position:absolute; top:6%; left:0; right:0; text-align:center; padding:0 7%;
    color:#fff; font-weight:800; font-size:clamp(20px,5.4vw,34px); line-height:1.05;
    letter-spacing:.03em; text-transform:uppercase; text-shadow:0 2px 20px rgba(0,0,0,.55); }
  .subtitle { position:absolute; bottom:7.5%; left:0; right:0; text-align:center; padding:0 9%;
    color:#EDEBFA; font-weight:600; font-size:clamp(14px,3.7vw,20px); line-height:1.25;
    text-shadow:0 2px 14px rgba(0,0,0,.6); }

  .vignette { background:radial-gradient(ellipse 75% 60% at 50% 44%, transparent 55%, rgba(4,2,14,.65) 100%); }

  .particles span { position:absolute; width:3px; height:3px; border-radius:50%;
    background:var(--tint); opacity:0; animation:float 9s ease-in-out infinite; }
  @keyframes float { 0%{opacity:0; transform:translateY(8px)} 25%{opacity:.5} 75%{opacity:.4} 100%{opacity:0; transform:translateY(-14px)} }

  /* === réutilisé du personnage (pivots, modes, poses, émotions) === */
  ${charCSS}

  .panel { width:100%; max-width:520px; display:flex; flex-direction:column; gap:12px; }
  .row { display:flex; flex-direction:column; gap:6px; }
  .row > .label { font-size:10px; letter-spacing:.18em; text-transform:uppercase; color:#6E689A; }
  .btns { display:flex; gap:7px; flex-wrap:wrap; }
  button { background:#1E1750; color:#cfcae8; border:1px solid #2E2766; border-radius:999px;
    padding:6px 13px; font-size:12px; cursor:pointer; transition:background .18s,border-color .18s,color .18s; }
  button:hover { border-color:#7C6FF7; color:#fff; }
  button.active { background:#7C6FF7; border-color:#7C6FF7; color:#fff; }
  input[type=text] { width:100%; background:#140e30; border:1px solid #2E2766; color:#EDEBFA;
    border-radius:8px; padding:8px 12px; font-size:13px; }
  input[type=text]:focus { outline:none; border-color:#7C6FF7; }
</style>
</head>
<body>

<div class="frame mode-eveil">
  <div class="layer glow-bg"></div>
  <div class="floor"></div>
  <div class="layer"><div class="pool"></div></div>
  ${reflSVG}
  ${charSVG}
  <div class="title" id="title">LE CERVEAU MENT</div>
  <div class="subtitle" id="subtitle">Pourquoi ton attention te trahit (et comment la reprendre)</div>
  <div class="layer particles" id="particles"></div>
  <div class="layer vignette"></div>
</div>

<div class="panel">
  <div class="row"><span class="label">Titre</span><input type="text" id="in-title" value="LE CERVEAU MENT"></div>
  <div class="row"><span class="label">Sous-titre</span><input type="text" id="in-subtitle" value="Pourquoi ton attention te trahit (et comment la reprendre)"></div>
  <div class="row"><span class="label">Pose</span><div class="btns">
    <button data-pose="idle" class="active">Idle</button>
    <button data-pose="point">Pointer</button>
    <button data-pose="open">Ouvrir</button>
    <button data-pose="think">Réfléchir</button>
    <button data-pose="shrug">Hausser</button>
    <button data-pose="lean">Pencher</button>
    <button data-pose="cross">Croiser</button>
    <button data-pose="wave">Saluer</button>
  </div></div>
  <div class="row"><span class="label">Émotion</span><div class="btns">
    <button data-group="emo" data-cls="emo-calme" class="active">Calme</button>
    <button data-group="emo" data-cls="emo-reflexion">Réflexion</button>
    <button data-group="emo" data-cls="emo-focus">Focus</button>
    <button data-group="emo" data-cls="emo-insight">Révélation</button>
    <button data-group="emo" data-cls="emo-confusion">Confusion</button>
    <button data-group="emo" data-cls="emo-surcharge">Surcharge</button>
    <button data-group="emo" data-cls="emo-joie">Joie</button>
    <button data-group="emo" data-cls="emo-peur">Peur</button>
    <button data-group="emo" data-cls="emo-tristesse">Tristesse</button>
    <button data-group="emo" data-cls="emo-fierte">Fierté</button>
    <button data-group="emo" data-cls="emo-fatigue">Fatigue</button>
    <button data-group="emo" data-cls="emo-sommeil">Sommeil</button>
    <button data-group="emo" data-cls="emo-eveil">Éveil</button>
  </div></div>
  <div class="row"><span class="label">Mode (et teinte de la scène)</span><div class="btns">
    <button data-group="mode" data-cls="mode-emotions">Émotions</button>
    <button data-group="mode" data-cls="mode-neuro">Neurosciences</button>
    <button data-group="mode" data-cls="mode-eveil" class="active">Éveil complet</button>
  </div></div>
</div>

<script>
  (function () {
    var svg = document.getElementById('petit-eveille');
    var frame = document.querySelector('.frame');
    var bubblesHead = document.getElementById('bubbles-head');
    var silhouette = document.getElementById('silhouette');
    var reflSil = document.getElementById('refl-silhouette');

    var POSE_PATHS = ${pathsJson};
    function applyPose(name) {
      var d = POSE_PATHS[name] || POSE_PATHS.idle;
      silhouette.setAttribute('d', d);
      reflSil.setAttribute('d', d);
      svg.classList.toggle('pose-lean', name === 'lean');
    }
    document.querySelectorAll('button[data-pose]').forEach(function (b) {
      b.addEventListener('click', function () {
        document.querySelectorAll('button[data-pose]').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        applyPose(b.dataset.pose);
      });
    });
    applyPose('idle');

    var emoBtns = document.querySelectorAll('button[data-group="emo"]');
    emoBtns.forEach(function (b) { b.addEventListener('click', function () {
      emoBtns.forEach(function (x) { svg.classList.remove(x.dataset.cls); x.classList.remove('active'); });
      svg.classList.add(b.dataset.cls); b.classList.add('active'); updateBubbles(b.dataset.cls);
    }); });

    var modeBtns = document.querySelectorAll('button[data-group="mode"]');
    modeBtns.forEach(function (b) { b.addEventListener('click', function () {
      modeBtns.forEach(function (x) { svg.classList.remove(x.dataset.cls); frame.classList.remove(x.dataset.cls); x.classList.remove('active'); });
      svg.classList.add(b.dataset.cls); frame.classList.add(b.dataset.cls); b.classList.add('active');
    }); });

    document.getElementById('in-title').addEventListener('input', function (e) { document.getElementById('title').textContent = e.target.value; });
    document.getElementById('in-subtitle').addEventListener('input', function (e) { document.getElementById('subtitle').textContent = e.target.value; });

    var BUBBLE_SPECS = { 'emo-reflexion':[3,6,2.6], 'emo-confusion':[6,26,2.2], 'emo-surcharge':[8,30,1.6] };
    function updateBubbles(emoCls) {
      bubblesHead.innerHTML = '';
      var spec = BUBBLE_SPECS[emoCls]; if (!spec) return;
      var count = spec[0], chaos = spec[1], dur = spec[2];
      for (var i = 0; i < count; i++) {
        var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        c.setAttribute('class','bubble');
        c.setAttribute('cx', (200 + (Math.random()*2-1)*chaos).toFixed(1));
        c.setAttribute('cy', (46 - Math.random()*8).toFixed(1));
        c.setAttribute('r', (3 + Math.random()*3).toFixed(1));
        c.setAttribute('fill', '#FFFFFF');
        c.style.animation = 'rise ' + dur + 's ease-in infinite';
        c.style.animationDelay = (i*(dur/count)).toFixed(2) + 's';
        bubblesHead.appendChild(c);
      }
    }

    var pc = document.getElementById('particles');
    for (var i = 0; i < 14; i++) {
      var s = document.createElement('span');
      s.style.left = (8 + Math.random()*84) + '%';
      s.style.top  = (12 + Math.random()*64) + '%';
      s.style.animationDelay = (Math.random()*9).toFixed(1) + 's';
      s.style.transform = 'scale(' + (0.6 + Math.random()*1.2).toFixed(2) + ')';
      pc.appendChild(s);
    }
  })();
</script>

</body>
</html>
`;
writeFileSync(resolve(root, "public/petit-eveille-scene.html"), html);
console.log("scène générée :", html.length, "octets");
