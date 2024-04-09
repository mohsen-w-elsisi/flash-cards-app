import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@types.ts": path.resolve(__dirname, "./src/types.ts"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@storageOperations.ts": path.resolve(
        __dirname,
        "./src/storage/storageOperations.ts"
      ),
    },
  },
});
