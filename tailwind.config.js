/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-grey-1": "#F7F7F7",
        "light-grey-2": "#E3E3E3",
        "dark-grey": "#3C3C3C",
        delete: "#F73F3F",
        brand: "#8DC63F",
        "voucher-light": "#FDB71640",
        voucher: "#FDB716",
      },
      fontSize: {
        body: ["0.875rem", "1.25rem"],
        "header-1": ["1.688rem", "2rem"],
        "header-3": ["1.125rem", "1.5rem"],
        "header-4": ["0.875rem", "1.25rem"],
        label: ["0.6875rem", "1rem"],
      },
      borderRadius: {
        xl: "0.875rem",
        "4xl": "2rem",
      },
      maxWidth: {
        64: "16rem",
      },
      aspectRatio: {
        "2/1": "2 / 1",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
