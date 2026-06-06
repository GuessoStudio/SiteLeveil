/**
 * brainEngine.js — moteur de rendu du cerveau, sans dépendances React/DOM.
 *
 * Phase 1 : tourne sur le main thread (document.createElement + new Image OK).
 * Phase 2 : sera transféré dans brain.worker.js avec OffscreenCanvas.
 *
 * API :
 *   const engine = startBrainEngine(canvas, { isMobile, prefersReducedMotion });
 *   engine.setMouse(x, y);
 *   engine.clearMouse();
 *   engine.resize();
 *   engine.destroy();
 */

const BRAIN_IMG_URL = "/brain-cerebral.svg";
const MASK_MAX = 400;
const PULSE_PERIOD_MS = 10000;

export function startBrainEngine(canvas, { isMobile, prefersReducedMotion }) {
  const MOBILE_MODE = isMobile;
  const ctx = canvas.getContext("2d");

  const dpr = MOBILE_MODE
    ? Math.min(window.devicePixelRatio || 1, 1)
    : Math.min(window.devicePixelRatio || 1, 2);

  let cancelled = false;

  let width = 0;
  let height = 0;
  let MASK_W = 0;
  let MASK_H = 0;

  let maskData = null;
  let brainMaskCanvas = null;
  let tintCanvas = null;
  let neuronCanvas = null;
  let neuronCtx = null;

  let neurons = [];
  let neighbors = [];
  let connections = [];
  let pulses = [];
  let frame = 0;
  let raf = 0;
  let revealOpacity = 0;
  let ambientParticles = [];
  let pulseStart = 0;

  let brainScale = 1;
  let brainCenterX = 0;
  let brainCenterY = 0;
  let breathScale = 1;

  let mouseX = -10000;
  let mouseY = -10000;
  let mouseActive = false;
  let rotX = 0, rotY = 0;
  let targetRotX = 0, targetRotY = 0;

  // ── Particle classes ──────────────────────────────────────────────────────
  const PARTICLE_CLASSES = [
    {
      count: MOBILE_MODE ? 10 : 40,
      sizeMin: 0.5, sizeMax: 1.0,
      speedMin: 0.08, speedMax: 0.15,
      lifeMin: 720, lifeMax: 1080,
      opacityMax: 0.06,
      absorbed: false,
    },
    {
      count: MOBILE_MODE ? 7 : 30,
      sizeMin: 1.5, sizeMax: 3.0,
      speedMin: 0.15, speedMax: 0.30,
      lifeMin: 480, lifeMax: 720,
      opacityMax: 0.13,
      absorbed: true,
    },
    {
      count: MOBILE_MODE ? 3 : 10,
      sizeMin: 2.0, sizeMax: 3.5,
      speedMin: 0.35, speedMax: 0.55,
      lifeMin: 480, lifeMax: 720,
      opacityMax: 0.18,
      absorbed: true,
    },
  ];

  // ── Helpers ───────────────────────────────────────────────────────────────
  const computeBrainTransform = () => {
    if (MOBILE_MODE) {
      brainScale = (height * 0.55) / MASK_H;
      brainCenterX = width / 2;
      brainCenterY = height * 0.32;
    } else {
      brainScale = (height * 1.0) / MASK_H;
      brainCenterX = width * 0.78;
      brainCenterY = height / 2;
    }
  };

  const resize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (neuronCanvas) {
      neuronCanvas.width = width * dpr;
      neuronCanvas.height = height * dpr;
      neuronCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    if (MASK_H > 0) computeBrainTransform();
  };

  const applyScanlineFill = (imgData, w, h) => {
    const data = imgData.data;
    for (let y = 0; y < h; y++) {
      let leftmost = -1, rightmost = -1;
      for (let x = 0; x < w; x++) {
        if (data[(y * w + x) * 4 + 3] > 30) {
          if (leftmost === -1) leftmost = x;
          rightmost = x;
        }
      }
      if (leftmost !== -1 && rightmost > leftmost) {
        for (let x = leftmost; x <= rightmost; x++) {
          data[(y * w + x) * 4 + 3] = 255;
        }
      }
    }
  };

  const isInsideBrain = (lx, ly) => {
    const px = Math.floor(lx + MASK_W / 2);
    const py = Math.floor(ly + MASK_H / 2);
    if (px < 0 || px >= MASK_W || py < 0 || py >= MASK_H) return false;
    return maskData.data[(py * MASK_W + px) * 4 + 3] > 30;
  };

  const initBrain = () => {
    neurons = [];
    let attempts = 0;
    const target = MOBILE_MODE ? 300 : 500;

    while (neurons.length < target && attempts < 200000) {
      const lx = (Math.random() - 0.5) * MASK_W;
      const ly = (Math.random() - 0.5) * MASK_H;
      if (isInsideBrain(lx, ly)) {
        neurons.push({ x: lx, y: ly, z: (Math.random() - 0.5) * 80, activation: 0 });
      }
      attempts++;
    }

    neighbors = neurons.map(() => []);
    connections = [];
    const max = Math.max(28, MASK_W * 0.095);
    const max2 = max * max;
    for (let i = 0; i < neurons.length; i++) {
      const a = neurons[i];
      for (let j = i + 1; j < neurons.length; j++) {
        const b = neurons[j];
        const dx = a.x - b.x, dy = a.y - b.y, dz = a.z - b.z;
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < max2) {
          const d = Math.sqrt(d2);
          connections.push([i, j, d, max]);
          neighbors[i].push(j);
          neighbors[j].push(i);
        }
      }
    }
  };

  const project = (n) => {
    const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
    const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
    let x = n.x * cosY + n.z * sinY;
    let z = -n.x * sinY + n.z * cosY;
    let y = n.y * cosX - z * sinX;
    z = n.y * sinX + z * cosX;
    const persp = 900;
    const finalScale = brainScale * breathScale;
    const projZ = z * finalScale;
    const sf = persp / (persp + projZ);
    return { sx: brainCenterX + x * finalScale * sf, sy: brainCenterY + y * finalScale * sf, scale: sf, z: projZ };
  };

  const computePulseIntensity = (now) => {
    if (pulseStart === 0) pulseStart = now;
    const elapsed = (now - pulseStart) % PULSE_PERIOD_MS;
    const phase = elapsed / PULSE_PERIOD_MS;
    let v;
    if (phase < 0.35) {
      const t = phase / 0.35;
      v = 1 - Math.pow(1 - t, 3);
    } else if (phase < 0.40) {
      v = 1;
    } else if (phase < 0.85) {
      const t = (phase - 0.40) / 0.45;
      v = 1 - Math.pow(t, 3);
    } else {
      v = 0;
    }
    return v;
  };

  const drawAmbientPulse = (now) => {
    const pulse = computePulseIntensity(now);
    const alpha = (0.03 + pulse * 0.06) * revealOpacity;
    if (alpha < 0.001) return;
    ctx.save();
    const radius = Math.max(width, height) * 0.6;
    const grad = ctx.createRadialGradient(brainCenterX, brainCenterY, 0, brainCenterX, brainCenterY, radius);
    grad.addColorStop(0, `rgba(201, 149, 58, ${alpha})`);
    grad.addColorStop(0.5, `rgba(201, 149, 58, ${alpha * 0.5})`);
    grad.addColorStop(1, "rgba(201, 149, 58, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
    ctx.restore();
  };

  const spawnParticle = (classDef, randomLifeProgress = false) => {
    const x = Math.random() * width * 0.9;
    const y = Math.random() * height;
    const dx = brainCenterX - x;
    const dy = brainCenterY - y;
    const speed = classDef.speedMin + Math.random() * (classDef.speedMax - classDef.speedMin);
    const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
    const size = classDef.sizeMin + Math.random() * (classDef.sizeMax - classDef.sizeMin);
    const maxLife = classDef.lifeMin + Math.random() * (classDef.lifeMax - classDef.lifeMin);
    return {
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size, life: 0, maxLife,
      progress: randomLifeProgress ? Math.random() : 0,
      cls: classDef,
    };
  };

  const initAmbientParticles = () => {
    ambientParticles = [];
    for (const classDef of PARTICLE_CLASSES) {
      for (let i = 0; i < classDef.count; i++) {
        const p = spawnParticle(classDef, false);
        p.progress = 0.3 + Math.random() * 0.4;
        ambientParticles.push(p);
      }
    }
  };

  const drawAmbientParticles = () => {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    const absorbRadius = MASK_W * brainScale * 0.35;
    const absorbRadiusSq = absorbRadius * absorbRadius;

    for (let i = 0; i < ambientParticles.length; i++) {
      const p = ambientParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life++;
      const lifeRatio = p.life / p.maxLife + p.progress;

      let absorbed = false;
      if (p.cls.absorbed) {
        const dxBrain = p.x - brainCenterX;
        const dyBrain = p.y - brainCenterY;
        absorbed = dxBrain * dxBrain + dyBrain * dyBrain < absorbRadiusSq;
      }

      if (lifeRatio >= 1 || p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20 || absorbed) {
        ambientParticles[i] = spawnParticle(p.cls, false);
        continue;
      }

      let lifeFade;
      if (lifeRatio < 0.15) {
        lifeFade = lifeRatio / 0.15;
      } else if (lifeRatio > 0.75) {
        lifeFade = (1 - lifeRatio) / 0.25;
      } else {
        lifeFade = 1;
      }

      let xFade = 1;
      if (!MOBILE_MODE) {
        const xRatio = p.x / width;
        if (xRatio < 0.55) xFade = Math.max(0, (xRatio - 0.15) / 0.40);
      }

      const finalAlpha = lifeFade * p.cls.opacityMax * xFade * revealOpacity;
      if (finalAlpha < 0.005) continue;

      ctx.fillStyle = `rgba(201, 149, 58, ${finalAlpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  };

  const drawBrainOutline = () => {
    if (!tintCanvas) return;
    ctx.save();
    ctx.globalAlpha = 0.70 * revealOpacity;
    ctx.globalCompositeOperation = "screen";
    ctx.shadowColor = "rgba(201, 149, 58, 0.55)";
    ctx.shadowBlur = 8;
    ctx.translate(brainCenterX, brainCenterY);
    ctx.scale(Math.cos(rotY) * brainScale * breathScale, Math.cos(rotX) * brainScale * breathScale);
    ctx.drawImage(tintCanvas, -MASK_W / 2, -MASK_H / 2, MASK_W, MASK_H);
    ctx.restore();
  };

  // ── Animation loop ────────────────────────────────────────────────────────
  const animate = () => {
    if (cancelled) return;
    frame++;

    if (!neuronCtx) {
      raf = requestAnimationFrame(animate);
      return;
    }

    if (revealOpacity < 1) revealOpacity = Math.min(1, revealOpacity + 0.028);

    if (mouseActive && !MOBILE_MODE) {
      const cap = 0.22;
      const rawY = (mouseX - width / 2) * 0.0006;
      const rawX = -(mouseY - height / 2) * 0.0006;
      targetRotY = Math.max(-cap, Math.min(cap, rawY));
      targetRotX = Math.max(-cap, Math.min(cap, rawX));
    } else {
      targetRotY = 0;
      targetRotX = 0;
    }
    rotX += (targetRotX - rotX) * 0.04;
    rotY += (targetRotY - rotY) * 0.04;

    // COUCHE 1 — trail
    ctx.fillStyle = "rgba(13, 5, 0, 0.18)";
    ctx.fillRect(0, 0, width, height);

    const now = performance.now();
    drawAmbientPulse(now);

    if (!prefersReducedMotion) {
      const pulseIntensity = computePulseIntensity(now);
      breathScale = 1 + pulseIntensity * 0.012;
    } else {
      breathScale = 1;
    }

    drawAmbientParticles();
    drawBrainOutline();

    if (!MOBILE_MODE) {
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      const outlineGrad = ctx.createLinearGradient(0, 0, width, 0);
      outlineGrad.addColorStop(0, "rgba(0, 0, 0, 0.85)");
      outlineGrad.addColorStop(0.35, "rgba(0, 0, 0, 0.45)");
      outlineGrad.addColorStop(0.55, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = outlineGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    // COUCHE 2 — neurones (offscreen)
    neuronCtx.clearRect(0, 0, width, height);

    if (frame % 120 === 0 && neurons.length > 0) {
      const idx = (Math.random() * neurons.length) | 0;
      neurons[idx].activation = 1;
    }

    const proj = new Array(neurons.length);
    for (let i = 0; i < neurons.length; i++) {
      proj[i] = project(neurons[i]);
    }

    if (mouseActive) {
      for (let i = 0; i < neurons.length; i++) {
        const p = proj[i];
        const dx = p.sx - mouseX, dy = p.sy - mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < 32400) {
          const d = Math.sqrt(d2);
          const intensity = 1 - d / 180;
          if (neurons[i].activation < intensity * 0.9) neurons[i].activation = intensity * 0.9;
          if (Math.random() < 0.0028 && pulses.length < 80 && neighbors[i].length > 0) {
            const target = neighbors[i][(Math.random() * neighbors[i].length) | 0];
            pulses.push({ from: i, to: target, t: 0 });
          }
        }
      }
    }

    for (let i = 0; i < neurons.length; i++) neurons[i].activation *= 0.96;

    // Connexions
    neuronCtx.lineWidth = 0.5;
    for (let k = 0; k < connections.length; k++) {
      const [i, j, d, maxD] = connections[k];
      const pa = proj[i], pb = proj[j];
      const act = Math.max(neurons[i].activation, neurons[j].activation);
      const baseOpacity = (1 - d / maxD) * 0.3;
      const opacity = Math.min(0.85, baseOpacity * (1 + act * 1.6)) * revealOpacity;
      neuronCtx.strokeStyle = `rgba(180, 120, 40, ${opacity})`;
      neuronCtx.beginPath();
      neuronCtx.moveTo(pa.sx, pa.sy);
      neuronCtx.lineTo(pb.sx, pb.sy);
      neuronCtx.stroke();
    }

    // Pulses
    const stillAlive = [];
    for (const p of pulses) {
      p.t += 0.04;
      if (p.t >= 1) {
        if (neurons[p.to] && neurons[p.to].activation < 0.6) neurons[p.to].activation = 0.6;
        continue;
      }
      const pa = proj[p.from], pb = proj[p.to];
      const x = pa.sx + (pb.sx - pa.sx) * p.t;
      const y = pa.sy + (pb.sy - pa.sy) * p.t;
      neuronCtx.save();
      neuronCtx.shadowBlur = 8;
      neuronCtx.shadowColor = "#FFD700";
      neuronCtx.fillStyle = `rgba(255, 230, 100, ${0.9 * revealOpacity})`;
      neuronCtx.beginPath();
      neuronCtx.arc(x, y, 2.2, 0, Math.PI * 2);
      neuronCtx.fill();
      neuronCtx.restore();
      stillAlive.push(p);
    }
    pulses = stillAlive;

    // Neurones
    for (let i = 0; i < neurons.length; i++) {
      const n = neurons[i];
      const p = proj[i];
      const baseSize = 1.5 + ((n.z + 40) / 80) * 1.5;
      const size = baseSize * p.scale;
      if (n.activation > 0.05) {
        const a = Math.min(n.activation, 1) * revealOpacity;
        neuronCtx.save();
        neuronCtx.shadowBlur = 6 + a * 4;
        neuronCtx.shadowColor = "#FFD700";
        neuronCtx.fillStyle = `rgba(255, 215, 80, ${a})`;
        neuronCtx.beginPath();
        neuronCtx.arc(p.sx, p.sy, size * (1 + a * 0.6), 0, Math.PI * 2);
        neuronCtx.fill();
        neuronCtx.restore();
      } else {
        neuronCtx.fillStyle = `rgba(201, 149, 58, ${0.35 * revealOpacity})`;
        neuronCtx.beginPath();
        neuronCtx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
        neuronCtx.fill();
      }
    }

    // Mask cerveau sur neuronCtx
    neuronCtx.save();
    neuronCtx.globalCompositeOperation = "destination-in";
    neuronCtx.translate(brainCenterX, brainCenterY);
    neuronCtx.scale(Math.cos(rotY) * brainScale * breathScale, Math.cos(rotX) * brainScale * breathScale);
    neuronCtx.drawImage(brainMaskCanvas, -MASK_W / 2, -MASK_H / 2, MASK_W, MASK_H);
    neuronCtx.restore();

    if (!MOBILE_MODE) {
      neuronCtx.save();
      neuronCtx.globalCompositeOperation = "destination-out";
      const fadeGrad = neuronCtx.createLinearGradient(0, 0, width, 0);
      fadeGrad.addColorStop(0, "rgba(0, 0, 0, 0.85)");
      fadeGrad.addColorStop(0.35, "rgba(0, 0, 0, 0.45)");
      fadeGrad.addColorStop(0.55, "rgba(0, 0, 0, 0)");
      neuronCtx.fillStyle = fadeGrad;
      neuronCtx.fillRect(0, 0, width, height);
      neuronCtx.restore();
    }

    ctx.drawImage(neuronCanvas, 0, 0, neuronCanvas.width, neuronCanvas.height, 0, 0, width, height);

    raf = requestAnimationFrame(animate);
  };

  // ── Image load + init ─────────────────────────────────────────────────────
  const brainImg = new Image();
  brainImg.crossOrigin = "anonymous";

  brainImg.onload = () => {
    if (cancelled) return;

    const ratio = brainImg.naturalWidth / brainImg.naturalHeight;
    if (ratio >= 1) {
      MASK_W = MASK_MAX;
      MASK_H = Math.round(MASK_MAX / ratio);
    } else {
      MASK_H = MASK_MAX;
      MASK_W = Math.round(MASK_MAX * ratio);
    }

    const maskCanvas = document.createElement("canvas");
    maskCanvas.width = MASK_W;
    maskCanvas.height = MASK_H;
    const maskCtx = maskCanvas.getContext("2d", { willReadFrequently: true });
    maskCtx.drawImage(brainImg, 0, 0, MASK_W, MASK_H);

    try {
      maskData = maskCtx.getImageData(0, 0, MASK_W, MASK_H);
    } catch (err) {
      console.warn("[L'Éveil] Impossible de lire les pixels du cerveau (CORS).", err);
      return;
    }

    let insideCount = 0;
    for (let i = 3; i < maskData.data.length; i += 4) {
      if (maskData.data[i] > 30) insideCount++;
    }
    if (insideCount / (MASK_W * MASK_H) < 0.15) {
      applyScanlineFill(maskData, MASK_W, MASK_H);
      maskCtx.putImageData(maskData, 0, 0);
    }

    brainMaskCanvas = maskCanvas;

    neuronCanvas = document.createElement("canvas");
    neuronCanvas.width = width * dpr;
    neuronCanvas.height = height * dpr;
    neuronCtx = neuronCanvas.getContext("2d");
    neuronCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

    tintCanvas = document.createElement("canvas");
    tintCanvas.width = MASK_W;
    tintCanvas.height = MASK_H;
    const tCtx = tintCanvas.getContext("2d");
    tCtx.drawImage(brainImg, 0, 0, MASK_W, MASK_H);
    tCtx.globalCompositeOperation = "source-in";
    tCtx.fillStyle = "#C9953A";
    tCtx.fillRect(0, 0, MASK_W, MASK_H);
    const inset = 5;
    tCtx.globalCompositeOperation = "destination-out";
    tCtx.drawImage(brainImg, inset, inset, MASK_W - 2 * inset, MASK_H - 2 * inset);
    tCtx.globalCompositeOperation = "source-over";

    computeBrainTransform();
    initBrain();
    initAmbientParticles();
    animate();
  };

  brainImg.onerror = () => {
    console.warn("[L'Éveil] Échec du chargement de l'image cerveau :", BRAIN_IMG_URL);
  };

  // ── Démarrage différé (après window.load + idle) ──────────────────────────
  const requestIdle = window.requestIdleCallback || ((cb) => window.setTimeout(() => cb(), 200));

  const startBrain = () => {
    if (!cancelled) brainImg.src = BRAIN_IMG_URL;
  };

  let idleHandle;
  const onWindowLoad = () => {
    idleHandle = requestIdle(startBrain, { timeout: 1500 });
  };

  if (document.readyState === "complete") {
    onWindowLoad();
  } else {
    window.addEventListener("load", onWindowLoad, { once: true });
  }

  // ── Public API ────────────────────────────────────────────────────────────
  resize();

  return {
    resize,
    setMouse(x, y) {
      mouseX = x;
      mouseY = y;
      mouseActive = true;
    },
    clearMouse() {
      mouseActive = false;
      mouseX = -10000;
      mouseY = -10000;
    },
    pauseIfHidden() {
      if (document.visibilityState === "hidden") {
        cancelAnimationFrame(raf);
      } else if (!cancelled && neuronCtx) {
        pulseStart = 0;
        animate();
      }
    },
    destroy() {
      cancelled = true;
      cancelAnimationFrame(raf);
      if (idleHandle) {
        if (window.cancelIdleCallback) window.cancelIdleCallback(idleHandle);
        else clearTimeout(idleHandle);
      }
      window.removeEventListener("load", onWindowLoad);
    },
  };
}
