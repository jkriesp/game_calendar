/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in src
    "./pages/**/*.{js,jsx,ts,tsx}", // Include all files in pages
    "./components/**/*.{js,jsx,ts,tsx}", // Include all files in components (if you have any)
    "./public/**/*.html", // Include HTML files in public
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

