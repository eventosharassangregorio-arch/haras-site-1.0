/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F3EA',
        sand: '#EFE8D9',
        bone: '#FBF8EF',
        charcoal: '#1A1A1A',
        coal: '#10120F',
        moss: '#2F3B2D',
        forest: '#17251B',
        sage: '#74806A',
        wood: '#6F543C',
        gold: '#B89A5E'
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'Arial', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 48px rgba(26, 26, 26, 0.055)',
        veil: '0 24px 60px rgba(23, 37, 27, 0.16)'
      }
    }
  },
  plugins: []
}
