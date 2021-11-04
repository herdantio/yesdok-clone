import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/atomic/pages/Home')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('@/atomic/pages/Article')
  },
  {
    path: '/:id',
    name: 'Category',
    component: () => import('@/atomic/pages/Article')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
