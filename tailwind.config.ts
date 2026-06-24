import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'goon-black': '#1A1A1A',
        'goon-orange': '#E85D26',
        'goon-magenta': '#D946EF',
        'goon-green': '#84CC16',
        'goon-dark': '#111111',
        'goon-gray': '#2A2A2A',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'system-ui', 'sans-serif'],
        archivo: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
