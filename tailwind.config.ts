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
        ink: "#1A1A2E",
        ink2: "#16213E",
        accent: "#F5C518",
        "accent-deep": "#D9AC0F",
        cream: "#FEF9E7",
        "cream-deep": "#FBF1C9",
        paper: "#F8F9FA",
        muted: "#6B7280",
        line: "#E7E5DB",
        "on-dark": "#F6F4EC",
      },
      fontFamily: {
        display: ["var(--font-syne)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
