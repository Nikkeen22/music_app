/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF4444", // яскраво-червоний (раніше був бірюзовий)
        secondary: "#111827", // темний синьо-чорний
        accent: "#DC2626",    // насичений червоний для акцентів
        muted: "#1F2937",     // темний сірий (фон)
        border: "#374151",    // сірий бордер
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
