/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    screens: {
      'mobile': '360px',

      'tablet': '600px',

      'laptop': '1000px'

    },
    extend: {},
  },
  plugins: [],
}

