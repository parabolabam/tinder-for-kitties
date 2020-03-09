<template>
  <div class="navigaions">
    <button @click="logout">LOG OUT</button>
  </div>
</template>

<script>
import { LOGOUT } from '@/store/actions.types';

export default {
  name: 'navigations',
  methods: {
    async logout() {
      await this.$store.dispatch(LOGOUT);

      this.$router.replace({ name: 'Login' });
    },
  },
};
</script>

<style>

</style>
