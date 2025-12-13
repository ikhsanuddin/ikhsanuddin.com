/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'dark-bg': '#0C0C0C',
        'dark-primary': '#481E14',
        'dark-secondary': '#9B3922',
        'dark-accent': '#F2613F',
        // Light theme colors
        'light-bg': '#F4E7E1',
        'light-primary': '#FF9B45',
        'light-secondary': '#D5451B',
        'light-accent': '#521C0D',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}