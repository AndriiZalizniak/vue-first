<template>
  <!-- eslint-disable max-len -->
  <span>
    <button class="ft-btn ft-btn--back ft-txt-upper" type="button" @click="goBack">На главную</button>
  </span>
</template>

<script>
export default {
  name: 'goback-btn',
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">

</style>
