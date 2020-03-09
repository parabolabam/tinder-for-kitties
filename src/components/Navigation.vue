<template>
  <div>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import { LOGOUT } from '@/store/actions.types';

export default {
  name: 'navigation',
  components: {},
  methods: {
    async logout() {
      await this.$store.dispatch(LOGOUT);

      this.$router.replace({ name: 'Login' });
    },
  },
};
</script>
