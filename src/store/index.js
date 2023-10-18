import Vuex from 'vuex';
import oig from './modules/oig';
import ballot from './modules/ballot';
import medium from './modules/medium';
import guilds from './modules/guilds';
import evaluations from './modules/evaluations';
import proposals from './modules/proposals';
import notion from './modules/notion';

export default new Vuex.Store({
  modules: {
    oig,
    ballot,
    guilds,
    medium,
    evaluations,
    proposals,
    notion
  }
});
