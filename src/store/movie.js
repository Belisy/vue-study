import axios from "axios";

export default {
  namespaced: true, // module
  state: () => ({
    // data 상태
    movies: [],
    message: "",
    loading: false,
  }),
  getters: {
    // computed
  },
  mutations: {
    // methods

    updateState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    resetMovies(state) {
      state.movies = [];
    },
  },
  actions: {
    // 비동기
    searchMovies({ commit }, payload) {
      const { title, type, number, year } = payload;
      const OMDB_API_KEY = "7035c60c";

      const res = axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}$y=${year}&page=1`
      );
      console.log(res);
      const { Search, totalResults } = res.data;
      commit("updateState", {
        movies: Search,
      });
      console.log()
    },
  },
};
