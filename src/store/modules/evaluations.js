import useEvaluations from '@/composables/useEvaluations';

const state = () => ({
  evaluations: []
});

// getters
const getters = {
  evaluations: (state) => {
    return state.evaluations;
  }
};

// actions
const actions = {
  async fetchEvaluations({ commit }) {
    try {
      const { rows } = await useEvaluations();

      commit('pushEvaluations', rows);
    } catch (err) {
      console.log('setError', err);
    }
  }
};

// mutations
const mutations = {
  pushEvaluations(state, evaluations) {
    state.evaluations = evaluations;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
