const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
        "brand-gray-4": "#bdc1c6",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-blue-light-1": "rgba(25,103,210,0.91)",
        "brand-green-1": "#137333",
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
        gray: "0 1px 3px 0 rgba(60, 64, 67, .3)",
      },
      margin: {
        15: "3.75rem",
      },
      fontSize: {
        "3l": "1.75rem",
      },
      letterSpacing: {
        "hero-h1": ".3125rem",
        "hero-h2": ".016rem",
      },
      lineHeight: {
        17: "4.25rem",
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
