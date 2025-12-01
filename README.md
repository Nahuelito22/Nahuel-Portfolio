# ♟️ Nahu Portfolio | Data Science & Full Stack Dev

> Un portafolio interactivo que fusiona la estrategia del ajedrez con la complejidad de las redes neuronales.

![Vercel Deploy](https://therealsujitk-vercel-badge.vercel.app/?app=nahuel-portfolio)
[![Astro](https://img.shields.io/badge/Astro-5.0-orange.svg)](https://astro.build)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg)](https://tailwindcss.com)

## 📋 Sobre el Proyecto

Este proyecto fue desarrollado como entrega final para la materia **Programación 2**, pero diseñado para ser mi portafolio profesional a largo plazo. 

El concepto visual **"Neural Chess"** busca reflejar mi perfil híbrido:
* **La Lógica:** Representada por la estética minimalista y referencias al ajedrez (mi pasión).
* **Los Datos:** Representados por el fondo de partículas interactivas que simulan una red neuronal y nodos de datos.

## 🛠️ Tech Stack

El sitio está construido con una arquitectura moderna enfocada en el rendimiento y la experiencia de usuario:

* **Framework:** [Astro](https://astro.build/) (Por su velocidad y arquitectura de islas).
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Para un diseño responsivo y modo oscuro).
* **Animaciones:** [tsParticles](https://particles.js.org/) (Para el fondo interactivo de red neuronal).
* **Iconos:** Material Design Icons (vía `astro-icon`).
* **Despliegue:** Vercel.

## ✨ Funcionalidades Clave

* **Fondo Interactivo:** Un sistema de partículas que reacciona al mouse, simbolizando conexiones neuronales.
* **Filtro de Proyectos:** Sistema en JavaScript vanilla para filtrar trabajos por categoría (Data Science, AI, Full Stack).
* **Diseño Glassmorphism:** Elementos con transparencias y desenfoques (`backdrop-blur`) para mantener la legibilidad sobre el fondo animado.
* **Línea de Tiempo:** Sección visual para mostrar mis certificaciones en Coderhouse y Santander.
* **100% Responsivo:** Adaptado a móviles, tablets y escritorio.

## 🚀 Instalación y Uso Local

Si deseas clonar y correr este proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Nahuelito22/Nahuel-Portfolio](https://github.com/Nahuelito22/Nahuel-Portfolio)
    cd Nahuel-Portfolio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  Abrir en `http://localhost:4321`

## 📂 Estructura del Proyecto

```text
src/
├── components/      # Componentes UI (Hero, Projects, Skills, etc.)
├── config/          # Configuración de partículas (particlesConfig.ts)
├── layouts/         # Layout principal (Manejo de SEO y fondo fijo)
└── pages/           # Rutas del sitio (index.astro)