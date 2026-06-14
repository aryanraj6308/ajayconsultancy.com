import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: "https://ajayconsultancy.com",
  trailingSlash: "always",
  build: {
    assets: "_assets",
  },
  vite: {
    resolve: {
      alias: {
        "next/link": "src/lib/compat/link.tsx",
        "next/image": "src/lib/compat/image.tsx",
        "next/navigation": "src/lib/compat/navigation.ts",
        "next-themes": "src/lib/compat/theme.tsx",
      },
    },
  },
});
