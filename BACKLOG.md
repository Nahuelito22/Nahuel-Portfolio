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
  indicadores parpadeantes de estado. Las tres descripciones reescritas en formato
  problema → solución → resultado.
- **Regla de 6 destacados** en `[ All_Systems ]` vía flag `featured`.
- **Consistencia ES/EN.** Corregidas las fechas de certificados y el link de Roque
  Chess (se tomó el valor del español como correcto), la tilde de "Menú" y el
  contador de proyectos de "Sobre Mí", que decía 5+ con 10 proyectos publicados.
- **Accesibilidad.** Modal con `role="dialog"`, `aria-modal`, foco al abrir,
  trampa de foco con Tab y devolución del foco al cerrar. Tarjetas y filas
  operables con Enter/Espacio y con anillo de foco visible. `aria-pressed` en los
  filtros. `prefers-reduced-motion` respetado en CSS, en las animaciones de scroll
  y en las partículas. Red de seguridad para que el contenido nunca quede oculto
  si el JS falla.
- **Rendimiento.** Imágenes redimensionadas: 2,8 MB → 380 kB (-87%). tsparticles
  pasó a import dinámico en `requestIdleCallback`: el bundle inicial bajó de
  140 kB a 1,8 kB. Fuentes no bloqueantes y `loading="lazy"` en las imágenes.
- **Dependencias.** Removido `tsparticles@3`, que estaba instalado sin usarse.
  `package.json` renombrado de `astronautical-antimatter` a `nahuel-portfolio`.

---

## 🔴 Alto impacto

### 1. Convertir AstroFit en un mini caso de estudio

**Parcialmente hecho.** Las descripciones de la sección de Producción ya se
reescribieron en formato problema → solución → resultado y sin jerga: AstroFit
arranca por el cuaderno del gimnasio en vez de por RLS y middleware, TupRun dejó
de llamarse "plataforma B2B2C". El stack sigue disponible en los tags de abajo,
para quien lo busque.

**Lo que falta es la página propia.** Hoy la historia sigue repartida en tres
lugares que no se hablan entre sí: el número en el hero, la descripción en
Producción, y los testimonios más abajo. Un caso de estudio los une en un solo
argumento, y de paso da una URL indexable y compartible que se le puede mandar
directo a un cliente potencial sin obligarlo a recorrer todo el portfolio.

Formato sugerido: `/casos/astrofit` con 4 bloques.

- **Problema**: el cuaderno — no saber quién debe la cuota, quién asiste, cuánto entra.
- **Solución**: qué construiste, en una frase, sin stack.
- **Resultado**: 5 gimnasios y 250+ alumnos, cerrado con los testimonios ya publicados.
- **Stack**: al final, en letra chica.

Conviene hacerlo junto con el testimonio de Edutech y la respuesta de Dialogy,
para armar la narrativa completa de una sola vez.

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

## 🟡 Medio impacto

### 4. Contenido duplicado entre idiomas

Ya no hay divergencias (se auditaron todas las claves y todos los campos no
traducibles de los proyectos), pero **la causa sigue ahí**: `projects.ts` y `ui.ts`
duplican el contenido en dos idiomas, así que links, imágenes, tags y fechas
existen dos veces y pueden volver a separarse.

Arreglo de fondo: que los datos que **no** son texto traducible vivan una sola vez
y que solo `title`/`description` estén por idioma. Elimina la clase entera de bug.
Mientras tanto, el script de auditoría usado queda documentado abajo.

### 5. Imágenes servidas por Astro

Se resolvió lo urgente (peso y `loading="lazy"`), y el CLS no es problema porque
los contenedores tienen alto fijo. Lo que falta para hacerlo bien es mover las
imágenes de `public/` a `src/assets/` y usar el componente `<Image />`: da
`width`/`height` automáticos, variantes por densidad de pantalla y AVIF además de
WebP. Es un cambio más invasivo porque `projects.ts` y `production.ts` referencian
las rutas como strings.

### 6. Auditoría de idiomas automatizable

La comparación ES/EN se hizo a mano con un script de una sola vez. Vale la pena
dejarlo como `npm run check:i18n` para que un valor divergente falle en CI en
lugar de descubrirse leyendo el sitio. Compara: claves faltantes en cada idioma,
campos no traducibles distintos entre `PROJECTS.es` y `PROJECTS.en`, y números o
fechas que difieren entre traducciones de una misma clave.

---

## 🟢 Bajo impacto — pulido

### 7. Imagen de portada de GameMatch

La actual es una placa de título generada, no una captura real. Reemplazarla por un
screenshot de la app cuando tenga contenido cargado.

### 8. Descubribilidad de los proyectos no destacados

`[ All_Systems ]` muestra 6 proyectos y el resto vive dentro de su categoría.
Está bien para no saturar, pero el visitante no sabe que hay más. Agregar un contador
en los filtros (`/ Full_Stack (4)`) o un texto tipo "y 4 proyectos más por categoría".

### 9. Testimonios en el nav

La sección quedó sin link en el menú porque ya hay 7 items y sumar uno más lo satura.
Si se agrega la sección de Experiencia/Clientes va a haber que repensar el nav
completo (quizá agrupando "Trabajo" = Producción + Experiencia + Testimonios).

### 10. Faltantes varios

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
