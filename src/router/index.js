import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import home from '@/router/home';

import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',

  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
    },
    ...home,
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const { currentUser } = firebase.auth();

  if (requiresAuth && !currentUser) {
    next({ name: 'Login' });
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});

export default router;
