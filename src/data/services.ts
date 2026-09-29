// src/data/services.ts
//
// Que puedo hacer por alguien que llega buscando ayuda. Sin precios a
// proposito: un "desde USD 150" posiciona como opcion barata y encasilla el
// alcance antes de la primera charla.
//
// REGLA: cada servicio tiene que poder respaldarse con algo de Experiencia o
// Casos. El de plataformas heredadas se ofrece como servicio, sin contar el
// caso de ningun cliente (ver la memoria del NDA).

type Lang = "es" | "en";

export interface Service {
  title: Record<Lang, string>;
  description: Record<Lang, string>;
}

export const SERVICES: Service[] = [
  {
    title: {
      es: "Productos web y SaaS a medida",
      en: "Custom web products and SaaS",
    },
    description: {
      es: "De la idea a producción: diseño el sistema, lo construyo, sumo pagos y usuarios, y lo dejo funcionando con pruebas que evitan que una mejora rompa lo anterior.",
      en: "From idea to production: I design the system, build it, add payments and users, and leave it running with tests so a new feature doesn't break what already works.",
    },
  },
  {
    title: {
      es: "Apps móviles",
      en: "Mobile apps",
    },
    description: {
      es: "Apps en React Native para Android e iOS, con backend propio, pagos dentro de la app y publicación en las tiendas.",
      en: "React Native apps for Android and iOS, with their own backend, in-app payments and app store publishing.",
    },
  },
  {
    title: {
      es: "Datos e IA aplicada",
      en: "Data and applied AI",
    },
    description: {
      es: "Modelos predictivos, dashboards y asistentes con IA integrados a tu producto, pensados para tomar decisiones y no solo para verse bien.",
      en: "Predictive models, dashboards and AI assistants built into your product, designed to support decisions rather than just look good.",
    },
  },
  {
    title: {
      es: "Rescate de plataformas heredadas",
      en: "Rescuing inherited platforms",
    },
    description: {
      es: "Cuando un producto quedó a medio camino o el proveedor anterior ya no está: diagnóstico, estabilización y un traspaso ordenado para que vuelva a avanzar.",
      en: "When a product was left halfway or the previous vendor is gone: diagnosis, stabilisation and an orderly handover so it can move forward again.",
    },
  },
];
