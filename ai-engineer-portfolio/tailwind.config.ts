import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A192F",
        accent: "#64FFDA",
        glow: "#00FF88",
        surface: "#112240"
      }
    }
  },
  plugins: []
};

export default config;
