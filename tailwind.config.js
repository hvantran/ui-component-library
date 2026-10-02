/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('./preset.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx}', './.storybook/**/*.{js,ts,jsx,tsx}'],
};

