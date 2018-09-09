import Vue from 'vue'
import Router from 'vue-router'

// import LayoutView from '@/views/layouts/layout'
// import HomeView from '@/views/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/layouts/layout'], resolve),
      children: [
        {
          path: '',
          redirect: 'home'
        },
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/views/pages/home'], resolve)
        }
      ]
    }
  ]
})
