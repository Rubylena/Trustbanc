/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#003679',
      'secondary': 'rgba(0, 54, 121, 0.75)',
      'green': '#09922F',
      'placeholder': '#8A8A8A',
      'border': '#DDDDDD',
      'sidebar-gray': '#F2F2F2',
      'red': '#FF0000',
      'orange': '#C57E37',
    },
  },
  plugins: [],
}
