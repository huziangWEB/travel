import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/Home.vue'
import City from './pages/city/City.vue'
import Detail from './pages/detail/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/city',
      name: 'city',
      component: City
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
