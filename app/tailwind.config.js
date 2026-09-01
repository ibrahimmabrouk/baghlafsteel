/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f4f6f8',
          100: '#e5e9ee',
          200: '#cfd7e3',
          300: '#acbccc',
          400: '#8199b1',
          500: '#617a96',
          600: '#4c617b',
          700: '#3d4e64',
          800: '#344254',
          900: '#2b3746',
          950: '#1a222c',
        },
        saudi: {
          dark: '#0e382b',
          gold: '#c5a059',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
