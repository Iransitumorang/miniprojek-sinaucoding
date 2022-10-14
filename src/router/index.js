import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import AddBarangView from '../views/AddBarangView.vue'
import UpdateBarangView from '../views/UpdateBarangView.vue'
import SupplierView from '../views/SupplierView.vue'
import UpdateSupplierView from '../views/UpdateSupplierView.vue'
import DashboardView from '../views/DashboardView.vue'
// import ListBarangView from '../views/ListBarangView.vue'
import ListSupplierView from '../views/ListSupplierView.vue'

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/SignupView',
    name: 'SignupView',
    component: SignupView
  },
  {
    path: '/AddBarangView',
    name: 'AddBarangView',
    component: AddBarangView
  },
  {
    path: '/UpdateBarangView',
    name: 'UpdateBarangView',
    component: UpdateBarangView
  },
  {
    path: '/SupplierView',
    name: 'SupplierView',
    component: SupplierView
  },
  {
    path: '/UpdateSupplierView',
    name: 'UpdateSupplierView',
    component: UpdateSupplierView
  },
  {
    path: '/DashboardView',
    name: 'DashboardView',
    component: DashboardView
  },
  // {
  //   path: '/ListBarangView',
  //   name: 'ListBarangView',
  //   component: ListBarangView
  // },
  {
    path: '/ListSupplierView',
    name: 'ListSupplierView',
    component: ListSupplierView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
