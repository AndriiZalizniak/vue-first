<template>
  <div class="ft-mobile-nav "
      v-bind:class="{ 'ft-mab-nav-hidden': showMobMenu }"
  >
    <div class="ft-mobile-nav__wrap">
      <navigation-block class="ft-nav--mob"></navigation-block>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  name: 'mobile-nav',
  components: {
    'navigation-block': Navigation,
  },
  data() {
    return {
      showMobMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobMenu = !this.showMobMenu;
      console.log('1');
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/_scss-variables.scss';
@import '@/assets/scss/general/mixins.scss';

.ft-mobile-nav {
  position: absolute;
  top: var(--headerHeight);
  right: 0;
  left: 0;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  // z-index: -5;
  transition: 1s ease-in-out;

  &__wrap {
    padding: 15px 25px 25px;
    height: 100vh;
    background-color: var(--white);

    @include media(">tiny") {
    margin-left: 50vw;
    }
  }
}

.ft-mab-nav-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(calc(-100vh - var(--headerHeight)));
}

</style>
