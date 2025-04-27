/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'turtle-green': 'var(--turtle-green)',
        'luxury-brown': 'var(--luxury-brown)',
        'background': 'var(--background)',
        'background-alt': 'var(--background-alt)',
        'primary-dark': 'var(--primary-dark)',
        'gray-light': 'var(--gray-light)',
        'gray-med': 'var(--gray-med)',
        'gray-dark': 'var(--gray-dark)',
        'accent': 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
      borderRadius: {
        'md': 'var(--rounded-md)',
        'lg': 'var(--rounded-lg)',
        'xl': 'var(--rounded-xl)',
        '2xl': 'var(--rounded-2xl)',
      }
    },
  },
  plugins: [],
} 