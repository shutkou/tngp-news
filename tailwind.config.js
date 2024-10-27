/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '520px',
      md: '768px',
      lg: '968px',
      xl: '1440px',
    },
    colors: {
      'dY': 'rgb(215, 168, 89)',
      'lY': 'rgb(255, 214, 145)',
      'dB': 'rgb(35, 58, 102)',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontFamily: {
      OpenGost: ['OpenGost Type A TT', 'OpenGost Type A TT'],
      sans: ['Roboto', 'Roboto'],
      bebas: ['Bebas', 'Bebas Neue'],
      znikomit: ['ZnikomitNo25', 'ZnikomitNo25'],
    },
    extend: {
      animation: {
        'bounce': 'bounce 0.5s infinite',
      }
    }
  },
  plugins: [],
}

