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
        paper: "#F8FAFC",
        panel: "#FFFFFF",
        ink: "#111827",
        textSoft: "#4B5563",
        borderLight: "#E5E7EB",
        borderDark: "#1F2937",
        navy: "#1E3A8A",
        steel: "#3B82F6",
        softNavy: "#355FA3",
        deepGreen: "#064E3B",
        mutedGold: "#C9A227",
        slate: {
          DEFAULT: "#4B5563",
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      fontFamily: {
        heading: ["'Inter Tight'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 26px -20px rgba(17, 24, 39, 0.28)",
        raised: "0 16px 34px -20px rgba(30, 58, 138, 0.26)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
