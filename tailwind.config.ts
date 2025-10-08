import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softBlue: "var(--color-soft-blue)",
        softRed: "var(--color-soft-red)",
        grayishBlue: "var(--color-grayish-blue)",
        veryDarkBlue: "var(--color-very-dark-blue)",

        black: "var(--color-black)",
        white: "var(--color-white)",
      },
      fontFamily: {
        primary: "var(--font-family-primary)",
      },
      fontSize: {
        base: "var(--font-size-base)",
      },
      fontWeight: {
        medium: "var(--font-weight-medium)",
        semibold: "var(--font-weight-semibold)",
        bold: "var(--font-weight-bold)",
      },
      letterSpacing: {
        'n5': '-0.072em',
        'n25': '-0.07em',
        'l5': '0.7em',
      }
    },
  },
  plugins: [],
} satisfies Config;