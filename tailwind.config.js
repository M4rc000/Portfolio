/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './dist/tw-elements/dist/js/**/*.js'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#10b981',
        secondary: 'rgb(100 116 139)',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [require('./dist/tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
