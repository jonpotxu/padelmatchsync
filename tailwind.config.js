/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { electric: "#0066FF", graphite: "#1B1B1D", limepm: "#C6FF00" },
    },
  },
  plugins: [],
};
