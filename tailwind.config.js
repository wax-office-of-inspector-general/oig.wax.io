/* eslint-env node */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
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
      colors: {
        primary: {
          DEFAULT: '#252958',
          50: '#f1f4fd',
          100: '#e0e7f9',
          200: '#c8d5f5',
          300: '#a2bbee',
          400: '#7696e4',
          500: '#5674db',
          600: '#4159cf',
          700: '#3847bd',
          800: '#333b9a',
          900: '#2d357b',
          950: '#252958'
        },
        secondary: {
          DEFAULT: '#f59e0b',
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03'
        },
        tertiary: {
          DEFAULT: '#22313f',
          50: '#f2f8f9',
          100: '#deebef',
          200: '#c0d7e1',
          300: '#94bacc',
          400: '#6194af',
          500: '#467994',
          600: '#3d647d',
          700: '#365368',
          800: '#334757',
          900: '#2e3d4b',
          950: '#22313f'
        },
        font: {
          DEFAULT: '#22313f',
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
          950: '#020617'
        },
        ...defaultTheme.colors
      },
      backgroundImage: {
        hive: "url('@/assets/images/oig-hive.svg')",
        banner: "url('@/assets/images/oig-banner.svg')"
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['MonoLisa', ...defaultTheme.fontFamily.sans]
      },
      zIndex: {
        100: '100',
        ...defaultTheme.zIndex
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.font'),
            strong: {
              color: theme('colors.font')
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
        },
        a: {
          color: theme('colors.tertiary.950'),
          '&:hover': {
            color: theme('colors.tertiary.900')
          },
          '&:active': {
            color: theme('colors.tertiary.900')
          },
        },
        'h1, h2, h3, h4, h5': {
          fontWeight: 300,
          color: theme('colors.tertiar.900')
        }
      });
    })
  ]
};
