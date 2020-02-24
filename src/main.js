import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 本文件是项目打包的入口文件。
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
