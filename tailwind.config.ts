import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,css,scss}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,css,scss}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,css,scss}",
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
