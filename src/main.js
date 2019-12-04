import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router' 
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './icons'
// import './components/AliIcon/icon.css'
// import 'vue-awesome/icons/flag'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'
// import AliIcon from './components/AliIcon/AliIcon'
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.component('v-icon',Icon)
// Vue.component('ali-icon',AliIcon)
// Vue.component('v-icon', Icon)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
