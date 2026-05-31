// src/data/production.ts

export interface Product {
  id: string;
  title: string;
  image: string;
  badges: string[];
  tags: string[];
  link?: string;
  isReady: boolean;
  status: "active" | "dev" | "paused";
  metrics: { value: string; labelKey: string }[];
  descriptionKey: string;
  statusDetailedKey?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "astrofit",
    title: "AstroFit",
    image: "/projects/astrofit.webp",
    badges: ["SaaS", "B2B"],
    tags: ["Astro", "Supabase", "TypeScript", "Playwright"],
    link: "https://www.astrofitapp.com.ar/",
    isReady: true,
    status: "active",
    metrics: [
      { value: "5", labelKey: "saas.metrics.clients" },
      { value: "250", labelKey: "saas.metrics.users" }
    ],
    descriptionKey: "saas.af.desc"
  },
  {
    id: "hackaton-edutech",
    title: "Hackaton Edutech Mendoza",
    image: "/projects/Hackaton.webp",
    badges: ["Platform", "Event"],
    tags: ["Astro", "Supabase", "TypeScript"],
    link: "https://www.hackathonedutech.com.ar/",
    isReady: true,
    status: "active",
    metrics: [
      { value: "—", labelKey: "saas.metrics.clients" }
    ],
    descriptionKey: "saas.he.desc"
  },
  {
    id: "tuprun",
    title: "TupRun",
    image: "/projects/TupRun_Sin_Fondo.webp",
    badges: ["SaaS", "Event Management"],
    tags: ["Next.js", "React Native", "PostgreSQL", "Stripe"],
    isReady: false,
    status: "paused",
    metrics: [
      { value: "---", labelKey: "saas.metrics.clients" },
      { value: "---", labelKey: "saas.metrics.users" }
    ],
    descriptionKey: "saas.tr.desc",
    statusDetailedKey: "saas.tr.status_detailed"
  }
];
