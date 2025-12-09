import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1117",
        surface: "#161B22",
        "surface-light": "#1E242B",
        primary: "#33AFFF",
        secondary: "#1DD6A5",
        "text-primary": "#E6E8EB",
        "text-muted": "#8B95A1",
        border: "#303842",
        "code-bg": "#0B0F13",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
