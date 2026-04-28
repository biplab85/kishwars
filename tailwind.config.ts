import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Theme-aware (swap on [data-theme="light"]) — see styles/tokens.css
        ember: "rgb(var(--kc-ember) / <alpha-value>)",
        smoke: "rgb(var(--kc-smoke) / <alpha-value>)",
        cream: "rgb(var(--kc-cream) / <alpha-value>)",
        // Brand accents — same in both themes
        saffron: "#E2761B",
        saffronDeep: "#D97706",
        pomegranate: "#7A1F2B",
        gold: "#C9A24A",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "tightest-2": "-0.04em",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
        exhale: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        editorial: "78ch",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};

export default config;
