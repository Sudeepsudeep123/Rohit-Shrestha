/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          DEFAULT: "#cc0000",
          50: "#ffe5e5",
          100: "#ffb3b3",
          200: "#ff8080",
          300: "#ff4d4d",
          400: "#e60000",
          500: "#cc0000",
          600: "#a30000",
          700: "#800000",
          800: "#5c0000",
          900: "#380000",
          950: "#1f0000",
        },

        cyan: {
          DEFAULT: "#11ffdd",
          50: "#e6fffb",
          100: "#b3fff5",
          200: "#80ffed",
          300: "#4dffe5",
          400: "#11ffdd",
          500: "#00d9bd",
          600: "#00b39c",
          700: "#008f7d",
          800: "#006b5e",
          900: "#00483f",
        },

        ink: {
          950: "#050505",
          900: "#0a0a0b",
          800: "#111113",
          700: "#1a1a1d",
          600: "#242428",
          500: "#2e2e34",
          400: "#3a3a42",
        },
      },
      fontFamily: {
        display: ["Anton", "Oswald", "system-ui", "sans-serif"],
        heading: ["Oswald", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.02em",
        widest2: "0.25em",
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};
