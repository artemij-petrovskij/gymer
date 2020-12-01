import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Main from '../views/dashboard/Main.vue'
import Training from '../views/dashboard/Training.vue'
import Weight from '../views/dashboard/Weight.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'auth-template'},
    
  },
  {
    path: '/login',
    name: 'Log In',
    component: Login,
    meta: { layout: 'auth-template'}

  }, {
    path: '/signup',
    name: 'Sign Up',
    component: Signup,
    meta: { layout: 'auth-template'}

  },
  {
    path: '/dashboard',
    name: 'userboard',
    component: Main,
    meta: {
      header:'Главная',
      requiresAuth: true,
      layout: 'dashboard-template'
     
    }
  },
  {
    path: '/dashboard/training',
    name: 'training',
    component: Training,
    meta: {
      header:'Тренировка',
      layout: 'dashboard-template',
      requiresAuth: true
    }

  },
  {
    path: '/dashboard/weight',
    name: 'weight',
    component: Weight,
    meta: {
      header:'Контроль веса',
      layout: 'dashboard-template',
      requiresAuth: true,
    }

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {

      next()

    }
  } else {
    next()
  }
})


export default router
