import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

// 本文件是项目打包的入口文件。
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
