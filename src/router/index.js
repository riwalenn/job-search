import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const Router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

export default Router;
