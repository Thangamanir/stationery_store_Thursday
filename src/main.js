import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import myRoutes from './routes.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

const myRouter =new VueRouter({
  routes:myRoutes,
  mode:'history'
})
new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')




