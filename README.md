# Nahuel Ghilardi · Portfolio

Sitio personal de Matías Nahuel Ghilardi, desarrollador Full Stack y científico de
datos en Tupungato, Mendoza. En producción en
[nahuelghilardi.com.ar](https://www.nahuelghilardi.com.ar), en español e inglés.

![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=nahuel-portfolio)

## Qué hay en el sitio

- **Inicio:** rol, propuesta ("Del dato al producto") y una ficha con el estado actual.
- **Experiencia:** línea de tiempo del trabajo real.
- **Casos de estudio:** AstroFit, la plataforma de la Hackathon EduTech Mendoza y
  Nimbus AI, cada uno con su página (problema → solución → resultado → stack).
- **Otros proyectos, Sobre mí, Formación, Stack, Servicios y Contacto.**

## Stack

- [Astro](https://astro.build/) con View Transitions, sitio estático.
- [Tailwind CSS](https://tailwindcss.com/).
- [tsParticles](https://particles.js.org/) para el fondo.
- Formulario de contacto con [Formspree](https://formspree.io/).
- Deploy en Vercel, con Vercel Analytics.

## Cómo está organizado

El contenido vive en `src/data/`, separado de la presentación. Lo que no se traduce
(fechas, links, stack, cifras) se escribe una sola vez y solo el texto va por idioma.

```text
src/
├── components/   # Una sección por componente (Hero, Experience, Cases, ...)
├── config/       # Datos globales (site.ts) y configuración de partículas
├── data/         # Contenido: experiencia, casos, proyectos, formación, stack
├── i18n/         # Textos de la interfaz en español e inglés
├── layouts/      # Layout con SEO, Open Graph, hreflang y partículas
└── pages/        # Portadas (/ y /en/), casos de estudio y 404
```

- Sumar un caso de estudio: agregar un objeto a `CASES` en `src/data/cases.ts`. La
  ruta `/casos/<slug>` y su versión en inglés se generan solas.
- Sumar una entrada de experiencia o un proyecto: `experience.ts` u
  `other-projects.ts`.

## Correr el proyecto

```bash
git clone https://github.com/Nahuelito22/Nahuel-Portfolio
cd Nahuel-Portfolio
npm install
npm run dev
```

Abre en `http://localhost:4321` (inglés en `/en/`).

## Licencia

MIT. El contenido (textos, foto, logo) es de Matías Nahuel Ghilardi.
