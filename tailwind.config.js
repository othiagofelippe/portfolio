/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',

      blue: {
        300: '#66E1FF',
        400: '#00AFEF',
        500: '#0080BC',
      },

      rose: {
        300: '#FFAC41',
        400: '#EF7C00',
        500: '#B64E00',
      },

      red: {
        300: '#F17B7C',
        400: '#CC2937',
      },

      github: {
        400: '#7E46F6',
        500: '#6120e1',
      },
      gray: {
        900: '#121214',
        700: '#202024',
        400: '#7C7C8A',
        300: '#C4C4CC',
        200: '#E1E1E6',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
        display: 'Poppins, sans-serif',
      },
    },
  },
  plugins: [],
}
