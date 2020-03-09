<template>
  <div class="baseLayout">
    <application-header />
    <article class="mainContent">
      <slot name="mainContent" />
    </article>
    <application-footer />
  </div>
</template>

<script>
import ApplicationHeader from '@/components/ApplicationHeader.vue';
import ApplicationFooter from '@/components/ApplicationFooter.vue';

export default {
  name: 'base-layout',
  components: {
    ApplicationHeader,
    ApplicationFooter,
  },

};
</script>
