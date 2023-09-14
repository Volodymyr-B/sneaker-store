/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        main_header: "60px",
      },
      colors: {
        app: {
          primary: "#D1D5DB", // gray
          primary_action: "#9CA3AF", //gray-light
          primary_hover: "#F3F4F6", //gray-extra-light
          secondary: "#0EA5E9", //blue
          secondary_action: "#000000", //black
          secondary_hover: "#6B7280", //gray-mid
        },
      },
    },
  },
  plugins: [],
};
