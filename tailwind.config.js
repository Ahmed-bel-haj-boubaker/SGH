/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "1069px": "1069px", // Custom breakpoint
        "ipad-pro": "1024px",
        phone: "640px",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out",
        "slide-in": "slideIn 1s ease-out",
        "bounce-in": "bounceIn 1s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite",
        progress: "progress 5s linear forwards",
        slideInRight: "slideInRight 0.5s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        bounceIn: {
          "0%, 100%": { transform: "scale(0.5)", opacity: 0 },
          "50%": { transform: "scale(1)", opacity: 1 },
        },
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      colors: {
        primary: "#4A3AFF",
        primaryy: "#24262b",
        "primary-gray": "#5e626f",
        "primary-green": "#0D775E",
        "red-gray": "#444444",
        "white-100": "#F3F3F3",
      },
      backgroundImage: {
        Hero: "url('public/images/cc.png')",
      },
      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        kaushan: "Kaushan Script, cursive",
      },
    },
  },
  plugins: [],
};
