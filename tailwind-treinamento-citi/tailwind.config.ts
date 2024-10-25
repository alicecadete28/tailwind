import type { Config } from "tailwindcss";

const config: Config = {
  //indica os arquivos que estarao utilizando o tailwind css
  // ** -> dentro de qualquer pasta
  // * -> dentro de qualquer arquivo
  // .{ts, tsx} -> que termina com .ts ou .tsx etc
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
      },
    },
  },
  plugins: [],
};
export default config;
