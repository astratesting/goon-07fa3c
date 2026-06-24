import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#6DB5D2',
        'mint': '#A5D8C1',
        'sand': '#E8CDA0',
        'soft-white': '#F5F8FA',
        'charcoal': '#2D3436',
        'dark-gray': '#4A4A4A',
      },
      fontFamily: {
        geist: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'lattice': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23E8CDA0' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
