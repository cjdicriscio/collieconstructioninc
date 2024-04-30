/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        md: '1.1rem',
        lg: '1.5rem',
        xl: '2.4rem',
        xxl: '3rem'
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      },
      colors: {
        'collieBrown': '#A14A0E'
      }
    },
  },
  plugins: [],
};
