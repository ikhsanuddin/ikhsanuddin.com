// Re-export only what dot-grid.ts uses. Dynamic-importing this module
// instead of "pixi.js" lets Rollup tree-shake the rest of the library.
export {
  Application,
  Color,
  Graphics,
  Particle,
  ParticleContainer,
  Rectangle,
  isWebGLSupported,
} from "pixi.js";
