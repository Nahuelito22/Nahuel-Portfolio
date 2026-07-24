# Backlog del Portfolio

Evaluación del estado actual y mejoras pendientes, ordenadas por impacto.
Última revisión: 2026-07-24.

Criterio general: **el portfolio tiene que vender quién sos, no demostrar que sabés
tecnicismos.** Cuando haya que elegir entre "se ve pro" y "se entiende rápido",
gana lo segundo.

---

## 🔴 Alto impacto — mueven la aguja para quien te contrata

### 1. Convertir AstroFit en un mini caso de estudio

Hoy AstroFit aparece con una descripción técnica (RLS, middleware, Service Workers).
Un cliente potencial no compra eso; compra el resultado. Falta la historia:

- **Problema**: qué le dolía al gimnasio antes.
- **Qué construiste**: en una frase, sin stack.
- **Resultado**: "5 gimnasios, 250 usuarios activos" ya está en las métricas — hay que
  contarlo como logro, no como dato suelto.

Formato sugerido: una página `/casos/astrofit` con 4 bloques (Problema · Solución ·
Resultado · Stack al final, en letra chica). Es el activo más valioso que tenés y
hoy ocupa una línea.

### 2. Prueba social

No hay ni un testimonio. Una sola frase de un cliente de AstroFit o del organizador
de la Hackathon Edutech vale más que tres proyectos nuevos. Pedirlas por WhatsApp,
con nombre y foto si se puede.

### 3. Hero: decir qué resolvés y para quién

"Combinando lógica de ajedrez con potencia de IA" suena bien pero no dice nada
accionable. Alguien que cae de LinkedIn en 5 segundos tiene que entender:
qué hacés, para quién, y por qué vos.

Probar algo del estilo: *"Construyo sistemas web y modelos de datos para negocios
que necesitan decidir mejor. Hoy en producción: 3 plataformas, 250+ usuarios."*
El dato duro en el hero hace más que cualquier animación.

### 4. SEO y previsualización al compartir

Es el agujero más grande a nivel técnico y el más barato de tapar:

- No hay **Open Graph / Twitter Card**: hoy al pegar el link en LinkedIn o WhatsApp
  no aparece imagen ni descripción. Hace falta una `og-image` (1200×630).
- Falta `site` en `astro.config.mjs`, sin eso no hay URLs canónicas ni sitemap.
- Falta `@astrojs/sitemap` y `robots.txt`.
- Falta `<link rel="alternate" hreflang>` entre `/` y `/en` — Google hoy no sabe
  que son la misma página en dos idiomas.
- El `<title>` "Nahu | Portfolio" y la meta description son genéricos. Deberían
  incluir nombre completo, rol y ubicación.

### 5. El formulario de contacto pierde gente

`Contact.astro` postea a Formspree con un POST normal: el visitante sale de tu sitio
y aterriza en una página de Formspree. Además no hay confirmación en pantalla ni
anti-spam.

- Enviar con `fetch` y mostrar un estado de éxito/error en la misma página.
- Agregar honeypot (campo oculto) contra bots.
- Sumar un enlace directo a WhatsApp o email como alternativa: mucha gente no
  completa formularios.

---

## 🟡 Medio impacto — calidad y confianza

### 6. Inconsistencias entre español e inglés

`projects.ts` y `ui.ts` duplican todo el contenido en dos idiomas, y ya divergieron.
Detectadas hoy:

| Dato | ES | EN |
|---|---|---|
| `cert.uni2.date` (Lic. Ciencia de Datos) | `2025 - Presente` | `2024 - Present` |
| `cert.ds.date` (Carrera Data Science) | `2023 - 2025` | `2024` |
| Link de Roque Chess Bot | `roquechess.vercel.app` | `nahuelito22.github.io/Bot_Ajedrez` |

Hay que corregir cuál es el correcto en cada caso. A futuro conviene que los datos
que **no** son texto traducible (links, imágenes, tags, fechas) vivan una sola vez
y que solo `title`/`description` estén por idioma. Eso elimina la clase entera de bug.

### 7. Accesibilidad

- El modal de proyectos no tiene `role="dialog"` ni `aria-modal`, no atrapa el foco
  y no lo devuelve al cerrar. Con teclado se queda navegando el fondo.
- Las tarjetas de proyecto son `<div>` clickeables: no se pueden abrir con Enter ni
  se alcanzan con Tab. Deberían ser `<button>` o tener `tabindex="0"` + handler de teclado.
- Los botones de filtro no informan cuál está activo (`aria-pressed`).
- No se respeta `prefers-reduced-motion`: partículas, blurs y fade-ins corren igual
  para quien pidió menos movimiento.
- Las secciones arrancan con `opacity-0` y solo se revelan por IntersectionObserver:
  **si el JS falla, la página queda en blanco.** Conviene revelar por CSS y que el JS
  solo agregue la animación.

### 8. Rendimiento

- Las imágenes usan `<img>` crudo, sin `width`/`height` (provoca saltos de layout)
  ni `loading="lazy"` para las que están abajo del fold. Migrar al componente
  `<Image />` de Astro las resuelve las tres cosas.
- Google Fonts se carga bloqueando el render. Alternativa: `@fontsource` o
  `font-display: swap` + preload.
- tsparticles son ~140 kB de JS solo decorativos. Evaluar cargarlo con
  `requestIdleCallback`, desactivarlo en móvil, o reemplazarlo por un fondo CSS.

### 9. Dependencias

- Conviven `tsparticles@3.9.1` con `tsparticles-engine@2.12.0` y `tsparticles-slim@2.12.0`.
  El código importa las v2, así que **`tsparticles@3` está instalado sin usarse**. Sacarlo.
- `package.json` todavía se llama `astronautical-antimatter` (nombre autogenerado
  de la plantilla).

---

## 🟢 Bajo impacto — pulido

### 10. Imagen de portada de GameMatch

La actual es una placa de título generada, no una captura real. Reemplazarla por un
screenshot de la app cuando tenga contenido cargado. Ídem revisar que la de
Siglo 21 · Correlativas (hoy su imagen OG) se vea bien recortada en la grilla.

### 11. Descubribilidad de los proyectos no destacados

Ahora `[ All_Systems ]` muestra 6 proyectos y el resto vive dentro de su categoría.
Está bien para no saturar, pero el visitante no sabe que hay más. Agregar un contador
en los filtros (`/ Full_Stack (4)`) o un texto tipo "y 4 proyectos más por categoría".

### 12. Faltantes varios

- No hay página **404**.
- No hay eventos de analytics en las acciones que importan: click en "Contactar",
  descarga de CV, click a una app en producción. Sin eso, Vercel Analytics solo te
  dice cuánta gente entró, no qué hizo.
- El easter egg del Konami usa `alert()` y aplica `filter: invert(1)` al body por 5
  segundos: es abrupto y no hay forma de cortarlo. Cambiar el alert por un toast.
- `System.Production.ENV` y los filtros `[ All_Systems ]` / `/ Full_Stack` mantienen
  el tono "consola". Es una decisión de estilo consistente en todo el sitio, pero si
  el objetivo es vender a clientes no técnicos, vale la pena testear una versión con
  etiquetas en lenguaje natural y ver si convierte mejor.

---

## Ideas para más adelante

- **Blog / notas técnicas**: dos o tres posts bien escritos sobre decisiones reales
  (por qué Supabase y no Firebase en AstroFit, cómo modelaste las correlativas) hacen
  mucho por el SEO y por mostrar criterio, no solo ejecución.
- **Página de proyecto individual** en vez del modal: URL propia, indexable,
  compartible, con espacio para contar el proceso.
- **Versión imprimible / one-pager** del portfolio para adjuntar a postulaciones.
- **Tests E2E mínimos** (Playwright ya lo usás en AstroFit): que los filtros, el modal
  y el cambio de idioma no se rompan en silencio.
