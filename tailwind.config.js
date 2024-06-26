/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,html,htm}"],
  theme: {
    extend: {
       colors: {
          brown: {
              50: '#FDF8F6',
              100: '#f2e8e5',
              200: '#eaddd7',
              300: '#e0cec7',
              400: '#d2bab0',
              500: '#bfa094',
              600: '#a18072',
              700: '#977669',
              800: '#846358',
              900: '#43302b',
          }
        } 
     }
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/container-queries')
  ],
  darkMode: 'class'
}

