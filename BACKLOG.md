# Backlog del Portfolio

Pendientes y criterios del sitio, ordenados por impacto.
Última revisión: 2026-09-28, al cerrar el rediseño.

Criterio general: **el portfolio tiene que vender quién sos, no demostrar que sabés
tecnicismos.** Cuando haya que elegir entre "se ve pro" y "se entiende rápido",
gana lo segundo.

Informes de sesiones anteriores, del más reciente al más viejo:

- [`docs/sesion-2026-07-29.md`](docs/sesion-2026-07-29.md): caso de estudio de
  AstroFit y limpieza de datos de cliente de los archivos públicos.
- [`docs/auditoria-2026-07-24.md`](docs/auditoria-2026-07-24.md): SEO, contacto,
  accesibilidad, rendimiento y consistencia ES/EN.

> ⚠️ **Este repositorio es público.** Acuerdos, montos y detalles de clientes van
> **fuera del repo**. Acá solo criterios reutilizables.

---

## ✅ Hecho: rediseño (septiembre 2026)

Rama `rediseno`. Se pasó de un portfolio de estudiante (muchas tarjetas, guiños de
consola, precios bajos) a un sitio centrado en la experiencia.

- **Dirección visual:** fondo oscuro, un solo acento cian, Source Serif 4 para
  títulos y Onest para lectura. Las partículas se mantienen, más sutiles.
- **Marca:** logo N (verticales claras, diagonal azul). En el header, al hacer
  scroll, las letras del nombre convergen en el punto final y el punto "firma" la
  diagonal. Atado al scroll, así que se ve aun con las animaciones del sistema
  desactivadas.
- **Estructura:** Inicio → Experiencia → Casos → Otros proyectos → Sobre mí →
  Formación → Stack → Servicios → Contacto. Menú corto: Experiencia, Casos, Sobre mí
  y Contacto.
- **Contenido centralizado** en `src/data/` (experiencia, casos, otros proyectos,
  formación, stack, servicios): lo no traducible existe una sola vez. Resuelve el
  viejo problema de contenido duplicado entre idiomas.
- **Nada que envejezca:** fuera los contadores de clientes y usuarios. Las cifras de
  AstroFit están en pasado (máximo alcanzado) porque el producto se vendió.
- **Casos de estudio:** AstroFit, Hackathon EduTech Mendoza y Nimbus AI.
- **Dialogy LLC** figura en Experiencia con nombre, rol, stack como lista plana y
  links públicos, con autorización de la clienta.
- **Correcciones de contenido:** un certificado se mostraba con el nombre de otro
  curso; se unificó el voseo; salieron los precios públicos de los servicios.
- **SEO:** imagen para redes nueva, una por idioma; página 404.
- **Limpieza:** componentes, datos, imágenes y claves de traducción del diseño
  anterior; dependencias de íconos; el easter egg del Konami. Queda el ♞ del footer
  como único guiño.

## ✅ Hecho antes del rediseño

SEO completo (canonical, hreflang, Open Graph, JSON-LD, sitemap), formulario de
contacto con estados y honeypot, accesibilidad (foco, teclado, reduced-motion en
CSS), imágenes livianas y el caso de estudio de AstroFit. El detalle está en los
informes de `docs/`.

---

## 🔴 Alto impacto

### 1. CV descargable

El PDF de `public/CV-Nahuel.pdf` es el viejo. Reemplazarlo por el nuevo, con la
misma historia y el mismo título profesional que el sitio.

### 2. Foto con fondo neutro

La foto del inicio tiene fondo verde saturado, fuera de la paleta: lleva la mirada
al fondo en vez de a la cara. Lo ideal es una foto nueva contra una pared lisa gris
u oscura; como alternativa, recortar el fondo.

### 3. Más prueba de terceros

Hoy solo hay testimonios de AstroFit, y viven en su caso. Pedir una línea a la
organización de la Hackathon y, si corresponde, a Dialogy. Regla: **solo citas
reales y verificables, con la fuente anotada**; nunca un testimonio "de ejemplo".

**Criterio para clientes bajo NDA** (no es asesoramiento legal: la respuesta está en
cada acuerdo):

| | Qué |
|---|---|
| ✅ Suele poderse | La relación comercial, el rol y el stack **como lista plana**. |
| ❌ No | **Cómo se conectan** las tecnologías: es arquitectura. |
| ❌ Nunca | Estado en que se recibió el producto, bugs o vulnerabilidades encontradas, números de negocio, montos, otros proveedores. |
| ⚠️ Permiso aparte | Logo, capturas y nombres de producto: es uso de marca, no confidencialidad. |

---

## 🟡 Medio impacto

### 4. tsparticles: 140 kB en el bundle inicial

**No tocar sin verificar en el navegador del dueño del sitio.** Se intentó una vez y
se revirtió: un guard de `prefers-reduced-motion` **apagaba las partículas**, y
Windows reporta esa preferencia cuando "Efectos de animación" está desactivado, que
es común. Las partículas son identidad visual, no un adorno.

Si se retoma: import dinámico **sin** el guard, verificado en un navegador con esa
opción activada. Alternativa: menos partículas en móvil.

### 5. Imágenes servidas por Astro

Mover las imágenes de `public/` a `src/assets/` y usar `<Image />`: tamaños
automáticos, variantes por densidad y AVIF.

### 6. Auditoría de idiomas automatizable

Un `npm run check:i18n` que falle si falta una clave en algún idioma o si hay texto
en español en las páginas `/en/` (salvo nombres propios y citas textuales).

### 7. Eventos de Analytics

Los links de contacto tienen `data-analytics`, pero falta cablearlos a eventos de
Vercel Analytics. Sumar la descarga del CV y los clicks a los casos.

---

## Ideas para más adelante

- **Roque Chess como caso de estudio**, por el enfoque del modelo (una red
  recurrente entrenada solo con partidas reales). Correlativas también podría
  serlo, por la historia de la comunidad.
- **Nimbus 2.0:** cuando vuelva el servidor del modelo, actualizar el caso.
- **Blog o notas técnicas** sobre decisiones reales.
- **Versión imprimible / one-pager** para adjuntar a postulaciones.
- **Tests E2E mínimos** con Playwright: formulario, cambio de idioma y la animación
  del header.
