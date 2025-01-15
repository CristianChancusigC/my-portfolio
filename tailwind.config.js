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
      background: {
        light: "#F3F4F6",
        dark: "#121212",
      },
      text: {
        title: {
          light: "#2C3E50",
          dark: "#E0E0E0",
          hoverLight: "#1A242F",
          hoverDark: "#C0C0C0",
        },
        description: {
          light: "#34495E",
          dark: "#B0BEC5",
        },
      },
      icon: {
        bg: {
          light: "#999",
          dark: "#fff",
        },
        hover: {
          light: "#E0E0E0",
          dark: "#3A3A3A",
        },
      },
      btn: {
        bg: {
          light: "#3498DB",
          dark: "#4FC3F7",
        },
        hover: {
          light: "#E0E0E0",
          dark: "#3A3A3A",
        },
      },
      card: {
        bg: {
          light: "#1F2937",
          dark: "#2E2E2E",
        },
        titleTxt: {
          light: "#2C3E50",
          dark: "#E0E0E0",
        },
        descriptionTxt: {
          light: "#34495E",
          dark: "#B0BEC5",
        },
        hover: {
          light: "#E0E0E0",
          dark: "#3A3A3A",
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
