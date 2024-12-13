import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json,yaml,yml,py}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json,yaml,yml,py}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,html,css,scss,sass,less,json,yaml,yml,py}",
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
