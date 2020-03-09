<template>
  <div id="login">
    <section>
      <div class="col2">
        <form>
          <h1>Welcome Back</h1>

          <label for="email1">Email</label>
          <input type="text"
            placeholder="you@email.com"
            v-model="loginFormData.email"
            id="email1" />

          <label for="password1">Password</label>
          <input
            type="password"
            placeholder="******"
            v-model="loginFormData.password"
            id="password1"
          />

          <button class="button" @click.prevent="login">Log In</button>

          <div class="extras">
            <a>Forgot Password</a>
            <router-link :to="{ name: 'Signup' }">Create an Account</router-link>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { LOGIN } from '@/store/actions.types';

export default {
  name: 'login',
  components: {},
  data() {
    return {
      loginFormData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      this.$store.dispatch(LOGIN, this.loginFormData);
      this.$router.replace({ name: 'Home' });
    },
  },
};
</script>
