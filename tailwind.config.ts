import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradijent-pozadina":"linear-gradient(144deg, rgba(13, 18, 35, 1) 50%, rgba(13, 18, 35, 0.5) 50%)",

      },
      maxWidth: {
        'sirina': '1440px',
      },
      height: {

        '454': '454px',
 },

     top: {
 '8586': '8586px',

      },
      colors: {
        customBlue: '#3852AC',
        zlatna: '#c69638',
        lightblue: '#121B34',
        oblacicsiva:'#F9F9FB',
        navcolor:'#3A3A3A',
        dugmeplava:'#1200FF',
        tirkizna: '#00E5FF',
        
      },
    },
  },
  plugins: [],
};
export default config;
