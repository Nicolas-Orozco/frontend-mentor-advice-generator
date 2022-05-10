module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        cyan: "hsl(193, 38%, 86%)",
        green: "hsl(150, 100%, 66%)",
        blue: {
          100: "hsl(217, 19%, 24%)",
          200: "hsl(218, 23%, 16%)",
        },
      },
    },
  },
  plugins: [],
};
