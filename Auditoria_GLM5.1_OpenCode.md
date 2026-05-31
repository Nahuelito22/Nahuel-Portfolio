# Auditoria Tecnica v3.0 — Nahuel-Portfolio

**Modelo:** GLM 5.1 (OpenCode)
**Fecha:** 2026-05-31
**Objetivo:** Evolucionar el portafolio de perfil academico a Consultor/Desarrollador Freelance sin romper la estetica "Neural Chess" ni la logica de ViewTransitions/filtrado.

---

## 0. Diagnostico General del Estado Actual

| Aspecto | Estado | Observacion |
|---------|--------|-------------|
| Framework | Astro 5 + Tailwind + astro-icon | Estable |
| i18n | Custom (`ui.ts` + `utils.ts`) | 67 keys, 2 idiomas, sin content-collections |
| Estetica | "Neural Chess" dark (#0a0a12 / #1a1a24 / #00f3ff / #a8a8b8) | Consistente |
| ViewTransitions | Importado por defecto, sin custom animations | OK — todos los scripts usan `astro:page-load` |
| Scroll Animations | IntersectionObserver en `Layout.astro` (`.project-card`, `section`, `.timeline-item`) | Hay que agregar selectores nuevos |
| Data Layer | `projects.ts` y `skills.ts` con `{es:[], en:[]}` | ProductionSaaS tiene data **hardcodeada en el componente** |
| Filtrado | JS client-side, slug-based (`display:block/none`) | Robusto |
| Section Order | Hero → ProductionSaaS → Projects → About → Certificates → Skills → Contact | Contact es la ultima |
| Nav Anchors | Hardcodeados (`#saas-production`, `#proyectos`, `#sobre-mi`, `#certificados`, `#contacto`) | No son i18n-aware |

### Problemas arquitectonicos detectados

1. **ProductionSaaS no tiene data file** — toda la data de productos vive inline en el componente. Imposible de escalar sin refactor.
2. **Dos patrones i18n inconsistentes** — `Projects` usa `data/ts` bilingue; `ProductionSaaS` mezcla `t()` con hardcoded.
3. **Cards B2B son full-width horizontales** con `min-h-[300px] md:min-h-[400px]` + imagen al 50% — excesivo para 3+ productos.
4. **Anclas de navegacion en espanol fijo** — `#contacto`, `#certificados` no cambian con idioma (aceptable por ahora, pero a tener en cuenta).

---

## 1. Redisenio de "Soluciones B2B / Produccion"

### 1.1 Problema

Las tarjetas actuales de `ProductionSaaS.astro` son **full-width horizontales** con imagen al 50% del ancho, `min-h-[300px] md:min-h-[400px]`, metrics grid, badges, y CTA. Con solo 2 productos se ve bien, pero al agregar un tercero (Hackaton Edutech) el scroll vertical se vuelve excesivo.

### 1.2 Propuesta de rediseno: Grid Compacto con Card Horizontal Fina

**Estructura visual:**

```
┌─────────────────────────────────────────────────────────┐
│  [Badges]   Titulo          Status   │  Metricas       │
│  [Tags...]                     CTA   │  (compactas)    │
└─────────────────────────────────────────────────────────┘
```

**Cambios clave:**

| Propiedad | Actual | Propuesta |
|-----------|--------|-----------|
| Layout | `flex flex-col md:flex-row` full-width | `grid grid-cols-1 lg:grid-cols-1 gap-4` con cards tipo **fila** |
| Card width | 100% del contenedor, 1 por fila | 100% del contenedor, 1 por fila (pero **mas fina**) |
| Imagen | `w-full md:w-1/2 min-h-[300px]` | **Eliminada** del card principal — mini thumbnail a la izquierda (48x48 o 64x64) o **icono devicon** |
| Altura card | ~400px | ~100-120px (una sola fila de info esencial) |
| Metrics | Grid 2x2 con cajas individuales | **Inline** en una sola fila: `5 Clientes · 250 Usuarios · En Produccion` |
| Badges/Tags | Filas separadas | **Una sola fila** con badges + tags combinados, `text-[10px]` |
| Status | Ping dot + texto | **Ping dot + chip** compacto |
| CTA | Boton grande | **Boton small** o link-arrow |

**Patron de card horizontal fina (tailwind):**

```
div.flex.items-center.gap-4.bg-chess-board.border.border-white/10.rounded-xl.p-4.hover:border-ai-neon/40
  ├── img/Icon (w-12 h-12 rounded-lg, object-contain)
  ├── div.flex-1.min-w-0
  │   ├── div.flex.items-center.gap-2
  │   │   ├── span.badge (SaaS / B2B)
  │   │   ├── h3.title (text-lg font-bold)
  │   │   └── span.status-chip (animate-ping dot + text-xs)
  │   ├── p.description (text-sm text-chess-accent line-clamp-1)
  │   └── div.flex.flex-wrap.gap-1 (tags text-[10px])
  └── div.flex.items-center.gap-3
      ├── div.metrics-inline (text-xs font-mono text-gray-400)
      └── a.cta-button (text-sm bg-ai-neon/...)
```

**Alternativa considerada y descartada:** Grid 3-columnas de cards verticales pequenas — se pierde visibilidad de metricas y status, que son el diferenciador de esta seccion vs Projects.

### 1.3 Extraccion de Data: `src/data/production.ts` (NUEVO)

**Razon:** Desacoplar la data del componente para permitir escalabilidad y aplicar el patron bilingue consistente con el resto del proyecto.

**Estructura propuesta:**

```typescript
export interface Product {
  id: string;                    // "astrofit" | "tuprun" | "hackaton-edutech"
  title: string;                 // Siempre igual (no traduce)
  image: string;                 // "/projects/astrofit.webp"
  badges: string[];              // ["SaaS", "B2B"] — no traducen
  tags: string[];                // ["Astro", "Supabase"] — no traducen
  link?: string;                 // URL
  isReady: boolean;
  status: "active" | "dev" | "paused";  // NUEVO: "paused" para TupRun
  metrics: { value: string; labelKey: string }[];  // labelKey -> t()
}

export const PRODUCTION: { es: Product[]; en: Product[] } = {
  es: [
    {
      id: "astrofit",
      title: "AstroFit",
      image: "/projects/astrofit.webp",
      badges: ["SaaS", "B2B"],
      tags: ["Astro", "Supabase", "TypeScript", "Playwright"],
      link: "https://astrofit.vercel.app",
      isReady: true,
      status: "active",
      metrics: [
        { value: "5", labelKey: "saas.metrics.clients" },
        { value: "250", labelKey: "saas.metrics.users" }
      ]
    },
    {
      id: "tuprun",
      title: "TupRun",
      image: "/projects/TupRun_Sin_Fondo.webp",
      badges: ["SaaS", "Event Management"],
      tags: ["Next.js", "Supabase", "TypeScript", "Stripe"],
      isReady: false,
      status: "paused",  // ← CAMBIO: de "dev" a "paused"
      metrics: []
    },
    {
      id: "hackaton-edutech",
      title: "Hackaton Edutech Mendoza",
      image: "",  // TODO: agregar screenshot
      badges: ["Platform", "Event"],
      tags: ["Astro", "TypeScript", "Supabase"],
      link: "https://www.hackathonedutech.com.ar/",
      isReady: true,
      status: "active",
      metrics: [
        { value: "—", labelKey: "saas.metrics.clients" }
      ]
    }
  ],
  en: [
    // Misma estructura, mismo contenido (titulos/tags no traducen)
  ]
};
```

**Nota:** Los arrays `es` y `en` son identicos en este caso porque `title`, `tags`, `badges` no se traducen. Pero se mantiene la estructura `{es, en}` por consistencia con el patron del proyecto y para permitir futuras descripciones traducibles via `t()`.

### 1.4 Nuevas keys i18n para `src/i18n/ui.ts`

```typescript
// En ambos: es y en
'saas.status.paused': 'Pausado' / 'On Hold',
'saas.he.desc': '<descripcion ES de Hackaton Edutech>' / '<descripcion EN>',
'saas.he.status_detailed': 'Status: Plataforma activa...' / 'Status: Active platform...'
```

**Color para status "paused":** `text-yellow-400` con `bg-yellow-400/10 border-yellow-400/30` — semantico (ni verde/produccion ni purpura/desarrollo). Distinto al rojo de "muerto" para no dar la impresion de cancelado.

### 1.5 Archivos a modificar

| Archivo | Accion |
|---------|--------|
| `src/data/production.ts` | **CREAR** — Data de productos extraida del componente |
| `src/components/ProductionSaaS.astro` | **REFACTORIZAR** — Importar de `production.ts`, rediseñar card horizontal fina |
| `src/i18n/ui.ts` | **MODIFICAR** — Agregar `saas.status.paused`, `saas.he.desc`, `saas.he.status_detailed` |
| `public/projects/` | **AGREGAR** — Screenshot de Hackaton Edutech (si disponible) |
| `src/layouts/Layout.astro` | **MODIFICAR** — Agregar `.production-card` a la lista de elementos observados por IntersectionObserver (si se cambia la clase del card) |

### 1.6 Impacto en ViewTransitions y Scroll Animations

- **ViewTransitions:** Sin impacto. El componente sigue siendo estatico (sin client-side routing).
- **Scroll Animations:** Si se renombra `.project-card` a algo propio como `.production-card`, hay que actualizar el selector en `Layout.astro`. Si se reutiliza `.project-card`, no hay cambio.
- **Recomendacion:** Usar clase `.production-card` para separar concerns y actualizar el observer.

---

## 2. Actualizacion de "Proyectos Destacados"

### 2.1 Agregar Zaha (CDSS basado en NEWS2)

**Datos:**

| Campo | Valor |
|-------|-------|
| title (es) | "Zaha" |
| title (en) | "Zaha" |
| description (es) | "Sistema de Soporte a la Decisión Clínica (CDSS) basado en NEWS2. Permite a enfermeros registrar constantes vitales y usa Machine Learning para predecir alertas tempranas de descompensación (sepsis, fallas orgánicas) en tiempo real." |
| description (en) | "Clinical Decision Support System (CDSS) based on NEWS2. Allows nurses to record vital signs and uses Machine Learning to predict early decompensation alerts (sepsis, organ failure) in real time." |
| tags | `["Python", "Scikit-learn", "NEWS2", "ML", "FastAPI"]` (a definir) |
| category (es) | "Data Science" / "Full Stack" (dual) |
| category (en) | "Data Science" / "Full Stack" (dual) |
| slug | `"data-science"` (o `"full-stack"` — ver nota abajo) |
| github | `https://github.com/Nahuelito22/Zaha` |
| image | A definir (screenshot o placeholder) |

**Decision de diseno — Slug dual:** Los tags del requerimiento son `Data_Science` y `Full_Stack`. El sistema actual solo soporta **un slug por proyecto**. Opciones:

- **Opcion A (Recomendada):** Elegir el slug primario `data-science` y poner ambos tags visibles en la card. El filtrado por `full-stack` no lo mostraria, pero el tag visual comunica ambas habilidades.
- **Opcion B:** Modificar el sistema de filtrado para soportar `data-category="data-science,full-stack"` y split por coma en el JS. Mas poderoso pero mas invasivo.
- **Opcion C:** Duplicar la entrada con distinto slug. Hack sucio.

**Recomiendo Opcion A** por minima invasion. Si en el futuro se necesitan multi-categoria, se refactoriza el filtrado.

### 2.2 Agregar Student_Souls

**Datos:**

| Campo | Valor |
|-------|-------|
| title (es) | "Student Souls" |
| title (en) | "Student Souls" |
| description (es) | "Un juego sátira sobre el sistema educativo." |
| description (en) | "A satirical game about the education system." |
| tags | `["Godot", "GDScript"]` (a confirmar) |
| category (es) | "Game Dev" |
| category (en) | "Game Dev" |
| slug | `"game-dev"` |
| github | `https://github.com/Nahuelito22/Student_Souls` |
| image | A definir |

### 2.3 Archivos a modificar

| Archivo | Accion |
|---------|--------|
| `src/data/projects.ts` | **MODIFICAR** — Agregar Zaha y Student_Souls en ambos arrays (`es` y `en`) |
| `public/projects/` | **AGREGAR** — Screenshots de Zaha y Student_Souls (si disponibles) |

**No se modifica `ProjectCard.astro`** ni `Projects.astro` — los nuevos proyectos se renderizan con el componente existente automaticamente al agregar la data.

### 2.4 Impacto en filtrado

- Si Zaha usa slug `data-science`, aparecera al filtrar "Data_Science". El tag visual "Full_Stack" se vera en la card pero no filtrara.
- Student_Souls con slug `game-dev` aparecera en "Game_Dev" — ahora habra 2 proyectos en esa categoria (antes solo Laburar o Jugar).
- Totales post-cambio: `data-science`: 2, `ai-models`: 3, `full-stack`: 1, `game-dev`: 2 = **8 proyectos** (antes 6).

---

## 3. Nueva Seccion: "Servicios"

### 3.1 Posicionamiento en la pagina

```
Hero → ProductionSaaS → Projects → About → Certificates → Skills → **Servicios** → Contact
```

Antes de Contact, despues de Skills. Justificacion:
- El usuario que llega al final del portafolio (Skills) esta "convencido" de la capacidad tecnica.
- La seccion Servicios capitaliza esa conviccion justo antes del CTA de contacto.
- Contact pasa de ser "hablamos" a ser el cierre del embudo de venta.

### 3.2 Diseno propuesto: Tiers horizontales con "Featured"

**Layout: 3 cards en grid `lg:grid-cols-3`**

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  ◼ Dev Web       │  │  ◼ Sistemas a    │  │  ◼ Consultoria   │
│                  │  │    Medida/SaaS   │  │    Datos & IA     │
│  Landing Pages   │  │  ─────────────  │  │  ─────────────    │
│  Portafolios     │  │  ★ RECOMENDADO  │  │  Analisis de     │
│  E-commerce      │  │                 │  │  datos            │
│                  │  │                 │  │  Dashboards       │
│  Desde $XXX      │  │  Desde $XXX     │  │  Modelos ML      │
│                  │  │                 │  │                  │
│  [Contactar]     │  │  [Contactar]    │  │  Desde $XXX      │
│                  │  │                 │  │                  │
└──────────────────┘  └──────────────────┘  │  [Contactar]     │
                                            └──────────────────┘
```

**Card styling (Neural Chess):**

| Elemento | Tailwind |
|----------|----------|
| Card base | `bg-chess-board border border-white/10 rounded-2xl p-6` |
| Card hover | `hover:border-ai-neon/50 hover:-translate-y-1 transition-all duration-300` |
| Card featured | `border-ai-neon/30` + badge `bg-ai-neon/10 text-ai-neon` esquina superior + `scale-[1.02]` en lg |
| Icono tier | `w-12 h-12 bg-ai-neon/10 rounded-xl flex items-center justify-center` con `Icon` astro-icon |
| Titulo | `text-xl font-bold text-white font-mono` |
| Items | `text-sm text-chess-accent` con check icon cyan |
| Precio | `text-2xl font-bold text-ai-neon font-mono` |
| CTA | `bg-ai-neon text-chess-dark font-bold rounded-lg hover:bg-white` (featured) / `border border-ai-neon/30 text-ai-neon hover:bg-ai-neon/10` (no-featured) |

### 3.3 Data: `src/data/services.ts` (NUEVO)

```typescript
export interface ServiceTier {
  id: string;
  icon: string;           // astro-icon identifier, e.g. "mdi:web"
  titleKey: string;       // -> t("services.devweb.title")
  descriptionKey: string; // -> t("services.devweb.desc")
  items: string[];        // Items del bullet list (keys de i18n)
  priceKey: string;       // -> t("services.devweb.price")
  featured: boolean;
  ctaKey: string;         // -> t("services.cta")
}

export const SERVICES: { es: ServiceTier[]; en: ServiceTier[] } = {
  es: [
    {
      id: "dev-web",
      icon: "mdi:web",
      titleKey: "services.devweb.title",
      descriptionKey: "services.devweb.desc",
      items: [
        "services.devweb.item1",
        "services.devweb.item2",
        "services.devweb.item3"
      ],
      priceKey: "services.devweb.price",
      featured: false,
      ctaKey: "services.cta"
    },
    {
      id: "sistemas-saas",
      icon: "mdi:server",
      titleKey: "services.saas.title",
      descriptionKey: "services.saas.desc",
      items: [
        "services.saas.item1",
        "services.saas.item2",
        "services.saas.item3"
      ],
      priceKey: "services.saas.price",
      featured: true,
      ctaKey: "services.cta"
    },
    {
      id: "consultoria-ia",
      icon: "mdi:brain",
      titleKey: "services.ai.title",
      descriptionKey: "services.ai.desc",
      items: [
        "services.ai.item1",
        "services.ai.item2",
        "services.ai.item3"
      ],
      priceKey: "services.ai.price",
      featured: false,
      ctaKey: "services.cta"
    }
  ],
  en: [ /* misma estructura, mismos keys */ ]
};
```

**Nota:** Los items del tier son keys de i18n, no texto directo. Cada item apunta a un string traducido en `ui.ts`. Esto mantiene la consistencia con el patron existente.

### 3.4 Keys i18n nuevas para `src/i18n/ui.ts`

```typescript
// Seccion Servicios (~20 keys nuevas)
'services.title1': 'Servicios' / 'Services',
'services.title2': 'Freelance' / 'Freelance',
'services.subtitle': 'Soluciones a medida...' / 'Custom solutions...',

// Tier 1: Dev Web
'services.devweb.title': 'Desarrollo Web' / 'Web Development',
'services.devweb.desc': 'Landing pages, portafolios y e-commerce.' / 'Landing pages, portfolios and e-commerce.',
'services.devweb.item1': 'Landing Pages optimizadas' / 'Optimized Landing Pages',
'services.devweb.item2': 'Portafolios interactivos' / 'Interactive Portfolios',
'services.devweb.item3': 'Tiendas online' / 'Online Stores',
'services.devweb.price': 'Desde $150 USD' / 'From $150 USD',

// Tier 2: Sistemas a Medida
'services.saas.title': 'Sistemas a Medida' / 'Custom Systems',
'services.saas.desc': 'Aplicaciones SaaS y sistemas de gestion.' / 'SaaS apps and management systems.',
'services.saas.item1': 'Aplicaciones SaaS completas' / 'Full SaaS Applications',
'services.saas.item2': 'CRMs y ERPs personalizados' / 'Custom CRMs & ERPs',
'services.saas.item3': 'Integraciones con APIs y pagos' / 'API & Payment Integrations',
'services.saas.price': 'Desde $500 USD' / 'From $500 USD',

// Tier 3: Consultoria
'services.ai.title': 'Consultoria Datos & IA' / 'Data & AI Consulting',
'services.ai.desc': 'Analisis de datos, dashboards y modelos ML.' / 'Data analysis, dashboards and ML models.',
'services.ai.item1': 'Analisis exploratorio de datos' / 'Exploratory Data Analysis',
'services.ai.item2': 'Dashboards interactivos (Power BI)' / 'Interactive Dashboards (Power BI)',
'services.ai.item3': 'Modelos de Machine Learning' / 'Machine Learning Models',
'services.ai.price': 'Desde $300 USD' / 'From $300 USD',

// CTA
'services.cta': 'Contactar' / 'Contact',

// Nav
'nav.services': 'Servicios' / 'Services'
```

**Total keys nuevas: ~22** (pasando de 67 a ~89 keys por idioma).

### 3.5 Componente: `src/components/Services.astro` (NUEVO)

**Estructura del componente:**

```astro
---
import { getLangFromUrl, useTranslations } from "../i18n/utils";
import { SERVICES } from "../data/services";
import { Icon } from "astro-icon/components";

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const currentServices = SERVICES[lang];
---

<section id="servicios" class="py-20">
  <div class="max-w-6xl mx-auto px-4">
    <!-- Section Header (patron existente: label + two-tone title) -->
    <div class="text-center mb-12">
      <span class="font-mono text-sm text-ai-neon">System.Freelance.Load()</span>
      <h2>
        <span class="text-white">{t("services.title1")}</span>
        <span class="text-ai-neon"> {t("services.title2")}</span>
      </h2>
      <p class="text-chess-accent">{t("services.subtitle")}</p>
    </div>

    <!-- Tiers Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {currentServices.map((tier) => (
        <!-- Card con logica de featured -->
      ))}
    </div>
  </div>
</section>
```

**Seccion ID:** `#servicios` — consistente con el patron de anclas en espanol del resto del sitio.

### 3.6 Archivos a modificar

| Archivo | Accion |
|---------|--------|
| `src/components/Services.astro` | **CREAR** — Nuevo componente |
| `src/data/services.ts` | **CREAR** — Data de tiers |
| `src/i18n/ui.ts` | **MODIFICAR** — Agregar ~22 keys nuevas |
| `src/pages/index.astro` | **MODIFICAR** — Agregar `<Services />` antes de `<Contact />` |
| `src/pages/en/index.astro` | **MODIFICAR** — Agregar `<Services />` antes de `<Contact />` |
| `src/components/Header.astro` | **MODIFICAR** — Agregar link de nav `"nav.services"` → `#servicios` |
| `src/layouts/Layout.astro` | **MODIFICAR** — Agregar `.service-card` a IntersectionObserver (si se usa clase propia) |

### 3.7 CTA "Contactar" — Flujo

El boton "Contactar" en cada tier debe hacer **scroll suave** a `#contacto`. Se implementa como:

```html
<a href="#contacto" class="...">{t("services.cta")}</a>
```

No requiere JS adicional gracias a `scroll-smooth` en el HTML.

**Posible mejora futura:** Pre-llenar el campo de mensaje del formulario con el tier seleccionado (ej. "Me interesa el servicio de Sistemas a Medida"). Esto requeriria JS client-side para leer un query param o hash. Se deja como **nice-to-have** fuera del scope actual.

---

## 4. Plan de Ejecucion Paso a Paso

### Fase 1: Data Layer (sin cambios visibles)

| Paso | Tarea | Archivos | Validacion |
|------|-------|----------|------------|
| 1.1 | Crear `src/data/production.ts` con data de AstroFit, TupRun (status: paused), Hackaton Edutech | `src/data/production.ts` | Import en componente sin errores |
| 1.2 | Agregar keys i18n de status.paused + descripciones de Hackaton | `src/i18n/ui.ts` | `t("saas.status.paused")` funciona en ambos idiomas |
| 1.3 | Agregar Zaha y Student_Souls a `src/data/projects.ts` en ambos idiomas | `src/data/projects.ts` | Proyectos aparecen en el grid |
| 1.4 | Crear `src/data/services.ts` con los 3 tiers | `src/data/services.ts` | Import sin errores |
| 1.5 | Agregar ~22 keys de Servicios a `src/i18n/ui.ts` | `src/i18n/ui.ts` | `t("services.devweb.title")` funciona |

### Fase 2: Redisenio de ProductionSaaS

| Paso | Tarea | Archivos | Validacion |
|------|-------|----------|------------|
| 2.1 | Refactorizar `ProductionSaaS.astro` para importar de `production.ts` | `src/components/ProductionSaaS.astro` | Mismo render que antes |
| 2.2 | Rediseñar card horizontal fina (compact row) | `src/components/ProductionSaaS.astro` | 3 cards caben sin scroll excesivo |
| 2.3 | Implementar status "paused" con estilo yellow | `src/components/ProductionSaaS.astro` | TupRun muestra "Pausado / On Hold" |
| 2.4 | Agregar clase `.production-card` al IntersectionObserver | `src/layouts/Layout.astro` | Scroll animation funciona en nuevas cards |

### Fase 3: Nueva Seccion Servicios

| Paso | Tarea | Archivos | Validacion |
|------|-------|----------|------------|
| 3.1 | Crear `src/components/Services.astro` | `src/components/Services.astro` | Renderiza 3 tiers |
| 3.2 | Agregar `<Services />` antes de `<Contact />` en ambas paginas | `src/pages/index.astro`, `src/pages/en/index.astro` | Seccion aparece en ambos idiomas |
| 3.3 | Agregar nav link "Servicios" / "Services" en Header | `src/components/Header.astro`, `src/i18n/ui.ts` | Link navega a `#servicios` |
| 3.4 | Agregar `.service-card` al IntersectionObserver (si aplica) | `src/layouts/Layout.astro` | Scroll animation funciona |

### Fase 4: Assets y Pulido

| Paso | Tarea | Archivos | Validacion |
|------|-------|----------|------------|
| 4.1 | Agregar screenshots de Hackaton Edutech, Zaha, Student_Souls a `public/projects/` | `public/projects/` | Imagenes cargan sin 404 |
| 4.2 | Verificar que el fallback (pawn emoji) funciona si no hay imagen | `src/components/ProjectCard.astro` | Placeholder visible |
| 4.3 | Test cross-idioma: navegar `/` y `/en/` verificando todas las secciones | Browser | Todo renderiza en ambos idiomas |
| 4.4 | Test ViewTransitions: navegar entre `/` y `/en/` sin errores de consola | Browser | Sin errores JS, particles re-inicializan |
| 4.5 | Test responsive: verificar cards en mobile (1 col), tablet (2 col), desktop (3 col) | Browser | Layout no se rompe |

### Fase 5: Verificacion Final

| Paso | Tarea | Comando |
|------|-------|---------|
| 5.1 | Build de produccion sin errores | `npm run build` |
| 5.2 | Lighthouse check (opcional) | DevTools |
| 5.3 | Verificar que `Welcome.astro` y `src/scripts/particles.js` siguen sin interferir | N/A (legacy, no tocar) |

---

## 5. Resumen de Archivos por Accion

### CREAR (3 archivos)

| Archivo | Contenido |
|---------|-----------|
| `src/data/production.ts` | Data de productos B2B (AstroFit, TupRun, Hackaton Edutech) |
| `src/data/services.ts` | Data de tiers de servicios freelance |
| `src/components/Services.astro` | Componente de seccion Servicios |

### MODIFICAR (6 archivos)

| Archivo | Cambios |
|---------|---------|
| `src/i18n/ui.ts` | +25 keys (paused, hackaton desc, services completo, nav.services) |
| `src/data/projects.ts` | +2 proyectos en ambos idiomas (Zaha, Student_Souls) |
| `src/components/ProductionSaaS.astro` | Refactor: import de data, card horizontal fina, status paused |
| `src/pages/index.astro` | +1 linea: `<Services />` |
| `src/pages/en/index.astro` | +1 linea: `<Services />` |
| `src/components/Header.astro` | +1 item nav: Servicios → #servicios |
| `src/layouts/Layout.astro` | +1 selector en IntersectionObserver |

### AGREGAR ASSETS (0-3 imagenes)

| Archivo | Descripcion |
|---------|-------------|
| `public/projects/hackaton-edutech.webp` | Screenshot de la plataforma (si disponible) |
| `public/projects/zaha.webp` | Screenshot del CDSS (si disponible) |
| `public/projects/student-souls.webp` | Screenshot del juego (si disponible) |

### NO TOCAR

| Archivo | Razon |
|---------|-------|
| `src/components/ProjectCard.astro` | Los nuevos proyectos se renderizan con el componente existente |
| `src/components/Projects.astro` | No necesita cambios (filtro y modal funcionan automaticamente) |
| `src/i18n/utils.ts` | Logica intacta, no necesita modificaciones |
| `astro.config.mjs` | No se agregan locales ni integraciones |
| `tailwind.config.mjs` | No se agregan colores ni plugins |
| `src/components/Welcome.astro` | Legacy, no se toca |
| `src/scripts/particles.js` | Legacy, no se toca |

---

## 6. Riesgos y Mitigaciones

| Riesgo | Probabilidad | Mitigacion |
|--------|-------------|------------|
| Card B2B compacta pierde impacto visual vs diseno actual full-width | Media | Mantener badges animados, status ping, y hover glow — lo compacto no debe ser lo aburrido |
| Hackaton Edutech no tiene screenshot | Alta | El componente ya tiene fallback con gradiente + pawn emoji. Agregar imagen cuando este disponible |
| Zaha tiene 2 categorias (Data_Science + Full_Stack) pero el sistema solo soporta 1 slug | Baja | Elegir slug primario (`data-science`) y mostrar ambos tags visualmente |
| Precios en USD pueden quedar desactualizados | Media | Usar "Desde $X" que implica rango base, no precio fijo |
| Agregar Services rompe el orden de secciones que el usuario ya tiene memorizado | Baja | Nav link nuevo lo hace discoverable. La seccion esta antes de Contact que es el natural stop |
| IntersectionObserver no anima las nuevas cards | Media | Agregar selectores explicitamente en Fase 2 paso 2.4 y Fase 3 paso 3.4 |

---

## 7. Notas para la Implementacion

1. **Orden de ejecucion estricto:** Fase 1 → 2 → 3 → 4 → 5. Las fases 2 y 3 dependen de la data de la Fase 1.
2. **Commit por fase:** Cada fase completada y validada genera un commit. No mezclar cambios de fases distintas.
3. **No cambiar la paleta de colores** — el "Neural Chess" se mantiene. Los unicos colores nuevos son `yellow-400` para status "paused" (semanticamente correcto).
4. **No agregar dependencias npm** — todo se implementa con Astro + Tailwind + astro-icon ya existentes.
5. **Los precios en `ui.ts` son strings** — permite formatos como "Desde $500 USD" sin logica de formato.
6. **El componente Services.astro debe seguir el mismo patron i18n** que el resto: `getLangFromUrl()` + `useTranslations()` en frontmatter.

---

*Fin de la Auditoria — Esperando luz verde para implementar.*
