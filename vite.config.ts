import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/cinema-studio',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  // build: {
  //   outDir: 'dist',
  //   rollupOptions: {
  //     input: {
  //       main: path.resolve(__dirname, 'index.html')
  //     }
  //   }
  // }
});
