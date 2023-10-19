import useTransaction from '../../composables/useTransaction';
import useTableRows from '@/composables/useTableRows';
import { useSession } from '../../composables/useSession';

const state = () => ({
  candidates: [],
  nominees: [],
  ballots: []
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
    useTableRows({
      json: true,
      code: 'oig',
      scope: 'oig',
      table: 'election',
      limit: 20,
      reverse: false,
      show_payer: false
    })
      .then((res) => {
        commit('pushBallots', res.data.rows);
        if (forcedState) {
          commit('forceBallotState', forcedState);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  fetchCandidates({ commit }) {
    useTableRows({
      json: true,
      code: 'oig',
      scope: 'oig',
      table: 'nominees',
      limit: 30,
      reverse: false,
      show_payer: false
    })
      .then((res) => {
        commit('pushCandidates', res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  fetchNominees({ commit }) {
    useTableRows({
      json: true,
      code: 'oig',
      scope: 'oig',
      table: 'nominations',
      limit: 30,
      reverse: false,
      show_payer: false
    })
      .then((res) => {
        commit('pushNominees', res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  nominate({ commit }, payload) {
    const session = useSession();

    if (!session.value) throw new Error('No active session');

    useTransaction([
      {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [session.value.permissionLevel],
        data: {
          from: session.value.actor,
          to: 'oig',
          quantity: '100.00000000 WAX',
          memo: `nomination fee for ${payload.nominee}`
        }
      },
      {
        account: 'oig',
        name: 'nominate',
        authorization: [session.value.permissionLevel],
        data: {
          nominator: session.value.actor,
          nominee: payload.nominee
        }
      }
    ]);
  }
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


window.nominate = actions.nominate;

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
