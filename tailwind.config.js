module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        'body': ["Kanit", "sans-serif"],
      },
      animation: {
        'vote': 'vote 1s ease-in-out',
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      keyframes: {
        vote: "vote 1s ease-in-out",
        'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      }
      }
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