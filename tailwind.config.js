import { nextui } from '@nextui-org/theme';

const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['var(--font-sans)'],
        // mono: ['var(--font-mono)'],
        pangaia: ['Playfair Display', ...defaultTheme.fontFamily.serif],
        raleway: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        theme: {
          neutral: 'var(--theme-neutral)',
          'neutral-invert': 'var(--theme-neutral-invert)',
          'neutral-background': 'var(--theme-neutral-bg)',
          primary: 'var(--theme-primary)',
          'primary-light': 'var(--theme-primary-light)',
          'primary-hover': 'var(--theme-primary-hover)',
          disabled: 'var(--theme-disabled)',
          'disabled-background': 'var(--theme-disabled-bg)',
          secondary: 'var(--theme-secondary)',
          'secondary-light': 'var(--theme-secondary-light)',
          'secondary-hover': 'var(--theme-secondary-hover)',
          success: 'var(--theme-success)',
          'success-background': 'var(--theme-success-bg)',
          warning: 'var(--theme-warning)',
          'warning-background': 'var(--theme-warning-bg)',
          error: 'var(--theme-error)',
          'error-background': 'var(--theme-error-bg)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
