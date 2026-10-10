/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0f172a',
          soft: '#1e293b',
          muted: '#64748b',
          light: '#94a3b8'
        },
        eco: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        tealbrand: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        surface: {
          bg: '#ffffff',
          soft: '#f8faf9',
          card: '#ffffff',
          border: '#e6ece9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 20px 45px -15px rgba(15, 118, 110, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.05)',
        'card-hover': '0 30px 60px -20px rgba(15, 118, 110, 0.16), 0 0 0 1px rgba(15, 118, 110, 0.2)',
        'modal': '0 35px 80px -25px rgba(15, 23, 42, 0.25)',
      }
    },
  },
  plugins: [],
}
