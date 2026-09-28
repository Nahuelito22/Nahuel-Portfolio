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
  /** Periodo legible, igual que en Experiencia. */
  period: string;
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
    period: "2025 — 2026",
    // El maximo que alcanzo. Va en pasado: no envejece.
    metrics: [
      { value: "5", labelKey: "case.metrics.gyms" },
      { value: "300", labelKey: "case.metrics.students" },
    ],
    testimonialAuthors: ["Titan Gym", "Plena Forma", "Evolución Sport"],
    content: {
      es: {
        tagline:
          "Del cuaderno del mostrador a un panel donde el dueño ve su negocio completo.",
        metaTitle:
          "AstroFit: caso de estudio | Matías Nahuel Ghilardi",
        metaDescription:
          "Cómo un gimnasio pasó del cuaderno donde anotaba quién debía la cuota a gestionar alumnos, pagos y asistencias en un solo lugar. Llegó a 5 gimnasios y 300 alumnos, y en 2026 lo vendimos.",
        problem:
          "Un gimnasio de barrio anota en un cuaderno quién pagó la cuota y quién no. Funciona hasta que dejan de ser veinte alumnos. Después ya nadie sabe con certeza quién está al día, quién viene a entrenar y cuánto entró en el mes. Las decisiones del negocio —si conviene tomar otro profesor, si hay que ajustar la cuota, por qué este mes entró menos— se terminan tomando a ojo.",
        solution:
          "AstroFit reemplaza el cuaderno. Cada alumno tiene su ficha, las cuotas quedan registradas al cobrarlas y la asistencia se toma con un código QR en la puerta. El dueño abre el panel y ve de una sola vez lo que antes tenía que reconstruir de memoria: quién debe, quién viene y cuánto facturó.",
        result:
          "Llegó a 5 gimnasios y 300 alumnos. El crecimiento dejó de ser un problema de administración: sumar alumnos no significaba sumar planillas. Cuando uno de los gimnasios pidió que los números de la caja no quedaran a la vista de quien pasa por el mostrador, la función estuvo lista en días. En 2026 lo vendimos, y hasta diciembre acompaño la transferencia técnica al comprador.",
        stackNote:
          "Construido con Astro, Supabase y TypeScript. Los flujos que no pueden fallar —cobrar una cuota, dar de alta un alumno, registrar una asistencia— están cubiertos con pruebas automatizadas en Playwright. En la práctica significa que una mejora nueva no rompe lo que ya venía funcionando.",
      },
      en: {
        tagline:
          "From the notebook on the counter to a dashboard where the owner sees the whole business.",
        metaTitle: "AstroFit: case study | Matías Nahuel Ghilardi",
        metaDescription:
          "How a gym went from a notebook tracking who owed their monthly fee to managing members, payments and attendance in one place. It grew to 5 gyms and 300 members, and in 2026 we sold it.",
        problem:
          "A neighbourhood gym writes down who paid their monthly fee and who didn't in a paper notebook. That works until there are more than twenty members. After that, nobody knows for certain who is up to date, who actually shows up, and how much came in this month. The business decisions — whether to hire another trainer, whether to adjust the fee, why this month was slower — end up being guesswork.",
        solution:
          "AstroFit replaces the notebook. Every member has a record, fees are logged as they're collected, and attendance is taken with a QR code at the door. The owner opens the dashboard and sees at a glance what used to be reconstructed from memory: who owes, who attends, and how much was billed.",
        result:
          "It grew to 5 gyms and 300 members. Growth stopped being an admin problem: adding members no longer meant adding spreadsheets. When one of the gyms asked for the till figures to be hidden from whoever is standing at the counter, the feature shipped in days. In 2026 we sold it, and until December I'm supporting the technical handover to the buyer.",
        stackNote:
          "Built with Astro, Supabase and TypeScript. The flows that cannot fail — collecting a fee, registering a member, logging attendance — are covered by automated Playwright tests. In practice that means a new improvement doesn't break what was already working.",
      },
    },
  },
  {
    slug: "hackathon-edutech",
    product: "Hackathon EduTech Mendoza",
    period: "2026",
    image: "/projects/Hackaton.webp",
    link: "https://www.hackathonedutech.com.ar/",
    stack: ["Astro", "Supabase", "TypeScript"],
    metrics: [
      { value: "+300", labelKey: "case.metrics.signups" },
      { value: "150", labelKey: "case.metrics.participants" },
      { value: "+40", labelKey: "case.metrics.mentors" },
    ],
    testimonialAuthors: [],
    content: {
      es: {
        tagline:
          "Me pidieron una landing para anunciar el evento. Propuse la plataforma completa, y el evento entero corrió ahí.",
        metaTitle: "Hackathon EduTech Mendoza: caso de estudio | Matías Nahuel Ghilardi",
        metaDescription:
          "La plataforma de la 2ª Hackathon EduTech Mendoza: inscripciones, entregas, mentores y jurado en un solo lugar, con una vista para cada rol. Más de 300 inscriptos, 150 participantes y más de 40 mentores y jurados.",
        problem:
          "Una hackathon tiene cuatro públicos que necesitan cosas distintas al mismo tiempo: los equipos se inscriben y entregan su proyecto, los mentores tienen que saber a quién acompañan, el jurado evalúa y la organización necesita ver todo junto. Los organizadores me pidieron una landing para anunciar el evento. Pero una landing no resolvía lo difícil: todo lo que pasa después de que alguien se inscribe.",
        solution:
          "Propuse construir la plataforma completa, y la desarrollé como parte del staff técnico. Cada rol entra y ve solo lo suyo: los equipos se inscriben y suben su proyecto, cada mentor ve los equipos que le tocan, el jurado evalúa desde su propio panel y la organización ve el evento completo en un solo lugar.",
        result:
          "La 2ª edición corrió entera sobre la plataforma: más de 300 inscriptos, 150 participantes y más de 40 mentores y jurados. El evento tuvo cobertura en MDZ, que me entrevistó.",
        stackNote:
          "Construida con Astro, Supabase y TypeScript, el mismo stack que AstroFit, ya probado en producción.",
      },
      en: {
        tagline:
          "They asked me for a landing page to announce the event. I proposed the whole platform, and the entire event ran on it.",
        metaTitle: "Hackathon EduTech Mendoza: case study | Matías Nahuel Ghilardi",
        metaDescription:
          "The platform behind the 2nd Hackathon EduTech Mendoza: registrations, submissions, mentors and jury in one place, with a view for each role. Over 300 sign-ups, 150 participants and over 40 mentors and judges.",
        problem:
          "A hackathon has four audiences who need different things at the same time: teams register and submit their project, mentors need to know who they are supporting, the jury scores, and the organisers need to see it all together. The organisers asked me for a landing page to announce the event. But a landing page didn't solve the hard part: everything that happens after someone signs up.",
        solution:
          "I proposed building the full platform and developed it as part of the technical staff. Each role logs in and sees only what's theirs: teams register and upload their project, each mentor sees the teams assigned to them, the jury scores from its own panel, and the organisers see the whole event in one place.",
        result:
          "The 2nd edition ran entirely on the platform: over 300 sign-ups, 150 participants and over 40 mentors and judges. The event was covered by MDZ, who interviewed me.",
        stackNote:
          "Built with Astro, Supabase and TypeScript, the same stack as AstroFit, already proven in production.",
      },
    },
  },
  {
    slug: "nimbus-ai",
    product: "Nimbus AI",
    period: "2025 — 2026",
    image: "/projects/nimbus-ai.webp",
    link: "https://nimbus-ai-mdz.vercel.app/",
    stack: ["Python", "TensorFlow / Keras", "LSTM / RNN / CNN", "Scikit-learn", "Pandas", "FastAPI", "React", "PostgreSQL", "Docker"],
    // Metricas del README del repo (modelo v3.1, sobre el 20% de prueba).
    metrics: [
      { value: "100%", labelKey: "case.metrics.recall" },
      { value: "24", labelKey: "case.metrics.years" },
      { value: "5", labelKey: "case.metrics.dashboards" },
    ],
    testimonialAuthors: [],
    content: {
      es: {
        tagline:
          "Un sistema de alerta temprana de granizo para Mendoza, que cruza datos del clima con imágenes satelitales.",
        metaTitle: "Nimbus AI: caso de estudio | Matías Nahuel Ghilardi",
        metaDescription:
          "Cómo construí un modelo que predice granizo en Mendoza combinando 24 años de datos climáticos con imágenes del satélite GOES-16, y lo puse en producción con una plataforma para cada rol.",
        problem:
          "En Mendoza el granizo arruina cosechas enteras en minutos, además de autos y techos. Las alertas que existen suelen ser generales: avisan que puede haber tormenta, pero no con la anticipación ni la precisión que necesita alguien que tiene que decidir si cubrir un cultivo. Y el dato más difícil de conseguir ni siquiera existía ordenado: en qué días de los últimos años cayó granizo de verdad.",
        solution:
          "Armé el dataset desde cero: registros climáticos de Mendoza de 2000 a 2024, más variables del clima sumadas desde una API meteorológica, y los días con granizo reconstruidos a mano, cruzando un portal del clima con noticias y registros históricos. A partir de 2017 sumé imágenes del satélite GOES-16 para cada fecha. Con eso entrené un modelo que mira las dos cosas a la vez, los números del clima y la imagen, y devuelve una probabilidad de granizo. Encima construí la plataforma: un panel distinto para Defensa Civil, meteorólogos, científicos de datos, administradores y público general.",
        result:
          "Hasta donde pude relevar, el dataset resultante es el registro etiquetado de granizo más grande de Argentina, y no encontré otro predictor que combine datos del clima con imágenes satelitales de esta forma. En los datos de prueba, el modelo detectó todos los eventos de granizo reales. El costo de esa decisión es explícito: de cada siete alertas, una termina en granizo. Lo ajusté así a propósito, porque una falsa alarma cuesta mucho menos que un granizo sin aviso. El modelo está en producción como API y la plataforma está publicada.",
        stackNote:
          "El modelo está hecho con TensorFlow y Keras, combinando redes recurrentes (RNN y LSTM) para las series del clima y convolucionales (CNN) para las imágenes satelitales, con Scikit-learn y Pandas para preparar los datos. La API es FastAPI en un contenedor Docker, y la plataforma usa React y PostgreSQL. Todo el proceso, desde la limpieza de datos hasta las métricas, está documentado en el repositorio.",
      },
      en: {
        tagline:
          "An early warning system for hail in Mendoza that combines weather data with satellite imagery.",
        metaTitle: "Nimbus AI: case study | Matías Nahuel Ghilardi",
        metaDescription:
          "How I built a model that predicts hail in Mendoza by combining 24 years of weather data with GOES-16 satellite imagery, and shipped it to production with a platform for each role.",
        problem:
          "In Mendoza, hail can wipe out an entire harvest in minutes, not to mention cars and roofs. Existing warnings tend to be broad: they say a storm may come, but not with the lead time or precision someone needs to decide whether to cover a crop. And the hardest data point didn't even exist in usable form: on which days over the past years hail actually fell.",
        solution:
          "I built the dataset from scratch: Mendoza weather records from 2000 to 2024, extra variables pulled from a weather API, and hail days rebuilt by hand by cross-checking a weather portal against news and historical records. From 2017 on I added GOES-16 satellite images for each date. With that I trained a model that looks at both at once, the weather numbers and the image, and returns a probability of hail. On top of it I built the platform: a separate dashboard for civil defence, meteorologists, data scientists, admins and the general public.",
        result:
          "As far as I could find, the resulting dataset is the largest labelled hail record in Argentina, and I found no other predictor that combines weather data with satellite imagery this way. On the test data, the model caught every real hail event. The cost of that choice is explicit: one in seven alerts ends in hail. I tuned it that way on purpose, because a false alarm costs far less than hail with no warning. The model runs in production as an API and the platform is live.",
        stackNote:
          "The model is built with TensorFlow and Keras, combining recurrent networks (RNN and LSTM) for the weather series and convolutional networks (CNN) for the satellite images, with Scikit-learn and Pandas for data preparation. The API is FastAPI in a Docker container, and the platform uses React and PostgreSQL. The whole process, from data cleaning to metrics, is documented in the repository.",
      },
    },
  },
];

/** Busca un caso por slug. Devuelve undefined si no existe. */
export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
