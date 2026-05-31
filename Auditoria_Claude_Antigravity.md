# Portfolio v3.0 — Plan de Refactorización

Evolución del portfolio de perfil académico a **Consultor/Desarrollador Freelance**, manteniendo la estética "Neural Chess", ViewTransitions y el sistema i18n nativo.

## User Review Required

> [!IMPORTANT]
> **Sección de Servicios — Definición de Tiers y Precios**
> El plan propone 3 tiers de servicios. Necesito confirmar:
> - ¿Los nombres y descripciones de los tiers son correctos?
> - ¿Quieres mostrar precios concretos ("Desde $X") o prefieres un CTA genérico ("Consultar")?
> - ¿El botón CTA debe redirigir a la sección de Contacto o a un enlace externo (Calendly, WhatsApp)?

> [!IMPORTANT]
> **Hackatón Edutech — Imagen y Descripción**
> - ¿Tienes una imagen/screenshot para este proyecto? De lo contrario generaré una.
> - ¿Prefieres una descripción específica o uso la que propongo más abajo?

## Open Questions

1. **TupRun — ¿Eliminar o mantener?** El plan lo marca como "Pausado / On Hold". ¿Quieres que siga visible con un badge gris, o prefieres removerlo temporalmente de la sección?
2. **Hackatón Edutech — Badges y Tags:** ¿Qué stack tecnológico tiene? Propongo `["Astro", "Supabase", "TypeScript"]` basándome en tu stack habitual.
3. **Navbar — Servicios:** ¿Quieres agregar "Servicios" al navbar? Actualmente tiene: Inicio, B2B, Proyectos, Sobre Mí, Educación, Contacto. Propongo reemplazar o añadir un ítem.
4. **Zaha y Student_Souls — ¿Tienen imágenes o screenshots?** Si no, generaré placeholder images con la herramienta de generación.
5. **Zaha y Student_Souls — ¿Tienen demo/link live?** Solo veo los GitHub repos en tu request.

---

## Proposed Changes

### Componente 1: Rediseño Sección B2B (ProductionSaaS)

**Problema actual:** Cada tarjeta es un bloque horizontal de ~1152px × 400px+ con imagen al 50% y contenido al 50%. Con 2 productos ya es pesado; con 3 será excesivo.

**Solución propuesta:** Cambiar de `flex-col gap-12` (stack vertical de case-studies) a un **grid de 3 columnas** con tarjetas verticales compactas. Cada tarjeta será ~370px de ancho con la siguiente estructura reducida:

```
┌─────────────────────────┐
│  Status dot + Badge     │  ← 1 línea: dot animado + "En Producción"
│  ─────────────────────  │
│  TÍTULO (h3)            │  ← Bold, tamaño reducido (text-2xl)
│  Descripción (3 lines)  │  ← line-clamp-3, texto compacto
│  ─────────────────────  │
│  Métricas: 5 | 250      │  ← Inline, no grid. "5 Clientes · 250 Usuarios"
│  Tags: [Astro][Supa]... │  ← Flex wrap
│  ─────────────────────  │
│  [ Visitar App → ]      │  ← CTA button
└─────────────────────────┘
```

**Cambios clave del diseño:**
- Sin columna de imagen (la imagen pasa a ser un mini-icono o se elimina para ganar espacio)
- Padding reducido: `p-6` en lugar de `p-8 md:p-12`
- Métricas inline en lugar de grid 2×2
- Descripción con `line-clamp-3` (máximo 3 líneas)
- Layout: `grid grid-cols-1 md:grid-cols-3 gap-6` en lugar de `flex-col gap-12`
- Color coding: ai-neon (producción), amber/yellow (pausado), purple (desarrollo)
- Cada tarjeta ocupa ~1/3 del ancho del container

**Datos actualizados:**

| Proyecto | Status | Color | CTA |
|----------|--------|-------|-----|
| AstroFit | En Producción | `ai-neon` | "Visitar App" → link externo |
| Hackatón Edutech | En Producción | `ai-neon` | "Visitar Sitio" → hackathonedutech.com.ar |
| TupRun | Pausado | `amber-400` | Botón disabled "On Hold" |

---

#### [MODIFY] [ProductionSaaS.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/components/ProductionSaaS.astro)

- **Refactorizar layout completo**: de `flex-col` con cards horizontales 50/50 a `grid grid-cols-1 md:grid-cols-3 gap-6` con cards verticales compactas.
- **Agregar tercer producto** (Hackatón Edutech) al array `products[]`.
- **Cambiar status de TupRun**: de `t("saas.status.dev")` a `t("saas.status.paused")`.
- **Eliminar columna de imagen**: las cards ya no tendrán `md:w-1/2` de imagen.
- **Reducir padding**: `p-6` en vez de `p-8 md:p-12`.
- **Métricas inline**: reemplazar `grid grid-cols-2` por una línea con separador.
- **Nuevo esquema de colores**: amber para "pausado".

---

#### [MODIFY] [ui.ts](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/i18n/ui.ts)

Nuevas claves i18n para la sección SaaS (en ambos idiomas `es` y `en`):

```typescript
// ES
'saas.status.paused': 'Pausado',
'saas.he.desc': 'Sitio oficial y plataforma de gestión con roles diferenciados para participantes, jueces y mentores del evento.',
'saas.visitSite': 'Visitar Sitio',

// EN
'saas.status.paused': 'On Hold',
'saas.he.desc': 'Official website and management platform with differentiated roles for participants, judges and event mentors.',
'saas.visitSite': 'Visit Site',
```

Modificar la clave existente `saas.tr.status_detailed`:
```typescript
// ES: '⏸️ Status: Desarrollo pausado temporalmente.'
// EN: '⏸️ Status: Development temporarily paused.'
```

---

### Componente 2: Nuevos Proyectos Destacados

Se agregan 2 proyectos nuevos al array `PROJECTS` en `projects.ts`.

#### [MODIFY] [projects.ts](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/data/projects.ts)

**Zaha** (se agrega con doble slug para que aparezca en filtros de Data Science y Full Stack):

```typescript
// ES
{
  title: "Zaha",
  description: "Sistema de Soporte a la Decisión Clínica (CDSS) basado en NEWS2. Permite a enfermeros registrar constantes vitales y usa Machine Learning para predecir alertas tempranas de descompensación en tiempo real.",
  tags: ["Python", "ML", "Flask", "NEWS2"],
  category: "Data Science",
  slug: "data-science",
  github: "https://github.com/Nahuelito22/Zaha",
  image: "/projects/zaha.webp",
},
// EN
{
  title: "Zaha",
  description: "Clinical Decision Support System (CDSS) based on NEWS2. Enables nurses to record vital signs and uses Machine Learning to predict early decompensation alerts (sepsis, organ failure) in real-time.",
  tags: ["Python", "ML", "Flask", "NEWS2"],
  category: "Data Science",
  slug: "data-science",
  github: "https://github.com/Nahuelito22/Zaha",
  image: "/projects/zaha.webp",
},
```

**Student Souls:**

```typescript
// ES
{
  title: "Student Souls",
  description: "Juego sátira sobre el sistema educativo. Una experiencia interactiva que refleja los desafíos del estudiante universitario a través de mecánicas de videojuego.",
  tags: ["Python", "Pygame", "Game Design"],
  category: "Game Dev",
  slug: "game-dev",
  github: "https://github.com/Nahuelito22/Student_Souls",
  image: "/projects/student-souls.webp",
},
// EN
{
  title: "Student Souls",
  description: "A satirical game about the education system. An interactive experience that reflects university student challenges through video game mechanics.",
  tags: ["Python", "Pygame", "Game Design"],
  category: "Game Dev",
  slug: "game-dev",
  github: "https://github.com/Nahuelito22/Student_Souls",
  image: "/projects/student-souls.webp",
},
```

> [!NOTE]
> Se necesitan imágenes `/projects/zaha.webp` y `/projects/student-souls.webp`. Si no las tienes, las generaré con la herramienta de generación de imágenes y las convertiré a webp.

---

### Componente 3: Nueva Sección "Servicios"

**Ubicación en el flujo de página:** Entre `<Skills />` y `<Contact />`.

**Diseño propuesto:** 3 tarjetas en grid que siguen la estética Neural Chess con glassmorphism sutil. Cada tarjeta tiene un borde que brilla al hover con el color temático del tier.

```
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│  ⚡ TIER 1      │  │  🚀 TIER 2      │  │  🧠 TIER 3      │
│  Landing Pages  │  │  Sistemas a     │  │  Consultoría    │
│  & Web Apps     │  │  Medida / SaaS  │  │  en Datos & IA  │
│                 │  │                 │  │                 │
│  • Diseño resp. │  │  • Arquitectura │  │  • Análisis     │
│  • SEO          │  │  • Auth + RBAC  │  │  • ML / DL      │
│  • Deploy       │  │  • API + DB     │  │  • Dashboards   │
│  • 1 revisión   │  │  • Testing E2E  │  │  • Reportes     │
│                 │  │                 │  │                 │
│  Desde $XXX     │  │  Desde $XXX     │  │  Consultar      │
│ [Contactar →]   │  │ [Contactar →]   │  │ [Contactar →]   │
└────────────────┘  └────────────────┘  └────────────────┘
```

**Diseño visual por tier:**
- **Tier 1 (Landing/Web):** Borde `border-emerald-500/20`, hover glow emerald
- **Tier 2 (SaaS/Sistemas):** Borde `border-ai-neon/20`, hover glow ai-neon (tier destacado, slightly elevated)
- **Tier 3 (Consultoría IA):** Borde `border-purple-500/20`, hover glow purple

**Interactividad:**
- Hover: `hover:-translate-y-1` + border glow + shadow
- CTA: Scroll suave al `#contacto`
- Badge "Popular" en el Tier 2 (opcional)

---

#### [NEW] [Services.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/components/Services.astro)

Nuevo componente `Services.astro` con:
- Header de sección (mismo estilo que las demás: título + span neon)
- Grid `grid-cols-1 md:grid-cols-3 gap-6`
- 3 tarjetas con estructura: icono, título, lista de features, precio, CTA
- Estética `bg-chess-board border border-white/5 rounded-2xl`
- CTA: `<a href="#contacto">` con scroll suave

---

#### [MODIFY] [ui.ts](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/i18n/ui.ts)

Nuevas claves i18n para Servicios:

```typescript
// ES
'services.title1': 'Mis ',
'services.title2': 'Servicios',
'services.subtitle': 'Soluciones a medida para cada necesidad digital.',

'services.t1.title': 'Landing Pages & Web',
'services.t1.f1': 'Diseño responsive y moderno',
'services.t1.f2': 'Optimización SEO',
'services.t1.f3': 'Deploy y dominio configurado',
'services.t1.f4': '1 ronda de revisiones incluida',
'services.t1.price': 'Desde $XXX',

'services.t2.title': 'Sistemas a Medida / SaaS',
'services.t2.f1': 'Arquitectura Full Stack',
'services.t2.f2': 'Autenticación y roles (RBAC)',
'services.t2.f3': 'API REST + Base de Datos',
'services.t2.f4': 'Testing E2E integrado',
'services.t2.price': 'Desde $XXX',
'services.t2.badge': 'Popular',

'services.t3.title': 'Consultoría en Datos & IA',
'services.t3.f1': 'Análisis exploratorio de datos',
'services.t3.f2': 'Modelos ML / Deep Learning',
'services.t3.f3': 'Dashboards interactivos',
'services.t3.f4': 'Reportes ejecutivos',
'services.t3.price': 'Consultar',

'services.cta': 'Contactar',

// EN — Same structure with translated values
'services.title1': 'My ',
'services.title2': 'Services',
'services.subtitle': 'Tailored solutions for every digital need.',

'services.t1.title': 'Landing Pages & Web',
'services.t1.f1': 'Responsive and modern design',
'services.t1.f2': 'SEO Optimization',
'services.t1.f3': 'Deployment and domain setup',
'services.t1.f4': '1 revision round included',
'services.t1.price': 'From $XXX',

'services.t2.title': 'Custom Systems / SaaS',
'services.t2.f1': 'Full Stack Architecture',
'services.t2.f2': 'Auth & Role-based access (RBAC)',
'services.t2.f3': 'REST API + Database',
'services.t2.f4': 'Integrated E2E Testing',
'services.t2.price': 'From $XXX',
'services.t2.badge': 'Popular',

'services.t3.title': 'Data & AI Consulting',
'services.t3.f1': 'Exploratory data analysis',
'services.t3.f2': 'ML / Deep Learning models',
'services.t3.f3': 'Interactive dashboards',
'services.t3.f4': 'Executive reports',
'services.t3.price': 'Inquire',

'services.cta': 'Contact',
```

---

### Componente 4: Integración en Páginas y Navbar

#### [MODIFY] [index.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/pages/index.astro)

- Importar `Services` component
- Insertar `<Services />` entre `<Skills />` y `<Contact />`

Nuevo orden de secciones:
```
Hero → ProductionSaaS → Projects → About → Certificates → Skills → Services → Contact
```

#### [MODIFY] [index.astro (en)](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/pages/en/index.astro)

- Mismos cambios que el index principal.

#### [MODIFY] [Header.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/components/Header.astro)

- Agregar enlace "Servicios" / "Services" al navbar (anchor `#servicios`)
- Agregar claves i18n: `'nav.services': 'Servicios'` / `'nav.services': 'Services'`

---

### Resumen de Archivos

| Archivo | Acción | Cambios |
|---------|--------|---------|
| [ProductionSaaS.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/components/ProductionSaaS.astro) | MODIFY | Rediseño completo: grid 3 cols, cards compactas, nuevo proyecto, status TupRun |
| [Services.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/components/Services.astro) | NEW | Sección de servicios freelance con 3 tiers |
| [ui.ts](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/i18n/ui.ts) | MODIFY | ~40 nuevas claves i18n (saas.*, services.*) en ES y EN |
| [projects.ts](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/data/projects.ts) | MODIFY | +2 proyectos (Zaha, Student Souls) en ES y EN |
| [index.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/pages/index.astro) | MODIFY | Import + render Services |
| [index.astro (en)](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/pages/en/index.astro) | MODIFY | Import + render Services |
| [Header.astro](file:///c:/Repositorios_Locales/Proyectos_Personales/Nahuel-Portfolio/src/components/Header.astro) | MODIFY | Nuevo link "Servicios" en navbar |
| `/public/projects/zaha.webp` | NEW | Imagen para proyecto Zaha |
| `/public/projects/student-souls.webp` | NEW | Imagen para proyecto Student Souls |

---

## Verification Plan

### Automated Tests
- `npm run build` — Verificar que el build de Astro compile sin errores.
- Inspección visual del dev server (`npm run dev`) en ambas rutas `/` y `/en/`.

### Manual Verification
- Verificar que los filtros de Projects sigan funcionando correctamente con los 2 nuevos proyectos.
- Verificar que el modal de proyecto muestre correctamente los datos de Zaha y Student_Souls.
- Confirmar que la sección B2B muestra las 3 tarjetas en grid responsive (1 col mobile, 3 cols desktop).
- Confirmar que los CTAs de Servicios hacen scroll suave a `#contacto`.
- Verificar i18n: cambiar idioma ES ↔ EN y confirmar que todas las nuevas claves se traducen correctamente.
- Confirmar que ViewTransitions no se rompen al navegar entre idiomas.
