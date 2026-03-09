/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        'bg-2': '#0c0c14',
        accent: '#00D4FF',
        'accent-dim': 'rgba(0, 212, 255, 0.5)',
        'text-primary': '#e8edf3',
        'text-secondary': '#8892a4',
        'text-muted': '#4a5568',
      },
      fontFamily: {
        mono: ['Space Mono', 'monospace'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
