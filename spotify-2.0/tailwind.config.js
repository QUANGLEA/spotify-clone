module.exports = {
  mode: 'jit',
  purges: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx'],
  darkmode: false, // or 'media' or 'class'
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide")
  ],
}
