/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#7B1D24',  /* Deep Maroon - DY Patil style */
          light: '#9B2B34',
          dark: '#5C1219',
        },
        'section-bg': '#FDF5F0',  /* Warm cream background */
        primary: {
          DEFAULT: '#C9973A',  /* Rich Gold/Amber */
          hover: '#A87A28',
          light: '#FEF3DC',   /* Light gold tint */
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
