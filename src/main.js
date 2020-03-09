import Vue from 'vue';
// import { auth } from 'firebase-config';
import App from './App.vue';
import router from './router';
import store from './store';

import { auth } from '../firebaseConfig';

Vue.config.productionTip = false;

let app;
// eslint-disable-next-line no-unused-vars
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
