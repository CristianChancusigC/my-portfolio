/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      lightBlue: undefined, // Remove deprecated colors
      warmGray: undefined,
      trueGray: undefined,
      coolGray: undefined,
      blueGray: undefined,
      primary: colors.lightBlue,
      secondary: colors.purple,
    },
  },
  plugins: [],
  darkMode: "selector",
};
