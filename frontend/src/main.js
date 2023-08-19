import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//GAMBIARRA 
require('axios').defaults.headers.common['Authorization'] = ' bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkrDo28gdGVzdGUiLCJlbWFpbCI6ImV1bWVzbW8yQGVtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2OTIzMTgyNjEsImV4cCI6MTY5MjU3NzQ2MX0.i9GZusI_ivObggFoOoiGzrjrnS4nx2LmWxRM2ND3hQA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')