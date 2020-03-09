<template>
<form @submit.prevent>
    <h1>Get Started</h1>

    <label for="email2">Email</label>
    <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />

    <label for="password2">Password</label>
    <input v-model.trim="signupForm.password" type="password"
     placeholder="min 6 characters" id="password2" />

    <label for="confirmPassword2">Confirm password</label>
    <input v-model.trim="signupForm.password" type="password" id="confirmPassword2" />

    <button @click="signup" class="button">Sign Up</button>

    <div class="extras" @click="backToLogin">
        <a>Back to Log In</a>
    </div>
</form>
</template>

<script>
import { SIGN_UP } from '@/store/actions.types';

export default {
  name: 'login',
  components: {},
  data() {
    return {
      signupForm: {
        email: '',
        password: '',
        confirmPass: '',
      },
    };
  },
  methods: {
    backToLogin() {
      this.$router.replace({ name: 'Login' });
    },
    async signup() {
      await this.$store.dispatch(SIGN_UP, {
        email: this.signupForm.email,
        password: this.signupForm.password,
      });

      this.$router.replace({ name: 'Home' });
    },
  },
};
</script>
