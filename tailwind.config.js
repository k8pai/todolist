/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	screens: {
		'xsm': {'max': '640px'},
		// => @media (min-width: 400px and max-width: 640px) { ... }
  
		'sm': {'min': '640px', 'max': '767px'},
		// => @media (min-width: 640px and max-width: 767px) { ... }
  
		'md': {'min': '768px', 'max': '1023px'},
		// => @media (min-width: 768px and max-width: 1023px) { ... }
  
		'lg': {'min': '1024px', 'max': '1279px'},
		// => @media (min-width: 1024px and max-width: 1279px) { ... }
  
		'xl': {'min': '1280px', 'max': '1535px'},
		// => @media (min-width: 1280px and max-width: 1535px) { ... }
  
		'2xl': {'min': '1536px'},
	},
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
		'tertxt': '#ECF0F1',
		'optlight': '#FFFFFF',
		'optdark': '#30343F',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}