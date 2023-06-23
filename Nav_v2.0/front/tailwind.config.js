/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing:{
        'top_bar_h':'55px',

      }
    },
  },
  plugins: [],
};
