// src/data/production.ts

export interface Product {
  id: string;
  title: string;
  image: string;
  tags: string[];
  link?: string;
  isReady: boolean;
  status: "active" | "dev" | "paused";
  metrics: { value: string; labelKey: string }[];
  descriptionKey: string;
  statusDetailedKey?: string;
  /** Slug en `cases.ts` si este producto tiene caso de estudio propio. */
  caseSlug?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "astrofit",
    title: "AstroFit",
    image: "/projects/astrofit.webp",
    tags: ["Astro", "Supabase", "TypeScript", "Playwright"],
    link: "https://www.astrofitapp.com.ar/",
    isReady: true,
    status: "active",
    metrics: [
      { value: "5", labelKey: "saas.metrics.clients" },
      { value: "250", labelKey: "saas.metrics.users" }
    ],
    descriptionKey: "saas.af.desc",
    caseSlug: "astrofit"
  },
  {
    id: "hackaton-edutech",
    title: "Hackaton Edutech Mendoza",
    image: "/projects/Hackaton.webp",
    tags: ["Astro", "Supabase", "TypeScript"],
    link: "https://www.hackathonedutech.com.ar/",
    isReady: true,
    status: "active",
    // Sin metricas: no es un cliente pago y un "—" al lado de "Clientes B2B"
    // se lee como cero. El componente omite el bloque si el array esta vacio.
    metrics: [],
    descriptionKey: "saas.he.desc"
  },
  {
    id: "tuprun",
    title: "TupRun",
    image: "/projects/TupRun_Sin_Fondo.webp",
    tags: ["Next.js", "React Native", "PostgreSQL", "Stripe"],
    isReady: false,
    status: "paused",
    // Mismo criterio que Hackaton: sin numeros reales todavia, mejor no mostrar
    // guiones. El estado "Pausado" del boton ya explica por que no los hay.
    metrics: [],
    descriptionKey: "saas.tr.desc",
    statusDetailedKey: "saas.tr.status_detailed"
  }
];
