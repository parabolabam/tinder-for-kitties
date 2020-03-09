import Vue from 'vue';
import Vuex from 'vuex';
import { usersCollection } from '../../firebaseConfig';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: {},
  },
  mutations: {
    setCurrentUser(state, val) {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
  },
  actions: {
    async fetchUserProfile({ commit, state }) {
      const user = await usersCollection.doc(state.currentUser.uid).get();

      commit('setUserProfile', user.data());
    },
  },
  modules: {
  },
});
