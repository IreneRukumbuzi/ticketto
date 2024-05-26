/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#4AD768',
        },
        black: {
          10: '#000'
        },
        gray: {
          10: '#7F7F7F',
          20: "#FFFCF5",
          30: "#F6F6F6",
          40: "#7D7D7D",
          50: "#2D2D2D"
        },
        whitish: {
          10: "#FFFCF5"
        }
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
};
