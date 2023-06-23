import { RouteRecordRaw } from "vue-router";

export default {
  path: "/fm",
  component: () => import("@/layouts/fm/fm.vue"),
  children: [
    {
      path: "",
      name: "fm",
      component: () => import("@/views/fm/fm.vue"),
    },
  ],
} as RouteRecordRaw;
