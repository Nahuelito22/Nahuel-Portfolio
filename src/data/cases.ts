// src/data/cases.ts
//
// Casos de estudio. A diferencia de `projects.ts` y `production.ts`, que duplican
// TODO el objeto por idioma, aca los datos que NO son texto traducible (slug,
// imagen, link, stack, valores de metricas, referencias a testimonios) viven una
// sola vez, y solo la prosa esta por idioma en `content`.
//
// Es a proposito: es el patron que el punto 4 del BACKLOG propone para el resto.
// Un link o una metrica no pueden divergir entre es/en porque existen una vez.
//
// REGLA: los numeros de `metrics` tienen que ser reales y verificables, igual que
// los testimonios. Si no hay dato, no se inventa un metrica: se omite.

export interface CaseMetric {
  /** El numero se escribe una vez; no se traduce. */
  value: string;
  /** Clave i18n de la etiqueta. */
  labelKey: string;
}

export interface CaseContent {
  /** Bajada corta debajo del titulo. */
  tagline: string;
  /** <title> de la pagina. */
  metaTitle: string;
  /** meta description y og:description. */
  metaDescription: string;
  /** Bloque 1: el dolor del cliente, antes de que exista el producto. */
  problem: string;
  /** Bloque 2: que se construyo. Sin stack, sin jerga. */
  solution: string;
  /** Bloque 3: que cambio. Con numeros reales. */
  result: string;
  /** Bloque 4: el stack, traducido a por que le conviene al cliente. */
  stackNote: string;
}

export interface CaseStudy {
  /** Ultimo segmento de la URL: /casos/<slug> y /en/cases/<slug>. */
  slug: string;
  /** Nombre del producto. No se traduce. */
  product: string;
  image: string;
  link?: string;
  /** Lista plana de tecnologias. Una sola vez. */
  stack: string[];
  metrics: CaseMetric[];
  /**
   * `author` de los testimonios de `testimonials.ts` que se muestran en este
   * caso. Se referencian en vez de copiarse: la cita vive en un solo lugar.
   */
  testimonialAuthors: string[];
  content: Record<"es" | "en", CaseContent>;
}

export const CASES: CaseStudy[] = [
  {
    slug: "astrofit",
    product: "AstroFit",
    image: "/projects/astrofit.webp",
    link: "https://www.astrofitapp.com.ar/",
    stack: ["Astro", "Supabase", "TypeScript", "Playwright"],
    metrics: [
      { value: "5", labelKey: "case.metrics.gyms" },
      { value: "250+", labelKey: "case.metrics.students" },
    ],
    testimonialAuthors: ["Titan Gym", "Plena Forma", "Evolución Sport"],
    content: {
      es: {
        tagline:
          "Del cuaderno del mostrador a un panel donde el dueño ve su negocio completo.",
        metaTitle:
          "AstroFit: caso de estudio | Matías Nahuel Ghilardi",
        metaDescription:
          "Cómo un gimnasio pasó del cuaderno donde anotaba quién debía la cuota a gestionar alumnos, pagos y asistencias en un solo lugar. Hoy lo usan 5 gimnasios y más de 250 alumnos.",
        problem:
          "Un gimnasio de barrio anota en un cuaderno quién pagó la cuota y quién no. Funciona hasta que dejan de ser veinte alumnos. Después ya nadie sabe con certeza quién está al día, quién viene a entrenar y cuánto entró en el mes. Las decisiones del negocio —si conviene tomar otro profesor, si hay que ajustar la cuota, por qué este mes entró menos— se terminan tomando a ojo.",
        solution:
          "AstroFit reemplaza el cuaderno. Cada alumno tiene su ficha, las cuotas quedan registradas al cobrarlas y la asistencia se toma con un código QR en la puerta. El dueño abre el panel y ve de una sola vez lo que antes tenía que reconstruir de memoria: quién debe, quién viene y cuánto facturó.",
        result:
          "Hoy lo usan 5 gimnasios y más de 250 alumnos. El crecimiento dejó de ser un problema de administración: sumar alumnos no significa sumar planillas. Y cuando uno de los gimnasios pidió que los números de la caja no quedaran a la vista de quien pasa por el mostrador, la función estuvo lista en días.",
        stackNote:
          "Construido con Astro, Supabase y TypeScript. Los flujos que no pueden fallar —cobrar una cuota, dar de alta un alumno, registrar una asistencia— están cubiertos con pruebas automatizadas en Playwright. En la práctica significa que una mejora nueva no rompe lo que ya venía funcionando.",
      },
      en: {
        tagline:
          "From the notebook on the counter to a dashboard where the owner sees the whole business.",
        metaTitle: "AstroFit: case study | Matías Nahuel Ghilardi",
        metaDescription:
          "How a gym went from a notebook tracking who owed their monthly fee to managing members, payments and attendance in one place. Now used by 5 gyms and over 250 members.",
        problem:
          "A neighbourhood gym writes down who paid their monthly fee and who didn't in a paper notebook. That works until there are more than twenty members. After that, nobody knows for certain who is up to date, who actually shows up, and how much came in this month. The business decisions — whether to hire another trainer, whether to adjust the fee, why this month was slower — end up being guesswork.",
        solution:
          "AstroFit replaces the notebook. Every member has a record, fees are logged as they're collected, and attendance is taken with a QR code at the door. The owner opens the dashboard and sees at a glance what used to be reconstructed from memory: who owes, who attends, and how much was billed.",
        result:
          "It is now used by 5 gyms and over 250 members. Growth stopped being an admin problem: adding members no longer means adding spreadsheets. And when one of the gyms asked for the till figures to be hidden from whoever is standing at the counter, the feature shipped in days.",
        stackNote:
          "Built with Astro, Supabase and TypeScript. The flows that cannot fail — collecting a fee, registering a member, logging attendance — are covered by automated Playwright tests. In practice that means a new improvement doesn't break what was already working.",
      },
    },
  },
];

/** Busca un caso por slug. Devuelve undefined si no existe. */
export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
