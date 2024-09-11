module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to scan your React files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E4042C',  // Cristor red (Pantone 185C)
        secondary: '#F7A600', // Complementary colors like yellow
        black: '#000000',
        white: '#FFFFFF',
        gray: '#5D686E', // Dark gray as secondary
        lightGray: '#F5F5F5',
      },
      fontFamily: {
        sans: ['PT Sans', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],  // Arabic typography
      },
    },
  },
}
