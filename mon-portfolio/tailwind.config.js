/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // si Next.js 13 app router à la racine
    "./pages/**/*.{js,ts,jsx,tsx}",     // si encore pages/ existe
    "./components/**/*.{js,ts,jsx,tsx}", 
    // ou "./src/app/**/*.{js,ts,jsx,tsx}" si ton app/ est dans src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
