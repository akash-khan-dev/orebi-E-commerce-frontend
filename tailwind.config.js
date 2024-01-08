export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        primaryFont: ["DM Sans", "sans-serif"],
      },
      colors: {
        gray: "#767676",
        black: "#262626",
        "white-100": "#F5F5F3",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
