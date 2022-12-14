import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/routes";

// @ts-ignore
const Router = new createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default Router;
