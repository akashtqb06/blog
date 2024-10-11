import type { Config } from "tailwindcss";
import sharedConfig from '@repo/tailwind-config/tailwind.config';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  ...sharedConfig
};
export default config;
