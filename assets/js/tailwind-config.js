tailwind.config = {
  darkMode: "class",

  theme: {
    extend: {

      colors: {
        "on-tertiary-container": "#ffa583",
        "outline-variant": "#c4c5d5",
        "surface-container-highest": "#dae2fd",
        "surface-tint": "#3755c3",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#131b2e",
        "on-primary-fixed-variant": "#173bab",
        "on-primary-container": "#a8b8ff",
        "secondary-fixed": "#89f5e7",
        "on-primary-fixed": "#001453",
        "on-surface-variant": "#444653",
        "on-tertiary-fixed-variant": "#802a00",
        "on-error-container": "#93000a",
        "surface-container-low": "#f2f3ff",
        "tertiary-container": "#872d00",
        "error-container": "#ffdad6",
        "secondary-container": "#86f2e4",
        "surface-variant": "#dae2fd",
        "primary-fixed-dim": "#b8c4ff",
        "error": "#ba1a1a",
        "outline": "#757684",
        "primary-fixed": "#dde1ff",
        "on-secondary-fixed-variant": "#005049",
        "background": "#faf8ff",
        "on-secondary-fixed": "#00201d",
        "on-tertiary": "#ffffff",
        "inverse-primary": "#b8c4ff",
        "on-secondary": "#ffffff",
        "secondary": "#006a61",
        "on-tertiary-fixed": "#380d00",
        "tertiary": "#611e00",
        "surface": "#faf8ff",
        "primary-container": "#1e40af",
        "surface-container": "#eaedff",
        "surface-dim": "#d2d9f4",
        "surface-container-high": "#e2e7ff",
        "primary": "#00288e",
        "tertiary-fixed-dim": "#ffb59a",
        "surface-bright": "#faf8ff",
        "secondary-fixed-dim": "#6bd8cb",
        "tertiary-fixed": "#ffdbce",
        "inverse-surface": "#283044",
        "inverse-on-surface": "#eef0ff",
        "on-primary": "#ffffff",
        "on-secondary-container": "#006f66"
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },

      spacing: {
        "space-xs": "0.25rem",
        "margin-mobile": "1.25rem",
        "space-lg": "1.5rem",
        "margin-tablet": "2rem",
        "margin": "3rem",
        "gutter": "1.5rem",
        "space-sm": "0.5rem",
        "gutter-mobile": "1rem",
        "space-md": "1rem",
        "space-xl": "2.5rem"
      },

      fontFamily: {
        "display-hero-mobile": ["Manrope"],
        "label-lg": ["Manrope"],
        "label-md": ["Manrope"],
        "label-sm": ["Manrope"],
        "headline-sm": ["Manrope"],
        "headline-md": ["Manrope"],
        "headline-lg": ["Manrope"],
        "headline-xl": ["Manrope"],
        "display-hero": ["Manrope"],
        "display-lg": ["Manrope"],
        "body-sm": ["Manrope"],
        "body-md": ["Manrope"],
        "body-lg": ["Manrope"],
        "caption": ["Manrope"],
        "metric-display": ["Manrope"]
      },

      fontSize: {
        "display-hero-mobile": [
          "2.25rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            fontWeight: "700"
          }
        ],

        "label-lg": [
          "0.875rem",
          {
            lineHeight: "1.25",
            letterSpacing: "0.01em",
            fontWeight: "600"
          }
        ],

        "label-md": [
          "0.75rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.04em",
            fontWeight: "600"
          }
        ],

        "label-sm": [
          "0.6875rem",
          {
            lineHeight: "1.25",
            letterSpacing: "0.03em",
            fontWeight: "600"
          }
        ],

        "headline-sm": [
          "1.25rem",
          {
            lineHeight: "1.35",
            letterSpacing: "-0.01em",
            fontWeight: "600"
          }
        ],

        "headline-md": [
          "1.5rem",
          {
            lineHeight: "1.3",
            letterSpacing: "-0.015em",
            fontWeight: "600"
          }
        ],

        "headline-lg": [
          "2rem",
          {
            lineHeight: "1.25",
            letterSpacing: "-0.02em",
            fontWeight: "600"
          }
        ],

        "headline-xl": [
          "2.5rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.025em",
            fontWeight: "700"
          }
        ],

        "display-hero": [
          "3.5rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.03em",
            fontWeight: "700"
          }
        ],

        "display-lg": [
          "3.5rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.03em",
            fontWeight: "700"
          }
        ],

        "body-sm": [
          "0.875rem",
          {
            lineHeight: "1.5",
            letterSpacing: "0em",
            fontWeight: "400"
          }
        ],

        "body-md": [
          "1rem",
          {
            lineHeight: "1.55",
            letterSpacing: "0em",
            fontWeight: "400"
          }
        ],

        "body-lg": [
          "1.125rem",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.005em",
            fontWeight: "400"
          }
        ],

        "caption": [
          "0.6875rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0.02em",
            fontWeight: "500"
          }
        ],

        "metric-display": [
          "2rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.03em",
            fontWeight: "700"
          }
        ]
      }
    }
  }
};
