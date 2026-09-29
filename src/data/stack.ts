// src/data/stack.ts
//
// Tecnologias agrupadas por para que las uso. Reemplaza a skills.ts.
//
// REGLA: solo lo que aparece en trabajo real (Experiencia, Casos u Otros
// proyectos). Si una tecnologia no se puede señalar en algo publicado, no va.

type Lang = "es" | "en";

export interface StackGroup {
  label: Record<Lang, string>;
  items: string[];
}

export const STACK: StackGroup[] = [
  {
    label: { es: "Datos e IA", en: "Data & AI" },
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow / Keras", "LangChain", "Matplotlib", "Power BI"],
  },
  {
    label: { es: "Backend", en: "Backend" },
    items: ["Django", "FastAPI", "Flask", "PostgreSQL", "MySQL", "Supabase"],
  },
  {
    label: { es: "Frontend y móvil", en: "Frontend & mobile" },
    items: ["TypeScript", "React", "React Native (Expo)", "Astro", "Tailwind CSS"],
  },
  {
    label: { es: "Infraestructura y calidad", en: "Infrastructure & quality" },
    items: ["AWS", "Docker", "Vercel", "Git", "Linux", "Playwright"],
  },
];
