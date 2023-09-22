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
          primary: "#D1D5DB",
          primary_action: "#9CA3AF",
          primary_hover: "#F3F4F6",
          secondary: "#0EA5E9",
          secondary_action: "#000000",
          secondary_hover: "#6B7280",
        },
      },
      boxShadow: {
        glow: [
          "0 0 20px rgba(255,255, 255, 0.35)",
          "0 0 65px rgba(255, 255,255, 0.2)",
        ],
      },
    },
  },
  plugins: [],
};
