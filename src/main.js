import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import {routes} from './routes'
Vue.config.productionTip = false;

Vue.use(VueRouter)
Vue.use(vueResource)

Vue.filter('currency', value => {
  return '$' + value.toLocaleString()
})
const router = new VueRouter({
  mode:'history',
  routes
})
new Vue({ 
  router,
  store,
  render: h => h(App)
}).$mount("#app");
