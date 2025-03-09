import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);
const resolve = (dir: string) => path.join(__dirnameNew, dir);

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    hmr: {
      overlay: false
    },
    host: "0.0.0.0",
    port: 8080, //端口号
    proxy: {},
    preTransformRequests: false
  },
  resolve: {
    alias: {
      "@": resolve("src")
      // 'vue$': 'vue/dist/vue.esm.js'
    },
    dedupe: ["vue"]
  }
});
