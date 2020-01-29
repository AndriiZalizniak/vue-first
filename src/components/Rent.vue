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
          <div class="ft-equip-block">
            <div class="ft-equip-block__title">
              <h4 class="ft-h6 ft-txt-upper">Новое оборудование, предоставляемое в аренду:</h4>
              <arrows-pagination></arrows-pagination>
            </div>
            <div class="ft-equip-block__content">
              <div class="ft-equip-block__content-pic">
                <img src="../assets/images/rent/equip-1.png" alt="">
              </div>
              <div class="ft-equip-block__content-list">
                <h5 class="ft-h5 ft-txt-upper ft-content-list-title">Robe Robin ParFect 100</h5>
                <ul>
                  <li class="ft-small">Источник света 12 светодиодов RGBW по 15 Вт каждый</li>
                  <li class="ft-small">Угол раскрытия 7°</li>
                  <li class="ft-small">В комплекте рассеивающая линза 40°</li>
                  <li class="ft-small">Потребляемая мощность 200 Вт</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleQuote from '@/components/TitleQuote.vue';
import ArrowsPagination from '@/components/ArrowsPagination.vue';

export default {
  name: 'rent-equip',
  components: {
    'title-quote': TitleQuote,
    'arrows-pagination': ArrowsPagination,
  },
};
</script>

<style lang="scss">
.ft-rent-equip {

  &__wrap {}
  &__top {

    &-title {
      padding-bottom: 40px;
    }
  }
  &__main {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &-descr {
      flex: 0 0 350px;
    }

    &-equip-block {
      flex: 0 0 665px;
      padding: 30px;
      border: 3px solid var(--blue);
    }
  }

  .ft-equip-block {
    &__title,
    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__title {
      padding-bottom: 40px;
    }

    &__content {

      &-pic {
        flex: 0 0 255px;

        img {
          // height: 250px;
        }
      }
      &-list {
        padding-left: 20px;

        .ft-content-list-title {
          padding-bottom: 20px;
        }

        ul {
          padding-left: 20px;
          li {
            list-style: disc;
          }
          li:not(:last-child) {
            padding-bottom: 20px;
          }
        }
      }
    }
  }
}
</style>
