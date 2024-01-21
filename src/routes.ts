import { RouteRecordRaw } from "vue-router";

import Home from "@/screens/Main.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/photos",
    name: "Photos",
    component: () => import("@/screens/Photos.vue"),
  },
];

export default routes;
