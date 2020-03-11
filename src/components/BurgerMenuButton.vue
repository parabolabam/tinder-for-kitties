<template>
  <div class="globalHamburgerContainer">
    <input @click="toggleMenu" type="checkbox" class="hamburgerCheckbox">
    <div class="hamburger">
      <div class="primaryStick"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'burger-menu-button',
  data() {
    return {
      isMenuClosed: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuClosed = !this.isMenuClosed;
      this.$emit('menutoggle', { closed: this.isMenuClosed });
    },
  },
};
</script>

<style lang="scss" scoped>
.blackStick {
  padding: 0.1rem;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: black;
  margin: 0.15rem;
}

.globalHamburgerContainer {
  position: relative;

  .hamburgerCheckbox {
    position: absolute;
    z-index: 10;
    opacity: 0;
    margin: 0 auto;
    width: 100%;
    height: 100%;

    &:checked + .hamburger {
      & > .primaryStick {
        display: none;
      }

      &:before {
        transform: rotate(-45deg) translateY(0.35rem) translateX(-0.4rem);
        border-radius: 3rem;
      }

      &:after {
        transform: rotate(45deg) translate(-0.05rem);
        border-radius: 3rem;
      }
    }
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 2rem;

    &:after, &:before {
      @extend .blackStick;
      content: '';
      transition: all 0.1s ease-in-out;
    }

    .primaryStick {
      @extend .blackStick;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
