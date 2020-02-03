<template>
  <!-- eslint-disable max-len -->
  <div class="ft-projects ft-block-padding">
    <div class="ft-projects__wrap ft-wrap">
      <div class="ft-projects__top">
        <h2 class="ft-h2 ft-txt-upper ft-projects__top-title">
          <title-quote></title-quote>
          Наши проекты
        </h2>
        <arrows-pagination></arrows-pagination>
      </div>
      <div class="ft-projects__main">
        <a href="#" class="ft-projects__main-left">
          <img src="../assets/images/projects/projects-1.jpg" alt="">
          <div class="ft-projects-label">
            <h4 class="ft-h4">ССК “ОЛИМП”</h4>
            <p class="ft-small">Световое оформление форума “Шубы-2019”</p>
          </div>
        </a>
        <a href="#" class="ft-projects__main-right">
          <img src="../assets/images/projects/projects-2.jpg" alt="">
           <div class="ft-projects-label">
            <h4 class="ft-h4">ССК “ОЛИМП”</h4>
            <p class="ft-small">Световое оформление форума “Шубы-2019”</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TitleQuote from '@/components/TitleQuote.vue';
import ArrowsPagination from '@/components/ArrowsPagination.vue';

export default {
  name: 'projects-block',
  components: {
    'title-quote': TitleQuote,
    'arrows-pagination': ArrowsPagination,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/general/mixins.scss';
@import '@/assets/scss/_scss-variables.scss';

.ft-projects {

  &__wrap {
  }

  &__top {
    padding-bottom: 70px;

    @include media(">medium") {
      margin-bottom: 75px;
    }

    @include media(">tiny","<=medium") {
      margin-bottom: 50px;
    }

    @include media("<=tiny") {
      margin-bottom: 30px;
    }

    @include media(">tiny") {
      display: flex;
      justify-content: space-between;
      align-self: auto;
    }

    &-title {
      display: flex;
      align-items: center;
    }
  }

  &__main {
    @include media(">small") {
      display: flex;
      justify-content: space-between;
    }

    @include media("<=small") {

    }

    &-left,
    &-right {
      position: relative;
      flex: 0 0 48%;
      overflow: hidden;
      // transform: translate3d(0,0,0);

      @include media("<=small") {
        display: block;
      }

      img {
        @include media("<=small") {
          width: 100%;
        }
      }

      &:hover {
        img {
          transform: scale(1.1);
          filter: brightness(125%);
        }
      }
    }

    img {
      transition: all 1s;
      // transform: translate3d(0,0,0);
    }
  }
}
</style>
