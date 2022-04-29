import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import Add from '../views/Add.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Edition from '../views/Edition.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: ListView
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }, {
      path: '/edit',
      name: 'edit',
      component: Edition,
      props: route => ({
        Id: route.query.id
      })
    }
  ]
})

export default router
