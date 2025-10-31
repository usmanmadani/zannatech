/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          400: '#f59e0b',
          500: '#f59e0b',
          600: '#d97706'
        }
      }
    },
  },
  plugins: [],
};
