/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#ffffff", // Define your custom color here
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      mytheme: {
        primary: "customWhite", // Use your custom color as primary
      },
    },
  },
};
