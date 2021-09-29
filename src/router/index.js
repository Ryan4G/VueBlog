import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index/Home'
import Projects from '@/pages/proj/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/proj',
      name: 'Projects',
      component: Projects
    }
  ]
})
