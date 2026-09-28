// src/data/experience.ts
//
// Linea de tiempo de la seccion Experiencia. Mismo patron que `cases.ts`: lo que
// no se traduce (fechas, stack, links, numeros) vive una sola vez, y solo la
// prosa esta por idioma en `content`.
//
// REGLAS
// - El cliente freelance en EE.UU. va anonimo hasta tener su autorizacion por
//   escrito. Mientras tanto, nada que permita identificarlo: ni nombre, ni logo,
//   ni links a la tienda. El repo es publico y las previews de Vercel tambien.
// - Del stack de un cliente bajo NDA se publica solo la lista plana de
//   tecnologias, nunca como se conectan entre si.
// - Los numeros de `facts` tienen que ser reales y poder explicarse si alguien
//   pregunta. Si no hay dato, se omite.

type Lang = "es" | "en";

export interface ExperienceFact {
  value: string;
  label: Record<Lang, string>;
}

export interface ExperienceLink {
  /** Por idioma: las subpaginas tienen otra ruta en ingles. */
  href: Record<Lang, string>;
  label: Record<Lang, string>;
  /** true si sale del sitio (se abre en otra pestaña). */
  external?: boolean;
}

export interface ExperienceContent {
  org: string;
  /** Rol a la derecha de la tarjeta. */
  role: string;
  /** Periodo legible. Las fechas no se traducen salvo "hoy". */
  period: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  /** El trabajo en curso lleva el marcador lleno en la linea de tiempo. */
  current?: boolean;
  /** Una entrada menor (la etapa industrial) se muestra mas compacta. */
  compact?: boolean;
  stack?: string[];
  facts?: ExperienceFact[];
  links?: ExperienceLink[];
  content: Record<Lang, ExperienceContent>;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "cliente-eeuu",
    current: true,
    stack: ["React Native (Expo)", "Django", "FastAPI", "LangChain", "Supabase", "AWS"],
    content: {
      es: {
        org: "Cliente en EE.UU.",
        role: "Freelance · Responsable técnico",
        period: "2026 — hoy",
        description:
          "App móvil de bienestar emocional con un asistente de IA. Me ocupo del backend, los pagos dentro de la app y la publicación en las tiendas.",
      },
      en: {
        org: "US-based client",
        role: "Freelance · Technical lead",
        period: "2026 — present",
        description:
          "Mobile wellbeing app with an AI assistant. I handle the backend, in-app payments and publishing to the app stores.",
      },
    },
  },
  {
    id: "astrofit",
    links: [
      {
        href: { es: "/casos/astrofit", en: "/en/cases/astrofit" },
        label: { es: "Leer el caso →", en: "Read the case →" },
      },
    ],
    content: {
      es: {
        org: "AstroFit",
        role: "Cofundador · Vendido en 2026",
        period: "2025 — 2026",
        description:
          "Software de gestión para gimnasios. Lo diseñé, lo construí, conseguimos clientes que lo usaban a diario y lo vendimos. Hasta diciembre acompaño la transferencia técnica al comprador.",
      },
      en: {
        org: "AstroFit",
        role: "Co-founder · Sold in 2026",
        period: "2025 — 2026",
        description:
          "Management software for gyms. I designed it, built it, we signed clients who used it every day, and we sold it. Until December I'm supporting the technical handover to the buyer.",
      },
    },
  },
  {
    id: "hackathon-edutech",
    facts: [
      { value: "+300", label: { es: "inscriptos", en: "sign-ups" } },
      { value: "150", label: { es: "participantes", en: "participants" } },
      { value: "+40", label: { es: "mentores y jurados", en: "mentors and judges" } },
    ],
    links: [
      {
        href: {
          es: "https://www.hackathonedutech.com.ar/",
          en: "https://www.hackathonedutech.com.ar/",
        },
        label: { es: "Ver la plataforma ↗", en: "See the platform ↗" },
        external: true,
      },
    ],
    content: {
      es: {
        org: "Hackathon EduTech Mendoza",
        role: "Staff técnico · 2ª edición",
        period: "2026",
        description:
          "Desarrollé la plataforma completa: inscripciones, entrega de proyectos, asignación de mentores y evaluación del jurado, con una vista para cada rol.",
      },
      en: {
        org: "Hackathon EduTech Mendoza",
        role: "Technical staff · 2nd edition",
        period: "2026",
        description:
          "I built the whole platform: registrations, project submissions, mentor assignment and jury scoring, with a dedicated view for each role.",
      },
    },
  },
  {
    id: "industria",
    compact: true,
    content: {
      es: {
        org: "Industria metalmecánica",
        role: "CAD · Docente",
        period: "2022 — 2024",
        description: "Diseño CAD para GCA Metal Mecánica / Krisol y docencia de CNC.",
      },
      en: {
        org: "Metalworking industry",
        role: "CAD · Instructor",
        period: "2022 — 2024",
        description: "CAD design for GCA Metal Mecánica / Krisol and CNC teaching.",
      },
    },
  },
];
