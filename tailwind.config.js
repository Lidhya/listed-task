/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        backgroundColor: "#F5F5F5",
        inputHoverColor: "#EAEAEA",
        gray: "#858585",
        link: "#346BD5",
        block1: "#DDEFE0",
        block2: "#F4ECDD",
        block3: "#EFDADA",
        block4: "#DEE0EF",

      },
    },
  },
  plugins: [],
};
