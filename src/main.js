import Vue from 'vue';
import App from './App.vue';

import babelPolyfill from 'babel-polyfill';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import {store} from './vuex/store';
import {auth} from './firebase';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/router'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//stara verzija koda
/*new Vue({
  el: '#app',
  router,
  render: h => h(App)
})*/

//nova verzija koja
Vue.config.productionTip = false;

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  if (user) {
    store.state.authorized = true;
    store.dispatch('fetchUserProfile', user)
  }
})
