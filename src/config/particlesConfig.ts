import type { ISourceOptions } from "tsparticles-engine";

// Las particulas son parte de la identidad del sitio: no se apagan (ni por
// rendimiento ni por prefers-reduced-motion) sin consultarlo. En el rediseno se
// bajaron de tono: el cian apagado del acento, menos densidad y mas lentas, para
// que acompanien la lectura en vez de competir con ella.
const ACCENT = "#5CC8D6";

export const particlesConfig: ISourceOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: ACCENT,
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4,
      random: true,
    },
    size: {
      value: 2.2,
      random: true,
    },
    links: {
      enable: true,
      distance: 140,
      color: ACCENT,
      opacity: 0.12,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.35,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 0.35,
          color: ACCENT,
        },
      },
    },
  },
  detectRetina: true,
  background: {
    color: "transparent",
  },
};
