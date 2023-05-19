/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foreground": "rgb(var(--color-foreground) / <alpha-value>)",
        "background": "rgb(var(--color-background) / <alpha-value>)",
        "background-secondary": "rgb(var(--color-background-secondary) / <alpha-value>)",
        "header-primary": "rgb(var(--color-header-primary) / <alpha-value>)",
        "header-secondary": "rgb(var(--color-header-secondary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        cursive: ["var(--font-cursive)", "cursive"],
      },
    },
  },
  plugins: [],
};
