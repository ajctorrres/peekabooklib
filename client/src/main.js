import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { BootstrapVue, BIcon, BIconBell, BIconBookmarkHeartFill, BIconSearch, BIconCaretDownFill} from 'bootstrap-vue'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.component('BIcon', BIcon)
Vue.component('BIconBell', BIconBell)
Vue.component('BIconBookmarkHeartFill', BIconBookmarkHeartFill)
Vue.component('BIconSearch', BIconSearch)
Vue.component('BIconCaretDownFill', BIconCaretDownFill)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
