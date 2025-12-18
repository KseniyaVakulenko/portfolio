/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  darkMode: 'class',
  important: true, // ← ДОБАВЬТЕ ЭТУ СТРОЧКУ!
  theme: {
    extend: {
      zIndex: {
      '1000': '1000',
      '1001': '1001',
      '1002': '1002',},
      colors: {
        primary: '#4A90E2',
        'primary-dark': '#2A6FC1',
        'primary-light': '#7BB4F0',
        secondary: '#6C63FF',
        'secondary-dark': '#554FD8',
        'secondary-light': '#8A85FF',
        dark: '#1A1A2E',
        'dark-light': '#0F0F1B',
        light: '#F5F7FA',
        gray: '#888',
        'gray-light': '#A0A0A0',
        'text-dark': '#333',
        'text-light': '#F5F7FA',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'base': '18px',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '100': '25rem',
      },
      boxShadow: {
        'custom': '0 5px 15px rgba(0, 0, 0, 0.1)',
        'card': '0 8px 25px rgba(0, 0, 0, 0.08)',
        'dark': '0 5px 15px rgba(0, 0, 0, 0.3)',
        'card-dark': '0 8px 25px rgba(0, 0, 0, 0.2)',
        'lg': '0 12px 25px rgba(0, 0, 0, 0.15)',
        'xl': '0 15px 35px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '15px',
      },
      animation: {
        'morphing': 'morphing 15s infinite',
        'shine': 'shine 3s infinite',
        'shinePulse': 'shinePulse 2s infinite',
        'fadeIn': 'fadeIn 0.6s ease forwards',
        'fadeInUp': 'fadeInUp 0.6s ease forwards',
        'slidePhotoIn': 'slidePhotoIn 0.8s ease forwards 0.3s',
        'slideTextIn': 'slideTextIn 0.8s ease forwards 0.5s',
        'modalAppear': 'modalAppear 0.3s ease',
      },
      keyframes: {
        morphing: {
          '0%': { 'borderRadius': '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { 'borderRadius': '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { 'borderRadius': '50% 50% 33% 67% / 55% 27% 73% 45%' },
          '75%': { 'borderRadius': '33% 67% 58% 42% / 63% 68% 32% 37%' },
          '100%': { 'borderRadius': '30% 70% 70% 30% / 30% 30% 70% 70%' },
        },
        shine: {
          '0%': { left: '-100%' },
          '20%, 100%': { left: '140%' },
        },
        shinePulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slidePhotoIn: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideTextIn: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        modalAppear: {
          'from': { transform: 'translateY(-50px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4A90E2, #6C63FF)',
        'gradient-primary-light': 'linear-gradient(135deg, rgba(74, 144, 226, 0.1), rgba(108, 99, 255, 0.1))',
        'gradient-dark': 'linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))',
      },
      lineHeight: {
        'relaxed': '1.7',
        'tight': '1.3',
      },
    },
  },
  plugins: [],
}