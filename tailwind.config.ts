import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json}",
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
