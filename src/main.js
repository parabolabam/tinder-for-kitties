import Vue from 'vue';
import { validationDirective } from '@/directives/validation.directive';
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

Vue.directive(validationDirective.name, validationDirective.directive);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
