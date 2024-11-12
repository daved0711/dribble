/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#D8B158",
        great: "#F11342",
        michi: "#FAF3EA",
        ramenText: "#433D3C",
        sides: "#FBF3EF",
      },

      fontFamily: {
        Montserrat: "Montserrat",
        Economica: "Economica",
        ComingSoon: "ComingSoon",
      },
      backgroundImage: {
        Background:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../img/wood.jpg')",
        Backgroundyellow:
          " linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.0)),  url('../img/bg.png')",
      },
    },
  },
  plugins: [],
};

