/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'glimmer-of-light': ['"Glimmer of Light"', 'sans-serif'],
      },
      fontSize: {
        '48px': '48px',
      },
      colors: {
        'custom-blue': '#143274',
      },
      lineHeight: {
        '100px': '100px',
      },
    },
  },
  plugins: [],
}

