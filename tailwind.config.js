/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0C145A",
        gray1: "#7E8CAC",
        gray2: "#E7EAF5",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
