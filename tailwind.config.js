/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {    
        fontFamily: {
          lato: "Lato",
          montserrat: "Montserrat",
          "open-sans" : "'Open Sans'",
        },
      colors: {
        backgroundColor: "#F5F5F5",
        inputHoverColor: "#EAEAEA",
        gray: "#858585",
        gray1: "#666666",
        gray2: "#999999",
        link: "#346BD5",
        block1: "#DDEFE0",
        block2: "#F4ECDD",
        block3: "#EFDADA",
        block4: "#DEE0EF",
        line1:"#9BDD7C",
        line2:"#E9A0A0",
        blue:"#6972C3"
      },
    },
  },
  plugins: [],
};