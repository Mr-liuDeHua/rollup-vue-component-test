import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import rollupVueComponentTest from '../../'
import '../../dist/rollup-vue-component-test.css'
Vue.config.productionTip = false

Vue.use(rollupVueComponentTest)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
