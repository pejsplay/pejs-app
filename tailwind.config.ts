import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json,yaml}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json,yaml}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json,yaml}",
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
