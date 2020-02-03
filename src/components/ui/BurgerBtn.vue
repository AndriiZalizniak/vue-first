<template>
  <button type="button" class="ft-burger-btn">
    <span class="ft-burger-btn__line ft-burger-btn__line--t"></span>
    <span class="ft-burger-btn__line ft-burger-btn__line--m"></span>
    <span class="ft-burger-btn__line ft-burger-btn__line--b"></span>
  </button>
</template>

<script>
export default {
  name: 'burger-btn',
};
</script>

<style lang="scss">
@import '@/assets/scss/_scss-variables.scss';
@import '@/assets/scss/general/mixins.scss';

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
</style>
