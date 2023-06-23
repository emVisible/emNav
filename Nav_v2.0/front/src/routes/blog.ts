import { RouteRecordRaw } from "vue-router";

export default {
  path: "/blog",
  component: () => import("@/layouts/blog/blog.vue"),
  children: [
    {
      path: "",
      name: "blog",
      component: () => import("@/views/blog/blog.vue"),
    },
  ],
} as RouteRecordRaw;
