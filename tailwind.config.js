/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#af373b',
          secondary: '#ef4444',
          accent: '#f97316',
          neutral: '#1c1917',
          'base-100': '#111110',
          'base-200': '#1d1d1bb3',
          info: '#93c5fd',
          success: '#22c55e',
          warning: '#facc15',
          error: '#dc2626',

          '--rounded-box': '0.7rem', // border radius rounded-box utility class, used in card and other large boxes
          '--padding-card': '1.5rem',
          '--max-height-buton': '5rem',
          '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
