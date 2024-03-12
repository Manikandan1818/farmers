/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        primaryColor: "#F5F4EF",
        secondaryColor: "#E7E8E0",
        iconColor: "#404040",
        greycolor: "#636363",
        secondaryColor1: "#4C8077",
      },
    },
  },
  plugins: [],
};
