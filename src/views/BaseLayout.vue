<template>
  <div class="baseLayout">
    <application-header />
    <article class="mainContentContainer">
      <side-navigation class="sideNavigation" />
      <slot />
    </article>
    <application-footer />
  </div>
</template>

<script>

import ApplicationHeader from '@/components/ApplicationHeader.vue';
import ApplicationFooter from '@/components/ApplicationFooter.vue';
import SideNavigation from '@/components/SideNavigations.vue';

export default {
  name: 'base-layout',
  components: {
    ApplicationHeader,
    ApplicationFooter,
    SideNavigation,
  },

};
</script>

<style lang="scss" scoped>
.baseLayout {

  .mainContentContainer {
    display: flex;
    justify-content: space-evenly;

    .sideNavigation {
      flex: 0 auto;
    }

    .mainContent {
      flex: 1 auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

  }
}
</style>
