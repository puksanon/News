import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Index  = () => import('../view/Index/Index.vue')


const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
