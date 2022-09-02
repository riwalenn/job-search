const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-blue-2":"#4285f4",
        "brand-blue-light-1": "rgba(25,103,210,0.91)",
        "brand-green-1": "#137333",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
    },
  },
  plugins: [],
};
