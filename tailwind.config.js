/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {},
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
