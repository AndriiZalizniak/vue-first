<template>
  <nav class="ft-nav">
    <ul class="ft-nav__list">
      <li class="ft-nav__item ft-nav-link">
        <router-link @click="$emit('closeMobNav')" to="/about">О компании</router-link>
      </li>
      <li class="ft-nav__item ft-nav-link">
        <router-link @click="$emit('closeMobNav')" to="/portfolio">Портфолио</router-link>
      </li>
      <li class="ft-nav__item ft-nav-link">
        <router-link @click="$emit('closeMobNav')" to="/catalog">Каталог</router-link>
      </li>
      <li class="ft-nav__item ft-nav-link">
        <router-link @click="$emit('closeMobNav')" to="/service">Сервис</router-link>
      </li>
      <li class="ft-nav__item ft-nav-link">
        <router-link @click="$emit('closeMobNav')" to="/contacts">Контакты</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'navigation-block',

  props: {
    isShowMenu: Boolean,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/general/mixins.scss';
@import '@/assets/scss/_scss-variables.scss';

.ft-nav {
  margin: 0 auto;
  display: inline-block;

  &__list {
    @include media(">medium") {
      display: flex;
    }
  }

  &__item {
    @include media(">medium") {
      padding: 0 26px;
    }
    @include media("<=medium") {
      padding: 10px 0;
    }
  }
}

.ft-nav--desk {
  @include media("<=medium") {
    display: none;
  }
}

.ft-nav--mob {
  @include media(">medium") {
    display: none;
  }
  ul {

  }

  li {
    @include media("<=medium") {
      color: var(--text);
    }
  }

}
</style>
