/** @type {import('tailwindcss').Config} */
export default {  
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      button: '#ffd700',
      input: {gray: '#e8f5e9',},

      blue: {
        light: '#d3d3d3',
        DEFAULT: '#1fb6ff',
        dark: '#ffd700',
        lavender: '#A87ECC',
      },
      pink: {
        light: '#A0364D',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      green: {
        darkest: '#1f2d3d',
        dark: '#524F1A',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
    extend: {},
  },
  plugins: [],
}}