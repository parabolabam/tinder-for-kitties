<template>
  <div class="postCreator">
    <form action="" method="post" @submit.prevent>
      <input type="text" v-model="postText" />
      <basic-button @basicButtonClicked="submit">SUBMIT</basic-button>
    </form>
  </div>
</template>

<script>
import { createPost } from '@/services/post.service';
import BasicButton from '@/components/BasicButton.vue';

export default {
  name: 'post-creator',
  components: {
    BasicButton,
  },
  data() {
    return {
      postText: '',
    };
  },
  computed: {
    userId() {
      return this.$store.state.auth.currentUser.uid;
    },
  },
  methods: {
    async submit() {
      debugger;
      await createPost({ userId: this.userId, postContent: { text: this.postText } });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
