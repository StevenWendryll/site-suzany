// Caminho: astro.config.mjs

import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [

    tailwind(),

    sanity({
      projectId: 'jysbbrsy',
      dataset: 'production',
      apiVersion: '2025-11-03',
      useCdn: false,
    })
  ]
});