/**** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        "light-gradient":
          "linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)",
        "light-grid":
          "linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)",
        "light-radial":
          "radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)",
        "dark-radial":
          "radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)",
      },
      backgroundSize: {
        "light-size": "6rem 4rem",
      },
      colors: {
        darkBackground: "#1e1e1e", // Dark background
        lightBackground: "#ffffff", // Light background
        darkText: "#e0e0e0", // Light text color for dark mode
        lightText: "#333333", // Dark text color for light mode
        borderDark: "#3e3e3e", // Border color for dark mode
        borderLight: "#e0e0e0", // Border color for light mode
      },
    },
  },
  plugins: [],
};
