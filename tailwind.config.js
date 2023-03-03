/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm":"480px"
      },
      translate: {
        "8" : "8px",
        "2" : "2px",
      },
      rotate: {
        "n45": "-45deg"
      },
      aspectRatio: {
        "5/7": "5 / 7"
      },
    },
  },
  plugins: [],
}
