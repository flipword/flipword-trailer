/* eslint-env node */
module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: "#FF9100",
      positive: "#01da7c",
      base: "#EAEAEA",
      white: "#FFFFFF",
      whiteShadow: "#C1C1C1",
      black: "#000000",
    }),
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: "#FF9100",
      base: "#EAEAEA",
      white: "#FFFFFF",
      whiteShadow: "#C1C1C1",
    }),
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    dropShadow: {
      top: "0 -4px 3px rgba(0, 0, 0, 0.05)",
    },
    textColor: {
      black: "#1E1E1E",
      white: "#FFFFFF",
    },
    extend: {
      borderRadius: {
        "5xl": "5rem",
      },
      fontSize: {
        title: "5vw",
        subtitle: "1.75vw",
      },
      spacing: {
        110: "27rem",
      },
      screens: {
        xs: "500px",
        "4xl": "1600px",
      },
      margin: {
        "1/12": "8.33%",
      },
      padding: {
        "1/12": "8.33%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
