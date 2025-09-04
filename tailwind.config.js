/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./components/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        ivory: "var(--ivory)",
        sand: "var(--sand)",
        charcoal: "var(--charcoal)",
        espresso: "var(--espresso)",
        burgundy: "var(--burgundy)",
        plum: "var(--plum)",
        gold: "var(--gold)",
      },
      borderRadius: { xl: "1.25rem", "2xl": "1.5rem" },
      boxShadow: { soft: "0 6px 16px rgba(0,0,0,.08)", medium: "0 12px 28px rgba(0,0,0,.12)" },
      fontFamily: { serif: ['"Playfair Display"', "Georgia", "serif"], sans: ['Inter', "ui-sans-serif", "system-ui"] },
    },
  },
  plugins: [],
}
