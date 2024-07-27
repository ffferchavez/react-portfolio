/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        'light-gradient': 'radial-gradient(circle 100% 50% at 50% 0%, rgba(0,163,255,0.13) 0%, rgba(0,163,255,0) 50%, rgba(0,163,255,0) 100%)',
        'dark-gradient': 'radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)',
      },
      colors: {
        darkBackground: '#1e1e1e', // Dark background
        lightBackground: '#ffffff', // Light background
        darkText: '#e0e0e0', // Light text color for dark mode
        lightText: '#333333', // Dark text color for light mode
        borderDark: '#3e3e3e', // Border color for dark mode
        borderLight: '#e0e0e0', // Border color for light mode
        // Add more colors if needed
      },
    },
  },
  plugins: [],
};
