// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { locales } from './src/i18n/index';

// https://astro.build/config
export default defineConfig({
  site: "https://mauroviveros.com.ar",
  adapter: vercel(),
  integrations: [icon()],
  i18n: { locales, defaultLocale: locales[0] },
  vite: {
    plugins: [tailwindcss()]
  },
});