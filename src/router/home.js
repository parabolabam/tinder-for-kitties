import UserHome from '@/views/UserHome.vue';
import PostCreator from '@/views/PostCreator.vue';

export default [
  {
    path: '/home',
    name: 'Home',
    component: UserHome,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/create_post',
        name: 'PostCreator',
        component: PostCreator,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
];
