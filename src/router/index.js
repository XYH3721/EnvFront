import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import visitor from '@/components/views/visitor'
import factory from '@/components/views/factory'
import government from '@/components/views/government'

import login1 from '@/components/views/login1'
import login2 from '@/components/views/login2'
import register1 from '@/components/views/register1'
import register2 from '@/components/views/register2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/page/factory', 
      name: 'factory', 
      component: factory
    }, {
      path: '/page/government', 
      name: 'government', 
      component: government
    }, {
      path: '/page/visitor', 
      name: 'visitor', 
      component: visitor
    }, {
      path: '/login1', 
      name: 'login1', 
      component: login1
    }, {
      path: '/login2', 
      name: 'login2', 
      component: login2
    }, {
      path: '/register1', 
      name: 'register1', 
      component: register1
    }, {
      path: '/register2', 
      name: 'register2', 
      component: register2
    }
  ]
})
