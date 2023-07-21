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
        _blue: "#0C145A",
        _blue2: "#4D17E2",
        _blueSky: "#F9FAFF",
        _gray1: "#7E8CAC",
        _gray2: "#E7EAF5",
      },
    },
  },
  // plugins: [require("prettier-plugin-tailwindcss")],
};
