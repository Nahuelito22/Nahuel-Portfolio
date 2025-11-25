// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <--- ¿Esta línea está?

export default defineConfig({
  integrations: [tailwind()], // <--- ¿Y esta parte?
});