import {
  SET_CURRENT_USER,
  SET_USER_PROFILE,
} from '@/store/mutations.types';
import { LOGIN, LOGOUT, SIGN_UP } from '@/store/actions.types';
import authService from '@/common/auth.service';

export const state = {
  currentUser: null,
  userProfile: {},
};

export const mutations = {
  [SET_CURRENT_USER](state, val) {
    state.currentUser = val;
  },
  [SET_USER_PROFILE](state, val) {
    state.userProfile = val;
  },
};

export const actions = {
  async [LOGIN]({ commit }, userLoginData) {
    const { user } = await authService.login(userLoginData);

    commit(SET_USER_PROFILE, user);
    commit(SET_CURRENT_USER, user);
  },
  async [LOGOUT]({ commit }) {
    await authService.logout();

    commit(SET_USER_PROFILE, null);
    commit(SET_CURRENT_USER, null);
  },
  async [SIGN_UP]({ commit }, userSignupData) {
    const { user } = await authService.signup(userSignupData);

    commit(SET_CURRENT_USER, user);
    commit(SET_USER_PROFILE, user);
  },

};
