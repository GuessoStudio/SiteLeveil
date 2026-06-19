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

  /* L'acteur (perso + reflet) : conteneur déplaçable pour la marche */
  .actor { position:absolute; inset:0; pointer-events:none; }
  .actor.walking { animation: walk-glide 8s ease-in-out infinite; }
  @keyframes walk-glide { 0%{transform:translateX(-15%)} 50%{transform:translateX(15%)} 100%{transform:translateX(-15%)} }

  .reflection { position:absolute; left:50%; top:45.5%; height:36%; width:auto;
    transform:translateX(-50%) scaleY(-1); transform-origin:50% 82%;
    opacity:.14; filter:blur(4px); }

  #petit-eveille { position:absolute; left:50%; top:45.5%; height:36%; width:auto; transform:translateX(-50%); display:block; overflow:visible; }
  @keyframes walk-bob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-1.8%)} }
  .actor.walking #petit-eveille { animation: walk-bob .5s ease-in-out infinite; }

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

  /* =========================== ICÔNES & MÉTÉO (FX activables) =========================== */
  .fx { position:absolute; opacity:0; transition:opacity .5s ease; pointer-events:none; }
  .frame.fx-sun .fx-sun, .frame.fx-rain .fx-rain, .frame.fx-storm .fx-rain,
  .frame.fx-snow .fx-snow, .frame.fx-hearts .fx-hearts,
  .frame.fx-idea .fx-idea, .frame.fx-bubble .fx-bubble { opacity:1; }
  .frame.fx-storm .fx-storm { opacity:1; }

  /* Soleil : noyau chaud + rayons tournants */
  .fx-sun { right:8%; top:12%; width:118px; height:118px; }
  .fx-sun .core { position:absolute; inset:32px; border-radius:50%;
    background:radial-gradient(circle,#fff7da 0%,#ffce5a 60%,transparent 74%);
    box-shadow:0 0 38px 12px rgba(255,200,80,.45); animation:sun-pulse 4s ease-in-out infinite; }
  .fx-sun .rays { position:absolute; inset:0; border-radius:50%;
    background:repeating-conic-gradient(from 0deg, rgba(255,206,90,0) 0 7deg, rgba(255,206,90,.34) 7deg 9deg);
    -webkit-mask:radial-gradient(circle, transparent 33%, #000 35%, transparent 62%);
            mask:radial-gradient(circle, transparent 33%, #000 35%, transparent 62%);
    animation:spin-cw 24s linear infinite; }
  @keyframes sun-pulse { 0%,100%{transform:scale(1); opacity:.95} 50%{transform:scale(1.06); opacity:1} }

  /* Pluie */
  .fx-rain { inset:0; overflow:hidden; }
  .fx-rain i { position:absolute; top:-8%; width:2px; height:16px; border-radius:2px;
    background:linear-gradient(transparent,#bcd0ff); animation:rain-fall linear infinite; }
  @keyframes rain-fall { to { transform:translateY(98vh); } }

  /* Neige */
  .fx-snow { inset:0; overflow:hidden; }
  .fx-snow i { position:absolute; top:-4%; border-radius:50%; background:#eaf0ff;
    animation:snow-fall linear infinite; }
  @keyframes snow-fall { 0%{transform:translateY(0) translateX(0)} 100%{transform:translateY(96vh) translateX(22px)} }

  /* Cœurs qui montent */
  .fx-hearts { inset:0; overflow:hidden; }
  .fx-hearts span { position:absolute; bottom:22%; color:#ff7eb0; opacity:0;
    text-shadow:0 0 10px rgba(255,107,157,.6); animation:heart-rise 4s ease-in infinite; }
  @keyframes heart-rise { 0%{opacity:0; transform:translateY(0) scale(.6)} 18%{opacity:.95} 100%{opacity:0; transform:translateY(-170px) scale(1.15)} }

  /* Orage : flash + éclair */
  .fx-storm { inset:0; }
  .fx-storm .flash { position:absolute; inset:0; background:#dfe6ff; opacity:0; animation:storm-flash 5s steps(1) infinite; }
  .fx-storm .bolt  { position:absolute; left:46%; top:7%; width:13%; opacity:0;
    filter:drop-shadow(0 0 8px #cfe0ff); animation:storm-bolt 5s steps(1) infinite; }
  @keyframes storm-flash { 0%,100%{opacity:0} 3%{opacity:.5} 5%{opacity:0} 8%{opacity:.32} 10%{opacity:0} }
  @keyframes storm-bolt  { 0%,100%{opacity:0} 3%{opacity:1} 9%{opacity:0} }

  /* Idée : ampoule au-dessus de la tête (scale seul -> pas de conflit d'opacité) */
  .fx-idea { left:50%; top:30%; width:60px; transform:translateX(-50%);
    filter:drop-shadow(0 0 9px rgba(255,212,94,.8)); animation:idea-pop 2.2s ease-in-out infinite; }
  .fx-idea svg { display:block; width:100%; }
  @keyframes idea-pop { 0%,100%{transform:translateX(-50%) scale(.94)} 35%{transform:translateX(-50%) scale(1.09)} }

  /* Bulle de discussion (texte éditable depuis le panneau) */
  .fx-bubble { left:57%; top:33%; max-width:34%; }
  .fx-bubble .box { position:relative; background:#fff; color:#1b1330; border-radius:14px;
    padding:9px 13px; font-size:13px; font-weight:600; line-height:1.25; box-shadow:0 6px 22px rgba(0,0,0,.35); }
  .fx-bubble .box::after { content:""; position:absolute; left:-9px; top:18px;
    border:8px solid transparent; border-right-color:#fff; }

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
  <div class="actor" id="actor">
    ${reflSVG}
    ${charSVG}
  </div>
  <div class="fx fx-sun"><div class="rays"></div><div class="core"></div></div>
  <div class="fx fx-rain" id="rain"></div>
  <div class="fx fx-snow" id="snow"></div>
  <div class="fx fx-hearts" id="hearts"></div>
  <div class="fx fx-storm"><div class="flash"></div><svg class="bolt" viewBox="0 0 40 80" aria-hidden="true"><path d="M24 2 L7 46 L19 46 L14 78 L37 32 L23 32 Z" fill="#eef3ff"/></svg></div>
  <div class="fx fx-idea"><svg viewBox="0 0 64 80" aria-hidden="true"><path d="M32 6 a22 22 0 0 1 13 39 c-3 3 -4 6 -4 10 H23 c0 -4 -1 -7 -4 -10 A22 22 0 0 1 32 6 Z" fill="#fff4c2" fill-opacity="0.20" stroke="#ffe08a" stroke-width="4" stroke-linejoin="round"/><line x1="24" y1="62" x2="40" y2="62" stroke="#ffe08a" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="70" x2="38" y2="70" stroke="#ffe08a" stroke-width="4" stroke-linecap="round"/></svg></div>
  <div class="fx fx-bubble"><div class="box" id="bubble-box">Hmm…</div></div>
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
  <div class="row"><span class="label">Déplacement</span><div class="btns">
    <button id="btn-walk">🚶 Marcher</button>
  </div></div>
  <div class="row"><span class="label">Icônes &amp; météo (active / coupe — cumulables)</span><div class="btns">
    <button data-fx="sun">☀ Soleil</button>
    <button data-fx="rain">🌧 Pluie</button>
    <button data-fx="storm">⛈ Orage</button>
    <button data-fx="snow">❄ Neige</button>
    <button data-fx="hearts">❤ Cœurs</button>
    <button data-fx="idea">💡 Idée</button>
    <button data-fx="bubble">💬 Bulle</button>
  </div></div>
  <div class="row"><span class="label">Texte de la bulle</span><input type="text" id="in-bubble" value="Hmm…"></div>
  <div class="row"><span class="label">Démo — exemple de vidéo (lecture auto)</span><div class="btns">
    <button data-demo="neuro">▶ Neurosciences</button>
    <button data-demo="psy">▶ Psychologie</button>
    <button data-demo="dev">▶ Dév perso</button>
    <button id="demo-stop">⏹ Stop</button>
  </div></div>
</div>

<script>
  (function () {
    var svg = document.getElementById('petit-eveille');
    var frame = document.querySelector('.frame');
    var actor = document.getElementById('actor');
    var bubblesHead = document.getElementById('bubbles-head');
    var silhouette = document.getElementById('silhouette');
    var reflSil = document.getElementById('refl-silhouette');
    var bubbleBox = document.getElementById('bubble-box');
    var inBubble = document.getElementById('in-bubble');

    var titleEl = document.getElementById('title');
    var subEl   = document.getElementById('subtitle');
    var inTitle = document.getElementById('in-title');
    var inSub   = document.getElementById('in-subtitle');
    var poseBtns = document.querySelectorAll('button[data-pose]');
    var emoBtns  = document.querySelectorAll('button[data-group="emo"]');
    var modeBtns = document.querySelectorAll('button[data-group="mode"]');

    var POSE_PATHS = ${pathsJson};
    function markActive(list, attr, val) { list.forEach(function (x) { x.classList.toggle('active', x.dataset[attr] === val); }); }
    function setPose(name) {
      var d = POSE_PATHS[name] || POSE_PATHS.idle;
      silhouette.setAttribute('d', d);
      reflSil.setAttribute('d', d);
      svg.classList.toggle('pose-lean', name === 'lean');
      markActive(poseBtns, 'pose', name);
    }
    function setEmo(cls) {
      emoBtns.forEach(function (x) { svg.classList.remove(x.dataset.cls); });
      svg.classList.add(cls); markActive(emoBtns, 'cls', cls); updateBubbles(cls);
    }
    function setMode(cls) {
      modeBtns.forEach(function (x) { svg.classList.remove(x.dataset.cls); frame.classList.remove(x.dataset.cls); });
      svg.classList.add(cls); frame.classList.add(cls); markActive(modeBtns, 'cls', cls);
    }
    function setTitle(t) { titleEl.textContent = t; inTitle.value = t; }
    function setSub(t)   { subEl.textContent = t; inSub.value = t; }

    poseBtns.forEach(function (b) { b.addEventListener('click', function () { stopDemo(); stopWalk(); setPose(b.dataset.pose); }); });
    emoBtns.forEach(function (b) { b.addEventListener('click', function () { stopDemo(); setEmo(b.dataset.cls); }); });
    modeBtns.forEach(function (b) { b.addEventListener('click', function () { stopDemo(); setMode(b.dataset.cls); }); });
    inTitle.addEventListener('input', function (e) { titleEl.textContent = e.target.value; });
    inSub.addEventListener('input', function (e) { subEl.textContent = e.target.value; });
    setPose('idle');

    // ----- Marche : glisse sur le sol + balancement + alternance walkA/walkB -----
    var walkBtn = document.getElementById('btn-walk');
    var walkTimer = null, walkPhase = 0;
    function stopWalk() {
      if (!walkTimer) return;
      clearInterval(walkTimer); walkTimer = null;
      actor.classList.remove('walking'); walkBtn.classList.remove('active');
    }
    function startWalk() {
      stopDemo();
      actor.classList.add('walking'); walkBtn.classList.add('active'); walkPhase = 0;
      setPose('walkA');
      walkTimer = setInterval(function () {
        walkPhase ^= 1;
        var d = POSE_PATHS[walkPhase ? 'walkB' : 'walkA'];
        silhouette.setAttribute('d', d); reflSil.setAttribute('d', d);
      }, 250);
    }
    walkBtn.addEventListener('click', function () {
      if (walkTimer) { stopWalk(); setPose('idle'); } else startWalk();
    });

    // ----- Icônes & météo : interrupteurs cumulables (combinables avec tout le reste) -----
    document.querySelectorAll('button[data-fx]').forEach(function (b) {
      b.addEventListener('click', function () {
        b.classList.toggle('active', frame.classList.toggle('fx-' + b.dataset.fx));
      });
    });
    inBubble.addEventListener('input', function (e) { bubbleBox.textContent = e.target.value; });

    // ----- Remplissage des particules météo -----
    function fill(host, n, make) { if (!host) return; for (var i = 0; i < n; i++) host.appendChild(make(i)); }
    fill(document.getElementById('rain'), 48, function () {
      var d = document.createElement('i'), dur = 0.5 + Math.random() * 0.5;
      d.style.left = (Math.random() * 100) + '%';
      d.style.height = (12 + Math.random() * 10).toFixed(0) + 'px';
      d.style.opacity = (0.4 + Math.random() * 0.4).toFixed(2);
      d.style.animationDuration = dur.toFixed(2) + 's';
      d.style.animationDelay = (-Math.random() * dur).toFixed(2) + 's';
      return d;
    });
    fill(document.getElementById('snow'), 36, function () {
      var d = document.createElement('i'), dur = 4 + Math.random() * 4, sz = 4 + Math.random() * 5;
      d.style.left = (Math.random() * 100) + '%';
      d.style.width = sz.toFixed(1) + 'px'; d.style.height = sz.toFixed(1) + 'px';
      d.style.opacity = (0.5 + Math.random() * 0.5).toFixed(2);
      d.style.animationDuration = dur.toFixed(2) + 's';
      d.style.animationDelay = (-Math.random() * dur).toFixed(2) + 's';
      return d;
    });
    fill(document.getElementById('hearts'), 8, function () {
      var s = document.createElement('span'), dur = 3 + Math.random() * 2.5;
      s.textContent = '❤';
      s.style.left = (30 + Math.random() * 40) + '%';
      s.style.fontSize = (16 + Math.random() * 16).toFixed(0) + 'px';
      s.style.animationDuration = dur.toFixed(2) + 's';
      s.style.animationDelay = (-Math.random() * dur).toFixed(2) + 's';
      return s;
    });

    // ----- DÉMO : mini-scripts qui se jouent tout seuls (avant-goût Phase 3) -----
    var DEMOS = {
      neuro: [
        {d:2600, title:"TON CERVEAU TE MENT", sub:"Tu crois être multitâche ?",               pose:"point", emo:"emo-insight",   mode:"mode-neuro"},
        {d:3000, title:"",                    sub:"Il ne fait jamais deux choses à la fois.",  pose:"think", emo:"emo-focus",     mode:"mode-neuro"},
        {d:3000, title:"",                    sub:"Il bascule sans arrêt, et ça épuise.",      pose:"shrug", emo:"emo-surcharge", mode:"mode-neuro"},
        {d:3000, title:"",                    sub:"Une notif = 23 min pour vraiment revenir.", pose:"open",  emo:"emo-confusion", mode:"mode-neuro"},
        {d:3400, title:"REPRENDS LA MAIN",    sub:"Article complet → lien en bio",             pose:"wave",  emo:"emo-eveil",     mode:"mode-eveil"}
      ],
      psy: [
        {d:2600, title:"LA TENDRESSE",        sub:"Pourquoi un mot doux apaise vraiment",      pose:"open",  emo:"emo-calme",     mode:"mode-emotions"},
        {d:3000, title:"",                    sub:"Un geste tendre libère de l'ocytocine.",    pose:"think", emo:"emo-reflexion", mode:"mode-emotions"},
        {d:3000, title:"",                    sub:"Le cerveau émotionnel se calme.",           pose:"idle",  emo:"emo-fierte",    mode:"mode-emotions"},
        {d:3400, title:"OFFRE-LA",            sub:"Article complet → lien en bio",             pose:"wave",  emo:"emo-joie",      mode:"mode-eveil"}
      ],
      dev: [
        {d:2600, title:"LA MOTIVATION MENT",  sub:"Tu attends d'avoir envie ?",                pose:"shrug", emo:"emo-confusion", mode:"mode-eveil"},
        {d:3000, title:"",                    sub:"L'action vient AVANT l'envie.",             pose:"point", emo:"emo-insight",   mode:"mode-neuro"},
        {d:3000, title:"",                    sub:"Le premier pas crée la dopamine.",          pose:"open",  emo:"emo-joie",      mode:"mode-eveil"},
        {d:3400, title:"COMMENCE PETIT",      sub:"Article complet → lien en bio",             pose:"wave",  emo:"emo-eveil",     mode:"mode-eveil"}
      ]
    };
    var demoTimers = [];
    function stopDemo() { demoTimers.forEach(clearTimeout); demoTimers = []; }
    function playDemo(key) {
      stopDemo(); stopWalk();
      var shots = DEMOS[key]; if (!shots) return;
      var t = 0;
      shots.forEach(function (s) {
        demoTimers.push(setTimeout(function () {
          setTitle(s.title); setSub(s.sub); setPose(s.pose); setEmo(s.emo); setMode(s.mode);
        }, t));
        t += s.d;
      });
      demoTimers.push(setTimeout(function () { setPose('idle'); setEmo('emo-calme'); }, t + 600));
    }
    document.querySelectorAll('button[data-demo]').forEach(function (b) {
      b.addEventListener('click', function () { playDemo(b.dataset.demo); });
    });
    document.getElementById('demo-stop').addEventListener('click', function () {
      stopDemo(); stopWalk();
      setTitle('LE CERVEAU MENT'); setSub('Pourquoi ton attention te trahit (et comment la reprendre)');
      setPose('idle'); setEmo('emo-calme'); setMode('mode-eveil');
    });

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
