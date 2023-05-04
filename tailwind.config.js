/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'button': '0 4px 4px rgb(0, 0, 0)',
      }
    },
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      white:colors.white,
      black:colors.black,
      green_bg:"#E4FFC1",
      blue_bg:"#C1F0FF",
      pink_bg:"#FFE3E3",
      dark_gray:"#4D4D4D",
      input_gray:"#343434",
      yellow:"#FFA740"
    }
  },
  plugins: [],
}
