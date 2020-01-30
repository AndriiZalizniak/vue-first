<template>
  <div class="ft-alert-sec"
    v-if="!alertHide"
  >
    <div class="ft-alert">
      <!-- <div class="ft-alert__wrap"> -->
        <p class="ft-reg ft-alert__text">No access :(</p>
        <button type="button" class="ft-alert__btn"
          @click="alertHide = !alertHide"
        >OK</button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'arrows-pagination',

  data() {
    return {
      alertHide: false,
    };
  },
  // methods: {
  //   Hide() {
  //     this.alertHide = !this.alertHide;
  //   },
  // },
};
</script>

<style lang="scss">
.ft-alert-sec {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.533);

  transform: scale(0);
  visibility: hidden;
  pointer-events: none;
  transition: all 0.3s;

  .ft-alert {
    margin: auto;
    display: block;
    padding: 25px;
    width: 200px;
    min-height: 100px;
    background-color: var(--white);
    border-radius: 25px;
    z-index: 3;
    text-align: center;

    &__text {
      padding-bottom: 15px;
    }

    &__btn {
      padding: 5px 15px;
      border: 2px solid var(--grey);
      border-radius: 10px;
    }
  }
}

// .alert-hide {
//   transform: scale(0);
//   visibility: hidden;
//   pointer-events: none;
//   transition: all 0.3s;
// }

.alert-show {
  transform: scale(1);
  visibility: visible;
  pointer-events: initial;
  transition: all 0.3s;
}
</style>
