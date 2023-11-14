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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '4rem'
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1240px',
        '2xl': '1240px'
      }
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e3f5c',
          50: '#f3f7fc',
          100: '#e6eff8',
          200: '#c6def1',
          300: '#94c3e5',
          400: '#5ba3d5',
          500: '#3688c1',
          600: '#266ca3',
          700: '#1e517b',
          800: '#1e4a6e',
          900: '#1e3f5c',
          950: '#14293d'
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
          DEFAULT: '#222222',
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#222222'
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
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addBase, theme }) => {
      // global font styles
      addBase({
        html: {
          backgroundColor: theme('colors.gray.50'),
          color: theme('colors.font.700'),
          fontWeight: 300
        },
        a: {
          color: theme('colors.primary.950'),
          '&:hover': {
            color: theme('colors.tertiary.900')
          },
          '&:active': {
            color: theme('colors.tertiary.900')
          }
        },
        p: {
          fontWeight: 300,
          fontFamily: theme('fontFamily.sans'),
          color: theme('colors.font.700')
        },
        'h1,h2,h3,h4,h5': {
          fontWeight: 700,
          fontFamily: theme('fontFamily.serif'),
          color: theme('colors.primary.DEFAULT')
        }
      });
    }),
    require('@tailwindcss/forms'),
    plugin(({ addBase, theme }) => {
      // global form styles
      addBase({
        '.form-input': {
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.leading-tight'),
          minWidth: '300px'
        },
        '.form-input[disabled]': {
          backgroundColor: theme('colors.font.100'),
          border: 'none',
          minWidth: '300px'
        },
        '.form-textarea': {
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.leading-tight'),
          minWidth: '300px'
        }
      });
    })
  ]
};
