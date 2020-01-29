<template>
  <!-- eslint-disable max-len -->
  <div class="ft-product-catalog ft-block-padding">
    <div class="ft-product-catalog__wrap ft-wrap">
      <div class="ft-product-catalog__top">
        <h2 class="ft-h2 ft-txt-upper ft-product-catalog__top-title">
          <title-quote></title-quote>
          Каталог продукции
        </h2>
      </div>
      <div class="ft-product-catalog__main">
        <a href="#" class="ft-product-catalog__main-left">
          <img src="../assets/images/catalog/catalog-1.png" alt="">
          <div class="ft-product-catalog-label">
            <h4 class="ft-h4">Статичные светодиодные приборы</h4>
          </div>
        </a>
        <a href="#" class="ft-product-catalog__main-center">
          <img src="../assets/images/catalog/catalog-2.png" alt="">
           <div class="ft-product-catalog-label">
            <h4 class="ft-h4">Контроллеры</h4>
          </div>
        </a>
        <a href="#" class="ft-product-catalog__main-right">
          <img src="../assets/images/catalog/catalog-3.png" alt="">
           <div class="ft-product-catalog-label">
            <h4 class="ft-h4">Аксессуары</h4>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TitleQuote from '@/components/TitleQuote.vue';

export default {
  name: 'product-catalog',
  components: {
    'title-quote': TitleQuote,
  },
};
</script>

<style lang="scss">
.ft-product-catalog {
  &__wrap {}
  &__top {
    padding-bottom: 70px;

    &-title {

    }
  }
  &__main {
    padding-bottom: 25px;
    display: flex;
    justify-content: space-between;

    &-left,
    &-center,
    &-right {
      position: relative;
      flex: 0 0 31%;
      transition: all 0.3s;
      border: 3px solid var(--blue);

      &:hover {
        box-shadow: 0 0 25px 10px rgba(31, 31, 31, 0.2)
      }
    }

    &-left {}
    &-center {}
    &-right {}
  }
}
</style>
