/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "text": "#555",
        "border": "#ccc",
        "focus": "#007bff",
        "primary-color": "#001220",
        "color-white": "#ffffff"
      }
    },
  },
  plugins: [],
}

