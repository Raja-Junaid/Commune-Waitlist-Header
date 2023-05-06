/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        White: "#ffffff",
        veryPaleBlue: "#f6f9fe",
        deepPurple: "#372865",
        darkSlateBlue: "#353252",
        darkGray: "#222222",
        lightGray: "#444444",
        languidLavender: "#ccc1e6",
      },

      gridTemplateColumns: {
        custom: "3fr 1fr",
      },
    },
  },
  plugins: [],
};
