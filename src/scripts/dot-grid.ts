// Pointer-reactive dot grid rendered with PixiJS v8.
// Mounts on every [data-dot-grid] element; the markup side (host element
// plus the static grid.svg fallback layer) lives in DotGrid.astro.
//
// PixiJS is imported on demand so visitors with reduced motion or without
// WebGL never download it. Whenever Pixi cannot start, the static fallback
// inside the host element simply stays visible.

import type { Particle as ParticleInstance, Ticker } from "pixi.js";

type Pixi = typeof import("./pixi-subset");

const SPACING = 28; // grid cell size, CSS px
const DOT_RADIUS = 1.6; // rendered dot radius, CSS px
const TEXTURE_RADIUS = 8; // baked texture radius; particles scale down from it
const POINTER_RADIUS = 150; // pointer influence radius, CSS px
const PUSH = 24; // max displacement, CSS px
const SPRING = 0.06; // spring stiffness per 60fps frame
const DAMPING = 0.82; // velocity kept per 60fps frame
const WAVE_AMPLITUDE = 1.4; // ambient drift, CSS px
const ACTIVE_ALPHA = 0.9;
const POINTER_GONE = -1e9;
const ACTIVE_FPS = 60;
const IDLE_FPS = 30; // the 1.4px ambient drift is indistinguishable at 30fps
const IDLE_AFTER_MS = 4000;

export function mountDotGrids(): void {
  const hosts = document.querySelectorAll<HTMLElement>("[data-dot-grid]");
  if (hosts.length === 0) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) return;

  const start = (): void => {
    void (async () => {
      let pixi: Pixi;
      try {
        pixi = await import("./pixi-subset");
      } catch {
        return;
      }
      // true = reject software rasterizers; a janky 5fps background is worse
      // than the static fallback. isWebGLSupported memoizes its first result,
      // so this strict call also keeps pixi's own later check consistent.
      if (!pixi.isWebGLSupported(true)) return;
      for (const host of hosts) {
        mount(pixi, host, reducedMotion).catch(() => {
          // Init failed: keep the static fallback.
        });
      }
    })();
  };
  // Wait for an idle moment so the pixi download and WebGL setup never
  // compete with the page's own loading. The crossfade hides the late start.
  if ("requestIdleCallback" in window) {
    requestIdleCallback(start, { timeout: 2000 });
  } else {
    setTimeout(start, 300);
  }
}

async function mount(
  pixi: Pixi,
  host: HTMLElement,
  reducedMotion: MediaQueryList,
): Promise<void> {
  if (host.dataset.dotGridMounted) return;
  host.dataset.dotGridMounted = "true";

  const { Application, Color, Graphics, Particle, ParticleContainer, Rectangle } =
    pixi;

  const app = new Application();
  await app.init({
    width: Math.max(1, host.clientWidth),
    height: Math.max(1, host.clientHeight),
    backgroundAlpha: 0,
    antialias: false,
    resolution: Math.min(window.devicePixelRatio || 1, 2),
    autoDensity: true,
    // Array form means WebGL or nothing: no silent WebGPU/canvas fallback.
    // If WebGL is unavailable init throws and the catch above keeps the
    // static fallback.
    preference: ["webgl"],
    eventFeatures: { move: false, globalMove: false, click: false, wheel: false },
  });
  app.ticker.maxFPS = ACTIVE_FPS;

  const canvas = app.canvas;
  canvas.style.position = "absolute";
  canvas.style.inset = "0";
  canvas.style.pointerEvents = "none";
  canvas.style.opacity = "0";
  canvas.style.transition = "opacity 0.9s ease";
  host.appendChild(canvas);

  // One white circle baked to a texture; every dot is a tinted, scaled copy,
  // so the whole grid renders as a single draw call.
  const dotShape = new Graphics().circle(0, 0, TEXTURE_RADIUS).fill(0xffffff);
  const texture = app.renderer.generateTexture({
    target: dotShape,
    resolution: 2,
    antialias: true,
  });
  dotShape.destroy();

  const container = new ParticleContainer({
    texture,
    dynamicProperties: { position: true, vertex: true, color: true },
  });
  app.stage.addChild(container);

  // Palette, refreshed on theme toggle (html.dark flips, no event fires).
  let baseR = 0;
  let baseG = 0;
  let baseB = 0;
  let baseAlpha = 0.2;
  let activeR = 0;
  let activeG = 0;
  let activeB = 0;

  const cssColor = (name: string, fallback: string): number => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();
    return new Color(value || fallback).toNumber();
  };

  const applyTheme = (): void => {
    const dark = document.documentElement.classList.contains("dark");
    const base = dark ? 0xffffff : cssColor("--color-light-accent", "#521c0d");
    const active = dark
      ? cssColor("--color-dark-accent", "#f2613f")
      : cssColor("--color-light-secondary", "#d5451b");
    baseAlpha = dark ? 0.2 : 0.28;
    baseR = (base >> 16) & 0xff;
    baseG = (base >> 8) & 0xff;
    baseB = base & 0xff;
    activeR = (active >> 16) & 0xff;
    activeG = (active >> 8) & 0xff;
    activeB = active & 0xff;
  };
  applyTheme();

  // Per-dot state. Particles render at home + spring offset + ambient wave.
  let count = 0;
  let particles: ParticleInstance[] = [];
  let homeX = new Float32Array(0);
  let homeY = new Float32Array(0);
  let offsetX = new Float32Array(0);
  let offsetY = new Float32Array(0);
  let velocityX = new Float32Array(0);
  let velocityY = new Float32Array(0);
  let phase = new Float32Array(0);
  let excitement = new Float32Array(0);

  const baseScale = DOT_RADIUS / TEXTURE_RADIUS;

  const buildGrid = (): void => {
    const width = app.screen.width;
    const height = app.screen.height;
    const cols = Math.max(1, Math.ceil(width / SPACING) + 1);
    const rows = Math.max(1, Math.ceil(height / SPACING) + 1);
    count = cols * rows;

    particles = new Array(count);
    homeX = new Float32Array(count);
    homeY = new Float32Array(count);
    offsetX = new Float32Array(count);
    offsetY = new Float32Array(count);
    velocityX = new Float32Array(count);
    velocityY = new Float32Array(count);
    phase = new Float32Array(count);
    excitement = new Float32Array(count);

    const marginX = (width - (cols - 1) * SPACING) / 2;
    const marginY = (height - (rows - 1) * SPACING) / 2;
    const tint = (baseR << 16) | (baseG << 8) | baseB;

    container.particleChildren.length = 0;
    for (let i = 0; i < count; i++) {
      const x = marginX + (i % cols) * SPACING;
      const y = marginY + Math.floor(i / cols) * SPACING;
      homeX[i] = x;
      homeY[i] = y;
      phase[i] = x * 0.011 + y * 0.013 + Math.random() * 0.6;
      const particle = new Particle({
        texture,
        x,
        y,
        anchorX: 0.5,
        anchorY: 0.5,
        scaleX: baseScale,
        scaleY: baseScale,
        tint,
        alpha: baseAlpha,
      });
      particles[i] = particle;
      container.addParticle(particle);
    }
    container.boundsArea = new Rectangle(0, 0, width, height);
    container.update();
  };
  buildGrid();

  // Pointer state, in host-local coordinates derived from a cached rect.
  // The rect is refreshed on scroll/resize/visibility instead of per frame
  // so the tick never queries layout.
  let rect = host.getBoundingClientRect();
  const refreshRect = (): void => {
    rect = host.getBoundingClientRect();
  };
  window.addEventListener("scroll", refreshRect, { passive: true });

  let clientX = POINTER_GONE;
  let clientY = POINTER_GONE;
  let lastActivity = performance.now();
  const onPointerMove = (event: PointerEvent): void => {
    clientX = event.clientX;
    clientY = event.clientY;
    lastActivity = performance.now();
    if (app.ticker.maxFPS !== ACTIVE_FPS) app.ticker.maxFPS = ACTIVE_FPS;
  };
  const onPointerGone = (): void => {
    clientX = POINTER_GONE;
    clientY = POINTER_GONE;
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("pointerdown", onPointerMove, { passive: true });
  document.documentElement.addEventListener("pointerleave", onPointerGone);
  window.addEventListener("blur", onPointerGone);

  let elapsed = 0;
  const tick = (ticker: Ticker): void => {
    // deltaTime is ~1 at 60fps; clamp so a long frame gap cannot fling dots.
    const dt = Math.min(ticker.deltaTime, 4);
    elapsed += ticker.deltaMS;

    const now = performance.now();
    if (now - lastActivity > IDLE_AFTER_MS && app.ticker.maxFPS !== IDLE_FPS) {
      app.ticker.maxFPS = IDLE_FPS;
    }

    const pointerX = clientX - rect.left;
    const pointerY = clientY - rect.top;

    const spring = SPRING * dt;
    const damping = Math.pow(DAMPING, dt);
    const ease = 1 - Math.pow(0.86, dt);
    const time = elapsed * 0.001;
    const radiusSq = POINTER_RADIUS * POINTER_RADIUS;

    for (let i = 0; i < count; i++) {
      const hx = homeX[i];
      const hy = homeY[i];

      let targetX = 0;
      let targetY = 0;
      let influence = 0;
      const dx = hx - pointerX;
      const dy = hy - pointerY;
      const distSq = dx * dx + dy * dy;
      if (distSq < radiusSq) {
        const dist = Math.sqrt(distSq) || 1;
        const falloff = 1 - dist / POINTER_RADIUS;
        influence = falloff * falloff;
        targetX = (dx / dist) * PUSH * influence;
        targetY = (dy / dist) * PUSH * influence;
      }

      velocityX[i] = (velocityX[i] + (targetX - offsetX[i]) * spring) * damping;
      velocityY[i] = (velocityY[i] + (targetY - offsetY[i]) * spring) * damping;
      offsetX[i] += velocityX[i] * dt;
      offsetY[i] += velocityY[i] * dt;
      excitement[i] += (influence - excitement[i]) * ease;
      const heat = excitement[i];

      const particle = particles[i];
      particle.x =
        hx + offsetX[i] + Math.sin(time * 0.8 + phase[i]) * WAVE_AMPLITUDE;
      particle.y =
        hy + offsetY[i] + Math.cos(time * 0.7 + phase[i] * 1.7) * WAVE_AMPLITUDE;
      particle.alpha = baseAlpha + (ACTIVE_ALPHA - baseAlpha) * heat;
      particle.tint =
        ((baseR + (activeR - baseR) * heat) << 16) |
        ((baseG + (activeG - baseG) * heat) << 8) |
        (baseB + (activeB - baseB) * heat);
      const scale = baseScale * (1 + heat);
      particle.scaleX = scale;
      particle.scaleY = scale;
    }
  };
  app.ticker.add(tick);

  // Put every dot back at rest. Used when reduced motion turns on, so the
  // frozen frame is a calm grid rather than dots stuck mid-displacement.
  const resetParticles = (): void => {
    offsetX.fill(0);
    offsetY.fill(0);
    velocityX.fill(0);
    velocityY.fill(0);
    excitement.fill(0);
    const tint = (baseR << 16) | (baseG << 8) | baseB;
    for (let i = 0; i < count; i++) {
      const particle = particles[i];
      particle.x = homeX[i];
      particle.y = homeY[i];
      particle.alpha = baseAlpha;
      particle.tint = tint;
      particle.scaleX = baseScale;
      particle.scaleY = baseScale;
    }
  };

  // Pause when the section is offscreen or the user enables reduced motion.
  let onScreen = true;
  let motionOk = true;
  const syncRunning = (): void => {
    if (onScreen && motionOk) {
      app.start();
    } else {
      app.stop();
      if (!motionOk) {
        resetParticles();
        app.render();
      }
    }
  };
  const intersection = new IntersectionObserver((entries) => {
    // Records arrive oldest-first; only the newest state matters.
    onScreen = entries[entries.length - 1]?.isIntersecting ?? true;
    refreshRect();
    syncRunning();
  });
  intersection.observe(host);
  reducedMotion.addEventListener("change", () => {
    motionOk = !reducedMotion.matches;
    syncRunning();
  });

  const themeObserver = new MutationObserver(() => {
    applyTheme();
    // A stopped app never repaints, so apply the palette to the frozen frame.
    if (!app.ticker.started) {
      resetParticles();
      app.render();
    }
  });
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // The ResizePlugin only listens to window resize; observe the host instead
  // so layout shifts are caught too. Resize the canvas right away, rebuild
  // the grid once the size settles. Resizing clears the drawing buffer, so
  // when the ticker is stopped render one frame by hand or the host goes
  // blank (the fallback layer was faded out at mount).
  let rebuildTimer: ReturnType<typeof setTimeout> | undefined;
  const resizeObserver = new ResizeObserver(() => {
    const width = Math.max(1, host.clientWidth);
    const height = Math.max(1, host.clientHeight);
    refreshRect();
    if (width === app.screen.width && height === app.screen.height) return;
    app.renderer.resize(width, height);
    if (!app.ticker.started) app.render();
    clearTimeout(rebuildTimer);
    rebuildTimer = setTimeout(() => {
      buildGrid();
      if (!app.ticker.started) app.render();
    }, 150);
  });
  resizeObserver.observe(host);

  // Crossfade: dots in, static fallback grid out. Double rAF so the canvas
  // gets one painted frame at opacity 0 first; otherwise a newly inserted
  // element has no before-change style and the transition never runs.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
      const fallback = host.querySelector<HTMLElement>("[data-dot-grid-fallback]");
      if (fallback) {
        fallback.style.transition = "opacity 0.9s ease";
        fallback.style.opacity = "0";
      }
    });
  });
}
