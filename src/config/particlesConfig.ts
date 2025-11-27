// src/config/particlesConfig.ts
export const particlesConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window", // IMPORTANTE
    events: {
      onHover: {
        enable: true,
        mode: "grab", // Volvemos a conectar líneas (Efecto Neuronal)
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200, // Aumenté un poco la distancia para que sea más fácil de notar
        links: { opacity: 1 },
      },
      push: {
        quantity: 4,
      },
    },
  },
  particles: {
    color: { value: "#00f3ff" },
    links: {
      color: "#a8a8b8",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1.5, // Velocidad elegante
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce",
      },
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80,
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};