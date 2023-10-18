const state = () => ({
  candidates: [],
  nominees: [],
  ballots: [],
});

// getters
const getters = {
  candidates: (state) => {
    return state.candidates;
  },
  ballots: (state) => {
    return state.ballots;
  }
};

// actions
const actions = {
  fetchBallots({ commit }, forcedState) {
    fetch('https://wax.eosphere.io/v1/chain/get_table_rows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        json: true,
        code: 'oig',
        scope: 'oig',
        table: 'election',
        limit: 20,
        reverse: false,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        commit('pushBallots', res.rows);
        if (forcedState) {
          commit('forceBallotState', forcedState);
        }
      })
      .catch((err) => {
        console.log('setError', err);
      });
  },
  fetchCandidates({ commit }) {
    fetch('https://wax.eosphere.io/v1/chain/get_table_rows', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        json: true,
        code: 'oig',
        scope: 'oig',
        table: 'nominees',
        limit: 30,
        reverse: false,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        commit('pushCandidates', res.rows);
      })
      .catch((err) => {
        console.log('setError', err);
      });
  },
  fetchNominees({ commit }) {
    fetch('https://wax.eosphere.io/v1/chain/get_table_rows', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        json: true,
        code: 'oig',
        scope: 'oig',
        table: 'nominations',
        limit: 30,
        reverse: false,
        show_payer: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        commit('pushNominees', res.rows);
      })
      .catch((err) => {
        console.log('setError', err);
      });
  },
};

// mutations
const mutations = {
  pushBallots(state, ballots) {
    state.ballots = ballots;
  },
  pushCandidates(state, candidates) {
    state.candidates = candidates.sort(() => 0.5 - Math.random());
  },
  pushNominees(state, nominees) {
    state.nominees = nominees.sort(() => 0.5 - Math.random());
  },
  forceBallotState(state, forcedState) {
    state.ballots[0].state = forcedState;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
