// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import { locales } from './src/i18n';
import { WEBSITE } from './src/constants';
import vercel from '@astrojs/vercel';

const localesList = locales.map((locale) => locale.code);

// https://astro.build/config
export default defineConfig({
  site: WEBSITE.url,
  adapter: vercel(),
  integrations: [icon()],

  i18n: {
    locales: localesList,
    defaultLocale: localesList[0],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
