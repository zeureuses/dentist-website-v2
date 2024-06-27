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
        customDarkGreen: "#2D3F32",
        customLightGreen1: "#EFF1EC",
        customLightGreen2: "#DCE0D8",
        customLightGreen3: "#A9B2A0",
        customBlack: "#383839",
        customBrown: "#884535",
      },
    },
  },
  plugins: [],
};
export default config;
