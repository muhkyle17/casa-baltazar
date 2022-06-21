/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1796C3',
        teal: '#4ED8B2',
        lightBlue: '#BAE7E7',
        beige: '#EBE3AC',
        yellow: '#FED57A',
      },
    },
  },
  plugins: [require('daisyui')],
}
