/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    backgroundImage: {
      astor: "url('https://live.staticflickr.com/65535/48686409231_b705617810_k.jpg')"
    }
  },
  variants: {},
  plugins: [],
};