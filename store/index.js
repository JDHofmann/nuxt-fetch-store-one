const axios = require("axios");
let url = "https://www.progressive.com/lifelanes/wp-json/wp/v2/posts";
import titles from "~/static/data2.json";

export const state = () => ({
  titles: [],
});

export const mutations = {
  SET_TITLES: (state, payload) => {
    // console.log(payload);
    state.titles = payload;
  },
};

export const getters = {
  get_titles: (state) => {
    // console.log("get_titles");
    return state.titles[0];
  },
};

export const actions = {
  async nuxtServerInit({ commit }) {
    commit("SET_TITLES", titles);
  },
};
