/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      primary: {
        400: "#45B26B",
      },
      blue: {
        100: "#6E9EF1",
        200: "#4DA2FF",
        600: "#0945AF",
        900: "#082F74",
      },
      gray: {
        100: "#E6E8EC",
        300: "#D8D8D8",
        500: "#777E90",
        700: " #73767E",
        800: "#353945",
        900: "#23262F",
      },
      purple: {
        500: "#9757D7",
      },
    },
  },
  plugins: [],
};
