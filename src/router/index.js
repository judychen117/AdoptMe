import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const router = new Router({
  linkExactActiveClass: 'nav-active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('./../views/Main.vue')
    },
    {
      path: '/dog-profile',
      name: 'dog-profile',
      component: () => import('./../views/DogProfile.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./../views/Contact.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('./../views/Activity.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})

export default router
