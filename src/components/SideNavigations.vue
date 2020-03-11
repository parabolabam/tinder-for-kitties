<template>
  <div :class="['sideNavigationContainer', {hidden: !this.openMenu, visible: this.openMenu}]">
    <div class="sideMenu">
      <ul>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>
        <li class="kek">menu item 1</li>

      </ul>
    </div>
    <burger-menu-button class="burgerButton" @menutoggle="onMenuToggle" />
  </div>
</template>

<script>
import BurgerMenuButton from '@/components/BurgerMenuButton.vue';

export default {
  name: 'side-navigations',
  components: {
    BurgerMenuButton,
  },
  data() {
    return {
      openMenu: false,
    };
  },
  methods: {
    onMenuToggle({ closed }) {
      this.openMenu = !closed;
    },
  },
};
</script>

<style lang="scss" scoped>
.sideNavigationContainer {
  display: flex;
  transition: all 0.2s ease-in-out;

  &.hidden {
    transform: translateX(-9.5rem);
  }

  &.visible {
    transform: translateX(0);
  }

  .burgerButton {
    margin-left: 0.6rem;
  }

  .sideMenu {
    margin-top: 1.5rem;
    font-size: 1.2rem;
  }
}
</style>
