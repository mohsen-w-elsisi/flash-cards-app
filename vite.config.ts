import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "flash card app",
        display: "fullscreen",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@types.ts": path.resolve(__dirname, "./src/types.ts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@storageOperations.ts": path.resolve(
        __dirname,
        "./src/storage/storageOperations.ts"
      ),
    },
  },
});
