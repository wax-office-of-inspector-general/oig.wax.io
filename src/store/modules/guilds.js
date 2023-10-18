const state = () => ({
  guilds: [],
});

// getters
const getters = {
  guilds: (state) => {
    return state.guilds;
  },
};

// actions
const actions = {
  fetchGuilds({ commit }) {
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
        table: 'guilds',
        limit: 40,
        reverse: false,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        commit('pushGuilds', res.rows);
      })
      .catch((err) => {
        console.error('Request failed: ', err);
      });
  },
};

// mutations
const mutations = {
  pushGuilds(state, guilds) {
    state.guilds = guilds.sort(() => 0.5 - Math.random());
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
