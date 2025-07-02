module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF4F0",
          100: "#FFE4D6", 
          200: "#FFCAB0",
          300: "#FFAB7A",
          400: "#FF8B55",
          500: "#FF6B35", // orange-500
          600: "#E55A2B",
          700: "#CC4A21",
          800: "#B33A17",
          900: "#992A0D",
          DEFAULT: "#FF6B35", // orange-500
        },
        secondary: {
          50: "#F8F9FA",
          100: "#E9ECEF", 
          200: "#DEE2E6",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#6C757D", // gray-500
          600: "#495057",
          700: "#343A40",
          800: "#2C3E50", // blue-gray-800
          900: "#212529",
          DEFAULT: "#2C3E50", // blue-gray-800
        },
        accent: {
          50: "#F0F9F4",
          100: "#D4F1E0",
          200: "#A8E6C1", 
          300: "#7CDBA2",
          400: "#50D083",
          500: "#2ECC71", // green-500
          600: "#27AE60", // green-600
          700: "#229954",
          800: "#1E8449",
          900: "#196F3D",
          DEFAULT: "#27AE60", // green-600
        },
        background: "#FFFFFF", // white
        surface: "#F8F9FA", // gray-50
        text: {
          primary: "#2C3E50", // blue-gray-800
          secondary: "#6C757D", // gray-500
        },
        success: {
          50: "#F0F9F4",
          100: "#D4F1E0",
          500: "#28A745", // green-600
          DEFAULT: "#28A745", // green-600
        },
        warning: {
          50: "#FFFBF0", 
          100: "#FFF3CD",
          500: "#FFC107", // yellow-400
          DEFAULT: "#FFC107", // yellow-400
        },
        error: {
          50: "#FDF2F2",
          100: "#FCE8E8", 
          500: "#DC3545", // red-600
          DEFAULT: "#DC3545", // red-600
        },
        border: {
          DEFAULT: "#E9ECEF", // gray-200
          light: "#F8F9FA", // gray-50
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'interactive': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'none': 'none',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
        'ease-in-out': 'ease-in-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}