import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//GAMBIARRA 
require('axios').defaults.headers.common['Authorization'] = ' bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkrDo28gdGVzdGUiLCJlbWFpbCI6ImV1bWVzbW8yQGVtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2OTI3NTI4NzksImV4cCI6MTY5MzAxMjA3OX0.N3EQPvZdrab9bDpK4TCVg1Fqj8235aFtGGII499qZm8'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')