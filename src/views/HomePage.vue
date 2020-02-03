<template>
  <!-- eslint-disable max-len -->
  <section class="ft-home-sec">
    <div class="ft-home">
      <hero-block></hero-block>
      <projects-block></projects-block>
      <!-- <product-catalog></product-catalog> -->
      <!-- <rent-equip></rent-equip> -->
    </div>
  </section>
</template>

<script>
import Hero from '@/components/Hero.vue';
import Projects from '@/components/Projects.vue';
// import ProductCatalog from '@/components/ProductCatalog.vue';
// import Rent from '@/components/Rent.vue';

export default {
  name: 'home-page',
  components: {
    'hero-block': Hero,
    'projects-block': Projects,
    // 'product-catalog': ProductCatalog,
    // 'rent-equip': Rent,
  },
};
</script>

<style lang="scss">
.ft-home-sec {}

.ft-home {}
</style>
