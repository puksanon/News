import Vue from "vue";
import VueRouter from "vue-router";
const Index = () => import("../views/Index.vue");
const Singin = () => import("../views/Signin.vue");
const Register = () => import("../views/Register.vue");
const Create_job = () => import("../views/Create_job.vue");
const Select_course = () => import("../views/Select_course.vue");
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/signin",
    name: "signin",
    component: Singin
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/create_job",
    name: "create_job",
    component: Create_job
  },
  {
    path: "/select_course",
    name: "select_course",
    component: Select_course
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
