import type { ISourceOptions } from "tsparticles-engine";

export const particlesConfig: ISourceOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#00ffff",
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
      color: "#4a5568",
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onHover: {
        enable: true,
        // 1. CAMBIO: Usamos 'grab' para conectar al puntero, y mantenemos 'trail'.
        mode: ["grab", "trail"],
      },
      onClick: {
        enable: true,
        // 2. CAMBIO: Usamos 'bubble' para el efecto de pulso.
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      // 3. NUEVO: Configuración para 'grab'.
      grab: {
        distance: 200, // La distancia a la que el mouse "agarra" las partículas
        links: {
          opacity: 0.8, // Hacemos la línea hacia el mouse bien visible
          color: "#ffffff"
        }
      },
      // 4. NUEVO: Configuración para el 'bubble' (pulso).
      bubble: {
        distance: 250, // El radio del pulso
        size: 8,       // El tamaño al que crecen las partículas
        duration: 2,   // Cuánto dura el efecto en segundos
        opacity: 1,    // La opacidad máxima durante el pulso
      },
      // Eliminamos 'push' y 'connect' que ya no se usan en los eventos.
      trail: {
        delay: 0.005,
        quantity: 2,
        particles: {
          color: {
            value: "#ffffff",
          },
          size: {
            value: 2,
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0,
              destroy: "max",
            },
          },
          move: {
            enable: false,
          }
        }
      }
    },
  },
  detectRetina: true,
  background: {
    color: "transparent",
  },
};
