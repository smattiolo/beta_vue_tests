import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "../views/Page1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "page1",
    component: Page1,
  },
  {
    path: "/page2",
    name: "Page2",
    component: () => import("../views/Page2.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
