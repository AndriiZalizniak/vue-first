<template>
  <div class="ft-header">
    <div class="ft-header__wrap">
      <main-logo></main-logo>
      <navigation-block class="ft-nav--desk"></navigation-block>

      <button type="button" class="ft-burger-btn"
        @click="openMobNav"
      >
        <span class="ft-burger-btn__line ft-burger-btn__line--t"></span>
        <span class="ft-burger-btn__line ft-burger-btn__line--m"></span>
        <span class="ft-burger-btn__line ft-burger-btn__line--b"></span>
      </button>
    </div>

    <mobile-nav
      v-bind:class="{'ft-mab-nav-hidden': !showMobNav}"
    ></mobile-nav>
  </div>
</template>

<script>
import MainLogo from '@/components/MainLogo.vue';
// import BurgerBtn from '@/components/ui/BurgerBtn.vue';
import Navigation from '@/components/Navigation.vue';
import MobileNav from '@/components/MobileNav.vue';

export default {
  name: 'header-block',
  components: {
    'main-logo': MainLogo,
    // 'burger-btn': BurgerBtn,
    'navigation-block': Navigation,
    'mobile-nav': MobileNav,
  },
  data() {
    return {
      showMobNav: false,
    };
  },
  methods: {
    openMobNav() {
      this.showMobNav = !this.showMobNav;
      console.log('2');
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/general/mixins.scss';
@import '@/assets/scss/_scss-variables.scss';
@import '@/assets/scss/ui/_btns.scss';

.ft-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

  &__wrap {
    // padding: 30px 40px;
    position: relative;
    display: flex;
    align-items: center;
    background-color: var(--header-blue);
    height: var(--headerHeight);
  }

  .ft-burger-btn {
    margin-left: auto;
    margin-right: var(--gap);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--white);
    border-radius: 5px;
    outline: none;
    transition: all 0.3s;

    @include media(">medium") {
      display: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.219);
      perspective: 1000px;
    }

    &__line {
      position: absolute;
      display: inline-block;
      width: 70%;
      height: var(--burger-line);
      background-image: linear-gradient(to right, #fff, #fff);
      background-size: 100% 3px;
      background-position: left center;
      pointer-events: none;

      &--t {
        top: calc(33.3% - (var(--burger-line) * 2));
      }

      &--m {
        top: calc(50% - (var(--burger-line) / 2));
      }

      &--b {
        bottom: calc(33.3% - (var(--burger-line) * 2));
      }
    }
  }

  .is-active .ft-burger-btn__line--m {
      animation: line-m .1s forwards;
    }

    @include media("<=small") {
    .ft-burger-btn {
      width: 50px;
      height: 40px;
    }

    .is-active .ft-burger-btn__line--t {
      transform: translateY(10px) rotate(45deg);
    }

    .is-active .ft-burger-btn__line--b {
      transform: translateY(-10px) rotate(-45deg);
    }
  }

  @include media(">small") {
    .ft-burger-btn {
      width: 60px;
      height: 50px;
    }

    .is-active .ft-burger-btn__line--t {
      transform: translateY(12px) rotate(45deg);
    }

    .is-active .ft-burger-btn__line--b {
      transform: translateY(-12px) rotate(-45deg);
    }

    .btn-swap:hover .ft-burger-btn__line--t {
      animation: line-t 3s 1.5s infinite;
    }

    .btn-swap:hover .ft-burger-btn__line--b {
      animation: line-b 3s 1.5s infinite;
    }
  }

  @keyframes line-t {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(24px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes line-m {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes line-b {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-24px);
    }
    100% {
      transform: translateY(0px);
    }
  }
}

</style>
