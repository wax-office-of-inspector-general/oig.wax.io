import useTransaction from '../../composables/useTransaction';
import { useSession } from '@/composables/useSession';
import useBallots from '@/composables/useBallots';
import useCandidates from '@/composables/useCandidates';
import useNominees from '@/composables/useNominees';

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
  async fetchBallots({ commit }, forcedState) {
    try {
      const { rows } = await useBallots();

      commit('pushBallots', rows);
      if (forcedState) {
        commit('forceBallotState', forcedState);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async fetchCandidates({ commit }) {
    try {
      const { rows } = await useCandidates();

      commit('pushCandidates', rows);
    } catch (err) {
      console.log(err);
    }
  },
  async fetchNominees({ commit }) {
    try {
      const { rows } = await useNominees();

      commit('pushNominees', rows);
    } catch (err) {
      console.log(err);
    }
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
