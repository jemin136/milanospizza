/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF4500',
          hover: '#E03E00'
        },
        secondary: {
          DEFAULT: '#FFA500',
          hover: '#E89500'
        },
        background: {
          DEFAULT: 'hsl(var(--background))',
          dark: '#121212',
          light: '#1E1E1E'
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))'
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
      }
    },
  },
  plugins: [],
}
