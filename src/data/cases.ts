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
    period: "2024 — 2025",
    image: "/projects/nimbus-ai.webp",
    link: "https://nimbus-ai-mdz.vercel.app/",
    stack: ["Python", "TensorFlow / Keras", "Red densa + CNN", "Scikit-learn", "Pandas", "FastAPI", "React", "PostgreSQL", "Docker"],
    // Metricas del README del repo (modelo v3.1, sobre el 20% de prueba) y de
    // lo que conto Nahuel sobre el proyecto.
    metrics: [
      { value: "100%", labelKey: "case.metrics.recall" },
      { value: "24", labelKey: "case.metrics.years" },
      { value: "300+", labelKey: "case.metrics.hours" },
      { value: "5", labelKey: "case.metrics.dashboards" },
    ],
    testimonialAuthors: [],
    content: {
      es: {
        tagline:
          "Empezó con una pregunta en un micro a Tupungato, en medio de una tormenta de granizo. Terminó siendo un sistema de alerta temprana para Mendoza.",
        metaTitle: "Nimbus AI: caso de estudio | Matías Nahuel Ghilardi",
        metaDescription:
          "Cómo construí un predictor de granizo para Mendoza: 24 años de datos etiquetados a mano, imágenes satelitales y dos redes neuronales que combinan sus predicciones, con una plataforma para cada rol.",
        problem:
          "Iba en micro al instituto, en Tupungato, cuando se largó a caer granizo. En Mendoza eso significa cosechas arruinadas en minutos, autos y techos rotos. Me pregunté si existía alguna app que avisara con tiempo, y la respuesta fue casi que no. Después de meses leyendo papers y buscando datos, encontré un solo antecedente grande, con un dataset parcial. El problema de fondo no era el modelo: era que nadie tenía registrado, de forma ordenada, en qué días cayó granizo de verdad.",
        solution:
          "El proyecto tuvo dos etapas. La primera fue exploratoria: un análisis y un modelo no supervisado para aprobar el primer módulo de Ciencia de Datos en Coderhouse. La segunda fue mi proyecto de fin de año en la tecnicatura: un año entero y más de 300 horas. Armé el dataset juntando datos climáticos de varias fuentes, con scraping y verificación a mano, y etiqueté año por año los días con granizo de 2000 a 2024. Sumé imágenes del satélite GOES-16 desde que están disponibles. Con eso entrené dos redes: una densa que lee los datos del clima y una convolucional (CNN) que lee las imágenes, y sus predicciones se combinan en una sola probabilidad. Encima construí la plataforma, con un panel para cada rol: Defensa Civil, meteorólogos, científicos de datos, administración y público general.",
        result:
          "Hasta donde pude relevar, el dataset resultante es el registro etiquetado de granizo más grande de Argentina. En los datos de prueba, el modelo detectó todos los granizos reales, a cambio de que solo una de cada siete alertas termine en granizo. Lo ajusté así a propósito: una falsa alarma cuesta mucho menos que un granizo sin aviso. Hoy la plataforma está publicada y el servidor del modelo está pausado por costos, a la espera de Nimbus 2.0.",
        stackNote:
          "Las dos redes están hechas con TensorFlow y Keras: una red densa para los datos tabulares del clima y una CNN para las imágenes satelitales, con Scikit-learn y Pandas para preparar los datos. La API es FastAPI en un contenedor Docker, y la plataforma usa React y PostgreSQL. Todo el proceso, desde la limpieza de datos hasta las métricas, está documentado en el repositorio.",
      },
      en: {
        tagline:
          "It started with a question on a bus to Tupungato, in the middle of a hailstorm. It ended up as an early warning system for Mendoza.",
        metaTitle: "Nimbus AI: case study | Matías Nahuel Ghilardi",
        metaDescription:
          "How I built a hail predictor for Mendoza: 24 years of hand-labelled data, satellite imagery and two neural networks that combine their predictions, with a platform for each role.",
        problem:
          "I was on the bus to college in Tupungato when hail started pouring down. In Mendoza that means harvests ruined in minutes, dented cars and broken roofs. I wondered whether any app warned people in time, and the answer was: barely. After months of reading papers and hunting for data, I found a single major precedent, with a partial dataset. The real problem wasn't the model: nobody had an orderly record of which days hail actually fell.",
        solution:
          "The project had two stages. The first was exploratory: an analysis and an unsupervised model to pass the first Data Science module at Coderhouse. The second was my end-of-year project in the software degree: a full year and over 300 hours. I built the dataset by pulling weather data from several sources, with scraping and manual checks, and labelled hail days year by year from 2000 to 2024. I added GOES-16 satellite images from the point they became available. With that I trained two networks: a dense one that reads the weather data and a convolutional one (CNN) that reads the images, and their predictions are combined into a single probability. On top of it I built the platform, with a dashboard for each role: civil defence, meteorologists, data scientists, admins and the general public.",
        result:
          "As far as I could find, the resulting dataset is the largest labelled hail record in Argentina. On the test data, the model caught every real hail event, at the cost of only one in seven alerts ending in hail. I tuned it that way on purpose: a false alarm costs far less than hail with no warning. Today the platform is live and the model server is paused for cost reasons, waiting for Nimbus 2.0.",
        stackNote:
          "Both networks are built with TensorFlow and Keras: a dense network for the tabular weather data and a CNN for the satellite images, with Scikit-learn and Pandas for data preparation. The API is FastAPI in a Docker container, and the platform uses React and PostgreSQL. The whole process, from data cleaning to metrics, is documented in the repository.",
      },
    },
  },
];

/** Busca un caso por slug. Devuelve undefined si no existe. */
export function getCase(slug: string): CaseStudy | undefined {
  return CASES.find((c) => c.slug === slug);
}
