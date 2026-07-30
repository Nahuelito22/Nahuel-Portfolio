// src/data/testimonials.ts
//
// IMPORTANTE: acá solo van testimonios reales y verificables.
// Los tres actuales están publicados en la landing de AstroFit
// (https://www.astrofitapp.com.ar/) y se reproducen textualmente.
// El campo `quote` NO se traduce: es la palabra del cliente, se cita tal cual.
// Si en algún momento se suma un testimonio en inglés, se cita en su idioma original.
//
// Antes de sumar uno nuevo: pedir autorización explícita al cliente para
// publicarlo con su nombre.

export interface Testimonial {
  /** Cita textual. No editar ni "mejorar" la redacción del cliente. */
  quote: string;
  /** Quién lo dice: organización. */
  author: string;
  /** Clave i18n del cargo. La cita no se traduce, la etiqueta del cargo sí. */
  roleKey: string;
  /** Producto sobre el que habla. */
  product: string;
  /** De dónde salió la cita, para poder verificarla. */
  source: string;
  /**
   * Si aparece en la landing. Las que no, viven en el caso de estudio de su
   * producto, que igual muestra todas.
   *
   * Criterio: en la landing va la cita que habla de **cómo trabaja Nahuel**,
   * porque transfiere a un cliente de cualquier rubro. Las que hablan de las
   * funciones del producto van en su caso, donde hay contexto. Tres citas de
   * gimnasios seguidas en la portada hacen parecer que solo hace software para
   * gimnasios, que es justo lo contrario de lo que el portfolio tiene que
   * transmitir.
   */
  showOnLanding?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "AstroFit transformó la organización diaria de nuestro gimnasio. Ahora tenemos control total sobre los datos de los alumnos, los pagos de cuotas mensuales y el registro de asistencias.",
    author: "Titan Gym",
    roleKey: "testimonials.role.direction",
    product: "AstroFit",
    source: "https://www.astrofitapp.com.ar/",
  },
  {
    quote:
      "AstroFit nos ayudó a organizar nuestro crecimiento. Pasamos a gestionar decenas de alumnos rápidamente con el código QR sin perder el control de los pagos.",
    author: "Plena Forma",
    roleKey: "testimonials.role.direction",
    product: "AstroFit",
    source: "https://www.astrofitapp.com.ar/",
  },
  {
    quote:
      "El nivel de atención es único. Pedimos una función específica para la privacidad de la caja en el mostrador y la desarrollaron en días.",
    author: "Evolución Sport",
    roleKey: "testimonials.role.direction",
    product: "AstroFit",
    source: "https://www.astrofitapp.com.ar/",
    // Esta habla de como trabaja, no de gestionar un gimnasio: sirve para
    // cualquier cliente, de cualquier rubro. Por eso es la de la landing.
    showOnLanding: true,
  },
];
