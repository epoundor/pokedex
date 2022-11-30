/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: "Poppins",
      colors: {
        black: "#212121",
      },
    },
  },
  plugins: [],
};
