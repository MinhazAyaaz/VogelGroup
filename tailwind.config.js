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
        'hero-pattern': 'url("https://png.pngtree.com/background/20211217/original/pngtree-abstract-bg-picture-image_1596862.jpg")',
      },
    },
  },
  plugins: [],
}