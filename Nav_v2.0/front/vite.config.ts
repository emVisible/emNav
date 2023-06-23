import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ["vue", "vue-router"],
      //composables目录文件按需加载
      // dirs: ["src/components/**/*"],
      dts: "types/y/auto-imports.d.ts",
      vueTemplate: true,
      defaultExportByFilename: true,
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        VueUseComponentsResolver(),
        (componentName) => {
          if (componentName.startsWith("Icon")) {
            return {
              name: componentName.slice(4),
              from: "@icon-park/vue-next",
            };
          }
        },
      ],
      extensions: ["vue", "tsx"],
      dirs: ["src/components"],
      directoryAsNamespace: true,
      dts: "types/y/components.d.ts",
    }),
  ],
  base: "/",
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  server: {
    host:true,
    proxy: {
      "/api": {
        target: "http://localhost:3000/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
