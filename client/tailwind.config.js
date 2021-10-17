module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '0' : '0.938rem',
        '10': '1.875rem',
        '20': '5.25rem',
        '40':'40%',
        '44':'44%',
        '78':'78%',
        '.3' :'0.188rem',
        '52':'3.25rem',
        '77':'4.813rem',
        '126':'7.875rem',
        '173':'10.813rem',
        '220':'13.75rem',
        '271':'16.938rem',
        '316':'19.75rem'
      },
      textColor: {
        'primary' : '#5692d2',
        'sec' : '#000000',
        'blueclr' : '#0A66C2'
      },
      borderColor: {
        'primary' : '#e7e6e3'
      },
      backgroundColor:{
        'primary' : '#e7e2dc',
        'commentBg':'#F2F2F2'
      },
      spacing: {
        '81':'21rem',
        '97':'25rem',
        '100':'36rem',
        '98':'30rem',
        '744':'46.5rem',
        '496':'31rem',
        '350':'21.8rem',
        '680':'42.5rem',
        '400':'25rem',
        '540':'33.75rem',
        '462':'28.875rem'
      },
      borderRadius: {
        'round':'50%'
      },
      screens:{
        'xs' : '427px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

