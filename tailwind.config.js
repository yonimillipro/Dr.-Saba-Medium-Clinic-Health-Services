// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// tailwind.config.js
export default {
  darkMode: 'class', // or 'media' for automatic based on system
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
     './public/index.html'
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}
