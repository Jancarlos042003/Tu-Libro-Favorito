/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    addDynamicIconSelectors(),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar')
  ],
}

