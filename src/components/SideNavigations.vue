<template>
  <div :class="['sideNavigationContainer', {hidden: !this.openMenu, visible: this.openMenu}]">
    <div class="sideMenu">
      <basic-link
          v-for="({ to }, index) in menuRefs"
          :key="index"
          @basicLinkClicked="onBasicLinkClicked"
          :to="to"
        >
          Create new post item
        </basic-link>
    </div>
    <burger-menu-button class="burgerButton" @menutoggle="onMenuToggle" />
  </div>
</template>

<script>
import BurgerMenuButton from '@/components/BurgerMenuButton.vue';
import BasicLink from '@/components/BasicLink.vue';

export default {
  name: 'side-navigations',
  components: {
    BurgerMenuButton,
    BasicLink,
  },
  data() {
    return {
      openMenu: false,
      menuRefs: [{ to: { name: 'PostCreator' } }],
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
    transform: translateX(-11rem);
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
