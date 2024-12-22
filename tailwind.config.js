/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Montserrat", "sans-serif"],
      },
      colors: {
        main: "#f29f33",
        secondary: "#5d2828",
      },
      fontSize: {
        "15px": ["0.9375rem", "1.375rem"],
      },
    },
  },
  plugins: [],
};
