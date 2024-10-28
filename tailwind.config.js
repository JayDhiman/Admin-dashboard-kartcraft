/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: '#root',
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Example primary color
        secondary: '#14171A', // Example secondary color
        accent: '#FFAD1F', // Example accent color
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add custom font
        serif: ['Merriweather', 'serif'],
        mono: ['Menlo', 'monospace'],
     
      },
      spacing: {
        '72': '18rem', // Custom spacing
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem', // Custom border radius
      },
      // Add more custom configurations as needed
    },
  },
  plugins: [],
}
