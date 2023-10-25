import useProposals from '@/composables/useProposals';

const state = () => ({
  proposals: []
});

// getters
const getters = {
  proposals: (state) => {
    return state.proposals;
  }
};

// actions
const actions = {
  async fetchProposals({ commit }) {
    try {
      const { rows } = await useProposals();

      commit('pushProposals', rows);
    } catch (err) {
      console.error('Request failed: ', err);
    }
  }
};

// mutations
const mutations = {
  pushProposals(state, proposals) {
    state.proposals = proposals.sort(() => 0.5 - Math.random());
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
