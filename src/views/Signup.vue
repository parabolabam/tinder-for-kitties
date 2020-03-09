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
import { auth, usersCollection } from '../../firebaseConfig';

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
      const { user } = await auth.createUserWithEmailAndPassword(
        this.signupForm.email,
        this.signupForm.password,
      );


      this.$store.commit('setCurrentUser', user);


      // create user obj
      await usersCollection
        .doc(user.uid)
        .set({
          email: this.signupForm.email,
        });

      this.$store.dispatch('fetchUserProfile');

      this.$router.replace({ name: 'Home' });
    },
  },
};
</script>
