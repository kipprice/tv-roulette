import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  globalCss: {
    "body, html": {
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
    },
  },

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/lib/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          lightGamboge: { value: "#EFA00B11" },
          gamboge: { value: "#EFA00B" },
          syracuseRedOrange: { value: "#D65108" },
          sealBrown: { value: "#591F0A" },
          frenchBlue: { value: "#0075C4" },
          greenBlue: { value: "#0267C1" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "/src/lib/styled-system",

  jsxFramework: "react",
});
