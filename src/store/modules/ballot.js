import useTransaction from '@/composables/useTransaction';
import { useSession } from '@/composables/useSession';
import useBallots from '@/composables/useBallots';
import useCandidates from '@/composables/useCandidates';
import useNominees from '@/composables/useNominees';
import transferToOigAction from '@/chainActions/transferToOigAction';
import nominateAction from '@/chainActions/nominateAction';
import proclaimAction from '@/chainActions/proclaimAction';
import nominfAction from '@/chainActions/nominfAction';
import regvoterAction from '@/chainActions/regvoterAction';

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
  async nominate({ commit }, payload, success = () => {}, error = () => {}) {
    const session = useSession();

    if (!session.value) throw new Error('No active session');

    await useTransaction([
      transferToOigAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        nominee: payload.nominee
      }),
      nominateAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        nominee: payload.nominee
      })
    ]);
  },
  async proclaim({ commit }, payload, success = () => {}, error = () => {}) {
    const session = useSession();

    if (!session.value) throw new Error('No active session');

    await useTransaction([
      proclaimAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        decision: payload.decision
      }),
      success,
      error
    ]);
  },
  async nominf({ commit }, payload, success = () => {}, error = () => {}) {
    const session = useSession();

    if (!session.value) throw new Error('No active session');

    await useTransaction([
      nominfAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        name: payload.name,
        descriptor: payload.descriptor,
        picture: payload.picture,
        telegram: payload.telegram,
        twitter: payload.twitter,
        wechat: payload.wechat,
        remove: false
      }),
      success,
      error
    ]);
  },
  async proclaimAndNominf({ commit }, payload) {
    const session = useSession();

    if (!session.value) throw new Error('No active session');

    await useTransaction([
      proclaimAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        decision: true
      })
    ]);

    await useTransaction([
      nominfAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        name: payload.name,
        descriptor: payload.descriptor,
        picture: payload.picture,
        telegram: payload.telegram,
        twitter: payload.twitter,
        wechat: payload.wechat,
        remove: payload.remove
      })
    ]);
  },
  async regvoter({ commit }) {
    const session = useSession();

    if (!session.value) throw new Error('No active session');

    await useTransaction([
      regvoterAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor
      })
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
