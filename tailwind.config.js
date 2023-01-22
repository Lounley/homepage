/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'plane': "url('../public/img/planebg.jpg')",
        'me': "url('../public/img/me.jpg')",
      },
      margin: {
        '250': '250px',
        '1000': '1000px',
      },
      padding: {
        '250': '250px',
        '500': '500px',
      },
      width: {
        '172': '172px',
        '1585': '1580px'
      }
         
    },
  },
  plugins: [],
}
