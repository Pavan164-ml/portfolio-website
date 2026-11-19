/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        surface: 'rgb(var(--surface))',
        primary: 'rgb(var(--primary))',
        accent: 'rgb(var(--accent))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        border: 'rgb(var(--border))',
        'card-bg': 'rgb(var(--card-bg))',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}