<template>
  <div id="app">
    <header-block></header-block>
    <hero-block></hero-block>
    <arrows-pagination></arrows-pagination>
    <title-quote></title-quote>
  </div>
</template>

<script>
import Header from '@/template/Header.vue';
import Hero from '@/components/Hero.vue';
import ArrowsPagination from '@/components/ArrowsPagination.vue';
import TitleQuote from '@/components/TitleQuote.vue';

export default {
  name: 'app',
  components: {
    'arrows-pagination': ArrowsPagination,
    'title-quote': TitleQuote,
    'header-block': Header,
    'hero-block': Hero,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/index-style.scss';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
