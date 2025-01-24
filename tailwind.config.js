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
        "11px": ["0.6875rem", "0.875rem"],
        "13px": ["0.8125rem", "1.125rem"],
        "15px": ["0.9375rem", "1.375rem"],
      },
      screens: {
        "sr-400": "400px",
        "sr-500": "500px",
        "sr-530": "530px",
        "sr-550": "550px",
        "sr-600": "600px",
        "sr-650": "650px",
        "sr-900": "900px",
        "sr-950": "950px",
        "sr-1150": "1150px",
      },
      zIndex: {
        1: "1",
      },
      width: {
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
        "10/10": "100%",
        18: "4.5rem",
      },
      height: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
