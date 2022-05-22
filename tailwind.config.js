module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["cupcake", "cmyk"],
  },  
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
