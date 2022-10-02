/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{ts,tsx}", "./components/events/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      'fun': ['virgil'],
      'business': ['JetBrains']
    },
    extend: {
      colors: {
        'pastelBlue' : "#70D6ff",
        'pastelRed' : "#FF70A6",
        'pastelTangerine' : "#FF9770",
        'pastelOrange' : "#FFd670",
        'pastelYellow' : "#E9FF70",
        'pastelPurple' : "#D3A3FF",
        'pastelGreen' : "#96ffbb",
        'white' : "#FFFFFF",

        'boldPurple' : "#9B5DE5",
        'boldPink' : "#F15BB5",
        'boldYellow' : "#FEE440",
        'boldBlue' : "#00BBF9",
        'boldCyan' : "#00F5D4",
        'darkOrange' : "#faba23",
        'darkCyan' : "#40ff50",

        'boldGreen' : "#22c55e",
        'boldRed' : "#f43f5e",
        'shadowBlack' : "#2b2b2b",
        'greySelect' : "#c7c7c7"
      },
    },
  },
  plugins: [],
}
