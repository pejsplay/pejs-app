import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,css}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,css}",
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
