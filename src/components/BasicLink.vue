<template>
  <div class="linkContainer" @click="onClick">
    <a class="link" rel="norefferer noopener">
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: 'basic-link',
  props: {
    to: {
      type: Object,
      default: () => ({ name: 'Home' }),
    },

  },

  methods: {
    onClick() {
      this.$emit('basicLinkClicked');

      this.$router.push(this.to);
    },
  },
};
</script>

<style lang="scss" scoped>
.linkContainer {
  text-decoration: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .link {

  }
}
</style>
