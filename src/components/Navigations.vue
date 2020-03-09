<template>
  <div class="navigaions">
    <button @click="logout">LOG OUT</button>
    <overlay v-if="isLogoutInProgress" />
  </div>
</template>

<script>
import { LOGOUT } from '@/store/actions.types';
import Overlay from '@/globalComponents/Overlay.vue';

export default {
  name: 'navigations',
  components: {
    Overlay,
  },
  computed: {
    isLogoutInProgress() {
      return this.$store.state.auth.logoutInProgress;
    },
  },
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
