<template>
  <div class="ft-title-quote">

  </div>
</template>

<script>
export default {
  name: 'title-quote',
};
</script>

<style lang="scss">
@import '@/assets/scss/general/mixins.scss';
@import '@/assets/scss/_scss-variables.scss';

  .ft-title-quote {
    display: inline-block;
    position: relative;
    height: 15px;

    @include media(">tiny") {
      margin-right: 40px;
      width: 100px;
    }

    @include media("<=tiny") {
      margin-right: 20px;
      width: 50px
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 0;
      height: 3px;
      background-color: var(--blue);
    }

    &::before {
      top: 0;
      width: 100%;
    }

    &::after {
      bottom: 0;
      width: 50%;
    }
  }
</style>
