/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
            "./src/components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        "loadMoreBG": "url(./images/loadMoreBG.jpg)",
      },
    },
  },
  plugins: [],
}

