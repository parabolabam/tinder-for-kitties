import { LOGIN, LOGOUT, SIGNUP } from '@/store/actions.types';
import { SET_CURRENT_USER } from '@/store/mutations.types';

import authService from '@/common/auth.service';

export const state = {
  currentUser: null,
};

export const mutations = {
  [SET_CURRENT_USER](state, user) {
    state.currentUser = user;
  },
};

export const actions = {
  async [LOGIN]({ commit }, userLoginData) {
    const { user } = await authService.login(userLoginData);

    commit(SET_CURRENT_USER, user);
  },

  async [LOGOUT]({ commit }) {
    await authService.logout();

    commit(SET_CURRENT_USER, null);
  },

  async [SIGNUP]({ commit }, userSignupData) {
    const { user } = await authService.signup(userSignupData);

    commit(SET_CURRENT_USER, user);
  },
};
