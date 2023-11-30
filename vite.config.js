import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // resolve: {
  //   alias: {
  //     "@emotion/styled": "@emotion/styled/dist/styled-emotion.esm.js",
  //   },
  // },
  plugins: [react()],
  server: {
    port: 8000,
  },
});
