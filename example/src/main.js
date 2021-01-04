// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import rollupVueComponentTest from '../../'
import '../../dist/rollup-vue-component-test.css'

Vue.config.productionTip = false

Vue.use(rollupVueComponentTest)

new Vue({
  el: '#app',
  render: h => h(App)
})


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
