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
        mBlack: "#293241",
        mOrange: "#ee6c4d",
        mLightBlue: "#e0fbfc",
        mMidBlue: "#98c1d9",
        mDarkBlue: "#3d5a80",
      },
    },
  },
  plugins: [],
};
export default config;
