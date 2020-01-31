<template>
  <!-- eslint-disable max-len -->
  <section class="ft-login-sec">
    <div class="ft-login ft-wrap">
      <form class="ft-form" v-on:submit.prevent="onSubmit">
        <ul class="ft-form-list">
          <li>
            <p>
              <span class="ft-form-list__txt">Логин/E-mail</span>
              <input
                class="ft-input-txt"
                type="text"
                name="name"
                id="name"
                value=""
                v-model="userName"
              >
            </p>
          </li>
          <li>
            <p>
              <span class="ft-form-list__txt">Пароль</span>
              <input
                class="ft-input-txt"
                type="password"
                name="password"
                id="password" value=""
                v-model="userPassword"
              >
            </p>
          </li>
        </ul>
        <div class="ft-form-btns">
          <button class="ft-btn ft-txt-upper" type="submit" @click="onSubmit">Войти</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      userName: ' ',
      userPassword: ' ',
      providerTemp: [
        {
          login: 'Andrii',
          password: '123',
        },
      ],
    };
  },
  // methods: {
  //   onSubmit() {
  //     if (this.userName === this.providerTemp.login && this.userPassword === this.providerTemp.password) {
  //       console.log('1');
  //     }
  //   },
  // },
};
</script>

<style lang="scss">
.ft-login-sec {
  padding-top: var(--headerHeight);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.ft-login {
  // flex: 0 0 600px;

  .ft-form {
    margin: 0 auto;
    padding: 25px;
    width: 600px;
    min-height: 300px;
    border: 1px solid var(--grey);
    border-radius: 25px;

    &-list {
      padding-bottom: 25px;

      &__txt {
        display: inline-block;
        padding-bottom: 10px;
      }

      &>li {
        padding: 20px 0;
      }
    }

    &-btns {
      text-align: center;
    }
  }
}

</style>
