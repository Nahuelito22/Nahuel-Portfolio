# Backlog del Portfolio

Evaluación del estado actual y mejoras pendientes, ordenadas por impacto.
Última revisión: 2026-07-24.

Criterio general: **el portfolio tiene que vender quién sos, no demostrar que sabés
tecnicismos.** Cuando haya que elegir entre "se ve pro" y "se entiende rápido",
gana lo segundo.

---

## ✅ Hecho

- **Hero con propuesta de valor y dato duro.** El subtítulo pasó de "Combinando
  lógica de ajedrez con potencia de IA" a "Del dato al producto: diseño el modelo,
  lo convierto en software y lo pongo en producción", con una fila de métricas
  (2 apps en producción · 5 gimnasios · 250+ usuarios).
- **Sección de testimonios.** Tres citas reales de clientes de AstroFit
  (Titan Gym, Plena Forma, Evolución Sport), reproducidas textualmente desde la
  landing pública del producto, con link a la fuente.
- **SEO completo.** `site` configurado, canonical, `hreflang` es/en/x-default,
  Open Graph + Twitter Card con imagen 1200×630 propia, JSON-LD de `Person`,
  títulos y descripciones específicos por idioma, `sitemap-index.xml` y `robots.txt`.
- **Formulario de contacto.** Envío por `fetch` sin salir del sitio, estados de
  carga/éxito/error en pantalla, honeypot anti-spam, fallback a mail si falla la red,
  y vías directas (mail y WhatsApp) arriba del formulario.
- **Producción sin jerga.** Fuera etiquetas `SaaS`/`B2B`/`Platform`/`Event` y los
  indicadores parpadeantes de estado.
- **Regla de 6 destacados** en `[ All_Systems ]` vía flag `featured`.

---

## 🔴 Alto impacto

### 1. Convertir AstroFit en un mini caso de estudio

Hoy AstroFit aparece con una descripción técnica (RLS, middleware, Service Workers).
Un cliente potencial no compra eso; compra el resultado. Falta la historia:

- **Problema**: qué le dolía al gimnasio antes (la landing de AstroFit ya lo dice
  mejor que el portfolio: *"dejar el cuaderno y empezar a crecer"*).
- **Qué construiste**: en una frase, sin stack.
- **Resultado**: "5 gimnasios, 250+ alumnos gestionados" ya está en las métricas —
  hay que contarlo como logro, no como dato suelto.

Formato sugerido: una página `/casos/astrofit` con 4 bloques (Problema · Solución ·
Resultado · Stack al final, en letra chica). Es el activo más valioso que tenés y
hoy ocupa una línea. Los testimonios ya publicados dan el cierre.

### 2. Sección de Experiencia / Clientes — pendiente de autorización

Dialogy LLC no va en "Soluciones en Producción": esa sección está armada como
**proyectos propios** (sos el dueño del producto). Dialogy es otra cosa —
sos un profesional contratado. Mezclarlos le quita claridad a la narrativa.

Crear una sección aparte, **"Experiencia / Clientes"** o **"Freelance & Consultoría"**,
con tarjetas de rol + stack, sin capturas del producto.

**Antes de publicar cualquier cosa de Dialogy hay que resolver el NDA.** Criterio
estándar de la industria (no es asesoramiento legal — la respuesta está en tu NDA
específico):

| | Qué |
|---|---|
| ✅ Casi siempre permitido | Que trabajaste/trabajás para Dialogy LLC, tu rol, y el stack (React Native, Django, Supabase, RevenueCat, AWS). La *existencia* de la relación laboral no suele ser confidencial. |
| ❌ Nunca, con NDA o sin él | Números internos de negocio (usuarios, ingresos, roadmap no público), código propietario, arquitectura de seguridad, nombres de otros clientes o proveedores que viste en el trabajo, y cualquier bug o vulnerabilidad que hayas encontrado. |
| ⚠️ Zona gris | Capturas de la app, el nombre del producto ("Amara"), el logo. Muchos NDA permiten nombrar al cliente pero prohíben material visual sin permiso. |

**Acción**: escribirle a Paola algo corto y explícito — *"¿puedo listar a Dialogy como
cliente en mi portfolio, mencionando el rol y las tecnologías, sin entrar en detalles
del producto?"*. La mayoría de los founders lo autorizan porque también les sirve como
validación. Si el NDA es restrictivo, revisar puntualmente si la cláusula de
confidencialidad cubre "la existencia de la relación comercial".

Borrador de la tarjeta, para cuando haya luz verde:

> **Dialogy LLC** — Full Stack & AI Engineer
> Desarrollo y despliegue de aplicación móvil de bienestar emocional con compañera de IA.
> Arquitectura backend, integración de pagos e infraestructura de IA conversacional.
> *Stack: React Native, Django, Supabase, AWS, LangChain*

### 3. Más testimonios

Ya hay tres de AstroFit. Faltan:

- **Hackathon Edutech Mendoza**: pedirle una línea al organizador. Es un evento, no
  un cliente pago, así que aporta un tipo de prueba distinto (te confían un proyecto
  con visibilidad pública).
- **Dialogy**: sujeto al punto 2.

Cuando haya testimonios de más de un producto, agregar el logo o el nombre del
producto como filtro visual en la sección.

**Regla para `src/data/testimonials.ts`: solo citas reales y verificables, con la
fuente anotada.** Nunca redactar un testimonio "de ejemplo", ni siquiera temporal.

---

## 🟡 Medio impacto — calidad y confianza

### 4. Inconsistencias entre español e inglés

`projects.ts` y `ui.ts` duplican todo el contenido en dos idiomas, y ya divergieron.
Detectadas:

| Dato | ES | EN |
|---|---|---|
| `cert.uni2.date` (Lic. Ciencia de Datos) | `2025 - Presente` | `2024 - Present` |
| `cert.ds.date` (Carrera Data Science) | `2023 - 2025` | `2024` |
| Link de Roque Chess Bot | `roquechess.vercel.app` | `nahuelito22.github.io/Bot_Ajedrez` |

Hay que corregir cuál es el correcto en cada caso. A futuro conviene que los datos
que **no** son texto traducible (links, imágenes, tags, fechas) vivan una sola vez
y que solo `title`/`description` estén por idioma. Eso elimina la clase entera de bug.

### 5. Accesibilidad

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

### 6. Rendimiento

- Las imágenes usan `<img>` crudo, sin `width`/`height` (provoca saltos de layout)
  ni `loading="lazy"` para las que están abajo del fold. Migrar al componente
  `<Image />` de Astro las resuelve las tres cosas.
- Google Fonts se carga bloqueando el render. Alternativa: `@fontsource` o
  `font-display: swap` + preload.
- tsparticles son ~140 kB de JS solo decorativos. Evaluar cargarlo con
  `requestIdleCallback`, desactivarlo en móvil, o reemplazarlo por un fondo CSS.

### 7. Dependencias

- Conviven `tsparticles@3.9.1` con `tsparticles-engine@2.12.0` y `tsparticles-slim@2.12.0`.
  El código importa las v2, así que **`tsparticles@3` está instalado sin usarse**. Sacarlo.
- `package.json` todavía se llama `astronautical-antimatter` (nombre autogenerado
  de la plantilla).

---

## 🟢 Bajo impacto — pulido

### 8. Imagen de portada de GameMatch

La actual es una placa de título generada, no una captura real. Reemplazarla por un
screenshot de la app cuando tenga contenido cargado.

### 9. Descubribilidad de los proyectos no destacados

`[ All_Systems ]` muestra 6 proyectos y el resto vive dentro de su categoría.
Está bien para no saturar, pero el visitante no sabe que hay más. Agregar un contador
en los filtros (`/ Full_Stack (4)`) o un texto tipo "y 4 proyectos más por categoría".

### 10. Testimonios en el nav

La sección quedó sin link en el menú porque ya hay 7 items y sumar uno más lo satura.
Si se agrega la sección de Experiencia/Clientes va a haber que repensar el nav
completo (quizá agrupando "Trabajo" = Producción + Experiencia + Testimonios).

### 11. Faltantes varios

- No hay página **404**.
- Los CTA de contacto ya tienen `data-analytics`, pero **falta cablearlos** a eventos
  de Vercel Analytics. Sin eso, sabés cuánta gente entró pero no qué hizo. Sumar
  también la descarga de CV y los clicks a las apps en producción.
- El easter egg del Konami usa `alert()` y aplica `filter: invert(1)` al body por 5
  segundos: es abrupto y no hay forma de cortarlo. Cambiar el alert por un toast.
- `System.Production.ENV` y los filtros `[ All_Systems ]` / `/ Full_Stack` mantienen
  el tono "consola". Es una decisión de estilo consistente en todo el sitio, pero si
  el objetivo es vender a clientes no técnicos, vale la pena testear una versión con
  etiquetas en lenguaje natural y ver si convierte mejor.
- El `README.md` sigue diciendo que el sitio fue la entrega final de Programación 2 y
  describe una sección de "Línea de Tiempo con certificaciones de Coderhouse y
  Santander" que ya no coincide con el contenido actual.

---

## Ideas para más adelante

- **Blog / notas técnicas**: dos o tres posts bien escritos sobre decisiones reales
  (por qué Supabase y no Firebase en AstroFit, cómo modelaste las correlativas) hacen
  mucho por el SEO y por mostrar criterio, no solo ejecución.
- **Página de proyecto individual** en vez del modal: URL propia, indexable,
  compartible, con espacio para contar el proceso.
- **Versión imprimible / one-pager** del portfolio para adjuntar a postulaciones.
- **Tests E2E mínimos** (Playwright ya lo usás en AstroFit): que los filtros, el modal,
  el envío del formulario y el cambio de idioma no se rompan en silencio.
