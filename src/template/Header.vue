<template>
  <div class="ft-header">
    <div class="ft-header__wrap">
      <main-logo></main-logo>
      <nav class="ft-nav">
        <ul class="ft-nav__list">
          <li class="ft-nav__item ft-nav-link">
            <router-link to="/about">О компании</router-link>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <router-link to="/portfolio">Портфолио</router-link>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <router-link to="/catalog">Каталог</router-link>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <router-link to="/service">Сервис</router-link>
          </li>
          <li class="ft-nav__item ft-nav-link">
            <router-link to="/contacts">Контакты</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MainLogo from '@/components/MainLogo.vue';

export default {
  name: 'header-block',
  components: {
    'main-logo': MainLogo,
  },
};
</script>

<style lang="scss">
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

    .ft-nav {
      margin: 0 auto;
      display: inline-block;

      &__list {
        display: flex;
      }

      &__item {
        padding: 0 26px;
      }
    }
  }
</style>
