/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1900px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '2530px',
    },
    extend: {
      fontFamily: {
        skyvision:['Skyvision','sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Montserrat', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
        cursive: ['Dancing Script', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
        sourceSans: ['Source Sans Pro', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        alegreya: ['Alegreya', 'serif'],
        noto: ['Noto Sans', 'sans-serif'],
        muli: ['Muli', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        lora: ['Lora', 'serif'],
        merienda: ['Merienda', 'cursive'],
        amatic: ['Amatic SC', 'cursive'],
        abel: ['Abel', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        greatVibes: ['Great Vibes', 'cursive'],
      }
    },
  },
  plugins: [],
};
