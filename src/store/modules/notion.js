import { Client } from '@notionhq/client';

const notion = new Client({ auth: import.meta.env.VITE_NOTION_API_KEY });

console.log(notion)

const state = () => ({
  scores: [],
  guidelines: [],
  loading: true,
  error: null
});

// getters
const getters = {
  scores: (state) => {
    return state.scores;
  },
  guidelines: (state) => {
    return state.scores;
  }
};

// actions
const actions = {
  fetchGuidelines({ commit }) {

    /*
    const databaseId = 'aec8e648244c4b42a19d172f9fe9f1aa';
    const response = notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
    */

    (async () => {
      const pageId = '0e51defdf10641748a253ccc7f5146b1';
      const response = await notion.pages.retrieve({ page_id: pageId });
      console.log(response);
    })()
  }
};

// mutations
const mutations = {
  pushScores(state, scores) {
    state.scores = scores;
  },
  pushGuidelines(state, guidelines) {
    state.guidelines = guidelines;
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
