/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          dark: "#0F0E0C",
          surface: "#1A1815",
          border: "#2F2B26",
          gold: "#D4AF37",
          amber: "#F59E0B",
          cream: "#FAF6EE",
          muted: "#9E978C",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
      },
    },
  },
  plugins: [],
};
