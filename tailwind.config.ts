import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "firesafe-orange": "#E64117",
      "firesafe-gray": "#D4D5D7",
      "firesafe-black": "#000000",
      "firesafe-blue": "#001F44",
      "firesafe-beige": "#DAD5C5",
      "firesafe-red": "#831523",
      "firesafe-yellow": "#F28902",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-swis)"],
      },
      aspectRatio: {
        a4: "210/297",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
