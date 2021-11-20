import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routers/index'

import "./global.css"
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
