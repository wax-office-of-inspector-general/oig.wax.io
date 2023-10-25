import useEvaluations from '@/composables/useEvaluations';

const state = () => ({
  guilds: []
});

// getters
const getters = {
  guilds: (state) => {
    return state.guilds;
  }
};

// actions
const actions = {
  async fetchGuilds({ commit }) {
    try {
      const { rows } = await useEvaluations();

      commit('pushGuilds', rows);
    } catch (err) {
      console.error('Request failed: ', err);
    }
  }
};

// mutations
const mutations = {
  pushGuilds(state, guilds) {
    state.guilds = guilds.sort(() => 0.5 - Math.random());
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
