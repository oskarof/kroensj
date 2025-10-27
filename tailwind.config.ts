export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F3E9FF',
          400: '#9334EB',
          600: '#9334EB',
        },
        secondary: {
          100: '#F3E9FF',
          600: '#9334EB',
        },
        accent: {
          100: '#FFF3CD',
          600: '#FFB300',
        },
        contrast: {
          DEFAULT: '#fff',
        },
      },
    },
  },
  plugins: [],
};
