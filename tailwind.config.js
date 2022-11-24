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

          "secondary": "#dfb1ef",

          "accent": "#84e8e4",

          "neutral": "#161A1D",

          "base-100": "#f5e9d4",

          "info": "#5075D3",

          "success": "#1B7968",

          "warning": "#F4B61A",

          "error": "#E97C9F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
