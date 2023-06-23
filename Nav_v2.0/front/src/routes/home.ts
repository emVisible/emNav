import { RouteRecordRaw } from "vue-router";

export default {
  path: "/",
  component: () => import("@/layouts/home/home.vue"),
  children: [
    {
      name: "home",
      path: "",
      component: () => import("@/views/home/home.vue"),
    },
  ],
} as RouteRecordRaw;
