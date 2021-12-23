const axios = require("axios");
let url = "https://www.progressive.com/lifelanes/wp-json/wp/v2/posts";

export const state = () => ({
  titles: [],
});

export const mutations = {
  SET_TITLES: (state, payload) => {
    state.titles = payload;
  },
};

export const actions = {
  // preferred method:
  // async nuxtServerInit({ commit }) {
  //   console.log("nuxt Server Init running");
  //   const response = await axios.get(url);
  //   const data = response.data;
  //   const titles = data.map(({ title }) => title.rendered);
  //   commit("SET_TITLES", titles);
  // },

  // work around method for hydrating after mounted ( getting around proxy issues)
  async getTitles({ commit }) {
    console.log("getTitles is doing stuff");
    const response = await axios.get(url);
    const data = response.data;
    const titles = data.map(({ title }) => title.rendered);
    commit("SET_TITLES", titles);
  },
  // async nuxtServerInit({ commit }) {
  //   console.log("nuxt Server Init running");
  //   const response = await axios.get("/data.json");
  //   const data = response.data;
  //   const titles = data.map(({ title }) => title.rendered);
  //   commit("SET_TITLES", titles);
  // },
};
