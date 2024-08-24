/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {

      animation: ['hover'],
      boxShadow: {
        glass: 'inset 0px 0px 0px 0px rgba(255,255,255, 0.6)',
      }
    },
  },
  plugins: [

  ],
}

