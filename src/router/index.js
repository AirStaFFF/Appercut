import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '@/views/MainPage'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
