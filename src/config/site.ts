// src/config/site.ts
// Datos globales del sitio. Viven en un solo lugar porque los usan el layout
// (canonical, Open Graph), el sitemap y la seccion de contacto.

/** URL de produccion, sin barra final. Usada para canonical, OG y sitemap. */
export const SITE_URL = "https://www.nahuelghilardi.com.ar";

/** Mail de contacto publico. */
export const EMAIL = "matiasghilardisalinas@gmail.com";

/**
 * Numero de WhatsApp en formato internacional, solo digitos.
 * +54 9 2622 60-4500 -> 54 (pais) + 9 (movil) + 2622 (area) + 604500.
 * Si queda vacio, el boton de WhatsApp no se renderiza.
 */
export const WHATSAPP = "5492622604500";

/** Redes, tambien usadas en el JSON-LD de Person. */
export const SOCIALS = {
  github: "https://github.com/Nahuelito22",
  linkedin: "https://www.linkedin.com/in/nahuel-ghilardi/",
};

/** Imagen por defecto para las previsualizaciones al compartir (1200x630). */
export const OG_IMAGE = "/og-image.png";
