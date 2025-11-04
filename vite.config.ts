import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));
const clientRoot = path.resolve(configDir, "client");
const sharedRoot = path.resolve(configDir, "shared");
const outDir = path.resolve(configDir, "dist/public");

export default defineConfig({
  root: clientRoot,
  plugins: [react(), tailwindcss()],
  build: {
    outDir,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(clientRoot, "src"),
      "@shared": sharedRoot,
    },
  },
});
