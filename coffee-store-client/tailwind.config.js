/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: "Rancho, Raleway, sans-serif",
      },
      colors: {
        primaryNut: "#331A15",
        secondaryBlack: "#1B1A1A",
        slaty: "#374151",
      },
    },
  },
  plugins: [],
};
