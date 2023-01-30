/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#fff',
      black: '#000',
      gray: '#666',
      primary: '#fdf8f2',
      secondary: '#fdf8f2',
      tertiary: '#193648',
      font: '#232323'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.9rem',
      base: '1rem',
      md: '1.25rem',
      lg: '1.563rem',
      xl: '1.953rem',
      '2xl': '2.441rem',
      '3xl': '3.052rem'
    },
    extend: {
      backgroundImage: {
        hive: "url('@/assets/images/oig-hive.svg')",
        banner: "url('@/assets/images/oig-banner.svg')"
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['MonoLisa', ...defaultTheme.fontFamily.sans]
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.font'),
            strong: {
              color: theme('colors.gray.800')
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600')
              }
            }
          }
        }
      })
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addBase, theme }) => {
      addBase({
        // or whichever color you'd like
        html: {
          color: theme('colors.font'),
          fontWeight: 300
        }
      });
    })
  ]
};
