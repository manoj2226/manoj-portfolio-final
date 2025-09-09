/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter','ui-sans-serif','system-ui','sans-serif'] },
      keyframes: {
        float: {'0%':{transform:'translateY(0) scale(1)'},'50%':{transform:'translateY(-12px) scale(1.02)'},'100%':{transform:'translateY(0) scale(1)'}},
        slowspin: {'0%':{transform:'rotate(0deg)'},'100%':{transform:'rotate(360deg)'}}
      },
      animation: { float:'float 10s ease-in-out infinite', slowspin:'slowspin 60s linear infinite' }
    }
  },
  plugins: []
}
