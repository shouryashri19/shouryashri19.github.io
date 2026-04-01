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
        paper: "#f7f7f4",
        ink: "#111827",
        carbon: "#0b1220",
        panel: "#ffffff",
        navy: "#1d3557",
        steel: "#3f5d7d",
        pine: "#23463a",
        gold: "#8b6b2f",
        slate: {
          DEFAULT: "#3a4a5d",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
      },
      fontFamily: {
        heading: ["'IBM Plex Serif'", "serif"],
        body: ["'IBM Plex Sans'", "sans-serif"],
      },
      boxShadow: {
        card: "0 14px 34px -20px rgba(15, 23, 42, 0.28)",
        elevated: "0 24px 54px -30px rgba(15, 23, 42, 0.36)",
      },
      borderRadius: {
        xl: "1rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
