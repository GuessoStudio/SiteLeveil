/**
 * brain.worker.js — moteur cerveau dans un Dedicated Web Worker.
 * Reçoit un OffscreenCanvas via postMessage, rend l'animation hors du main thread.
 * TBT main thread → 0ms pour la boucle rAF.
 */

const BRAIN_IMG_URL = "/brain-cerebral.svg";
const MASK_MAX = 400;
const PULSE_PERIOD_MS = 10000;

const scheduleFrame = typeof requestAnimationFrame !== "undefined"
  ? (cb) => requestAnimationFrame(cb)
  : (cb) => setTimeout(cb, 16);
const cancelFrame = typeof cancelAnimationFrame !== "undefined"
  ? (id) => cancelAnimationFrame(id)
  : (id) => clearTimeout(id);

// ── State ─────────────────────────────────────────────────────────────────
let canvas, ctx;
let width = 0, height = 0, dpr = 1;
let MOBILE_MODE = false, prefersReducedMotion = false;
let cancelled = false, started = false;

let MASK_W = 0, MASK_H = 0;
let maskData = null, brainMaskCanvas = null, tintCanvas = null;
let neuronCanvas = null, neuronCtx = null;

let neurons = [], neighbors = [], connections = [], pulses = [];
let frame = 0, raf = 0, revealOpacity = 0;
let ambientParticles = [], PARTICLE_CLASSES = [];
let pulseStart = 0;
let brainScale = 1, brainCenterX = 0, brainCenterY = 0, breathScale = 1;
let mouseX = -10000, mouseY = -10000, mouseActive = false;
let rotX = 0, rotY = 0, targetRotX = 0, targetRotY = 0;

// ── Protocol ──────────────────────────────────────────────────────────────
self.onmessage = async ({ data }) => {
  switch (data.type) {
    case "init":
      canvas = data.canvas;
      ctx = canvas.getContext("2d");
      width = data.width; height = data.height; dpr = data.dpr;
      MOBILE_MODE = data.isMobile; prefersReducedMotion = data.prefersReducedMotion;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      break;

    case "config": {
      const mobileChanged = MOBILE_MODE !== data.isMobile;
      MOBILE_MODE = data.isMobile; prefersReducedMotion = data.prefersReducedMotion;
      if (started && mobileChanged && maskData) {
        cancelFrame(raf);
        buildParticleClasses(); initBrain(); initAmbientParticles(); animate();
      }
      break;
    }

    // Chemin principal : le main thread charge l'image, crée l'ImageBitmap et le transfère.
    // C'est plus fiable que createImageBitmap(svgBlob) dans un worker (0×0 si viewBox only).
    case "brain":
      if (!started && !cancelled) {
        started = true;
        setupWithBitmap(data.bitmap);
      }
      break;

    // Fallback : le worker fetch et crée lui-même le bitmap (si le main thread échoue)
    case "start":
      if (!started && !cancelled) { started = true; await loadAndInit(); }
      break;

    case "resize":
      width = data.width; height = data.height; dpr = data.dpr;
      canvas.width = width * dpr; canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (neuronCanvas) {
        neuronCanvas.width = width * dpr; neuronCanvas.height = height * dpr;
        neuronCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      if (MASK_H > 0) computeBrainTransform();
      break;

    case "mouse":
      mouseX = data.x; mouseY = data.y; mouseActive = true; break;

    case "mouseout":
      mouseActive = false; mouseX = -10000; mouseY = -10000; break;

    case "visibility":
      if (data.state === "hidden") cancelFrame(raf);
      else if (!cancelled && neuronCtx) { pulseStart = 0; animate(); }
      break;

    case "destroy":
      cancelled = true; cancelFrame(raf); break;
  }
};

// ── Helpers ───────────────────────────────────────────────────────────────
function buildParticleClasses() {
  PARTICLE_CLASSES = [
    { count: MOBILE_MODE ? 10 : 40, sizeMin: 0.5, sizeMax: 1.0, speedMin: 0.08, speedMax: 0.15, lifeMin: 720, lifeMax: 1080, opacityMax: 0.06, absorbed: false },
    { count: MOBILE_MODE ? 7  : 30, sizeMin: 1.5, sizeMax: 3.0, speedMin: 0.15, speedMax: 0.30, lifeMin: 480, lifeMax: 720,  opacityMax: 0.13, absorbed: true  },
    { count: MOBILE_MODE ? 3  : 10, sizeMin: 2.0, sizeMax: 3.5, speedMin: 0.35, speedMax: 0.55, lifeMin: 480, lifeMax: 720,  opacityMax: 0.18, absorbed: true  },
  ];
}

function computeBrainTransform() {
  if (MOBILE_MODE) {
    brainScale = (height * 0.55) / MASK_H;
    brainCenterX = width / 2; brainCenterY = height * 0.32;
  } else {
    brainScale = (height * 1.0) / MASK_H;
    brainCenterX = width * 0.78; brainCenterY = height / 2;
  }
}

function applyScanlineFill(imgData, w, h) {
  const data = imgData.data;
  for (let y = 0; y < h; y++) {
    let l = -1, r = -1;
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3] > 30) { if (l === -1) l = x; r = x; }
    }
    if (l !== -1 && r > l) for (let x = l; x <= r; x++) data[(y * w + x) * 4 + 3] = 255;
  }
}

function isInsideBrain(lx, ly) {
  const px = Math.floor(lx + MASK_W / 2), py = Math.floor(ly + MASK_H / 2);
  if (px < 0 || px >= MASK_W || py < 0 || py >= MASK_H) return false;
  return maskData.data[(py * MASK_W + px) * 4 + 3] > 30;
}

function initBrain() {
  neurons = []; let attempts = 0;
  const target = MOBILE_MODE ? 300 : 500;
  while (neurons.length < target && attempts < 200000) {
    const lx = (Math.random() - 0.5) * MASK_W, ly = (Math.random() - 0.5) * MASK_H;
    if (isInsideBrain(lx, ly)) neurons.push({ x: lx, y: ly, z: (Math.random() - 0.5) * 80, activation: 0 });
    attempts++;
  }
  neighbors = neurons.map(() => []);
  connections = [];
  const max = Math.max(28, MASK_W * 0.095), max2 = max * max;
  for (let i = 0; i < neurons.length; i++) {
    const a = neurons[i];
    for (let j = i + 1; j < neurons.length; j++) {
      const b = neurons[j];
      const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z, d2 = dx*dx + dy*dy + dz*dz;
      if (d2 < max2) {
        connections.push([i, j, Math.sqrt(d2), max]);
        neighbors[i].push(j); neighbors[j].push(i);
      }
    }
  }
}

function project(n) {
  const cosY = Math.cos(rotY), sinY = Math.sin(rotY), cosX = Math.cos(rotX), sinX = Math.sin(rotX);
  let x = n.x * cosY + n.z * sinY, z = -n.x * sinY + n.z * cosY;
  let y = n.y * cosX - z * sinX; z = n.y * sinX + z * cosX;
  const fs = brainScale * breathScale, pz = z * fs, sf = 900 / (900 + pz);
  return { sx: brainCenterX + x * fs * sf, sy: brainCenterY + y * fs * sf, scale: sf };
}

function computePulseIntensity(now) {
  if (pulseStart === 0) pulseStart = now;
  const phase = ((now - pulseStart) % PULSE_PERIOD_MS) / PULSE_PERIOD_MS;
  if (phase < 0.35) return 1 - Math.pow(1 - phase / 0.35, 3);
  if (phase < 0.40) return 1;
  if (phase < 0.85) return 1 - Math.pow((phase - 0.40) / 0.45, 3);
  return 0;
}

function drawAmbientPulse(now) {
  const alpha = (0.03 + computePulseIntensity(now) * 0.06) * revealOpacity;
  if (alpha < 0.001) return;
  ctx.save();
  const g = ctx.createRadialGradient(brainCenterX, brainCenterY, 0, brainCenterX, brainCenterY, Math.max(width, height) * 0.6);
  g.addColorStop(0, `rgba(201,149,58,${alpha})`);
  g.addColorStop(0.5, `rgba(201,149,58,${alpha * 0.5})`);
  g.addColorStop(1, "rgba(201,149,58,0)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, width, height); ctx.restore();
}

function spawnParticle(cls) {
  const x = Math.random() * width * 0.9, y = Math.random() * height;
  const speed = cls.speedMin + Math.random() * (cls.speedMax - cls.speedMin);
  const angle = Math.atan2(brainCenterY - y, brainCenterX - x) + (Math.random() - 0.5) * 0.5;
  return {
    x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
    size: cls.sizeMin + Math.random() * (cls.sizeMax - cls.sizeMin),
    life: 0, maxLife: cls.lifeMin + Math.random() * (cls.lifeMax - cls.lifeMin),
    progress: 0, cls,
  };
}

function initAmbientParticles() {
  ambientParticles = [];
  for (const cls of PARTICLE_CLASSES) {
    for (let i = 0; i < cls.count; i++) {
      const p = spawnParticle(cls);
      p.progress = 0.3 + Math.random() * 0.4;
      ambientParticles.push(p);
    }
  }
}

function drawAmbientParticles() {
  ctx.save(); ctx.globalCompositeOperation = "screen";
  const ar = MASK_W * brainScale * 0.35, ar2 = ar * ar;
  for (let i = 0; i < ambientParticles.length; i++) {
    const p = ambientParticles[i];
    p.x += p.vx; p.y += p.vy; p.life++;
    const lr = p.life / p.maxLife + p.progress;
    let abs = false;
    if (p.cls.absorbed) { const dx = p.x - brainCenterX, dy = p.y - brainCenterY; abs = dx*dx + dy*dy < ar2; }
    if (lr >= 1 || p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20 || abs) {
      ambientParticles[i] = spawnParticle(p.cls); continue;
    }
    const lf = lr < 0.15 ? lr / 0.15 : lr > 0.75 ? (1 - lr) / 0.25 : 1;
    let xf = 1;
    if (!MOBILE_MODE) { const xr = p.x / width; if (xr < 0.55) xf = Math.max(0, (xr - 0.15) / 0.40); }
    const alpha = lf * p.cls.opacityMax * xf * revealOpacity;
    if (alpha < 0.005) continue;
    ctx.fillStyle = `rgba(201,149,58,${alpha})`;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();
}

function drawBrainOutline() {
  if (!tintCanvas) return;
  ctx.save();
  ctx.globalAlpha = 0.70 * revealOpacity;
  ctx.globalCompositeOperation = "screen";
  ctx.shadowColor = "rgba(201,149,58,0.55)"; ctx.shadowBlur = 8;
  ctx.translate(brainCenterX, brainCenterY);
  ctx.scale(Math.cos(rotY) * brainScale * breathScale, Math.cos(rotX) * brainScale * breathScale);
  ctx.drawImage(tintCanvas, -MASK_W / 2, -MASK_H / 2, MASK_W, MASK_H);
  ctx.restore();
}

// ── Animation loop ────────────────────────────────────────────────────────
function animate() {
  if (cancelled) return;
  frame++;
  if (!neuronCtx) { raf = scheduleFrame(animate); return; }
  if (revealOpacity < 1) revealOpacity = Math.min(1, revealOpacity + 0.028);

  if (mouseActive && !MOBILE_MODE) {
    const cap = 0.22;
    targetRotY = Math.max(-cap, Math.min(cap, (mouseX - width / 2) * 0.0006));
    targetRotX = Math.max(-cap, Math.min(cap, -(mouseY - height / 2) * 0.0006));
  } else { targetRotY = 0; targetRotX = 0; }
  rotX += (targetRotX - rotX) * 0.04; rotY += (targetRotY - rotY) * 0.04;

  ctx.fillStyle = "rgba(13,5,0,0.18)"; ctx.fillRect(0, 0, width, height);

  const now = performance.now();
  drawAmbientPulse(now);
  breathScale = prefersReducedMotion ? 1 : 1 + computePulseIntensity(now) * 0.012;
  drawAmbientParticles(); drawBrainOutline();

  if (!MOBILE_MODE) {
    ctx.save(); ctx.globalCompositeOperation = "destination-out";
    const g = ctx.createLinearGradient(0, 0, width, 0);
    g.addColorStop(0, "rgba(0,0,0,0.85)"); g.addColorStop(0.35, "rgba(0,0,0,0.45)"); g.addColorStop(0.55, "rgba(0,0,0,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, width, height); ctx.restore();
  }

  neuronCtx.clearRect(0, 0, width, height);
  if (frame % 120 === 0 && neurons.length > 0) neurons[(Math.random() * neurons.length) | 0].activation = 1;

  const proj = new Array(neurons.length);
  for (let i = 0; i < neurons.length; i++) proj[i] = project(neurons[i]);

  if (mouseActive) {
    for (let i = 0; i < neurons.length; i++) {
      const p = proj[i], dx = p.sx - mouseX, dy = p.sy - mouseY, d2 = dx*dx + dy*dy;
      if (d2 < 32400) {
        const int = 1 - Math.sqrt(d2) / 180;
        if (neurons[i].activation < int * 0.9) neurons[i].activation = int * 0.9;
        if (Math.random() < 0.0028 && pulses.length < 80 && neighbors[i].length > 0)
          pulses.push({ from: i, to: neighbors[i][(Math.random() * neighbors[i].length) | 0], t: 0 });
      }
    }
  }
  for (let i = 0; i < neurons.length; i++) neurons[i].activation *= 0.96;

  neuronCtx.lineWidth = 0.5;
  for (const [i, j, d, maxD] of connections) {
    const pa = proj[i], pb = proj[j];
    const act = Math.max(neurons[i].activation, neurons[j].activation);
    const op = Math.min(0.85, (1 - d / maxD) * 0.3 * (1 + act * 1.6)) * revealOpacity;
    neuronCtx.strokeStyle = `rgba(180,120,40,${op})`;
    neuronCtx.beginPath(); neuronCtx.moveTo(pa.sx, pa.sy); neuronCtx.lineTo(pb.sx, pb.sy); neuronCtx.stroke();
  }

  const alive = [];
  for (const p of pulses) {
    p.t += 0.04;
    if (p.t >= 1) { if (neurons[p.to]?.activation < 0.6) neurons[p.to].activation = 0.6; continue; }
    const pa = proj[p.from], pb = proj[p.to];
    const x = pa.sx + (pb.sx - pa.sx) * p.t, y = pa.sy + (pb.sy - pa.sy) * p.t;
    neuronCtx.save(); neuronCtx.shadowBlur = 8; neuronCtx.shadowColor = "#FFD700";
    neuronCtx.fillStyle = `rgba(255,230,100,${0.9 * revealOpacity})`;
    neuronCtx.beginPath(); neuronCtx.arc(x, y, 2.2, 0, Math.PI * 2); neuronCtx.fill(); neuronCtx.restore();
    alive.push(p);
  }
  pulses = alive;

  for (let i = 0; i < neurons.length; i++) {
    const n = neurons[i], p = proj[i];
    const size = (1.5 + ((n.z + 40) / 80) * 1.5) * p.scale;
    if (n.activation > 0.05) {
      const a = Math.min(n.activation, 1) * revealOpacity;
      neuronCtx.save(); neuronCtx.shadowBlur = 6 + a * 4; neuronCtx.shadowColor = "#FFD700";
      neuronCtx.fillStyle = `rgba(255,215,80,${a})`;
      neuronCtx.beginPath(); neuronCtx.arc(p.sx, p.sy, size * (1 + a * 0.6), 0, Math.PI * 2); neuronCtx.fill(); neuronCtx.restore();
    } else {
      neuronCtx.fillStyle = `rgba(201,149,58,${0.35 * revealOpacity})`;
      neuronCtx.beginPath(); neuronCtx.arc(p.sx, p.sy, size, 0, Math.PI * 2); neuronCtx.fill();
    }
  }

  neuronCtx.save(); neuronCtx.globalCompositeOperation = "destination-in";
  neuronCtx.translate(brainCenterX, brainCenterY);
  neuronCtx.scale(Math.cos(rotY) * brainScale * breathScale, Math.cos(rotX) * brainScale * breathScale);
  neuronCtx.drawImage(brainMaskCanvas, -MASK_W / 2, -MASK_H / 2, MASK_W, MASK_H);
  neuronCtx.restore();

  if (!MOBILE_MODE) {
    neuronCtx.save(); neuronCtx.globalCompositeOperation = "destination-out";
    const fg = neuronCtx.createLinearGradient(0, 0, width, 0);
    fg.addColorStop(0, "rgba(0,0,0,0.85)"); fg.addColorStop(0.35, "rgba(0,0,0,0.45)"); fg.addColorStop(0.55, "rgba(0,0,0,0)");
    neuronCtx.fillStyle = fg; neuronCtx.fillRect(0, 0, width, height); neuronCtx.restore();
  }

  ctx.drawImage(neuronCanvas, 0, 0, neuronCanvas.width, neuronCanvas.height, 0, 0, width, height);
  raf = scheduleFrame(animate);
}

// ── Image load + init ─────────────────────────────────────────────────────

// Chemin principal : bitmap créé sur le main thread (new Image + createImageBitmap).
// Plus fiable que createImageBitmap(svgBlob) dans le worker quand le SVG n'a pas
// d'attributs width/height explicites (retourne 0×0 sur certains navigateurs).
function setupWithBitmap(bitmap) {
  if (cancelled) { bitmap.close(); return; }
  try {
    const bw = bitmap.width || MASK_MAX, bh = bitmap.height || MASK_MAX;
    const ratio = bw / bh;
    MASK_W = ratio >= 1 ? MASK_MAX : Math.round(MASK_MAX * ratio);
    MASK_H = ratio >= 1 ? Math.round(MASK_MAX / ratio) : MASK_MAX;
    if (MASK_W < 1) MASK_W = MASK_MAX;
    if (MASK_H < 1) MASK_H = MASK_MAX;

    const mc = new OffscreenCanvas(MASK_W, MASK_H);
    const mCtx = mc.getContext("2d", { willReadFrequently: true });
    mCtx.drawImage(bitmap, 0, 0, MASK_W, MASK_H);
    maskData = mCtx.getImageData(0, 0, MASK_W, MASK_H);
    let inside = 0;
    for (let i = 3; i < maskData.data.length; i += 4) if (maskData.data[i] > 30) inside++;
    if (inside / (MASK_W * MASK_H) < 0.15) { applyScanlineFill(maskData, MASK_W, MASK_H); mCtx.putImageData(maskData, 0, 0); }
    brainMaskCanvas = mc;

    neuronCanvas = new OffscreenCanvas(width * dpr, height * dpr);
    neuronCtx = neuronCanvas.getContext("2d");
    neuronCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    tintCanvas = new OffscreenCanvas(MASK_W, MASK_H);
    const tCtx = tintCanvas.getContext("2d");
    tCtx.drawImage(bitmap, 0, 0, MASK_W, MASK_H);
    tCtx.globalCompositeOperation = "source-in";
    tCtx.fillStyle = "#C9953A"; tCtx.fillRect(0, 0, MASK_W, MASK_H);
    tCtx.globalCompositeOperation = "destination-out";
    tCtx.drawImage(bitmap, 5, 5, MASK_W - 10, MASK_H - 10);
    tCtx.globalCompositeOperation = "source-over";

    bitmap.close();
    computeBrainTransform(); buildParticleClasses(); initBrain(); initAmbientParticles(); animate();
  } catch (err) {
    console.warn("[L'Éveil] Worker setupWithBitmap failed:", err);
  }
}

// Fallback : le worker fetch et crée lui-même le bitmap.
// Ajoute width/height au SVG avant createImageBitmap (sinon 0×0 si viewBox only).
async function loadAndInit() {
  try {
    const res = await fetch(BRAIN_IMG_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const withDims = text.replace(/(<svg\b[^>]*)>/, `$1 width="${MASK_MAX}" height="${MASK_MAX}">`);
    const blob = new Blob([withDims], { type: "image/svg+xml" });
    const bitmap = await createImageBitmap(blob);
    setupWithBitmap(bitmap);
  } catch (err) {
    console.warn("[L'Éveil] Worker loadAndInit failed:", err);
  }
}
