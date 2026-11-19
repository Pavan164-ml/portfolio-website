
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://pavan164-ml.github.io',
  base: '/portfolio-website',

  integrations: [mdx()],

  vite: {
    plugins: [tailwind()],
  },

  build: {
    format: 'directory',
  },

  image: {
    domains: [
      'github.com',
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
    ],
  },
});
