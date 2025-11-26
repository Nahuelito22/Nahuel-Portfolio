// src/config/particlesConfig.ts

// NOTA: Quitamos la importación de "tsparticles-engine" para evitar errores de dependencias.
// Exportamos la configuración como un objeto simple.

export const particlesConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 140,
        links: { opacity: 1 },
      },
    },
  },
  particles: {
    color: { value: "#00f3ff" }, // Tu color ai-neon
    links: {
      color: "#a8a8b8", // Tu color chess-accent
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 60,
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};