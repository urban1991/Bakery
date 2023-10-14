import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["var(--font-oswald)"],
        greatVibes: ["var(--font-great-vibes)"]
      },
    },
  },
  plugins: [],
} satisfies Config;
