/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      colors: {
        base: "#080B12",
        surface: "#0f1422",
        accent: "#22d3ee",
        accentSoft: "#67e8f9"
      },
      boxShadow: {
        glow: "0 0 35px rgba(34, 211, 238, 0.35)"
      }
    }
  },
  plugins: []
};
