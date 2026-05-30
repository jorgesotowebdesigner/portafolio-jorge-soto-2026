/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        bg2: "#0d0d0d",
        accent: "#8b1a1a",
        text: "#f0ede6",
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        mono: ["DM Mono", "monospace"],
        display: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
