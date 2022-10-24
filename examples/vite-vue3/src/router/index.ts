import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('../views/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default  router