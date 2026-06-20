import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.mauroviveros.com.ar',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
  integrations: [icon()]
});
