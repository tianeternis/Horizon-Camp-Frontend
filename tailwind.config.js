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
        primary: "#f89719",
        secondary: "#5d2828",
        "app-background": "#f7f7f7",
      },
      fontSize: {
        "15px": ["0.9375rem", "1.375rem"],
      },
      screens: {
        "sr-500": "500px",
      },
    },
  },
  plugins: [],
};
