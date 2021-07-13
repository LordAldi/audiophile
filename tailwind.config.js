module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Manrope, sans-serif",
      display: "Manrope, sans-serif",
      body: "Manrope, sans-serif",
    },
    extend: {
      colors: {
        primary: "hsl(22,65%,57%)",
        "primary-hover": "hsl(21,94%,75%)",
        blackish: "hsl(0,0%,6%)",
        gray: "hsl(0,0%,95%)",
        "light-gray": "hsl(0,0%,98%)",
      },
      zIndex: {
        "-10": "-10",
        100: "100",
      },
      fontSize: {
        h1: [
          "3.5rem",
          {
            letterSpacing: "2px",
            lineHeight: "3.625rem",
          },
        ],
        h1m: [
          "2.25rem",
          {
            letterSpacing: "1.3px",
            lineHeight: "2.5rem",
          },
        ],
        h2: [
          "2.5rem",
          {
            letterSpacing: "1.5px",
            lineHeight: "2.75rem",
          },
        ],
        h3: [
          "2rem",
          {
            letterSpacing: "1.15px",
            lineHeight: "2.25rem",
          },
        ],
        h4: [
          "1.75rem",
          {
            letterSpacing: "2px",
            lineHeight: "2.375rem",
          },
        ],
        h5: [
          "1.5rem",
          {
            letterSpacing: "1.7px",
            lineHeight: "2.0625rem",
          },
        ],
        h6: [
          "1.125rem",
          {
            letterSpacing: "1.3px",
            lineHeight: "1.5rem",
          },
        ],
        overline: [
          ".875rem",
          {
            letterSpacing: "10px",
            lineHeight: "1.1875rem",
          },
        ],
        subtitle: [
          ".8125rem",
          {
            letterSpacing: "1px",
            lineHeight: "1.6525rem",
          },
        ],
        body: [
          ".9375rem",
          {
            letterSpacing: "0",
            lineHeight: "1.5625rem",
          },
        ],
      },
      height: {
        22.5: "5.625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
