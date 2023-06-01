/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "blue-b1": "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};
