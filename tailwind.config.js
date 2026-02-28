/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      maxWidth: {
        "8xl": "1920px",
        "9xl": "2560px",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#029a8d",
          secondary: "#202020",
          accent: "#f28c3d",

          info: "#0058ff",
          success: "#00b380",

          warning: "#9b6300",

          error: "#ff8084",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
