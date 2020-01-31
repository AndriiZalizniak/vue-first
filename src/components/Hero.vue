<template>
  <!-- eslint-disable max-len -->
  <div class="ft-hero">
    <alert-block
      v-if="showAlert"
    ></alert-block>
    <div class="ft-hero__wrap ft-wrap">
      <div class="ft-hero__text">
        <h1 class="ft-h1 ft-white ft-hero__text-title">Светотехническое оборудование в Петербурге</h1>
        <p class="ft-lead ft-white ft-hero__text-subtitle">Продажа, аренда светотехнического оборудования. Оформление официальных мероприятий под ключ.</p>
      </div>
      <div class="ft-hero__btn-block">
        <router-link to="/login" class="ft-btn ft-btn--cut ft-txt-upper">
          <span>
            Войти
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue';

export default {
  name: 'hero-block',
  components: {
    'alert-block': Alert,
  },
  data() {
    return {
      showAlert: false,
    };
  },
};
</script>

<style lang="scss">
.ft-hero {
  margin-bottom: 75px;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('../assets/images/hero/hero-bg.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  z-index: 0;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: var(--headerHeight);
    bottom: 0;
    left: 15%;
    width: 25%;
    background-color: var(--header-blue);
    z-index: -1;
    transform-origin: center;
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

.is-active {
  &::after {
    animation: swapBg 1s forwards;
  }
}

@keyframes swapBg {
  50% {
    transform: scaleX(0.5)
  }
  100% {
    transform: scaleX(0.2) translateY(100%);
  }
}

</style>
