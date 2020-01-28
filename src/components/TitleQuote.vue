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
  .ft-title-quote {
    margin-right: 40px;
    display: inline-block;
    position: relative;
    width: 100px;
    height: 15px;

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
