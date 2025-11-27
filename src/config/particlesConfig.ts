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
        mode: ["grab", "trail"],
      },
      onClick: {
        enable: true,
        // 1. ¡LA MAGIA! Combinamos 'bubble' y 'connect' en el clic.
        mode: ["bubble", "connect"],
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.8,
          color: "#ffffff"
        }
      },
      bubble: {
        distance: 250,
        size: 8,
        duration: 2,
        opacity: 1,
      },
      // 2. Re-introducimos 'connect' para que funcione con el clic.
      //    No necesita configuración extra, usará las propiedades de las líneas base.
      connect: {},
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