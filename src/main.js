import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
// import Cube from 'cube-ui'
import 'common/style/base.less'
import 'amfe-flexible'
import http from './services/http.js'

// Vue.use(Cube)
Vue.use(http)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
