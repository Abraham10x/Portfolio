/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#F3A311",
      "primary-light": "#FFF9E7",
      "primary-footer": "#FBDE4D",
      white: "#FFFFFF",
      black: "#000000",
      secondary: "#756BEE",
      blue: colors.blue,
      gray: colors.gray,
    },
    fontFamily: {
      sans: ['"Josefin Sans"', "sans-serif"],
      serif: ['"Poppins"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
