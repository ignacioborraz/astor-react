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
      astor: "url('https://payload.cargocollective.com/1/19/622484/10167489/DSCN9371-web_670.jpg')"
    }
  },
  variants: {},
  plugins: [],
};
