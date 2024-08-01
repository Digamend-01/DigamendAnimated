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
        jost: ['Jost', 'sans-serif'],
      },
      fontSize: {
        '48px': '48px',
        'custom':'20px',
        '24px': '24px'
      },
      colors: {
        'custom-blue': '#143274',
      },
      lineHeight: {
        '100px': '100px',
        'custom': '28.9px',
        '34.68px': '34.68px'
      },
      margin: {
        'paragraph': '44px',
      },
    },
  },
  plugins: [],
}

