import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  { path: '*', redirect: { name: 'Home' } }
]

const router = new VueRouter({
  routes
})

export default router
