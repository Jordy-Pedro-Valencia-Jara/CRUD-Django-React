/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ya cubre componentes en React
    "./src/**/*.{css}" // incluye archivos CSS como Navigation.css
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
