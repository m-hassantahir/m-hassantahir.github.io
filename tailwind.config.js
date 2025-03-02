/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#4f46e5',
        accent: '#06b6d4',
        'text-primary': '#1f2937',
        'text-secondary': '#4b5563',
        'bg-light': '#f3f4f6'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
