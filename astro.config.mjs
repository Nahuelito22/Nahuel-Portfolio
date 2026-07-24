// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site.ts';

export default defineConfig({
  // Necesario para URLs absolutas: canonical, Open Graph y sitemap.
  site: SITE_URL,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind(),
    icon(),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en' }
      }
    })
  ],
});
