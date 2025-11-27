import type { ISourceOptions } from "tsparticles-engine";

export const particlesConfig: ISourceOptions = {
  // No usaremos fullScreen aquí, ya que tú controlas el div con CSS.
  // Dejarlo en blanco es lo correcto.
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#00ffff", // ai-neon
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detectsOn: "window", // Detecta sobre toda la ventana
    events: {
      onHover: {
        enable: true,
        mode: "connect", // El modo que crea la red
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      connect: {
        distance: 80,
        links: {
          opacity: 0.8,
        },
        radius: 100,
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
  background: {
    color: "transparent", // Transparente para que se vea el fondo de tu body
  },
};
