/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xss': '10px'
      },
      colors: {
        'blue/4': '#1271A7',
        'blue/5': '#172841',
        'green/4': '#1E7B6A',
        'grey/2': '#D2DBDC',
        'grey/4': '#3C4144',
        'grey/5': '#1C1C1C'
      }
    },
  },
  plugins: [],
}
