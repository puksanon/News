import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Index  = () => import('../view/Index/Index.vue')
const Admin_dashboard = () => import('../view/Admin/Dashboard.vue')
const Profile_setting = () => import('../view/Profile/Profile')
const Manage_news     = () => import('../view/Admin/ManageNews')
const Manage_users    = () => import('../view/Admin/ManageUser')


const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/dashboard',
    name: 'Admin_dashboard',
    component: Admin_dashboard
  },
  {
    path: '/profile_setting',
    name: 'Profile_setting',
    component: Profile_setting
  },
  {
    path: '/manage_news',
    name: 'manage_news',
    component: Manage_news
  },
  {
    path: '/manage_users',
    name: 'manage_uaers',
    component: Manage_users
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
