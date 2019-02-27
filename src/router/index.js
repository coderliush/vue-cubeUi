import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Detail = (resolve) => {
  import('views/detail').then((module) => {
    resolve(module)
  })
}

const Progress = (resolve) => {
  import('views/progress').then((module) => {
    resolve(module)
  })
}

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/detail',
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/progress',
      component: Progress
    },
  ]
})