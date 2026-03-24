/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        blood: '#8B0000',
        dark: '#0a0a0a',
        darkGray: '#1a1a1a',
      },
      boxShadow: {
        glow: '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-red': '0 0 20px rgba(139, 0, 0, 0.3)',
        'glow-strong': '0 0 40px rgba(212, 175, 55, 0.5)',
      },
      animation: {
        flicker: 'flicker 0.1s infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
};
