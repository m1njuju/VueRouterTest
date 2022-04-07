import Vue from 'vue'
import VueRouter from 'vue-router'
import BoardView from '../views/BoardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: BoardView,
    children: [{
      path: '/board/:page',
      component: function() {
        return import('../components/PageComponent.vue')
      }
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../views/LoginView.vue')
    }
  },
  {
    path: '/user/:user',
    name: 'user',
    component: function () {
      return import('../views/UserView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
