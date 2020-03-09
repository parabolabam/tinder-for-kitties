import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Login from '@/views/Login.vue';
import UserHome from '@/views/UserHome.vue';
// import Dashboard from '@/components/Dashboard';
// import Settings from '@/components/Settings';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/home',
      name: 'Home',
      component: UserHome,
      meta: {
        requiresAuth: true,
      },
    },

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
