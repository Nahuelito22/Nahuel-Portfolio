// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon'; // <--- ESTA LÍNEA DEBE ESTAR

export default defineConfig({
  integrations: [
    tailwind(), 
    icon() // <--- Y ESTA FUNCIÓN TAMBIÉN
  ],
});