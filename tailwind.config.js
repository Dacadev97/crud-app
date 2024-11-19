/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#16A8E1",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
