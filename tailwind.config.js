/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors(theme) {
        return {
          primary: {
            DEFAULT: '#0FBEF6',
          },
        };
      },
    },
  },
  plugins: [],
};
