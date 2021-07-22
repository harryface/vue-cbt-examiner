import Vue from 'vue'
import Buefy from 'buefy'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

// create a global link 
axios.defaults.baseURL = 'http://localhost:8000/api/examiner/';
axios.defaults.withCredentials = true;

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
