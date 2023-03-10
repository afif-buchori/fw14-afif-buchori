/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './deploy/index.html',
    './deploy/authentication/login.html',
    './deploy/authentication/signup.html',
    './deploy/products/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFBA33',
        secondary: '#6A4029',
        backaccent: '#F8F8F8',
        secondaryhover: '#895537',
        grey: '#9F9F9F',
        greydark: '#4F5665',
      }
    },
  },
  plugins: [],
}
