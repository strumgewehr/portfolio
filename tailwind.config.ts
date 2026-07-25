import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F7F3EB",
        ivory: "#FBF9F4",
        ink: "#111111",
        crimson: "#9E1B1B",
        "crimson-deep": "#7A1414",
        "warm-gray": "#615B4F",
        "warm-gray-light": "#D8D2C4",
        "hairline": "#E4DED0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        editorial: "72rem",
        prose: "42rem",
      },
      letterSpacing: {
        wider2: "0.08em",
      },
      boxShadow: {
        paper: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px rgba(17,17,17,0.06)",
        "paper-hover": "0 4px 10px rgba(17,17,17,0.06), 0 16px 40px rgba(17,17,17,0.10)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [
    // Scope `hover:` and `group-hover:` to devices that truly support hover
    // (mouse/trackpad). Prevents hover states from getting "stuck" after
    // a tap on Android/iOS touchscreens.
    plugin(({ addVariant }) => {
      addVariant("hover", "@media (hover: hover) and (pointer: fine) { &:hover }");
      addVariant(
        "group-hover",
        "@media (hover: hover) and (pointer: fine) { :merge(.group):hover & }"
      );
    }),
  ],
};
export default config;
