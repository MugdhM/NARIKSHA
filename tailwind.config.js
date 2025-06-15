/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Georgia', 'serif'], // Fallback for PurwaType
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'pastel': {
          'lavender-pink': '#f8d3fa',
          'orchid': '#e4c0e6',
          'rose': '#f598b2',
          'plum': '#e0a9ea',
          'mist': '#f7e7ff',
        },
        'green': {
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
        },
      },
      backgroundImage: {
        'pastel-gradient': 'linear-gradient(135deg, #f7e7ff 0%, #f8d3fa 25%, #e4c0e6 50%, #e0a9ea 75%, #f598b2 100%)',
        'soft-gradient': 'linear-gradient(135deg, #f7e7ff 0%, #e4c0e6 100%)',
        'rose-gradient': 'linear-gradient(135deg, #f598b2 0%, #e0a9ea 100%)',
        'orchid-gradient': 'linear-gradient(135deg, #e4c0e6 0%, #f8d3fa 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(244, 211, 250, 0.3)',
        'pastel': '0 8px 32px rgba(228, 192, 230, 0.4)',
        'rose': '0 6px 24px rgba(245, 152, 178, 0.3)',
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-pastel-lavender-pink',
    'bg-pastel-orchid',
    'bg-pastel-rose',
    'bg-pastel-plum',
    'bg-pastel-mist',
    'text-pastel-rose',
    'text-pastel-orchid',
    'text-pastel-plum',
    'border-pastel-orchid',
    'border-pastel-rose',
    'hover:bg-pastel-orchid',
    'hover:bg-pastel-rose',
  ]
};