// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { locales } from './src/i18n/index';

const localesList = locales.map((locale) => locale._id);

// https://astro.build/config
export default defineConfig({
  site: "https://mauroviveros.com.ar",
  adapter: vercel(),
  integrations: [icon()],
  i18n: {
    locales: localesList,
    defaultLocale: localesList[0],
    routing: {
      prefixDefaultLocale: true
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
});