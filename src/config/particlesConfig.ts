// src/config/particlesConfig.ts
import type { ISourceOptions } from "tsparticles-engine";

export const particlesConfig: ISourceOptions = {
  background: {
    color: { value: "transparent" }, // Transparente para ver el color de fondo de tu CSS
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab", // Efecto de conectar neuronas al pasar el mouse
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
      speed: 1, // Movimiento lento y sutil
    },
    number: {
      density: { enable: true, area: 800 },
      value: 60, // Cantidad de nodos
    },
    opacity: { value: 0.3 },
    shape: { type: "circle" }, // Nodos circulares
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};