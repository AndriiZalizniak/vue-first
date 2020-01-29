<template>
  <!-- eslint-disable max-len -->
  <div class="ft-hero">
    <div class="ft-hero__wrap ft-wrap">
      <div class="ft-hero__text">
        <h1 class="ft-h1 ft-white ft-hero__text-title">Светотехническое оборудование в Петербурге</h1>
        <p class="ft-lead ft-white ft-hero__text-subtitle">Продажа, аренда светотехнического оборудования. Оформление официальных мероприятий под ключ.</p>
      </div>
      <div class="ft-hero__btn-block">
        <button type="button" class="ft-btn ft-btn--cut ft-txt-upper"

        >
          <span>
            Перейти
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'hero-block',

};
</script>

<style lang="scss">
.ft-hero {
  margin-bottom: 75px;
  position: relative;
  display: flex;
  align-items: center;
  padding-top: var(--headerHeight);
  background-image: url('../assets/images/hero/hero-bg.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: var(--headerHeight);
    bottom: 0;
    left: 15%;
    width: 25%;
    background-color: var(--header-blue);
    z-index: -1;
  }

  &__wrap {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  &__text {
    max-width: 635px;

    &-title {
      padding-bottom: 40px;
    }

    &-subtitle {
      padding-bottom: 40px;
    }
  }

  &__btn-block {}
}

</style>
