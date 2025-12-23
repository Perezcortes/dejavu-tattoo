import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#D15611", // TU NUEVO COLOR (Naranja Óxido)
        "primary-dim": "#9a3f0c", // Versión más oscura para hover
        "primary-light": "#ff8e4d", // Versión más clara para brillos
        secondary: "#121212", 
        dark: "#050505", // Negro absoluto
        surface: "#0A0A0A", 
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'serif'],
        serif: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-roboto)', 'monospace'],
      },
      backgroundImage: {
        'noise': "url('https://www.transparenttextures.com/patterns/stardust.png')",
        // Actualicé el gradiente para usar tus tonos naranjas
        'gradient-gold': 'linear-gradient(to right, #D15611, #ff8e4d, #9a3f0c, #ff8e4d, #D15611)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;