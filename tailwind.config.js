/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f8f7f4",
        ink: "#0f172a",
        slate: {
          DEFAULT: "#334155",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          500: "#64748b",
          700: "#334155",
        },
        navy: "#1e2f4f",
        steel: "#46617f",
        pine: "#1f4d3f",
        gold: "#8a6a2f",
      },
      fontFamily: {
        heading: ["'Merriweather'", "serif"],
        body: ["'Source Sans 3'", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 26px -16px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};
