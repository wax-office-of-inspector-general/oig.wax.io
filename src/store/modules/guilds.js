const state = () => ({
  guilds: [],
  fewGuilds: [],
  loading: true,
  error: null
});

// getters
const getters = {
  guilds: (state) => {
    return state.guilds;
  }
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
        console.log(res.rows);
        commit('pushGuilds', res.rows);
        commit('pushFewGuilds', res.rows);
        commit('toggleLoading');
      })
      .catch((err) => {
        commit('setError', err);
        commit('toggleLoading');
      });
  }
};

// mutations
const mutations = {
  pushGuilds(state, guilds) {
    state.guilds = guilds.sort(() => 0.5 - Math.random());
  },
  pushFewGuilds(state, guilds) {
    state.fewGuilds = guilds.sort(() => 0.5 - Math.random()).slice(0, 12);
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
