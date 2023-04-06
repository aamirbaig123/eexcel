
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => theme('colors'),
    textColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'black':'#000',
      'white':'#EAF4F4',
      'graywhite':'#D3D0CB',
      'seaBlue':'#1EACC7',
      'lightGray':'#333'
    },
    extend: {
      fontFamily: {
        Spectral: ['Spectral', 'serif'],
        Rubik: ['Rubik', 'sans-serif'],
        Lato: ['Lato', 'sans-serif']
      }, //end of fontFamily
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      xs: '540px',
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    xss:"400px",
 
    mobilesmall:"200px"
    },
  
  },
  variants: {
    extend: {},
  },
  plugins: [],
};