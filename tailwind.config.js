/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hovercolor': '#d50000',
        'bordercolor': '#333'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    base: false,
  }
}