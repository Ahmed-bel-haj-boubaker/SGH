/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A3AFF",
        primaryy: "#24262b",
        "primary-gray": "#5e626f",
        "primary-green": "#0D775E",
        "red-gray": "#444444",
        "white-100": "#F3F3F3",
      },
      backgroundImage: {
        Hero: "url('assets/cc.png')",
      },
      backgroundSize: {
        "100%": "100%",
      },
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
      },
    },
  },
  plugins: [],
};
