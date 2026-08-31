/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0a0a0b',
          800: '#111113',
          700: '#1a1a1d',
          600: '#242428',
          500: '#2e2e34',
          400: '#3a3a42',
        },
        lime: {
          DEFAULT: '#c8ff00',
          50: '#f6ffd9',
          100: '#e7ffb3',
          200: '#d4ff80',
          300: '#c8ff00',
          400: '#aee000',
          500: '#8fb800',
          600: '#6f9000',
        },
      },
      fontFamily: {
        display: ['Anton', 'Oswald', 'system-ui', 'sans-serif'],
        heading: ['Oswald', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
        widest2: '0.25em',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
};
