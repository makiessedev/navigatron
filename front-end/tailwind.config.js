/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        black: 'var(--font-archivo-black)',
        normal: 'var(--font-archivo)'
      },
      
      colors: {
        blue: {
          600: '#4c437a',
          900: '#11054E',
        },

        cyan: {
          500: '#2672CB'
        },

        gray: {
          50: '#EFEFF4',
          100: '#C8C7CC',
          200: '#7B7B7B',
          300: '#4A4A4A',
          600: '#262628'
        },

        pink: {
          500: 'f24a56'
        },

        green: {
          300: '#4CE5B1',
          500: '#03DE73'
        }
      }
    },
  },
  plugins: [],
}
