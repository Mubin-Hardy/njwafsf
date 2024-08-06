/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // added important root div id's for nextjs and storybook
  important: ['#__next', '#root'],
  theme: {
    extend: {
      colors: {
        accent: {
          700: '#d50000',
        },
        BrandRed: {
          50: '#ffebee',
          500: '#f44336',
          700: '#d32f2f',
        },
        BrandNeutral: {
          50: '#e9e9e9',
          100: '#d2d2d2',
          200: '#bcbcbc',
          400: '#8f8f8f',
          600: '#626262',
          900: '#090909',
        },
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
};
