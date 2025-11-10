import { heroui } from '@heroui/react'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171d32', // আপনার প্রোজেক্টের main color
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: { background: '#171d32', foreground: '#ffffff' },
        },
        dark: {
          colors: { background: '#171d32', foreground: '#ffffff' },
        },
      },
    }),
  ],
}
