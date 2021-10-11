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
        '100':'36rem',
        '97' : '27rem',
        '88' : '28.25rem',
        '29' : '7.25rem',
        '18' : '5.5rem',
        '25' : '6.87rem',
        '66' : '17.5rem',
        '17' : '4.5rem',
        '13' : '3.213rem',
        '99' : '30.813rem',
        '85' : '23.688rem',
        '98' : '34.5rem',
        '96.8':'25.125'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

