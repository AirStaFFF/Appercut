import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'

import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
