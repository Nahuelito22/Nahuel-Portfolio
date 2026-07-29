# Backlog del Portfolio

Evaluación del estado actual y mejoras pendientes, ordenadas por impacto.
Última revisión: 2026-07-29.

Criterio general: **el portfolio tiene que vender quién sos, no demostrar que sabés
tecnicismos.** Cuando haya que elegir entre "se ve pro" y "se entiende rápido",
gana lo segundo.

El detalle de lo ya ejecutado, con el porqué de cada decisión, está en
[`docs/auditoria-2026-07-24.md`](docs/auditoria-2026-07-24.md).

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
  filtros. `prefers-reduced-motion` respetado en el CSS y en las animaciones de
  scroll — **pero no en las partículas**, ver punto 6. Red de seguridad para que el
  contenido nunca quede oculto si el JS falla.
- **Rendimiento.** Imágenes redimensionadas: 2,8 MB → 380 kB (-87%). Fuentes no
  bloqueantes y `loading="lazy"` en las imágenes.
- **Dependencias.** Removido `tsparticles@3`, que estaba instalado sin usarse.
  `package.json` renombrado de `astronautical-antimatter` a `nahuel-portfolio`.
- **Caso de estudio de AstroFit** *(era el punto 1)*. `/casos/astrofit` y su
  espejo `/en/cases/astrofit`, con los cuatro bloques: problema → solución →
  resultado → stack en letra chica. Une lo que antes estaba repartido entre el
  hero, Producción y los testimonios, y da una URL compartible que se le puede
  mandar directo a un cliente. Ruta dinámica `/casos/[slug]`: sumar TupRun o
  Edutech es agregar un objeto a `CASES`.
  `cases.ts` estrena el patrón del punto 4 — lo no traducible vive una sola vez.
  De paso se arreglaron dos cosas que se rompían al existir una subpágina: el
  `hreflang` del `Layout`, que estaba fijo a la portada, y los enlaces del
  `Header`, que eran anclas sueltas y no llevaban a ningún lado fuera del home.

---

## 🔴 Alto impacto

> Los números son identificadores estables, no un orden: cuando un punto se
> termina, se mueve a "Hecho" y su número **no** se reutiliza. Así los enlaces
> del tipo "ver punto 6" siguen apuntando a lo mismo.

### 2. Sección de Experiencia / Clientes — pendiente de autorización

> ⚠️ **Este archivo es público** (el repo lo es). El detalle de qué cliente es, qué
> permite su acuerdo y qué no, vive **fuera del repo**, en las notas privadas. Acá
> queda solo el criterio, que es lo reutilizable.

Hay trabajo freelance para un cliente que todavía no aparece en el portfolio porque
la autorización está pendiente. Cuando llegue, **no** va en "Soluciones en
Producción": esa sección son proyectos propios, donde sos el dueño del producto.
Trabajo contratado es otra cosa, y mezclarlos le quita claridad a la narrativa.

Va en una sección nueva, **"Experiencia / Clientes"** o **"Freelance & Consultoría"**,
con tarjetas de rol + stack y sin capturas del producto.

**Criterio para cualquier cliente bajo NDA** (no es asesoramiento legal — la
respuesta siempre está en el acuerdo concreto, hay que leerlo):

| | Qué |
|---|---|
| ✅ Suele poderse | La existencia de la relación comercial y tu rol, salvo que el acuerdo lo prohíba expresamente. Muchos NDA no dicen nada al respecto: hay que buscar la cláusula de no-publicidad y confirmar que no está. |
| ✅ Suele poderse | El stack, **como lista plana de tecnologías**. Es norma de la industria. |
| ❌ No | **Cómo se conectan** esas tecnologías. Eso es arquitectura de software, y los NDA la listan como confidencial casi siempre. La línea está entre "Django, FastAPI, Postgres" y "microservicio de IA detrás del backend, con vectores en Postgres". |
| ❌ Nunca, con acuerdo o sin él | En qué estado estaba el producto al llegar, bugs, vulnerabilidades encontradas, números de negocio, montos del contrato o del abono, y nombres de otros proveedores o clientes que viste en el trabajo. |
| ⚠️ Permiso aparte | Logo, capturas y nombres de producto. Eso es **uso de marca**, no confidencialidad: son dos permisos distintos y hay que pedir los dos. |

**Trampa a evitar:** contar el trabajo en anónimo *y* listar al cliente en otra
sección del mismo sitio. Se cruza en segundos y el anonimato se cae, con el agravante
de que ahí la divulgación es deliberada. Es binario: o nombrás al cliente y contás la
versión sin detalles, o guardás los detalles y no nombrás al cliente.

**Cómo pedir la autorización:** por escrito, **enumerando exactamente qué va a
aparecer** (rol, tecnologías, si hay logo o no). Un "sí, dale" por chat no especifica
a qué se dijo sí, y es lo que después no sirve de nada. Pedirlo en un momento de valor
entregado, no antes.

Estructura de la tarjeta, para cuando haya luz verde:

> **[Cliente]** — [Rol]
> [Qué hacés, en una frase, sin describir la arquitectura.]
> *Stack: [lista plana de tecnologías]*

### 3. Más testimonios

Ya hay tres de AstroFit. Faltan:

- **Hackathon Edutech Mendoza**: pedirle una línea al organizador. Es un evento, no
  un cliente pago, así que aporta un tipo de prueba distinto (te confían un proyecto
  con visibilidad pública).
- **Cliente freelance del punto 2**: sujeto a la autorización.

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

### 6. tsparticles: 140 kB en el bundle inicial

**No tocar sin verificar en el navegador del dueño del sitio.** Se intentó una vez
y se revirtió.

Qué se probó: import dinámico dentro de `requestIdleCallback` + saltear las
partículas si el visitante tiene `prefers-reduced-motion: reduce`. El chunk inicial
bajaba de 140 kB a 1,8 kB.

Por qué se revirtió: **el guard de reduced-motion apagaba las partículas**. Windows
reporta `prefers-reduced-motion: reduce` cuando "Efectos de animación" está
desactivado en Accesibilidad, que es una configuración bastante común — así que el
efecto no era un caso de borde, se veía en máquinas normales. Las partículas son la
identidad visual del sitio, no un adorno prescindible: apagarlas cuesta más de lo
que ahorra.

Si se retoma, hacerlo **sin el guard de reduced-motion** y verificando en un
navegador con esa opción activada. El import dinámico por sí solo funciona (se
comprobó que los chunks cargan y las partículas se dibujan igual); el problema
era exclusivamente el guard.

Alternativas más seguras para el mismo objetivo: bajar la cantidad de partículas
en móvil, o reemplazar tsparticles por un fondo animado en CSS/SVG.

### 7. Auditoría de idiomas automatizable

La comparación ES/EN se hizo a mano con un script de una sola vez. Vale la pena
dejarlo como `npm run check:i18n` para que un valor divergente falle en CI en
lugar de descubrirse leyendo el sitio. Compara: claves faltantes en cada idioma,
campos no traducibles distintos entre `PROJECTS.es` y `PROJECTS.en`, y números o
fechas que difieren entre traducciones de una misma clave.

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
