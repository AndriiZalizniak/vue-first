<template>
  <div class="ft-mobile-nav">
    <div class="ft-mobile-nav__wrap">
      <navigation-block class="ft-nav--mob"
      ></navigation-block>

      <!-- <nav class="ft-nav ft-nav--mob">
        <ul class="ft-nav__list">
          <li class="ft-nav__item ft-nav-link">
            <a href="/about">О компании</a>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <a href="/portfolio">Портфолио</a>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <a href="/catalog">Каталог</a>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <a href="/service">Сервис</a>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <a href="/contacts">Контакты</a>
          </li>
        </ul>
      </nav> -->
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
  // data() {
  //   return {
  //     showMobMenu: false,
  //   };
  // },
  // methods: {
  //   showMenu() {
  //     this.showMobMenu = !this.showMobMenu;
  //     console.log('1');
  //   },
  // },
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
  height: calc(100vh - var(--headerHeight));
  background-color: rgba(0, 0, 0, 0.5);
  // z-index: -5;
  transition: 0.4s ease-in-out;

  &__wrap {
    padding: 15px 25px 25px;
    height: calc(100vh - var(--headerHeight));
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
  transform: translateX(-100vw);
}

</style>
