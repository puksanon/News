import Vue from "vue";
import VueRouter from "vue-router";
//index
const index                     = () => import('@/components/index/index')

//main page
const home                      = () => import('@/components/home/home')

//sing_in staff page 
const signin                    = () => import('@/components/login/signin')

//staff profile
const profile                   = () => import('@/components/profile/profile')
const user_profile              = () => import('@/components/profile/user_profile')
const edit_user_profile         = () => import('@/components/profile/edit_user_profile')
const register_user_profile     = () => import('@/components/profile/register_user_profile')

//lecturer page
const internal_lecturer         = () => import('@/components/lecturer/internal_lecturer')
const external_lecturer         = () => import('@/components/lecturer/external_lecturer')
const edit_internal_lecturer    = () => import('@/components/lecturer/edit/edit_internal_lecturer')
const edit_external_lecturer    = () => import('@/components/lecturer/edit/edit_external_lecturer')
const insert_internal_lecturer  = () => import('@/components/lecturer/insert/insert_internal_lecturer')
const insert_external_lecturer  = () => import('@/components/lecturer/insert/insert_external_lecturer')
//student

//sign in
const student_signin            = () => import('@/components/student/signin/signin')
const student_profile           = () => import('@/components/student/profile/student_profile')
const my_student_profile        = () => import('@/components/student/profile/my_student_profile')
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/signin',
    name: 'signin',
    component: signin
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/home/user_profile',
    name: 'user_profile',
    component: user_profile
  },
  {
    path: '/home/edit_user_profile',
    name: 'edit_user_profile',
    component: edit_user_profile
  },
  {
    path: '/home/register_user_profile',
    name: 'register_user_profile',
    component: register_user_profile
  },
  {
    path: '/home/internal_lecturer',
    name: 'internal_lecturer',
    component: internal_lecturer
  },
  {
    path: '/home/external_lecturer',
    name: 'external_lecturer',
    component: external_lecturer
  },
  {
    path: '/home/internal_lecturer/edit/:lecturer_id',
    name: 'edit_internal_lecturer',
    component: edit_internal_lecturer
  },
  {
    path: '/home/external_lecturer/edit/:lecturer_id',
    name: 'edit_external_lecturer',
    component: edit_external_lecturer
  },
  {
    path: '/home/internal_lecturer/insert_internal_lecturer',
    name: 'insert_internal_lecturer',
    component: insert_internal_lecturer
  },
  {
    path: '/home/external_lecturer/insert_external_lecturer',
    name: 'insert_external_lecturer',
    component: insert_external_lecturer
  },
  //student path
  {
    path: '/student_signin',
    name: 'student_signin',
    component: student_signin
  },    
  {
    path: '/student_profile',
    name: '/student_profile',
    component: student_profile
  },
  {
    path: '/student_profile/my_profile',
    name: '/student_profile/my_profile',
    component: my_student_profile
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
