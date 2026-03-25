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
          DEFAULT: '#1E3A5F',
          light: '#2a4d7a',
          dark: '#152c49',
        },
        'section-bg': '#F0F4F8',
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1d4ed8',
          light: '#dbeafe',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
