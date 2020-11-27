import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import { BootstrapVue, BIcon, BIconBell, BIconBookmarkHeartFill, BIconSearch, BIconCaretDownFill} from 'bootstrap-vue'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
<<<<<<< HEAD
Vue.component('BIcon', BIcon)
Vue.component('BIconBell', BIconBell)
Vue.component('BIconBookmarkHeartFill', BIconBookmarkHeartFill)
Vue.component('BIconSearch', BIconSearch)
Vue.component('BIconCaretDownFill', BIconCaretDownFill)
=======
Vue.use(IconsPlugin)
Vue.use(vuetify)

// src/plugins/vuetify.js

import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(vuetify, {
  iconfont: 'fa'
})
>>>>>>> 6195854e76ee7106621d690f1ae1f1b6b786785b

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
