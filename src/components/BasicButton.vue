<template>
  <div class="buttonContainer" @click="onClick">
    <button class="button">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'basic-button',
  props: {
    buttonLabel: {
      type: String,
      default: () => 'Click',
    },
  },
  methods: {
    onClick() {
      this.$emit('basicButtonClicked');
    },
  },
};
</script>

<style lang="scss" scoped>
.buttonContainer {

  &:hover {
    cursor: poiner;
  }

  .button {

  }
}
</style>
