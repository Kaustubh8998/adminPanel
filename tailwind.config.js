/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["PlusJakarta", "sans-serif"],
        albert: ["AlbertSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
