import { defineConfig } from 'astro/config';
import tailwind from 'tailwindcss';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
  ],
  build: {
    format: 'static',
  },
  // Enable image optimization for better performance
  image: {
    domains: ['your-domain.com', 'github.com', 'raw.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        pathname: '/videos/**',
      },
    ],
  },
});
