import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
import CategoryMy from './components/Category.vue'
Vue.component('CategoryMy',CategoryMy)

export default new Vue({
  name:'MyMain',
  render: h => h(App),
}).$mount('#app')
