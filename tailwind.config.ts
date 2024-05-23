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
        primary: "#1b6392",
        secondary: "#54b6f5",
        orange: "#fa8232",
        light: "#f2f2f2"
      },
      maxWidth: {
        "8xl": "90rem"
      }
    },
  },
  plugins: [],
};
export default config;
