module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono"],
      },
      animation: {
        "blink-caret": "caret 1s steps(1) infinite;",
      },
      keyframes: {
        caret: {
          "50%": { color: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
