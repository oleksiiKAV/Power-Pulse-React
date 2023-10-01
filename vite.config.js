import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Power-Pulse-React",
  resolve: {
    alias: {
      "@": path.resolve(new URL(import.meta.url).pathname, "./src"),
      "@assets": path.resolve(new URL(import.meta.url).pathname, "./src/assets"),
      "@components": path.resolve(new URL(import.meta.url).pathname, "./src/components"),
    },
  },
});
