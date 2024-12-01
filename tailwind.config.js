/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "white-transparent": "rgba(255, 255, 255, 0.4)",
        "input-border-color": "rgba(38, 38, 38, 0.15)",
        "link-border-color": "rgba(255, 255, 255, 0.5)",
        "date-color": "rgba(38, 38, 38, 0.5)",
        "button-border-color": "rgba(38, 38, 38, 0.05);",
      },
    },
  },
  plugins: [],
};
