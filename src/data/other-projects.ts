// src/data/other-projects.ts
//
// "Otros proyectos": la lista compacta que reemplaza a las 11 tarjetas de
// Projects.astro. Mismo patron que `cases.ts` y `experience.ts`: links y stack
// una sola vez, la frase por idioma.
//
// REGLAS
// - Una sola linea por proyecto: que resuelve, no como esta hecho. El stack va
//   aparte y en letra chica.
// - Lo que ya es un caso de estudio (AstroFit, Hackathon, Nimbus) no se repite
//   aca.
// - Nada que no se pueda abrir: si un proyecto no tiene demo ni repo publico,
//   no entra.
// - El orden es por peso del trabajo, no alfabetico.

type Lang = "es" | "en";

export interface OtherProject {
  name: string;
  /** Estado visible al lado del nombre, solo si no esta terminado. */
  status?: Record<Lang, string>;
  line: Record<Lang, string>;
  stack: string[];
  /** Demo publicada. */
  link?: string;
  /** Repositorio publico. */
  github?: string;
}

export const OTHER_PROJECTS: OtherProject[] = [
  {
    name: "Roque",
    line: {
      es: "Un bot de ajedrez que juega como una persona: una red recurrente (LSTM) entrenada solo con partidas reales. Un enfoque poco común para un motor de ajedrez.",
      en: "A chess bot that plays like a person: a recurrent network (LSTM) trained only on real games. An unusual approach for a chess engine.",
    },
    stack: ["TensorFlow", "Keras", "LSTM"],
    link: "https://roquechess.vercel.app/",
    github: "https://github.com/Nahuelito22/Bot_Ajedrez",
  },
  {
    name: "Zaha",
    status: { es: "En construcción", en: "In progress" },
    line: {
      es: "Apoyo a la decisión clínica: enfermería registra los signos vitales y un modelo anticipa alertas de descompensación.",
      en: "Clinical decision support: nurses log vital signs and a model flags early warnings of deterioration.",
    },
    stack: ["Python", "Scikit-learn", "FastAPI"],
    github: "https://github.com/Nahuelito22/Zaha",
  },
  {
    name: "Guidia",
    line: {
      es: "Arma itinerarios y sugerencias a partir de tus preferencias, con IA generativa. Lo hicimos en una hackathon y llegamos a la final.",
      en: "Builds itineraries and suggestions from your preferences using generative AI. We built it at a hackathon and made the final.",
    },
    stack: ["React", "Python", "GenAI"],
    link: "https://guidia.onrender.com/",
    github: "https://github.com/Nahuelito22/Guidia",
  },
  {
    name: "Siglo 21 · Correlativas",
    line: {
      es: "Coordino una comunidad de más de 150 compañeros de Ciencia de Datos, y saber qué materias se podían cursar era la duda de cada cuatrimestre. Armé un mapa interactivo de las 54 materias y sus correlativas.",
      en: "I run a community of 150+ Data Science classmates, and which courses we could take was the question every term. I built an interactive map of all 54 courses and their prerequisites.",
    },
    stack: ["Astro", "React", "TypeScript"],
    link: "https://siglo21-correlativas.vercel.app",
    github: "https://github.com/Nahuelito22/siglo21-correlativas",
  },
  {
    name: "GameMatch",
    line: {
      es: "Compara las bibliotecas de Steam de un grupo de amigos y muestra a qué pueden jugar todos juntos.",
      en: "Compares a group of friends' Steam libraries and shows what they can all play together.",
    },
    stack: ["Astro", "TypeScript", "Steam API"],
    link: "https://gamematch-beta.vercel.app",
    github: "https://github.com/Nahuelito22/gamematch",
  },
  {
    name: "Mundial Data",
    line: {
      es: "Estadísticas de todos los Mundiales de 1930 a 2022, comparativas entre selecciones y predicción de resultados.",
      en: "Stats for every World Cup from 1930 to 2022, head-to-head comparisons and match predictions.",
    },
    stack: ["React", "Flask", "MySQL"],
    link: "https://parcial-programacion-3.vercel.app/",
    github: "https://github.com/Nahuelito22/Parcial_Programacion_3",
  },
];
