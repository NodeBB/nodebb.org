module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "San Francisco",
          "Helvetica Neue",
          "Helvetica",
          "Ubuntu",
          "Roboto",
          "Noto",
          "Segoe UI",
          "Arial",
          "sans-serif !important"
        ],
      },
      listStyleType: {
        square: "square",
        roman: "upper-roman",
      },
      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      colors: {
        gray: {
          50: "#f7f7f8",
          100: "#e3e8ee",
          200: "#c1c9d2",
          300: "#a3acb9",
          400: "#8792a2", // N
          500: "#697386",
          600: "#4f566b",
          700: "#3c4257",
          800: "#2a2f45",
          900: "#1a1f36",
        },
        teal: {
          50: "#efffed",
          100: "#cbf4c9",
          200: "#85d996",
          300: "#33c27f",
          400: "#1ea672", // N
          500: "#09825d",
          600: "#0e6245",
          700: "#124B3A",
          800: "#0b3733",
          900: "#082429",
        },
        blue: {
          50: "#dbe6fb",
          100: "#aec7f5",
          200: "#81a7ef",
          300: "#5488e9",
          400: "#2768e3", // A
          500: "#1952be", // N
          600: "#133f91",
          700: "#0d2b64",
          800: "#071837",
          900: "#01040a",
        },
      },
    },
    fill: (theme) => ({
      blue: theme("colors.blue.500"),
    }),
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "even", "odd"],
    textColor: ["responsive", "hover", "focus"],
  },
  plugins: [],
}