import useTransaction from '@/composables/useTransaction';
import { useSession } from '@/composables/useSession';
import { notify } from '@kyvg/vue3-notification';
import useBallots from '@/composables/useBallots';
import useCandidates from '@/composables/useCandidates';
import useNominees from '@/composables/useNominees';
import useVotingBallots from '@/composables/useVotingBallots';
import transferToOigAction from '@/chainActions/transferToOigAction';
import nominateAction from '@/chainActions/nominateAction';
import proclaimAction from '@/chainActions/proclaimAction';
import nominfAction from '@/chainActions/nominfAction';
import regvoterAction from '@/chainActions/regvoterAction';
import syncAction from '@/chainActions/syncAction';
import updtstateAction from '@/chainActions/updtstateAction';
import castvoteAction from '@/chainActions/castvoteAction';

const TIMEOUT_SECONDS = 2000;

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
  },
  isNominationOpen: (state) => {
    return state.ballots[0]?.state === 2 ?? false;
  },
  isVotingOpen: (state) => {
    return state.ballots[0]?.state === 4 ?? false;
  },
  isVotingClosed: (state) => {
    return state.ballots[0]?.state === 5 ?? false;
  }
};

const notifyNoSessionError = () => {
  notify({
    title: 'Error',
    text: 'No active session. Please log in first.',
    type: 'error'
  });
};

// actions
const actions = {
  async fetchBallots({ commit, dispatch }, forcedState) {
    try {
      const { rows } = await useBallots();

      commit('pushBallots', rows);
      if (forcedState) {
        commit('forceBallotState', forcedState);
      }
    } catch (err) {
      console.log(err);
    }

    dispatch('fetchCandidates');
  },
  async fetchVotingBallots({ commit, state }) {
    try {
      const { rows } = await useVotingBallots(state.ballots[0].ballot);

      const votingBallots = rows[0].options;

      let candidatesWithVotes = [];

      state.candidates.forEach((candidate) => {
        votingBallots.forEach((votes) => {
          let voteToCurrency = parseFloat(votes.value.split(' ')[0])
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,')

          if (votes.key === candidate.owner) {
            candidatesWithVotes.push({
              ...candidate,
              votes: voteToCurrency + ' WAX'
            });
          }
        });
      });

      commit('pushCandidates', candidatesWithVotes);
    } catch (err) {
      console.log(err);
    }
  },
  async fetchCandidates({ commit, dispatch, getters }) {
    try {
      const { rows } = await useCandidates();

      commit('pushCandidates', rows);

      if (getters.isVotingOpen) {
        dispatch('fetchVotingBallots');
      }
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
  async nominate({ dispatch }, { nominee, success = () => {} }) {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      transferToOigAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        nominee: nominee
      }),
      nominateAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        nominee: nominee
      })
    ]);

    success();

    setTimeout(() => dispatch('fetchNominees'), TIMEOUT_SECONDS);
  },
  async proclaim({ dispatch }, { decision, success = () => {} }) {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      proclaimAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        decision: decision
      })
    ]);

    success();

    setTimeout(() => {
      dispatch('fetchCandidates');
      dispatch('fetchNominees');
    }, TIMEOUT_SECONDS);
  },
  async nominf({ dispatch }, { data, success = () => {} }) {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      nominfAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        name: data.name,
        descriptor: data.descriptor,
        picture: data.picture,
        telegram: data.telegram,
        twitter: data.twitter,
        wechat: data.wechat,
        oig_prefix: data.oig_prefix,
        pubkey: data.pubkey,
        remove: false
      })
    ]);

    success();

    setTimeout(() => {
      dispatch('fetchCandidates');
      dispatch('fetchNominees');
    }, TIMEOUT_SECONDS);
  },
  async proclaimAndNominf({ dispatch }, { data, success = () => {} }) {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

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
        name: data.name,
        descriptor: data.descriptor,
        picture: data.picture,
        telegram: data.telegram,
        twitter: data.twitter,
        wechat: data.wechat,
        oig_prefix: data.oig_prefix,
        pubkey: data.pubkey,
        remove: data.remove
      })
    ]);

    success();

    setTimeout(() => {
      dispatch('fetchCandidates');
      dispatch('fetchNominees');
    }, TIMEOUT_SECONDS);
  },
  async regvoter() {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      regvoterAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor
      })
    ]);
  },
  async sync() {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      syncAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor
      })
    ]);
  },
  async updtstate() {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      updtstateAction({
        permissionLevel: session.value.permissionLevel
      })
    ]);
  },
  async castvote({ state }, candidate) {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      castvoteAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        ballot: state.ballots[0].ballot,
        candidateAccount: candidate?.owner
      })
    ]);
  },
  async vote({ dispatch, state }, { candidate, success = () => {} }) {
    const session = useSession();

    if (!session.value) {
      notifyNoSessionError();
      return;
    }

    await useTransaction([
      regvoterAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor
      }),
      syncAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor
      }),
      updtstateAction({
        permissionLevel: session.value.permissionLevel
      }),
      castvoteAction({
        permissionLevel: session.value.permissionLevel,
        actor: session.value.actor,
        ballot: state.ballots[0].ballot,
        candidateAccount: candidate?.owner
      })
    ]);

    success();

    setTimeout(() => {
      dispatch('fetchVotingBallots');
    }, TIMEOUT_SECONDS);
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
