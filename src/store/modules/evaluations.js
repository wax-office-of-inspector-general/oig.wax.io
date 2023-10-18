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
  fetchEvaluations({ commit }) {
    fetch('https://wax.eosphere.io/v1/chain/get_table_rows', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        json: true,
        code: 'guilds.oig',
        scope: 'guilds.oig',
        table: 'evaluations',
        limit: 40,
        reverse: true,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        commit('pushEvaluations', res.rows);
      })
      .catch((err) => {
        console.log('setError', err);
      });
  }
};

// mutations
const mutations = {
  pushEvaluations(state, evaluations) {
    state.evaluations = evaluations;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
