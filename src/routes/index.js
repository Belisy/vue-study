import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import About from "./About";

export default createRouter({
  history: createWebHashHistory, // Hash모드, History모드
  // pages
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
  ],
});
