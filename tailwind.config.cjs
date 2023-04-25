/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': 'url("./assets/main_bg.jpg")',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
