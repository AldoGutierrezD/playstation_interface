module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'ghost': "url('/src/img/ghost-tsushima.jpeg')",
        'horizon': "url('/src/img/horizon.jpg')",
        'ratchet': "url('/src/img/ratchet.jpeg')",
        'spiderman': "url('/src/img/cover.png')"
      },
      fontFamily: {
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
      },
      height: {
        '25': '2.5%',
        '50': '5%',
        '100': '10%',
        '125': '12.5%',
        '150': '15%',
        '170': '17.5%',
        '200': '20%',
        '225': '22.5%',
        '250': '25%',
        '275': '27.5%',
        '300': '30%',
        '325': '32.5%',
        '350': '35%',
        '375': '37.5%',
        '400': '40%',
        '425': '42.5%',
        '450': '45%',
        '475': '47.5%',
        '500': '50%',
        '525': '52.5%',
        '550': '55%',
        '575': '57.5%',
        '700': '70%',
        '800': '80%',
        '850': '85%',
        '900': '90%',
      },
      boxShadow: {
        'all': '0 0 5px #292929, 0 0 5px #292929, 0 0 10px #292929',
        'all-white': '0 0 5px #303030, 0 0 5px #303030, 0 0 10px #303030',
        'all-grand': '0 0 25px #303030, 0 0 25px #303030, 0 0 30px #303030'
      }
    },
  },
  plugins: [],
}
