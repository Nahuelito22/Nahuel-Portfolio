// src/config/particlesConfig.ts
export const particlesConfig = {
  background: {
    color: { value: "transparent" },
  },
  fpsLimit: 120,
  // ESTA PARTE ES CLAVE: detectsOn: "window" hace que funcione en toda la pantalla
  interactivity: {
    detectsOn: "window", 
    events: {
      onHover: {
        enable: true,
        mode: "grab", // Esto crea las líneas al mouse
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140, // Distancia para conectar con el mouse
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
      distance: 150, // Distancia para conectar entre partículas
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      // Aumentamos la velocidad a 2 para que sea vea el movimiento
      speed: 2, 
      direction: "none",
      random: false,
      straight: false,
      outModes: {
        default: "bounce",
      },
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80, // Un poco más de partículas
    },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};