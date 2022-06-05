module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        'body': ["Kanit", "sans-serif"],
      },
    },

    colors: {
      '$orange': '#FF7517',
      '$gray-dark': '#3E3939',
      '$gray': '#AAAAAA',
      '$gray-light': '#F6F4F4',
      '$white': "#ffffff"
    },
  },
  plugins: [],
}