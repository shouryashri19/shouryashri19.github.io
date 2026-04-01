/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#EAF0FF",
        slate: {
          DEFAULT: "#AAB8D4",
          100: "#0F1A33",
          200: "#162443",
          300: "#1D2F56",
          400: "#27406E",
          500: "#34568F",
          600: "#4A73B8",
          700: "#79A2E0",
          800: "#A7C4EE",
          900: "#D4E2F8",
        },
        navy: "#1F3E88",
        steel: "#4D78C8",
        midnight: "#0A1224",
        deep: "#0E1B36",
        silver: "#CBD5E1",
        gold: "#C9A227",
      },
      fontFamily: {
        heading: ["'Inter Tight'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 14px 40px -28px rgba(0, 0, 0, 0.7)",
        raised: "0 20px 48px -26px rgba(34, 68, 142, 0.6)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(121,162,224,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(121,162,224,0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
