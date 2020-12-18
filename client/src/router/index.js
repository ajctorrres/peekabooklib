import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/library',
    name: 'Library',
    component: () => import('../views/Library.vue')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account.vue')
  },
  {
    path: '/mysaved',
    name: 'MySaved',
    component: () => import('../views/MySaved.vue')
  },
  {
    path: '/searchResult',
    name: 'SearchResult',
    component: () => import('../views/SearchResult.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/acc-mgmt/student',
    name: 'Manage Student',
    component: () => import('../views/AccMgmtStudent.vue')
  },
  {
    path: '/acc-mgmt/faculty',
    name: 'Manage Faculty',
    component: () => import('../views/AccMgmtFaculty.vue')
  },
  {
    path: '/acc-mgmt/admin',
    name: 'Manage Admin',
    component: () => import('../views/AccMgmtAdmin.vue')
  },
  {
    path: '/account/activity',
    name: 'Account Activity',
    component: () => import('../views/AdminActivity.vue')
  },
  {
    path: '/account/profile',
    name: 'Admin Account',
    component: () => import('../views/AdminProfileAccount.vue')
  },
  {
    path: '/resources/collection',
    name: 'View Resource',
    component: () => import('../views/ResourceView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
