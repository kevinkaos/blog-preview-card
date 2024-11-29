import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: "hsl(47deg, 88%, 63%)",
        "gray-950": "hsl(0deg, 0%, 7%)",
        "gray-500": "hsl(0deg, 0%, 42%)",
      },
      boxShadow: {
        'dropShadow': '8px 8px 0px 0px black',
      }
    },
    spacing: {
      300: "24px",
      150: "12px",
      100: "8px",
      50: "4px",
    },
    fontFamily: {
      sans: ["var(--font-figtree)"],
    }
  },
  plugins: [
    plugin(function({ addComponents, theme }) {
      addComponents({
        ".text-preset-1": {
          fontSize: "200px",
        },
      }); 
    })
  ],
} satisfies Config;
