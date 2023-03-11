/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': 'url("./assets/main_bg.jpg")',
      },
    },
  },
  plugins: [],
};
