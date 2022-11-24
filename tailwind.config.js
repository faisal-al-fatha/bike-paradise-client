/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7300ef",

          "secondary": "#ef4161",

          "accent": "#10b880",

          "neutral": "#161A1D",

          "base-100": "#f5e9d4",

          "info": "#5075D3",

          "success": "#047857",

          "warning": "#F4B61A",

          "error": "#bd123d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
