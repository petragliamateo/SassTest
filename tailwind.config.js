module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      reale: ["Raleway"]
    },
    extend: {
      spacing: {
        "128": "32rem",
      },
      colors: {
        danger: "#ff5f40",
        info:{
          100: "#24a19c",
          200: "#6ebfb5"
        }
      }
    },
  },
  plugins: [],
}