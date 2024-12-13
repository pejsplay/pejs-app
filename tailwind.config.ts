import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [*],
} satisfies Config;
