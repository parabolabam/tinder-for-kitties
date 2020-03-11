<template>
  <div class="header">
    <div class="logo">LOGO GOD DaMN</div>
    <navigations />
  </div>
</template>

<script>
import Navigations from '@/components/Navigations.vue';

export default {
  name: 'application-header',
  components: {
    Navigations,
  },
};
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
}
</style>
