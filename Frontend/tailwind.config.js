/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./path/to/your/html/files/**/*.html",
    "./path/to/your/js/files/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}