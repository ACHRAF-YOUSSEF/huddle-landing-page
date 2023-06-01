/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "600px",
      xl: "1440px",
    },
    extend: {
      zIndex: {
        1: '1',
      },
      colors: {
        Violet: 'hsl(257, 40%, 49%)',
        'Soft-Magenta': 'hsl(300, 69%, 71%)',
      },
    },
  },
  plugins: [],
};
