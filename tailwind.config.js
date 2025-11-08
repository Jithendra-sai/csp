/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#2e7d32',
          700: '#1b5e20',
          800: '#145214',
        },
        orange: {
          50: '#fff3e0',
          100: '#ffe0b2',
          400: '#ffa726',
          500: '#ff9800',
          600: '#f57c00',
          700: '#e65100',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
