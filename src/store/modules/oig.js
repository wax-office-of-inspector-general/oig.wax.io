const state = () => ({
  oigs: [],
  loading: true,
  error: null
});

// getters
const getters = {
  oigs: (state) => {
    return state.oigs;
  },
};

// actions
const actions = {
  fetchOigs({ commit }) {
    fetch("https://wax.eosphere.io/v1/chain/get_table_rows", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        json: true,
        code: "treasury.oig",
        scope: "treasury.oig",
        table: "oig",
        limit: 40,
        reverse: false,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        commit("pushOigs", res.rows);
        commit("toggleLoading");
      })
      .catch((err) => {
        commit("setError", err);
        commit("toggleLoading");
      });
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
