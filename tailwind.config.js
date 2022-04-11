module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(255, 255, 255)',
        blue: 'rgb(29,78,216)',
        yellow: 'rgb(253, 224, 71)',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'noto-sans': ['Noto Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
