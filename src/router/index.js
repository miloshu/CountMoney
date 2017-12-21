import Vue from 'vue'
import Router from 'vue-router'

import Todos from '@/components/Todos'
import Login from '@/components/Login'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/todos',
      component: Todos
    },
    {
      path: '/add',
      component: Add
    }
  ]
})