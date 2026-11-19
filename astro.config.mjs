import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
  ],
  build: {
    format: 'directory',
  },
  // Enable image optimization for better performance
  image: {
    domains: ['github.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
  },
});