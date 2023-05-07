/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': [ 'Inter', 'sans-serif']
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium:500,
        semibold:600,
        bold:700,
      },
      colors: {
        'red': '#D40000',
        'red2': '#AC000A',
        'red1': '#E31212',
        'black': '#000',
        'white': '#fff',
        'gray': '#58595B',

      }
    },
  },
  plugins: [],
}

