/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fjalla: "'Fjalla One', sans-serif",
      },
      colors: {
        'pribg': '#18191A',
        'secbg': '#242526',
        'terbg': '#3A3B3C',
        'pritxt': '#E4E6E8',
        'sectxt': '#B0B3B8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}