<template>
  <div class="ft-main-logo">
    <a href="#" class="ft-main-logo__wrap">
      <span class="ft-main-logo__pic"></span>
      <span class="ft-main-logo__text">
        <span>TRANS</span>
        <span>LIGHT</span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'main-logo',
};
</script>

<style lang="scss">
  .ft-main-logo {
    display: inline-flex;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;

    &__wrap {
      padding: 5px;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      color: var(--white);
    }

    &__pic {
      margin-right: 8px;
      display: inline-block;
      width: 58px;
      height: 50px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-image: url("data:image/svg+xml,%3Csvg width='58' height='50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M27.407 24.998l.365-.633 7.585-13.132L28.872 0 14.434 24.998 28.872 50l6.485-11.233-7.585-13.132-.365-.637z' fill='%23fff'/%3E%3Cpath d='M19.822 36.865l-5.388 9.33L2.197 24.999 14.434 3.804l5.388 9.328 1.1-1.899L14.434 0 0 24.998 14.434 50l6.489-11.233-1.1-1.902zM42.978 21.946l.01.007V17.92l-9.102 15.763 1.156 2.005 7.936-13.742zM42.978 16.432l.01.007v-4.033L32.295 30.93l1.157 2.001 9.526-16.499zM30.267 27.417l12.711-22.01.01.008V.55L28.872 24.998l1.395 2.42zM42.978 10.918l.01.007v-4.03L30.701 28.174l1.157 2.001 11.12-19.256zM43.621.55v48.9l14.12-24.452L43.62.55zM42.978 27.457l.01.006v-4.032l-7.512 13.01 1.157 2 6.345-10.984zM42.978 32.97l.01.008v-4.033L37.07 39.197l1.156 2.002 4.752-8.228zM42.988 44.2l-1.514 2.625 1.514 2.625V44.2zM41.04 46.07l1.938-3.357.01.007v-2.75l-2.737 4.741.789 1.359zM42.978 38.481l.01.007v-4.03l-4.328 7.496 1.157 2.002 3.161-5.475z' fill='%23fff'/%3E%3C/svg%3E");
    }

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      letter-spacing: 0.03em;
    }
  }
</style>
