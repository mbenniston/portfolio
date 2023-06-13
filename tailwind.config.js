/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      "winter",
      {
        mytheme: {
          "primary": "#60a5fa",
          "secondary": "#9ce84c",
          "accent": "#f43a9d",
          "neutral": "#202932",
          "base-100": "#fcfcfd",
          "info": "#0d37f2",
          "success": "#2ed1b9",
          "warning": "#a67408",
          "error": "#ed5a88",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
}
