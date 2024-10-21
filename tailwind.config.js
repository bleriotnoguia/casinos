/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile_min: "320px",
        mobile_max: "743px",
        tablet_min: "744px",
        desktop_min: "1200px",
        desktop_max: "1440px",
      },
    },
  },
  safelist: ["bg-[#43082F]", "bg-[#03252B]", "bg-[#123156]"],
  plugins: [],
};
