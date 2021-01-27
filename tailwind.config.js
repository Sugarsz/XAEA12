module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      red: '0 1px 2px 0 rgba(186, 81, 224, 0.1)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
