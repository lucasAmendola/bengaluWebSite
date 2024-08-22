import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit', // Habilita el modo Just-In-Time
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        colors: {
          backgroundDark: '#181818',
          colorText: '#ffffff',
        },
        fontWeight: {
          subtitle: 'normal',
          titles: 'bold',
        },
        fontSize: {
          subtitle: '40px',
          paragraph: '20px',
        },
      },
    },
  plugins: [],
};
export default config;
