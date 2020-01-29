<template>
  <div id="app">
    <header-block></header-block>
    <hero-block></hero-block>
    <projects-block></projects-block>
    <product-catalog></product-catalog>
    <rent-equip></rent-equip>
  </div>
</template>

<script>
import Header from '@/template/Header.vue';
import Hero from '@/components/Hero.vue';
import Projects from '@/components/Projects.vue';
import ProductCatalog from '@/components/ProductCatalog.vue';
import Rent from '@/components/Rent.vue';

export default {
  name: 'app',
  components: {
    'header-block': Header,
    'hero-block': Hero,
    'projects-block': Projects,
    'product-catalog': ProductCatalog,
    'rent-equip': Rent,
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
