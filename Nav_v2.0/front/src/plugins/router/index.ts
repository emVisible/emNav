import routes from "@/routes";
import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
const setup = (app: App) => {
  app.use(router);
};
export { setup };
export default router;
