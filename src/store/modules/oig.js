import useBallots from '@/composables/useBallots';

const state = () => ({
  oigs: [],
  loading: true,
  error: null
});

// getters
const getters = {
  oigs: (state) => {
    return state.oigs;
  }
};

// actions
const actions = {
  async fetchOigs({ commit }) {
    try {
      const { rows } = await useBallots();

      commit('pushOigs', rows);
      commit('toggleLoading');
    } catch (err) {
      console.log(err);
      commit('setError', err);
      commit('toggleLoading');
    }
  }
};

// mutations
const mutations = {
  pushOigs(state, oigs) {
    state.oigs = oigs;
  },
  toggleLoading(state) {
    state.loading = !state.loading;
  },
  setError(state, error) {
    state.error = error;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
