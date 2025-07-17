// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        primary: "#0B0D17",
        "primary-light": "#D0D6F9",
      },
      boxShadow: {
        explore: "0 0 0 40px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
