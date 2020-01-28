<template>
  <!-- eslint-disable max-len -->
  <div class="ft-arrows-pagination">
    <a href="#" class="ft-arrows-pagination__arrow-triangle ft-arrows-pagination__arrow-triangle--left"></a>
    <a href="#" class="ft-arrows-pagination__arrow-triangle ft-arrows-pagination__arrow-triangle--right ft-arrow-reverse"></a>
  </div>
</template>

<script>
export default {
  name: 'arrows-pagination',
};
</script>

<style lang="scss">
  .ft-arrows-pagination {
    display: inline-block;

    &__arrow-triangle {
      position: relative;
      display: inline-block;
      width: 55px;
      height: 55px;
      border: 2px solid var(--blue);

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: calc(50% - 10px);
        left: calc(50% - 6px);
        width: 12px;
        height: 20px;
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='%23005BC1' stroke-width='2' d='M1.102 10.198l8.905-8.905M10.612 18.293L1.707 9.388'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
      }

      &--left {
        border-right: 1px solid var(--blue);
      }

      &--right {
        border-left: 1px solid var(--blue);
      }

      &:hover {
        filter: brightness(125%);
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }

  .ft-arrow-reverse {
    &::before,
    &::after {
      transform: rotate(180deg);
    }
  }
</style>
