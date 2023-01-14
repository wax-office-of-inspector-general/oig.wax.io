const state = () => ({
  articles: [],
  loading: true,
  error: null
});

// getters
const getters = {
  articles: (state) => {
    return state.articles;
  }
}

// actions
const actions = {
  fetchArticles({ commit }) {
    console.log('fetch');
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@waxoig"
    )
      .then((res) => res.json())
      .then((res) => {
        commit("pushArticles", res.items);
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
  pushArticles(state, articles) {
    state.articles = articles.slice(0, 2);
  },
  toggleLoading(state) {
    state.loading = !state.loading;
  },
  setError(state, error) {
    state.error = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}