module.exports = {
  purge: ["./pages/*.{jsx,tsx,mdx}", "./components/*.{jsx,tsx,mdx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['"Crimson Pro"', "Garamond", "serif"],
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      colors: { primary: "#002fa7" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
