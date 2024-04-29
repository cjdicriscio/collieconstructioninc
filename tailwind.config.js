/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        md: '1.1rem',
        lg: '1.5rem',
        xl: '2.4rem'
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
