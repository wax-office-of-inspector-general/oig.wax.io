const state = () => ({
  candidates: [],
  elections: [],
  loading: true,
  error: null
});

// getters
const getters = {
  candidates: (state) => {
    return state.candidates;
  },
  elections: (state) => {
    return state.elections;
  }
};

// actions
const actions = {
  fetchElection({ commit }) {
    fetch("https://wax.eosphere.io/v1/chain/get_table_rows", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        json: true,
        code: "oig",
        scope: "oig",
        table: "election",
        limit: 20,
        reverse: false,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.rows);
        commit("pushElections", res.rows);
        commit("toggleLoading");
      })
      .catch((err) => {
        commit("setError", err);
        commit("toggleLoading");
      });
  },
  fetchCandidates({ commit }) {
    fetch("https://wax.eosphere.io/v1/chain/get_table_rows", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        json: true,
        code: "oig",
        scope: "oig",
        table: "nominees",
        limit: 20,
        reverse: false,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.rows);
        commit("pushCandidates", res.rows);
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
  pushElections(state, elections) {
    state.elections = elections;
  },
  pushCandidates(state, candidates) {
    state.candidates = candidates.sort(() => 0.5 - Math.random());
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
