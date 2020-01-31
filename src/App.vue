<template>
<!-- eslint-disable max-len -->
  <div id="app">
    <header-block></header-block>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/template/Header.vue';

export default {
  name: 'app',
  components: {
    'header-block': Header,
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
