/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Gupter: ['"Gupter"', 'serif'],
      // oxygen: ['"Oxygen"', 'serif'],
      // noto: ['"Noto Serif"', 'serif'],
      // gupter: ['"Gupter"', 'serif'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

