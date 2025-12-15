module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: ["animate-softBlink"],
  theme: {
    extend: {
      keyframes: {
        softBlink: {
          "0%, 100%": {
            opacity: "1",
            textShadow: "0 0 8px rgba(139,92,246,0.5)",
          },
          "50%": {
            opacity: "0.6",
            textShadow: "0 0 16px rgba(139,92,246,0.9)",
          },
        },
      },
      animation: {
        softBlink: "softBlink 2.2s ease-in-out infinite",
      },
    },
  },
};
