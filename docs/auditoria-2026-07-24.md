# Auditoría y mejoras — 24 de julio de 2026

Informe de la sesión de trabajo sobre el portfolio. Registro de **qué se cambió, por
qué, y qué se decidió no hacer**. Las mejoras pendientes viven en
[`BACKLOG.md`](../BACKLOG.md); este archivo es el histórico de lo ejecutado.

Todo salió en el **PR #11** contra `main`, en 7 commits sobre `Nahuel_Develop`.

**Criterio que guió todo:** el portfolio tiene que vender quién es Nahuel a un
cliente que no es técnico. Entre "se ve pro" y "se entiende rápido", gana lo segundo.

---

## 1. Sección "Soluciones en Producción" — menos ruido

**Pedido original.** Las etiquetas y los indicadores de estado cargaban visualmente
y eran demasiado técnicos.

| Qué | Antes | Ahora |
|---|---|---|
| Etiquetas | `SaaS` `B2B` `Platform` `Event` `Event Management` | Eliminadas |
| Estado | Puntitos parpadeantes con `EN PRODUCCIÓN` / `PAUSADO` | Eliminados; el color del borde sigue diferenciando |
| Estado TupRun | `⏸️ Status: Desarrollo pausado temporalmente.` | `En pausa temporal` |
| Métricas vacías | `— Clientes B2B` en Hackathon, `--- ---` en TupRun | Sin métricas: un guion se lee como cero, no como "no aplica" |

Las tres descripciones se reescribieron en formato **problema → solución →
resultado**, con el stack relegado a los tags:

- **AstroFit** — dejó de hablar de RLS, middleware y Service Workers. Ahora arranca
  por el cuaderno donde el gimnasio anotaba quién debía la cuota, y cierra con
  5 gimnasios y 250+ alumnos.
- **Hackathon Edutech** — la historia real: pedían una landing y terminaron con la
  plataforma donde corren inscripciones, entrega de proyectos, mentores y jurado.
  Datos verificados en el sitio del evento antes de escribirla.
- **TupRun** — dejó de ser "plataforma B2B2C que gamifica el running".

Efecto lateral que salió bien: la fila de AstroFit ahora engancha con el subtítulo
de la sección de testimonios ("gimnasios que dejaron el cuaderno"). Las dos secciones
cuentan la misma historia.

## 2. Proyectos — regla de 6 destacados

Antes `[ All_Systems ]` mostraba "todo menos Game Dev", así que la cantidad dependía
de cuántos proyectos hubiera cargados. Ahora hay un flag explícito `featured` en
`projects.ts` y el filtro muestra solo esos.

**Destacados:** Zaha · Nimbus AI · Roque Chess Bot · Guidia · Mundial Data ·
**Siglo 21 · Correlativas**.

**Bodega Manager** salió del destacado pero sigue en `/ Full_Stack`, junto con
**GameMatch**. Ambos proyectos nuevos se describieron empezando por el problema que
resuelven, y se generaron sus portadas.

## 3. SEO — era el agujero más grande

El sitio no previsualizaba al compartirse y Google no sabía que `/` y `/en/` eran la
misma página en dos idiomas.

- `site` configurado con `https://www.nahuelghilardi.com.ar` (habilita URLs absolutas).
- **Open Graph + Twitter Card** con imagen propia 1200×630 (`public/og-image.png`).
- `canonical` y `hreflang` es / en / x-default.
- **JSON-LD de `Person`** con nombre, rol, ubicación y redes.
- Títulos y descripciones por idioma. Antes ambos decían `Nahu | Portfolio`.
- `sitemap-index.xml` vía `@astrojs/sitemap` y `robots.txt`.
- `html lang` del español pasa a `es-AR`.

Los datos del sitio quedaron centralizados en `src/config/site.ts`.

## 4. Testimonios — sección nueva

Tres citas reales de clientes de AstroFit —**Titan Gym, Plena Forma, Evolución
Sport**— tomadas textualmente de la landing pública del producto, con link a la
fuente al pie.

`src/data/testimonials.ts` deja la regla escrita: **solo citas reales y verificables,
con la fuente anotada**. Nunca redactar un testimonio de ejemplo, ni temporal. La
cita no se traduce (es la palabra del cliente); el cargo sí.

## 5. Hero — propuesta de valor y dato duro

El subtítulo pasó de *"Combinando lógica de ajedrez con potencia de IA"* —que suena
bien pero no dice nada accionable— a *"Del dato al producto: diseño el modelo, lo
convierto en software y lo pongo en producción"*, con una fila de métricas reales:
**2 apps en producción · 5 gimnasios clientes · 250+ usuarios**.

## 6. Contacto — dejaba de convertir

El formulario posteaba a Formspree con un POST nativo: el visitante **salía del
sitio** y aterrizaba en una página de Formspree, sin confirmación y sin volver.

- Envío por `fetch` con estados de **enviando / éxito / error** en la misma página.
- **Honeypot** anti-spam (`_gotcha`).
- Si falla la red, mensaje claro y fallback al cliente de correo.
- **Vías directas** arriba del formulario: mail y WhatsApp con mensaje precargado.
- El script **no usa `is:inline`**: un inline se re-ejecuta en cada View Transition y
  acumularía un listener de submit por navegación, disparando N fetches por envío.

Probado con `fetch` simulado en las tres ramas, sin enviar nada real a Formspree.

## 7. Consistencia entre español e inglés

Se auditaron **todas** las claves de `ui.ts` y todos los campos no traducibles de
`projects.ts`. Se tomó el valor del español como correcto.

| Dato | Antes (EN) | Ahora |
|---|---|---|
| `cert.uni2.date` | `2024 - Present` | `2025 - Present` |
| `cert.ds.date` | `2024` | `2023 - 2025` |
| Link de Roque Chess | `nahuelito22.github.io/Bot_Ajedrez` | `roquechess.vercel.app` |

Dos más que aparecieron en la auditoría:

- **`nav.menu` decía "Menu" sin tilde** en español — y la clave no se usaba en ningún
  lado. El botón del menú móvil tenía `aria-label="Toggle menu"` hardcodeado en
  inglés en ambos idiomas. Ahora usa la clave y suma `aria-expanded`.
- **"Sobre Mí" decía "5+ PROYECTOS COMPLETADOS"** con 10 proyectos publicados. Pasó a 10+.

## 8. Accesibilidad

- **Modal**: `role="dialog"`, `aria-modal`, `aria-labelledby`. Toma el foco al abrir,
  Tab queda atrapado adentro, y al cerrar el foco vuelve a quien lo abrió. Antes el
  teclado seguía navegando el fondo.
- **Tarjetas y filas**: eran `div`s clickeables inalcanzables por teclado. Ahora
  tienen `role`, `tabindex`, se activan con Enter/Espacio y tienen anillo de foco.
- **`aria-pressed`** en los filtros: el color no comunica el estado a un lector.
- **`prefers-reduced-motion`** respetado en el CSS global y en las animaciones de
  scroll. **No en las partículas** — ver la sección de reversiones.
- **Riesgo de página en blanco**: las secciones arrancaban en `opacity-0` y solo se
  revelaban por `IntersectionObserver`. Si el JS fallaba, la página quedaba vacía.
  Ahora sin soporte no se oculta nada, y hay un timeout de seguridad.

## 9. Rendimiento

El cuello de botella no era el JavaScript sino **las imágenes**: 2,8 MB para slots de
200-400 px. `guidia.webp` pesaba 734 kB, `laburar-o-jugar` 605 kB, `nimbus-ai` 598 kB,
y `astrofit.webp` eran 211 kB a 1024×1024 para mostrarse en un cuadrado de 64 px.

**Redimensionadas a 800 px de lado mayor: 2,8 MB → 380 kB (−87%)**, sin pérdida
visible. `gestion_de_bodega.webp` se dejó como estaba: ya venía más comprimida y el
reencodeo la empeoraba (7 kB → 17 kB).

También: fuentes de Google sin bloquear el render (con fallback en `<noscript>`), y
`loading="lazy"` + `decoding="async"` en las imágenes.

## 10. Dependencias

- Removido **`tsparticles@3.9.1`**: el código importa los paquetes v2, estaba
  instalado sin usarse.
- `package.json` renombrado de `astronautical-antimatter` a `nahuel-portfolio`.

---

## Lo que se revirtió, y por qué

### Code-splitting de tsparticles

Se intentó cargar tsparticles con import dinámico dentro de `requestIdleCallback`
más un guard que saltaba las partículas si el visitante tenía
`prefers-reduced-motion: reduce`. El chunk inicial bajaba de 140 kB a 1,8 kB.

**Rompió las partículas.** Windows reporta `prefers-reduced-motion: reduce` cuando
"Efectos de animación" está desactivado en Accesibilidad — una opción bastante
común, así que el efecto se veía en máquinas normales, no en un caso de borde.

Se revirtió al comportamiento original. El culpable era **solo el guard**: el import
dinámico por sí solo funciona (se comprobó que los chunks cargan y el canvas se
dibuja). Queda documentado en el punto 6 del backlog cómo retomarlo.

**Lección:** las partículas son la identidad visual del sitio. Antes de sacrificar un
elemento distintivo por rendimiento o accesibilidad, hay que preguntar. Y cualquier
cambio que las toque se verifica en un navegador **con reduced-motion activado**,
que es donde falla.

## Decisiones tomadas conscientemente

- **No se menciona que el trabajo de Hackathon Edutech fue gratuito.** Habla bien de
  él, pero funciona como ancla de precio justo antes de la sección "Desde $500 USD".
  La iniciativa se transmite sin decirlo.
- **No se publicó nada del trabajo freelance bajo NDA**: pendiente de autorización
  escrita del cliente. El criterio está en el punto 2 del backlog.
- **Los testimonios no se inventaron**: se verificó que existieran publicados antes
  de usarlos.
- **La sección de testimonios no se agregó al nav**: ya hay 7 ítems y sumar uno más
  lo satura.

---

## Commits

| Hash | Qué |
|---|---|
| `bfdd6f9` | Simplifica producción y suma Siglo 21 · Correlativas y GameMatch |
| `46968d6` | SEO completo, testimonios, hero y contacto |
| `27dfdab` | Descripciones de producción en lenguaje de negocio |
| `bebd1aa` | Historia real de Hackathon Edutech y métricas vacías |
| `314dd4c` | Consistencia ES/EN, accesibilidad, rendimiento y dependencias |
| `84b1992` | Revierte las partículas a su comportamiento original |
| `c579af8` | Activa el botón de WhatsApp |
