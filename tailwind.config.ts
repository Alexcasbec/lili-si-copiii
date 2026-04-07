import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#FFE5EC',
          purple: '#E8D5F2',
          blue: '#D5E8F2',
          yellow: '#F5E6D3',
        },
        accent: {
          pink: '#FFB6C1',
          purple: '#DDA0DD',
        },
        'text-dark': '#4A4A4A',
        'text-light': '#6B6B6B',
      },
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
