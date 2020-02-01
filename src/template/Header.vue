<template>
  <div class="ft-header">
    <div class="ft-header__wrap">
      <main-logo></main-logo>
      <navigation-block class="ft-nav--desk"></navigation-block>
      <burger-btn></burger-btn>
    </div>

    <mobile-nav></mobile-nav>
  </div>
</template>

<script>
import MainLogo from '@/components/MainLogo.vue';
import BurgerBtn from '@/components/ui/BurgerBtn.vue';
import Navigation from '@/components/Navigation.vue';
import MobileNav from '@/components/MobileNav.vue';

export default {
  name: 'header-block',
  components: {
    'main-logo': MainLogo,
    'burger-btn': BurgerBtn,
    'navigation-block': Navigation,
    'mobile-nav': MobileNav,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/general/mixins.scss';
@import '@/assets/scss/_scss-variables.scss';

.ft-header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  &__wrap {
    // padding: 30px 40px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--header-blue);
    height: var(--headerHeight);
  }
}
</style>
