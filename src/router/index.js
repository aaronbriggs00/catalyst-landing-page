import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Mission from "../views/Mission.vue";
import Whoweare from "../views/WhoWeAre.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mission",
    name: "Mission",
    component: Mission,
  },
  {
    path: "/whoweare",
    name: "Whoweare",
    component: Whoweare,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
