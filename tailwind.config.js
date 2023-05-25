/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      fourty: "40px",
      sixty: "60px",
      eighty: "80px",
      zero: "0px",
    },
    extend: {
      colors: {
        backgroundColor: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
