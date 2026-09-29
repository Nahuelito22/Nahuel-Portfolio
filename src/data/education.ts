// src/data/education.ts
//
// Formacion y certificados. Mismo patron que el resto de src/data: lo que no se
// traduce (fechas, promedios, archivos) vive una vez, el texto por idioma.
//
// REGLAS
// - Cada certificado enlaza a SU archivo o a su verificacion. Si no hay
//   comprobante propio, va sin link; nunca varios items apuntando al mismo PDF.
// - El nombre es el que figura en el certificado, sin mejorarlo. (El sitio
//   anterior mostraba "Gestion agil" para un PDF que es de otro curso.)

type Lang = "es" | "en";

export interface Degree {
  title: Record<Lang, string>;
  institution: string;
  period: Record<Lang, string>;
  /** Promedio, tal como figura en el analitico. */
  gpa?: string;
}

export interface Certificate {
  name: Record<Lang, string>;
  issuer: string;
  /** PDF en /public/certificates o URL de verificacion. */
  href?: string;
}

export const DEGREES: Degree[] = [
  {
    title: {
      es: "Licenciatura en Ciencia de Datos",
      en: "B.Sc. in Data Science",
    },
    institution: "Universidad Siglo 21",
    period: { es: "2025 — hoy", en: "2025 — present" },
    gpa: "8,55",
  },
  {
    title: {
      es: "Tecnicatura Superior en Desarrollo de Software",
      en: "Higher Technical Degree in Software Development",
    },
    institution: "CESIT 9-023",
    period: { es: "2024 — hoy", en: "2024 — present" },
    gpa: "9,53",
  },
  {
    title: {
      es: "Carrera de Data Science",
      en: "Data Science program",
    },
    institution: "Coderhouse",
    period: { es: "2023 — 2025", en: "2023 — 2025" },
  },
  {
    title: {
      es: "Técnico Electromecánico",
      en: "Electromechanical Technician",
    },
    institution: "Escuela Técnica República Italiana 4-122",
    period: { es: "2014 — 2020", en: "2014 — 2020" },
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: {
      es: "Data Science I: fundamentos y visualización",
      en: "Data Science I: fundamentals and visualisation",
    },
    issuer: "Coderhouse",
    href: "/certificates/ds-fundamentos.pdf",
  },
  {
    name: {
      es: "Data Science II: machine learning supervisado",
      en: "Data Science II: supervised machine learning",
    },
    issuer: "Coderhouse",
    href: "/certificates/ds-ml-supervisado.pdf",
  },
  {
    name: {
      es: "Data Science III: NLP y deep learning",
      en: "Data Science III: NLP and deep learning",
    },
    issuer: "Coderhouse",
    href: "/certificates/ds-nlp-deep-learning.pdf",
  },
  {
    name: { es: "Data Science Ethics", en: "Data Science Ethics" },
    issuer: "University of Michigan · Coursera",
    href: "https://coursera.org/verify/P4N35PAW7GOZ",
  },
  {
    name: { es: "Power BI", en: "Power BI" },
    issuer: "Santander Open Academy",
    href: "/certificates/especializacion-power-bi.pdf",
  },
  {
    name: {
      es: "Introducción a la IA generativa",
      en: "Introduction to generative AI",
    },
    issuer: "Santander Open Academy · MIT Professional Education",
    href: "/certificates/especializacion-ia-generativa.pdf",
  },
];
