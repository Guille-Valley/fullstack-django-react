/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-button": "#ff561e",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const extendUnderline = {
        ".underline": {
          "border-bottom": "5px solid #ff561e"
        },
      };
      addUtilities(extendUnderline);
    },
  ],
};
