<template>
  <!-- eslint-disable max-len -->
  <section class="ft-login-sec">
    <div class="ft-login ft-wrap">
      <form class="ft-form" v-on:submit.prevent="">
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
          <goback-btn></goback-btn>
        </div>
      </form>
    </div>
    <alert-block
      v-if="showAlert"
      @close="showAlert = false"
    ></alert-block>
  </section>
</template>

<script>
// import Account from '@/views/Account.vue';
import Alert from '@/components/Alert.vue';
import GoBackBtn from '@/components/GoBackBtn.vue';

export default {
  name: 'login',
  components: {
    'alert-block': Alert,
    'goback-btn': GoBackBtn,
  },
  data() {
    return {
      showAlert: false,
      userName: '',
      userPassword: '',
      // providerTemp: [
      //   {
      //     login: 'Andrii',
      //     password: '123',
      //   },
      // ],
      providerTemp: {
        login: 'Andrii',
        password: '123',
      },
    };
  },
  methods: {
    onSubmit() {
      const uName = this.userName;
      const uPassword = this.userPassword;
      const prTemp = this.providerTemp;

      if (uName === prTemp.login && uPassword === prTemp.password) {
        console.log(uName);
        console.log(this.userPassword);
      } else {
        this.showAlert = !this.showAlert;
      }
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/general/mixins.scss';
@import '@/assets/scss/_scss-variables.scss';

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
    min-height: 300px;
    border: 1px solid var(--grey);
    border-radius: 25px;

    @include media(">tiny") {
      max-width: 600px;
    }

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
      display: flex;
      justify-content: space-evenly;
      text-align: center;

      @include media("<=tiny") {
        flex-direction: column;
      }

      &>* {
        @include media("<=tiny") {
          margin-bottom: 25px;
        }
      }
    }
  }
}

</style>
