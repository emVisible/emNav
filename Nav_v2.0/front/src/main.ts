import { defineConfig } from "vite";
import { createApp } from "vue";
import App from "./App.vue";
import plugin from "./plugins";
import '@/assets/css/global.scss'

function boostrap() {
  const app = createApp(App);
  plugin(app);

  app.mount("#app");
}
boostrap();
