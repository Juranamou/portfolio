/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nothing-you-could-do': ['"Nothing You Could Do"', 'sans-serif'],
        'noto': ["Noto Sans Simplified Chinese", 'sans-serif'],
        'quicksand': ["Quicksand", 'sans-serif'],
        'mono': ["PT Mono", "monospace"]
      },
    },
  },
  plugins: [],
}