import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Main from '../views/dashboard/Main.vue'
import Calendar from '../views/dashboard/Calendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'auth-template' }
  },
  {
    path: '/login',
    name: 'Log In',
    component: Login,
    meta: { layout: 'auth-template' }

  }, {
    path: '/signup',
    name: 'Sign Up',
    component: Signup,
    meta: { layout: 'auth-template' }

  },
  {
    path: '/dashboard',
    name: 'userboard',
    component: Main,
    meta: {
      requiresAuth: true,
      layout: 'dashboard-template'
    }
  },
  {
    path: '/dashboard/calendar',
    name: 'calendar',
    component: Calendar,
    meta: {
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
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        }
        else {
          next({ name: 'userboard' })
        }
      }
      else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next()
    }
    else {
      next({ name: 'userboard' })
    }
  } else {
    next()
  }
})


export default router
