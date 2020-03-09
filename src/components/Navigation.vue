<template>
  <div>
    <button @click="logout">logout</button>
  </div>
</template>

<script>
import { auth } from '../../firebaseConfig';

export default {
  name: 'navigation',
  components: {},
  methods: {
    async logout() {
      debugger;
      await auth.signOut();
      this.$router.replace({ name: 'Login' });
    },
  },
};
</script>
