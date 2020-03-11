<template>
  <base-layout>
    <div class="userHomeContainer">
      UserHome view
    </div>
  </base-layout>
</template>

<script>
import BaseLayout from '@/views/BaseLayout.vue';

export default {
  name: 'user-home',
  components: { BaseLayout },
};
</script>

<style lang="scss" scoped>
.userHomeContainer {
  flex: 1;
  display: flex;
  justify-content: center;
}
</style>
