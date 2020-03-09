<template>
 <base-layout>
  <application-header slot="header" />
  <div slot="baseContent">
    UserHome view
  </div>
 </base-layout>
</template>

<script>
import BaseLayout from '@/views/BaseLayout.vue';
import ApplicationHeader from '@/components/ApplicationHeader.vue';

export default {
  name: 'user-home',
  components: { BaseLayout, ApplicationHeader },
};
</script>
