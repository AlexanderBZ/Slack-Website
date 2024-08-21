const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "442px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "primary": "#3B63F6",
        "dark": "#1B1B1B",
        "input-color": "#545454",
        "header-dark-text-color": "#1B1B1B",
        "header-subtext-dark-text-color": "#727272",
        "header-subtext-light-text-color": "#C8C8C8",
        "banner-text-color": "#A8A8A8",
        "header-light-text-color": "#fff",
        "input-background-color": "#545454",
        "input-text-color": "#C8C8C8",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
