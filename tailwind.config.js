/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-300" : "#f1f7e9",
        "primary-400" : "#d5e7ba",
        "primary-500" : "#92C14E",
        // Normal : primary-600
        "primary-600" : "#74BA10",
        "primary-700" : "#6b9f1f",
        "primary-800" : "#476a14",
        "primary-900" : "#36500f",
        "primary-950" : "#2a3e0c",
      },
      screens: {
        'md-2': '912px',     
        'lg-2': '1112px',     
      },
      dropShadow: {
        text : '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

