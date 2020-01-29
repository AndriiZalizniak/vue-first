<template>
  <!-- eslint-disable max-len -->
  <div class="ft-rent-equip">
    <div class="ft-rent-equip__wrap ft-wrap">
      <div class="ft-rent-equip__top">
        <h2 class="ft-h2 ft-txt-upper ft-rent-equip__top-title">
          <title-quote></title-quote>
          Аренда оборудования
        </h2>
      </div>
      <div class="ft-rent-equip__main">
        <div class="ft-rent-equip__main-descr">
          <p class="ft-reg">Мы занимаемся прокатом светового и сценического оборудования ведущих мировых производителей, таких как Robe, SGM, StudioDue, ChainMaster, Milos, Universal Effects, ArtLighting, MobilTech, Lampo, Martin, Spotlight, Compulite, Eurolite и др.</p>
        </div>
        <div class="ft-rent-equip__main-equip-block">
          <h4 class="ft-h4 ft-txt-upper">Новое оборудование, предоставляемое в аренду:</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleQuote from '@/components/TitleQuote.vue';

export default {
  name: 'rent-equip',
  components: {
    'title-quote': TitleQuote,
  },
};
</script>

<style lang="scss">
.ft-rent-equip {

  &__wrap {}
  &__top {}
  &__main {
    &-descr {
      max-width: 350px;
    }

    &-equip-block {
      padding: 30px;
      border: 3px solid var(--blue);
    }
  }
}
</style>
