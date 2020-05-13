import Vue from "vue";
import VueRouter from "vue-router";
const fb = require('../firebase/firebaseInit')

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
    component: Admin_dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile_setting',
    name: 'Profile_setting',
    component: Profile_setting,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage_news',
    name: 'manage_news',
    component: Manage_news,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/manage_users',
    name: 'manage_uaers',
    component: Manage_users,
    meta: {
      requiresAuth: true
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth.currentUser

  if (requiresAuth && !currentUser) {
      next('/')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})


export default router;
