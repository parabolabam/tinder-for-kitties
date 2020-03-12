import {
  LOGIN, LOGOUT, SIGNUP, LOGIN_IN_PROGRESS, SIGNUP_IN_PROGRESS, LOGOUT_IN_PROGRESS,
} from '@/store/actions.types';
import { SET_CURRENT_USER } from '@/store/mutations.types';

import authService from '@/services/auth.service';

export const state = {
  currentUser: null,
  loginInProgress: false,
  signupInProgress: false,
  logoutInProgress: false,
};

export const mutations = {
  [SET_CURRENT_USER](state, user) {
    state.currentUser = user;
  },
  [LOGIN_IN_PROGRESS](state, loginInProgress) {
    state.loginInProgress = loginInProgress;
  },
  [SIGNUP_IN_PROGRESS](state, signupInProgress) {
    state.signupInProgress = signupInProgress;
  },
  [LOGOUT_IN_PROGRESS](state, logoutInProgress) {
    state.logoutInProgress = logoutInProgress;
  },
};

export const actions = {
  async [LOGIN]({ commit }, userLoginData) {
    commit(LOGIN_IN_PROGRESS, true);

    const { user } = await authService.login(userLoginData);

    commit(LOGIN_IN_PROGRESS, false);
    commit(SET_CURRENT_USER, user);
  },

  async [LOGOUT]({ commit }) {
    commit(LOGOUT_IN_PROGRESS, true);

    await authService.logout();

    commit(LOGOUT_IN_PROGRESS, false);
    commit(SET_CURRENT_USER, null);
  },

  async [SIGNUP]({ commit }, userSignupData) {
    commit(SIGNUP_IN_PROGRESS, true);

    const { user } = await authService.signup(userSignupData);

    commit(SIGNUP_IN_PROGRESS, false);
    commit(SET_CURRENT_USER, user);
  },
};
