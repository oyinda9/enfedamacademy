/** @type {import('tailwindcss').Config} */
export default {
  content: [  './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',],
  theme: {
    extend: {
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
    // colors: {
    //   btn: "#00416A", 
    //   textColor:"#ffffff"
    //   // Custom primary color
    // },
  },
 
  plugins: [require('daisyui')], // Add DaisyUI as a plugin
  daisyui: {
    themes: ['light', 'dark', 'cupcake'], // Add your desired themes here
  },
}

