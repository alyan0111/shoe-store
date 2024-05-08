const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  flowbite.content(),
],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-2px, 2px)' },
          '50%': { transform: 'translate(2px, -2px)' },
          '75%': { transform: 'translate(-2px, 2px)' },
        },
        'shake-delayed': {
          '0%': { transform: 'translate(0, 0)' },
          '80%': { transform: 'translate(0, 0)' },
          '85%': { transform: 'translate(-2px, 2px)' },
          '90%': { transform: 'translate(2px, -2px)' },
          '95%': { transform: 'translate(-2px, 2px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
        'shake-delayed': 'shake-delayed 3s ease-in-out infinite',
      },
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}