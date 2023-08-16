import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//GAMBIARRA 
require('axios').defaults.headers.common['Authorization'] = ' bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkrDo28gdGVzdGUiLCJlbWFpbCI6Imphb3Rlc3RlQGVtYWlsLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjkyMTUyOTE3LCJleHAiOjE2OTI0MTIxMTd9.vJA1XRO5-Du6YxxmvgClnnkREcwto-Qgd_ACZ8z2AEE'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')