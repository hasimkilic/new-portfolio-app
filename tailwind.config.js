/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  mode:'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons:'burtons',
        ınter:'Inter'
      }
    },
  },
  plugins: [],
}
