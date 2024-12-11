/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'serif'], // Add your preferred fallback fonts
      },
      fontSize:{
        'custom': '20px',
      },
    },
  },
  plugins: [],
}