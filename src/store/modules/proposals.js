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
    fetch('https://wax.eosphere.io/v1/chain/get_table_rows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        json: true,
        code: 'labs.wax',
        scope: 'labs.wax',
        table: 'proposals',
        limit: -1,
        reverse: true,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        commit('pushProposals', res.rows);
      })
      .catch((err) => {
        console.error('Request failed: ', err);
      });
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
