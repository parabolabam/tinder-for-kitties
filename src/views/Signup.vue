<template>
  <div class="signup">
    <form @submit.prevent>
      <h1>Get Started</h1>

      <label for="email2">Email</label>
      <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />

      <label for="password2">Password</label>
      <input
        v-model.trim="signupForm.password"
        type="password"
        placeholder="min 6 characters"
        id="password2" />

      <label for="confirmPassword2">Confirm password</label>
      <input
        v-model.trim="signupForm.password"
        type="password"
        placeholder="min 6 characters"
        id="confirmPassword2"
      />

      <button @click="signup" class="button">Sign Up</button>

      <div class="extras" @click="$router.replace({ name: 'Login' })">
        <a>Back to Log In</a>
      </div>
    </form>
    <overlay v-if="signupInProgress" />
  </div>
</template>

<script>
import { SIGNUP } from '@/store/actions.types';
import Overlay from '@/globalComponents/Overlay.vue';

export default {
  name: 'signup',
  components: {
    Overlay,
  },
  data() {
    return {
      signupForm: {
        email: '',
        password: '',
        confirm: '',
      },
    };
  },

  computed: {
    signupInProgress() {
      return this.$store.state.auth.signupInProgress;
    },
  },

  methods: {
    async signup() {
      await this.$store.dispatch(SIGNUP, {
        email: this.signupForm.email,
        password: this.signupForm.password,
      });

      this.$router.replace({ name: 'Home' });
    },
  },

};
</script>

<style>

</style>
