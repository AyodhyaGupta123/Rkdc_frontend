/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        ink: "#141414",
        paper: "#ffffff",
        offwhite: "#f4f3f1",
        stone: "#6b6b68",
        line: "#e4e2de",
        accent: "#ff2d55",
      },
      fontFamily: {
        display: ["'Archivo'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        "8xl": "1440px",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1) translate3d(0, 0, 0)" },
          "100%": { transform: "scale(1.18) translate3d(-1.5%, -1%, 0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        kenburns: "kenburns 9000ms cubic-bezier(0.16,1,0.3,1) infinite alternate",
        "fade-up": "fade-up 900ms cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};