/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary brand palette — DESIGN.md "Colour > Primary palette"
        kode: {
          primary: "#2D5F4E",
          "primary-hover": "#3F7A66",
          "primary-active": "#1F4438",
          // alpha tints (use as bg-kode-tint, bg-kode-glow with /xx not needed)
          tint: "rgba(45, 95, 78, 0.12)",
          glow: "rgba(45, 95, 78, 0.55)",
        },
        // Semantic
        success: { bg: "rgba(45, 95, 78, 0.16)", fg: "#2d5f4e" },
        warning: { bg: "rgba(196, 127, 0, 0.18)", fg: "#8a5a00" },
        danger: { bg: "rgba(168, 50, 57, 0.18)", fg: "#a83239" },
        info: { bg: "rgba(45, 95, 78, 0.07)", fg: "rgba(0, 0, 0, 0.65)" },
        // Surface — dark canonical brand. Light vars handled via CSS custom props in global.css.
        surface: {
          // dark mode (canonical)
          "dark-bg": "#0b1418",       // wallpaper-adjacent base
          "dark-elev": "#11201f",     // raised card on dark
          "dark-border": "rgba(255, 255, 255, 0.08)",
          // light mode
          "light-bg": "#f5f7f6",
          "light-elev": "rgba(255, 255, 255, 0.92)",
          "light-border": "rgba(0, 0, 0, 0.06)",
        },
        // Text — paired with surface
        ink: {
          "on-dark": "rgba(255, 255, 255, 0.96)",
          "on-dark-2": "rgba(255, 255, 255, 0.70)",
          "on-dark-3": "rgba(255, 255, 255, 0.48)",
          "on-light": "#1f2937",
          "on-light-2": "rgba(0, 0, 0, 0.72)",
          "on-light-3": "rgba(0, 0, 0, 0.55)",
        },
      },
      fontFamily: {
        sans: [
          "IBM Plex Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["IBM Plex Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      // DESIGN.md typography scale
      fontSize: {
        hero: ["2.1rem", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "500" }],
        display: ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "500" }],
        h1: ["1.25rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "500" }],
        h2: ["1.0625rem", { lineHeight: "1.3", fontWeight: "500" }],
        h3: ["0.9375rem", { lineHeight: "1.3", letterSpacing: "0.01em", fontWeight: "500" }],
        body: ["0.9375rem", { lineHeight: "1.55" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        caption: ["0.8125rem", { lineHeight: "1.45" }],
        meta: ["0.75rem", { lineHeight: "1.4" }],
        micro: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.04em", fontWeight: "600" }],
      },
      // DESIGN.md spacing — base 4px multiples already match tailwind defaults;
      // these aliases let us read intent in the markup.
      spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      borderRadius: {
        pill: "999px",
        "card-sm": "10px",
        "card-md": "14px",
        "card-lg": "20px",
        wizard: "28px",
      },
      boxShadow: {
        // DESIGN.md > Shadows — load-bearing inset top highlight
        tile:
          "inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 8px 28px rgba(0, 0, 0, 0.18)",
        "tile-dark":
          "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 8px 28px rgba(0, 0, 0, 0.40)",
        modal:
          "inset 0 1px 0 rgba(255, 255, 255, 0.85), 0 18px 48px rgba(0, 0, 0, 0.28)",
        wizard:
          "inset 0 1px 0 rgba(255, 255, 255, 0.10), 0 24px 60px rgba(0, 0, 0, 0.38)",
        glow: "0 0 0 4px rgba(45, 95, 78, 0.55), 0 0 28px rgba(45, 95, 78, 0.55)",
      },
      backdropBlur: {
        tile: "14px",
        deep: "24px",
      },
      backdropSaturate: {
        180: "1.8",
      },
      transitionTimingFunction: {
        // DESIGN.md motion tokens
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "soft-slide": "cubic-bezier(0.34, 1.2, 0.64, 1)",
      },
      transitionDuration: {
        quick: "150ms",
        snap: "200ms",
        soft: "280ms",
      },
      maxWidth: {
        prose: "640px",   // wizard shell width
        content: "1100px",
        wide: "1240px",
      },
    },
  },
  plugins: [],
};
