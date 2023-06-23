import { RouteRecordRaw } from "vue-router";

export default {
  path: "/nav",
  // component: () => import("@/layouts/navigation/navigation.vue"),
  component: () => import("@/layouts/home/home.vue"),

  children: [
    {
      path: "",
      name: "navigation",
      component: () => import("@/views/navigation/navigation.vue"),
    },
  ],
} as RouteRecordRaw;
