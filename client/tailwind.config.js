module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '0' : '0.938rem',
        '10': '1.875rem',
        '20': '5.25rem',
        '50':'50%',
        '44':'44%',
        '78':'78%'
      },
      textColor: {
        'primary' : '#5692d2',
        'sec' : '#000000'
      },
      borderColor: {
        'primary' : '#e7e6e3'
      },
      backgroundColor:{
        'primary' : '#e7e2dc'

      },
      spacing: {
        '100':'36rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

