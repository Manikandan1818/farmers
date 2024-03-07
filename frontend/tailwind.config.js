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
        primaryColor: "#AE6234",
        secondaryColor: "#00C9AA",
        iconColor: "#fefdfd",
        secondaryColor1: "#4C8077",
      },
    },
  },
  plugins: [],
};
